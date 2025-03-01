import { useEffect, useRef } from "react";

const JobPopup = ({ isPopupOpen, setPopupOpen, jobDescription }) => {
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setPopupOpen(false);
      }
    };

    if (isPopupOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isPopupOpen]);

  return (
    isPopupOpen && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto">
        <div
          ref={popupRef}
          className="bg-white rounded-lg flex flex-col md:flex-row w-[90%] md:w-[800px] max-h-[90vh] shadow-lg overflow-hidden"
        >
          {/* Left Section: Job Description */}
          <div className="bg-gray-100 p-6 w-full md:w-1/2 overflow-y-auto">
            <img
              src="/images/newLogo.png"
              alt="Company Logo"
              className="h-12 w-auto mb-4 scale-[1.5]"
            />
            <h2 className="text-xl font-bold mb-4">{jobDescription.title}</h2>
            <p className="text-gray-700 text-sm">
              One of our core values is being collaborative, and as such, we
              embrace and encourage differences in age, gender identity or
              expression, ethnicity, race, color, disability, national origin,
              religion, sexual orientation, marital status, pregnancy, veteran
              status, or any other characteristic that makes our team members
              unique.
              <br />
              <br />
              <strong>Current Opportunities:</strong> Find a role in the area
              that best matches your experience and interests, so you can do
              work that you love.
              <br />
              <br />
              <strong>Responsibilities:</strong>
              <ul className="list-disc ml-5 mt-2">
                <li>Develop and maintain scalable applications.</li>
                <li>Collaborate with teams for optimal solutions.</li>
                <li>Participate in code reviews and debugging.</li>
              </ul>
              <br />
              <strong>Location:</strong> {jobDescription.location}
              <br />
              <strong>Experience:</strong> {jobDescription.experience}
            </p>
          </div>

          {/* Right Section: Form */}
          <div className="p-6 w-full md:w-1/2 overflow-y-auto">
            {/* Tabs */}
            <div className="flex justify-between border-b mb-4">
              <button
                className={`text-lg font-semibold pb-2 border-b-2 border-green-500 text-green-500`}
              >
                Apply
              </button>
            </div>

            {/* Apply Form */}
            <div className="bg-white w-full max-w-md h-full md:h-auto md:rounded-lg p-6 flex flex-col justify-between shadow-lg">
              {/* Form fields */}
              <form className="flex flex-col h-full justify-between">
                <div>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="tel"
                    placeholder="Contact Number (e.g., +91)"
                    className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="file"
                    className="w-full mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-all"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default JobPopup;
