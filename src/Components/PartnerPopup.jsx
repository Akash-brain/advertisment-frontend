import { useEffect, useRef, useState } from "react";
import axios from "axios";

const PartnerPopup = ({ isOpen, onClose, partnerDetails }) => {
  const popupRef = useRef(null);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Close the popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const { title, description, color } = partnerDetails;

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit form data to backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");
  
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/partner/", {
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        partner_type: title.replace(" Partner", ""), // ✅ Fix: Send correct partner type
      });
  
      console.log("Success:", response.data);
      setSuccess("Application Submitted Successfully!");
      setFormData({ fullName: "", email: "", phone: "", message: "" });
    } catch (err) {
      console.error("Error:", err.response?.data);
      setError("Failed to submit. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div
        ref={popupRef}
        className="bg-white rounded-lg flex w-[90%] md:w-[800px] max-h-[90vh] shadow-lg overflow-hidden"
      >
        {/* Left Section: Description */}
        <div className="p-6 w-full md:w-1/2 bg-gray-100">
          <h2 className="text-xl font-bold mb-4" style={{ color }}>
            {title}
          </h2>
          <p className="text-gray-700">{description}</p>
        </div>

        {/* Right Section: Form */}
        <div className="p-6 w-full md:w-1/2">
          <h3 className="text-lg font-semibold mb-4" style={{ color }}>
            Apply Now
          </h3>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="w-full border rounded-md px-4 py-2"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="w-full border rounded-md px-4 py-2"
            />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              required
              className="w-full border rounded-md px-4 py-2"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message (optional)"
              rows="4"
              className="w-full border rounded-md px-4 py-2"
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 rounded-md text-white font-bold"
              style={{ backgroundColor: color }}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>

            {error && <p className="text-red-500 mt-2">{error}</p>}
            {success && <p className="text-green-500 mt-2">{success}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default PartnerPopup;
