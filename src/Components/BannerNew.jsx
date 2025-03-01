import { ArrowRight, ArrowDownCircle } from "lucide-react";
import { useState } from "react";
import Popup from "./Popup";
import AdvertisingPartner from "./AdvertisingPartner";
import "./BannerNew.css";

const BannerNew = () => {
  const [open, setOpen] = useState(false);

  return (
    <div id="home" className="items-center">
      {/* Responsive Gradient Background */}
      <div
        className="mt-16 sm:mt-28 w-full min-h-[300px] sm:min-h-[300px] lg:min-h-[350px] flex justify-center items-center text-center"
        style={{
          background: "linear-gradient(140deg, #00D8A7, #0A2C59)",
        }}
      >
        <div className="w-[90%] max-w-4xl animate-fade-in">
          {/* Updated Heading */}
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold mb-4 text-white animate-slide-down">
            YOU HAVE BUSINESS
          </h1>
          <p className="text-lg sm:text-2xl lg:text-3xl font-semibold mb-4 text-white animate-fade-in">
            WE HAVE{" "}
            <span className="bg-white text-blue-600 px-2 py-1 rounded">
              STRATEGY
            </span>
          </p>

          {/* Subtext */}
          <p className="text-sm sm:text-lg lg:text-xl text-gray-200 mb-6 animate-fade-in">
            BLINKBEAT SPOTLIGHT
          </p>

          {/* Buttons with Mobile Responsiveness */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              onClick={() => setOpen(!open)}
              className="bg-white hover:bg-gray-200 text-blue-600 px-6 py-3 rounded-full font-semibold 
                transition-all duration-300 flex items-center group animate-bounce"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="text-white hover:text-gray-200 font-semibold flex items-center transition-colors duration-300">
              Learn More
              <ArrowDownCircle className="w-5 h-5 ml-2 animate-bounce" />
            </button>
          </div>
        </div>
      </div>

      {/* Responsive Separator */}
      <div className="w-full h-2 sm:h-4 bg-[linear-gradient(135deg, rgba(0, 128, 255, 0.5), rgba(0, 255, 0, 0.5), rgba(255, 0, 0, 0.5))] rounded-full"></div>

      <AdvertisingPartner />
      {open && <Popup isPopupOpen={open} setPopupOpen={setOpen} />}
    </div>
  );
};

export default BannerNew;
