import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Popup from "./Popup";
import logo from "..//../public/logo.png";
import {
  Search,
  ShoppingCart,
  User,
  ChevronDown,
  Lightbulb,
  Store,
  Music,
  Building,
  Globe,
  HelpCircle,
  UserPlus,
  Phone,
  MapPin,
  Briefcase,
  Recycle,
  Handshake,
  Video,
  Megaphone,
  Rocket,
  Film,
} from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null); // Fix: Add state
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };
  const handleButtonClick = (item) => {
    if (item.hasDropdown) {
      // Toggle dropdown
      setActiveDropdown((prev) => (prev === item.name ? null : item.name));
    } else {
      // Navigate if no dropdown
      let paths = `/services${item.path}`;
      navigate(paths);
    }
  };

  const companyDropdownItems = [
    { name: "Profile", path: "/company/profile", icon: User },
    { name: "Ventures", path: "/company/ventures", icon: Building },
    { name: "Sustainability", path: "/company/sustainability", icon: Recycle },
    { name: "Blogs", path: "/company/blogs", icon: Globe },
    {
      name: "Opportunity",
      path: "/careers",
      icon: Briefcase,
    },
  ];

  const serviceDropdownItems = [
    {
      name: "Media & Advertising",
      path: "#",
      icon: Video,
    },
    {
      name: "Sales & Makrketing",
      path: "#",
      icon: Megaphone,
    },
    {
      name: "Events & Entertainment",
      path: "#",
      icon: Film,
    },
    {
      name: "Branding & Promotions",
      path: "#",
      icon: Rocket,
    },
  ];
  const navLinks = [
    {
      name: "Spotlight",
      path: "/media",
      icon: Lightbulb,
    },
    {
      name: "E-Mall",
      path: "/fashion",
      icon: Store,
    },
    {
      name: "Studio",
      path: "/podcast",
      icon: Music,
    },
    {
      name: "Company",
      path: "#",
      hasDropdown: true,
      dropdownType: "company",
      icon: Building,
    },
    {
      name: "Services",
      path: "#",
      hasDropdown: true,
      dropdownType: "services",
      icon: Handshake,
    },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Upper Part - Desktop Only */}
      <div className="hidden lg:flex justify-between items-center px-6 py-2 bg-black text-white">
        <div className="flex items-center space-x-2 text-white hover:text-gray-300 cursor-pointer">
          <Phone className="w-4 h-4" />
          <span className="text-sm">QUESTIONS? CALL: +91 8287831221</span>
        </div>

        {/* Quick Links */}
        <div className="flex items-center space-x-4">
          {navLinks.map((item) => (
            <div key={item.name} className="relative">
              <button
                onClick={() => handleButtonClick(item)}
                className="flex items-center space-x-1 text-white hover:text-gray-300"
              >
                {item.icon && <item.icon className="w-4 h-4" />}
                <span className="text-sm">{item.name}</span>
                {item.hasDropdown && (
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === item.name ? "rotate-180" : ""
                    }`}
                  />
                )}
              </button>
              {item.hasDropdown &&
                activeDropdown === item.name &&
                item.name === "Company" && (
                  <div className="absolute z-10 right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2">
                    {companyDropdownItems.map((dropItem) => (
                      <Link
                        key={dropItem.name}
                        to={dropItem.path}
                        className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-50"
                      >
                        {dropItem.icon && <dropItem.icon className="w-4 h-4" />}
                        <span>{dropItem.name}</span>
                      </Link>
                    ))}
                  </div>
                )}

              {item.hasDropdown &&
                activeDropdown === item.name &&
                item.name === "Services" && (
                  <div className="absolute z-10 right-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2">
                    {serviceDropdownItems.map((dropItem) => (
                      <Link
                        key={dropItem.name}
                        to={dropItem.path}
                        className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-50"
                      >
                        {dropItem.icon && <dropItem.icon className="w-4 h-4" />}
                        <span>{dropItem.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
            </div>
          ))}
          <Link
            to={"/join-us"}
            className="flex items-center space-x-2 text-white hover:text-gray-300"
          >
            <UserPlus className="w-4 h-4" />
            <span className="text-sm">Join Us</span>
          </Link>
          <Link
            to={"/help"}
            className="flex items-center space-x-2 text-white hover:text-gray-300"
          >
            <HelpCircle className="w-4 h-4" />
            <span className="text-sm">Help</span>
          </Link>
        </div>
      </div>

      {/* Lower Part */}
      <div className="flex justify-between items-center px-6 py-4 bg-white shadow-sm">
        {/* Logo */}
        <div
          onClick={() => navigate("/")}
          className="flex items-center space-x-8"
        >
          <div className="flex items-center space-x-5">
            <img
              src={logo}
              alt="Blink Beats Logo"
              className="w-auto h-7 bg-white rounded-full border-black shadow-lg cursor-pointer object-contain scale-[1.8]"
            />
            <span className="text-xl font-bold">Blink Beats</span>
          </div>

          <button className="hidden lg:flex items-center space-x-2 text-gray-600 hover:text-black">
            <MapPin className="w-4 h-4" />
            <span>Find Your Location</span>
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>

        {/* Search and Actions */}
        <div className="flex items-center space-x-6">
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search..."
              className="w-[600px] px-4 py-2 pr-10 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          </div>

          <div className="flex items-center space-x-6">
            <button
              onClick={() => setPopupOpen(true)}
              className="flex items-center space-x-2 text-gray-700 hover:text-black"
            >
              <User className="w-5 h-5" />
              <span className="hidden md:inline">Account</span>
            </button>
            <button
              onClick={() => navigate("/cart")}
              className="flex items-center space-x-2 text-gray-700 hover:text-black"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="hidden md:inline">Cart</span>
            </button>
          </div>

          <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {!menuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                fill="#000000"
                className="w-4 h-4"
                version="1.1"
                id="Capa_1"
                viewBox="0 0 490 490"
                xml:space="preserve"
              >
                <polygon points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490   489.292,457.678 277.331,245.004 489.292,32.337 " />
              </svg>
            )}
          </button>
        </div>
      </div>

      <>
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 px-4 py-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2 mb-4 pr-10 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="absolute right-4 top-[21px] transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            </div>

            <nav className="space-y-4">
              {navLinks.map((item) => (
                <div key={item.name}>
                  {/* Normal Links */}
                  {!item.hasDropdown ? (
                    <button
                      onClick={() => handleButtonClick(item)}
                      className="flex items-center space-x-2 text-gray-600 hover:text-black"
                    >
                      {item.icon && <item.icon className="w-4 h-4" />}
                      <span>{item.name}</span>
                    </button>
                  ) : (
                    // Dropdown Handling
                    <div>
                      <button
                        onClick={() =>
                          setDropdownOpen(
                            dropdownOpen === item.dropdownType
                              ? null
                              : item.dropdownType
                          )
                        }
                        className="flex items-center space-x-2 text-gray-600 hover:text-black w-full"
                      >
                        {item.icon && <item.icon className="w-4 h-4" />}
                        <span>{item.name}</span>
                        <ChevronDown className="w-4 h-4 ml-auto" />
                      </button>

                      {/* Company Dropdown */}
                      {dropdownOpen === "company" &&
                        item.dropdownType === "company" && (
                          <div className="pl-4 space-y-2 mt-2">
                            {companyDropdownItems.map((subItem) => (
                              <Link
                                key={subItem.name}
                                to={subItem.path}
                                className="flex items-center space-x-2 text-gray-500 hover:text-black"
                              >
                                {subItem.icon && (
                                  <subItem.icon className="w-4 h-4" />
                                )}
                                <span>{subItem.name}</span>
                              </Link>
                            ))}
                          </div>
                        )}
                      {dropdownOpen === "services" &&
                        item.dropdownType === "services" && (
                          <div className="pl-4 space-y-2 mt-2">
                            {serviceDropdownItems.map((dropItem) => (
                              <Link
                                key={dropItem.name}
                                to={dropItem.path}
                                className="flex items-center space-x-2 text-gray-500 hover:text-black"
                              >
                                {dropItem.icon && (
                                  <dropItem.icon className="w-4 h-4" />
                                )}
                                <span>{dropItem.name}</span>
                              </Link>
                            ))}
                          </div>
                        )}
                    </div>
                  )}
                </div>
              ))}
              <Link
                to={"/join-us"}
                className="flex items-center space-x-2 text-gray-500 hover:text-black"
              >
                <UserPlus className="w-4 h-4" />
                <span className="text-sm">Join Us</span>
              </Link>
              <Link
                to={"/help"}
                className="flex items-center space-x-2 text-gray-500 hover:text-black"
              >
                <HelpCircle className="w-4 h-4" />
                <span className="text-sm">Help</span>
              </Link>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-black w-full">
                <MapPin className="w-4 h-4" />
                <span>Select Delivery Address</span>
                <ChevronDown className="w-4 h-4 ml-auto" />
              </button>
              <div className="flex items-center space-x-2 text-gray-500 hover:text-black cursor-pointer">
                <Phone className="w-4 h-4" />
                <span className="text-sm">QUESTIONS? CALL: +91 8287831221</span>
              </div>
            </nav>
          </div>
        )}
      </>

      {isPopupOpen && (
        <Popup isPopupOpen={isPopupOpen} setPopupOpen={setPopupOpen} />
      )}
    </header>
  );
};

export default Header;
