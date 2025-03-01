import { useState, useEffect, useRef } from "react";
import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom";
const Card2 = () => {
  const { addToCart } = useCart();
  const scrollContainerRef = useRef(null);
  const navigate = useNavigate();

  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const handleScroll = () => {
    const container = scrollContainerRef.current;

    setShowLeftArrow(container.scrollLeft > 0);
    setShowRightArrow(
      container.scrollLeft + container.offsetWidth < container.scrollWidth
    );
  };

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({
      left: -300, // Adjust scroll distance
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({
      left: 300, // Adjust scroll distance
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    handleScroll();

    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const cardData = [
    {
      category: "Fashion",
      price: 120000,
      imageUrl: "/images/MediaMarketing.webp",
      whatsappMessage: "I am interested in Media advertising.",
    },
    {
      category: "Food",
      price: 130000,
      imageUrl: "/images/Marketingg.jpg",
      whatsappMessage: "I am interested in Marketing campaigns.",
    },
    {
      category: "Makeup",
      price: 100000,
      imageUrl: "/images/advertisingimg.jpg",
      whatsappMessage: "I am interested in Advertising in Metro.",
    },
    {
      category: "Travel",
      price: 200000,
      imageUrl: "/images/event.webp",
      whatsappMessage: "I am interested in Event Sponsorship.",
    },
    {
      category: "Health",
      price: 150000,
      imageUrl: "/images/Entertainment.jpg",
      whatsappMessage: "I am interested in Entertainment campaigns.",
    },
  ];
  const formatPathName = (name) =>
    name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg sm:text-2xl font-bold">E-Mall</h1>
        <button
          onClick={() => {
            navigate("/services/fashion-lifestyle"), window.scrollTo(0, 50);
          }}
          className="text-blue-600 text-sm sm:text-base hover:underline"
        >
          See All
        </button>
      </div>

      <div className="relative">
        {/* Scroll Left Button */}
        {showLeftArrow && (
          <button
            onClick={scrollLeft}
            className="absolute left-0 z-10 p-1 sm:p-2 bg-gray-200 rounded-full shadow hover:bg-gray-300 transition transform -translate-y-1/2 top-1/2"
          >
            ❮
          </button>
        )}

        {/* Scrollable Container */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto scrollbar-hide gap-3 sm:gap-6"
        >
          {cardData.map((card, index) => (
            <div
              onClick={() => {
                navigate(`services/${formatPathName(card.category)}`),
                  window.scroll(0, 50);
              }}
              key={index}
              className="min-w-[160px] sm:min-w-[220px] md:min-w-[240px] cursor-pointer rounded-lg overflow-hidden border border-gray-200 relative flex flex-col transform transition-all duration-300 ease-in"
            >
              {/* Image Section with Hover Animation */}
              <div className="w-full h-28 sm:h-32 md:h-36 bg-gray-100 overflow-hidden relative group">
                <img
                  src={card.imageUrl}
                  alt={card.category}
                  className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-110"
                />
              </div>

              {/* Content Section */}
              <div className="p-2 sm:p-4 flex flex-col items-center justify-between flex-grow">
                <h2 className="text-sm sm:text-lg font-semibold text-gray-800">
                  {card.category}
                </h2>
                {/* View More Button */}
                <div className="w-full mt-2 sm:mt-3 flex justify-center opacity-100 group-hover:opacity-100 transition-opacity">
                  <button className="w-[75%] sm:w-[60%] text-center text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90 rounded-md p-1 sm:p-2 text-xs sm:text-sm">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Right Button */}
        {showRightArrow && (
          <button
            onClick={scrollRight}
            className="absolute right-0 z-10 p-1 sm:p-2 bg-gray-200 rounded-full shadow hover:bg-gray-300 transition transform -translate-y-1/2 top-1/2"
          >
            ❯
          </button>
        )}
      </div>
    </div>
  );
};

export default Card2;
