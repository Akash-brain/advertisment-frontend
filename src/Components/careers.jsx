import { useState, useEffect } from "react";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import Jobpopup from "./Jobpopup";
import { Building2, MapPin, Clock, ChevronRight } from "lucide-react";
import Header from "./Header";

const Careers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedJobType, setSelectedJobType] = useState("");
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState([]);

  const toggleModal = (position) => {
    setIsOpen(!isOpen);
    setPosition(position);
  };

  const colorVariants = {
    indigo: "from-indigo-50 to-white hover:from-indigo-100 hover:to-indigo-50",
    purple: "from-purple-50 to-white hover:from-purple-100 hover:to-purple-50",
    blue: "from-blue-50 to-white hover:from-blue-100 hover:to-blue-50",
    green: "from-green-50 to-white hover:from-green-100 hover:to-green-50", // Added green
    orange: "from-orange-50 to-white hover:from-orange-100 hover:to-orange-50", // Added orange
    pink: "from-pink-50 to-white hover:from-pink-100 hover:to-pink-50", // Added pink
    teal: "from-teal-50 to-white hover:from-teal-100 hover:to-teal-50", // Added teal
  };

  const iconColorVariants = {
    indigo: "text-indigo-600",
    purple: "text-purple-600",
    blue: "text-blue-600",
    green: "text-green-600",
    orange: "text-orange-600", // Added orange
    pink: "text-pink-600", // Added pink
    teal: "text-teal-600", // Added teal
  };

  const buttonColorVariants = {
    indigo: "bg-indigo-600 hover:bg-indigo-700",
    purple: "bg-purple-600 hover:bg-purple-700",
    blue: "bg-blue-600 hover:bg-blue-700",
    green: "bg-green-600 hover:bg-green-700",
    orange: "bg-orange-600 hover:bg-orange-700", // Added orange
    pink: "bg-pink-600 hover:bg-pink-700", // Added pink
    teal: "bg-teal-600 hover:bg-teal-700", // Added teal
  };

  const openPositions = [
    {
      title: "Creative Director",
      department: "Creative",
      location: "New York, NY",
      type: "Full-time",
      color: "indigo",
      experience: "1-2 years",
    },
    {
      title: "Social Media Manager",
      department: "Digital Marketing",
      location: "Remote",
      type: "Full-time",
      color: "blue",
      experience: "fresher",
    },
    {
      title: "Copywriter",
      department: "Content",
      location: "Los Angeles, CA",
      type: "Full-time",
      color: "purple",
      experience: "fresher",
    },
    {
      title: "Art Director",
      department: "Design",
      location: "Chicago, IL",
      type: "Full-time",
      color: "green",
      experience: "2+ years",
    },
    {
      title: "Account Manager",
      department: "Client Services",
      location: "Miami, FL",
      type: "Full-time",
      color: "orange",
      experience: "2+ years",
    },
    {
      title: "Media Planner",
      department: "Media",
      location: "Remote",
      type: "Full-time",
      color: "pink",
      experience: "1+ years",
    },
    {
      title: "Opportunity",
      department: "Growth",
      location: "Remote",
      type: "Part-time",
      isOpportunity: true,
      color: "teal",
      experience: "3+ years",
    },
  ];

  const [filteredPositions, setFilteredPositions] = useState(position);

  useEffect(() => {
    let results = openPositions;
    if (searchTerm !== "") {
      results = results.filter(
        (position) =>
          position.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          position.department
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          position.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (selectedJobType !== "") {
      results = results.filter((position) => position.type === selectedJobType);
    }
    setFilteredPositions(results);
  }, [searchTerm, selectedJobType]);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);

  return (
    <div className="bg-gray-100">
      <Header />
      <div className="max-w-8xl mt-24 mx-auto py-5">
        <header className="text-black bg-gradient-to-r from-green-200 via-gray-400 to-green-200 rounded-lg text-center py-20 mb-12 shadow-lg">
          <div className="max-w-5xl mx-auto px-6">
            <h1 className="text-5xl font-extrabold mb-6 leading-tight animate-slide-down">
              Join Our Dynamic Team!
            </h1>
            <p className="text-xl opacity-90 mb-6 animate-fade-in">
              We're looking for passionate individuals to help shape the future
              of advertising. Check out our exciting career opportunities below!
            </p>
            <div className="relative items-center space-x-2 flex max-w-md mx-auto">
              <FaSearch className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pr-3 px-10 py-2 rounded-lg w-full text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Search for job titles, departments, or locations"
              />
            </div>
          </div>
        </header>

        {/* Job Type Filter */}
        <div className="mb-8 flex justify-center space-x-4">
          <button
            onClick={() => setSelectedJobType("")}
            className={`px-6 py-2 rounded-lg text-sm font-semibold ${
              !selectedJobType
                ? "bg-[rgb(133,219,198)] text-black"
                : "bg-gray-200"
            }`}
          >
            All Jobs
          </button>
          <button
            onClick={() => setSelectedJobType("Full-time")}
            className={`px-6 py-2 rounded-lg text-sm font-semibold ${
              selectedJobType === "Full-time"
                ? "bg-[rgb(133,219,198)] text-black"
                : "bg-gray-200"
            }`}
          >
            Full-time
          </button>
          <button
            onClick={() => setSelectedJobType("Part-time")}
            className={`px-6 py-2 rounded-lg text-sm font-semibold ${
              selectedJobType === "Part-time"
                ? "bg-[rgb(133,219,198)] text-black"
                : "bg-gray-200"
            }`}
          >
            Part-time
          </button>
        </div>

        {/* Open Positions */}
        <section className="mb-24 px-10">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Current Openings
          </h2>
          {filteredPositions.length === 0 ? (
            <p className="text-center text-xl text-gray-600">
              No positions found for "{searchTerm}"
            </p>
          ) : (
            <div className="max-w-7xl mx-auto">
              <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-5">
                {filteredPositions.map((position, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105"
                  >
                    {/* Card Background */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${
                        colorVariants[position.color]
                      }`}
                    ></div>

                    {/* Content */}
                    <div className="relative z-10 p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-gray-900">
                        {position.title}
                      </h3>
                      <div className="space-y-3">
                        <div
                          className={`flex items-center ${
                            iconColorVariants[position.color]
                          }`}
                        >
                          <Building2 className="w-5 h-5 mr-2" />
                          <span className="text-sm font-medium text-gray-600 group-hover:text-gray-800">
                            {position.department}
                          </span>
                        </div>
                        <div
                          className={`flex items-center ${
                            iconColorVariants[position.color]
                          }`}
                        >
                          <MapPin className="w-5 h-5 mr-2" />
                          <span className="text-sm font-medium text-gray-600 group-hover:text-gray-800">
                            {position.location}
                          </span>
                        </div>
                        <div
                          className={`flex items-center ${
                            iconColorVariants[position.color]
                          }`}
                        >
                          <Clock className="w-5 h-5 mr-2" />
                          <span className="text-sm font-medium text-gray-600 group-hover:text-gray-800">
                            {position.type}
                          </span>
                        </div>
                      </div>

                      {/* Button */}
                      <button
                        onClick={() => toggleModal(position)}
                        className={`mt-6 inline-flex items-center rounded-md px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-300 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 ${
                          buttonColorVariants[position.color]
                        }`}
                      >
                        Apply Now
                        <ChevronRight className="ml-2 h-5 w-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* Company Culture Section */}
        <section className="bg-gray-50 py-12 mb-16">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">
            Why Work With Us?
          </h2>
          <div className="max-w-3xl mx-auto text-center text-gray-600">
            <p className="mb-4">
              At our company, we believe in fostering a culture of
              collaboration, creativity, and growth. We are committed to
              providing our employees with the resources they need to thrive
              professionally and personally.
            </p>
            <p className="mb-4">
              Join us and become a part of an innovative team that is dedicated
              to making a real impact on the world.
            </p>
            <button
              onClick={() => {
                navigate("/company/profile"), window.scrollTo(0, 50);
              }}
              className="bg-[rgb(133,219,198)] text-black py-2 px-6 rounded-lg hover:opacity-70 font-semibold"
            >
              Learn More About Us
            </button>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="px-10 py-12">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Our Benefits & Perks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="w-full bg-white p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 border border-gray-200">
              <h3 className="text-xl font-semibold mb-3 text-blue-700">
                Health & Wellness
              </h3>
              <p className="text-gray-600">
                Comprehensive medical, dental, and vision coverage for you and
                your family.
              </p>
            </div>

            {/* Card 2 */}
            <div className="w-full bg-white p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 border border-gray-200">
              <h3 className="text-xl font-semibold mb-3 text-blue-700">
                Work-Life Balance
              </h3>
              <p className="text-gray-600">
                Flexible scheduling and generous paid time off to recharge.
              </p>
            </div>

            {/* Card 3 */}
            <div className="w-full bg-white p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 border border-gray-200">
              <h3 className="text-xl font-semibold mb-3 text-blue-700">
                Career Development
              </h3>
              <p className="text-gray-600">
                Access to training programs, workshops, and opportunities to
                grow.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Jobpopup
        isPopupOpen={isOpen}
        setPopupOpen={setIsOpen}
        jobDescription={position}
      />
      <Footer />
    </div>
  );
};

export default Careers;
