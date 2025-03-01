import {
  Store,
  Truck,
  Camera,
  Building2,
  Check,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";
import PartnerPopup from "..//PartnerPopup";
const details = [
  {
    title: "BDA Partner",
    description:
      "Earn up to 25% commission. Exclusive training programs. Build your own team.",
    color: "#4B0082",
    icon: Building2,
    benefits: [
      "Earn up to 25% commission",
      "Exclusive training programs",
      "Build your own team",
    ],
  },
  {
    title: "Store Partner",
    description:
      "Premium store location. Complete business setup. Marketing support.",
    color: "#7E22CE",
    icon: Store,
    benefits: [
      "Premium store location",
      "Complete business setup",
      "Marketing support",
    ],
  },
  {
    title: "Studio Partner",
    description:
      "Professional equipment. Expert training. Booking platform access.",
    color: "#E11D48",
    icon: Camera,
    benefits: [
      "Professional equipment",
      "Expert training",
      "Booking platform access",
    ],
  },
  {
    title: "Delivery Partner",
    description:
      "Flexible schedule, Weekly payments with Bonus incentives also.",
    color: "#059669",
    icon: Truck,
    benefits: ["Flexible schedule", "Weekly payments", "Bonus incentives"],
  },
];

const Joinus = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [currentDetails, setCurrentDetails] = useState({});
  const togglePopup = (details) => {
    setCurrentDetails({
      title: details.title,
      description: details.description,
      color: details.color,
    });
    console.log(currentDetails);
    setPopupOpen(!isPopupOpen);
  };

  return (
    <div className="min-h-screen sm:mt-28 mt-14 bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Image Section */}
      <div className="relative h-[300px] mb-16">
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(170deg, #00D8A7, rgb(232, 239, 248))",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-full flex items-center text-center sm:text-left">
              <div className="text-white max-w-3xl">
                <h1 className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-6 opacity-0 animate-[fadeIn_1s_ease-out_0.2s_forwards]">
                  Join Our Network
                </h1>
                <p className="text-sm sm:text-lg opacity-0 animate-[fadeIn_1s_ease-out_0.4s_forwards]">
                  Choose your path to success. Whether you want to be a brand
                  partner, run a store, operate a studio, or join our delivery
                  network, we have the perfect opportunity for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partner Cards Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {details.map((partner, index) => {
            const Icon = partner.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 transition-all duration-500 transform hover:-translate-y-2 opacity-0 animate-[slideUp_1s_ease-out_0.2s_forwards]"
              >
                <div className="text-center mb-4">
                  <div
                    className="inline-flex p-3 rounded-full mb-3"
                    style={{ backgroundColor: `${partner.color}20` }}
                  >
                    <Icon
                      className="w-6 h-6 sm:w-8 sm:h-8"
                      style={{ color: partner.color }}
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                    {partner.title}
                  </h3>
                </div>
                <ul className="space-y-3 mb-6 text-sm sm:text-base">
                  {partner.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-2 sm:gap-3">
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => togglePopup(partner)}
                  className="w-full text-white py-2 sm:py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2 group"
                  style={{ backgroundColor: partner.color }}
                >
                  Join as {partner.title}
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Benefits Section */}
        <section className="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 rounded-3xl p-6 sm:p-12 opacity-0 animate-[fadeIn_1s_ease-out_1s_forwards]">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-12">
            Why Partner With Us?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white/80 backdrop-blur rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-300">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4">
                Growth Support
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Comprehensive training and ongoing support to help you succeed
                in your role.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-300">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4">
                Financial Freedom
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Competitive compensation with unlimited earning potential based
                on your effort.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-300">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4">
                Brand Recognition
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Partner with a trusted brand that customers know and love.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Popup Modal */}
      {isPopupOpen && (
        <PartnerPopup
          isOpen={isPopupOpen}
          onClose={() => setPopupOpen(false)}
          partnerDetails={currentDetails}
        />
      )}
    </div>
  );
};

export default Joinus;
