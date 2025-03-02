import React, { useState } from "react";
import axios from "axios";
import { MessageSquare, Phone, Mail } from "lucide-react";

const Help = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    contact: "",
    email: "",
    query: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    try {
      const response = await axios.post(
        "https://advertisment-backend.onrender.com/api/accounts/help/",
        formData
      );
      

      setSuccess("Help request submitted successfully!");
      setFormData({
        first_name: "",
        last_name: "",
        contact: "",
        email: "",
        query: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error.response?.data || error);
      setSuccess("Failed to submit request. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen sm:mt-28 mt-14 bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">How can we help you?</h1>
      </section>

      {/* Form Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-white p-6 sm:p-10 rounded-2xl shadow-2xl">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-6 text-center">Help?</h2>
          <p className="text-gray-600 mb-8 text-center">
            Your question may already be answered in our support center. If not, send us a message.
          </p>
          {success && (
            <p className={`text-center mb-4 ${success.includes("successfully") ? "text-green-600" : "text-red-600"}`}>
              {success}
            </p>
          )}
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* First Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">First Name</label>
                <input
                  type="text"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  className="w-full rounded-lg border-gray-300 px-4 py-2"
                  required
                />
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Last Name</label>
                <input
                  type="text"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                  className="w-full rounded-lg border-gray-300 px-4 py-2"
                  required
                />
              </div>

              {/* Contact */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Contact</label>
                <input
                  type="tel"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  className="w-full rounded-lg border-gray-300 px-4 py-2"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border-gray-300 px-4 py-2"
                  required
                />
              </div>

              {/* Query */}
              <div className="col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-1">Query</label>
                <select
                  name="query"
                  value={formData.query}
                  onChange={handleChange}
                  className="w-full rounded-lg border-gray-300 px-4 py-2"
                  required
                >
                  <option value="">Select a topic</option>
                  <option>Technology</option>
                  <option>Public Relations</option>
                  <option>Business Development</option>
                  <option>Sales & Marketing</option>
                </select>
              </div>

              {/* Message */}
              <div className="col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-lg border-gray-300 px-4 py-2"
                  required
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-8 text-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Help;
