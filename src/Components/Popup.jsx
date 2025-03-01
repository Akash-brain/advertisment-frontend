import { useEffect, useState, useRef } from "react";
import axios from "axios";

const Popup = ({ isPopupOpen, setPopupOpen }) => {
  const [activeTab, setActiveTab] = useState("register");
  const popupRef = useRef(null);

  // Registration Form State
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    password: "",
  });

  // Login Form State
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  // Close Popup When Clicking Outside
  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setPopupOpen(false);
      resetForms();
    }
  };

  useEffect(() => {
    if (isPopupOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isPopupOpen]);

  // Reset Forms & Messages
  const resetForms = () => {
    setRegisterData({ name: "", email: "", phone: "", city: "", password: "" });
    setLoginData({ email: "", password: "" });
    setMessage(null);
    setError(null);
  };

  // Handle Registration Form Change
  const handleRegisterChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  // Handle Login Form Change
  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);
  
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/accounts/register/", registerData);
      setMessage("Registration Successful! Please log in.");
      resetForms();
    } catch (err) {
      setError(err.response?.data?.message || "Registration Failed.");
    } finally {
      setLoading(false);
    }
  };
  

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);
  
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/accounts/Login/", loginData);
      setMessage("Login Successful! Redirecting...");
      resetForms();
      setTimeout(() => setPopupOpen(false), 2000);
    } catch (err) {
      setError(err.response?.data?.message || "Invalid Credentials.");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    isPopupOpen && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div ref={popupRef} className="bg-white rounded-lg flex w-[750px] shadow-lg overflow-hidden">
          
          {/* Left Section with Branding */}
          <div className="hidden md:flex flex-col justify-center items-center bg-gray-100 p-6 w-1/2">
            <img src="/your-logo.png" alt="Logo" className="w-12 h-12 mb-2" />
            <h2 className="text-lg font-bold">Blink Beats</h2>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li>✔ Fast & Secure Login</li>
              <li>✔ Get instant rates for all advertising media</li>
              <li>✔ Amazing deals on media buying</li>
            </ul>
          </div>

          {/* Right Section (Forms) */}
          <div className="p-6 w-full md:w-1/2">
            <div className="flex justify-between border-b mb-4">
              <button
                className={`text-lg font-semibold pb-2 ${
                  activeTab === "register" ? "border-b-2 border-green-500 text-green-500" : "text-gray-500"
                }`}
                onClick={() => setActiveTab("register")}
              >
                Register
              </button>
              <button
                className={`text-lg font-semibold pb-2 ${
                  activeTab === "login" ? "border-b-2 border-green-500 text-green-500" : "text-gray-500"
                }`}
                onClick={() => setActiveTab("login")}
              >
                Login
              </button>
            </div>

            {message && <p className="text-green-500">{message}</p>}
            {error && <p className="text-red-500">{error}</p>}

            {activeTab === "register" && (
              <form className="space-y-4" onSubmit={handleRegisterSubmit}>
                <input type="text" name="name" placeholder="Your Name" className="w-full border rounded-md px-4 py-2" required value={registerData.name} onChange={handleRegisterChange} />
                <input type="email" name="email" placeholder="Your Email" className="w-full border rounded-md px-4 py-2" required value={registerData.email} onChange={handleRegisterChange} />
                <input type="text" name="phone" placeholder="Phone Number" className="w-full border rounded-md px-4 py-2" required value={registerData.phone} onChange={handleRegisterChange} />
                <input type="text" name="city" placeholder="City Name" className="w-full border rounded-md px-4 py-2" required value={registerData.city} onChange={handleRegisterChange} />
                <input type="password" name="password" placeholder="Password" className="w-full border rounded-md px-4 py-2" required value={registerData.password} onChange={handleRegisterChange} />
                <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md">
                  {loading ? "Registering..." : "Create an Account"}
                </button>
              </form>
            )}

            {activeTab === "login" && (
              <form className="space-y-4" onSubmit={handleLoginSubmit}>
                <input type="email" name="email" placeholder="Your Email" className="w-full border rounded-md px-4 py-2" required value={loginData.email} onChange={handleLoginChange} />
                <input type="password" name="password" placeholder="Password" className="w-full border rounded-md px-4 py-2" required value={loginData.password} onChange={handleLoginChange} />
                <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md">
                  {loading ? "Logging in..." : "Login"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default Popup;
