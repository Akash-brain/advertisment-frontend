import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TrendingCard = () => {
  const scrollContainerRef = useRef(null);
  const navigate = useNavigate();
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const cardData = [
    {
      category: "Fashion & Lifestylies",
      price: 120000,
      imageUrl: "/images/MediaMarketing.webp",
      whatsappMessage: "I am interested in Media advertising.",
      parentCategory: "e-mall",
    },
    {
      category: "Food & Beveragess",
      price: 130000,
      imageUrl: "/images/Marketingg.jpg",
      whatsappMessage: "I am interested in Marketing campaigns.",
      parentCategory: "e-mall",
    },
    {
      category: "Makeup & Beauties",
      price: 100000,
      imageUrl: "/images/advertisingimg.jpg",
      whatsappMessage: "I am interested in Advertising in Metro.",
      parentCategory: "e-mall",
    },
    {
      category: "Travel & Hospitality",
      price: 200000,
      imageUrl: "/images/event.webp",
      whatsappMessage: "I am interested in Event Sponsorship.",
      parentCategory: "e-mall",
    },
    {
      category: "Health & Wellness",
      price: 150000,
      imageUrl: "/images/Entertainment.jpg",
      whatsappMessage: "I am interested in Entertainment campaigns.",
      parentCategory: "e-mall",
    },
    {
      category: "Medias",
      price: 120000,
      imageUrl: "/images/MediaMarketing.webp",
      whatsappMessage: "I am interested in Media advertising.",
      parentCategory: "spotlight",
    },
    {
      category: "Marketing",
      price: 130000,
      imageUrl: "/images/Marketingg.jpg",
      whatsappMessage: "I am interested in Marketing campaigns.",
      parentCategory: "spotlight",
    },
    {
      category: "Advertisment",
      price: 100000,
      imageUrl: "/images/advertisingimg.jpg",
      whatsappMessage: "I am interested in Advertising in Metro.",
      parentCategory: "spotlight",
    },
    {
      category: "Event",
      price: 200000,
      imageUrl: "/images/event.webp",
      whatsappMessage: "I am interested in Event Sponsorship.",
      parentCategory: "spotlight",
    },
    {
      category: "Entertainments",
      price: 150000,
      imageUrl: "/images/Entertainment.jpg",
      whatsappMessage: "I am interested in Entertainment campaigns.",
      parentCategory: "spotlight",
    },
    {
      category: "Podcasts",
      price: 120000,
      imageUrl:
        "https://th.bing.com/th/id/OIP._8nTRdPbFyRz7vbrcZvKxQHaE4?rs=1&pid=ImgDetMain",
      whatsappMessage: "I am interested in Media advertising.",
      parentCategory: "studio",
    },
    {
      category: "Shows",
      price: 130000,
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1682855222843-0cd0827ed6e3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      whatsappMessage: "I am interested in Marketing campaigns.",
      parentCategory: "studio",
    },
    {
      category: "Web serie",
      price: 100000,
      imageUrl:
        "https://assets-global.website-files.com/619cb1d12095e3f3cdddaeb2/63286b55fcaad21686bc4082_best%20web%20series%20in%20india.webp",
      whatsappMessage: "I am interested in Advertising in Metro.",
      parentCategory: "studio",
    },
    {
      category: "Short",
      price: 200000,
      imageUrl:
        "https://th.bing.com/th/id/OIP.knzyQjKplcEs8isJGrqGhQHaEo?rs=1&pid=ImgDetMain",
      whatsappMessage: "I am interested in Event Sponsorship.",
      parentCategory: "studio",
    },
    {
      category: "Films",
      price: 150000,
      imageUrl:
        "https://st3.depositphotos.com/11433382/14401/i/1600/depositphotos_144011377-stock-photo-popcorn-and-movie-clapper-board.jpg",
      whatsappMessage: "I am interested in Entertainment campaigns.",
      parentCategory: "studio",
    },
    {
      category: "Sport",
      price: 150000,
      imageUrl:
        "https://th.bing.com/th/id/OIP.X5aw-4fNV1x0iwLlEo7oMQHaFo?rs=1&pid=ImgDetMain",
      whatsappMessage: "I am interested in Entertainment campaigns.",
      parentCategory: "studio",
    },
    {
      category: "Albums",
      price: 150000,
      imageUrl:
        "data:image/jpeg;base64,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",
      whatsappMessage: "I am interested in Entertainment campaigns.",
      parentCategory: "studio",
    },
    {
      category: "Photoshoots",
      price: 150000,
      imageUrl:
        "data:image/jpeg;base64,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",
      whatsappMessage: "I am interested in Entertainment campaigns.",
      parentCategory: "studio",
    },
  ];

  const formatPathName = (name) =>
    name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

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

    // Check initial scroll state
    handleScroll();

    // Add event listener to track scroll changes
    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl md:text-2xl font-bold">Trending</h1>
        <button
          onClick={() => {
            navigate("/services/entertainments");
            window.scrollTo(0, 50);
          }}
          className="text-blue-500 text-sm md:text-base"
        >
          See All
        </button>
      </div>

      <div className="relative">
        {showLeftArrow && (
          <button
            onClick={scrollLeft}
            className="absolute left-0 z-10 p-2 bg-gray-200 rounded-full shadow-md hover:bg-gray-300 transition -translate-y-1/2 top-1/2"
          >
            ❮
          </button>
        )}

        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto scrollbar-hide gap-4 md:gap-6 p-2 md:p-4"
        >
          {cardData.map((card, index) => (
            <div
              onClick={() => {
                navigate(
                  `services/${card.category.replace(/\s+/g, "-").toLowerCase()}`
                );
                window.scrollTo(0, 50);
              }}
              key={index}
              className="min-w-[180px] md:min-w-[240px] cursor-pointer rounded-lg overflow-hidden border border-gray-200 flex flex-col transition-all duration-300 ease-in"
            >
              <div className="w-full h-28 md:h-36 bg-gray-100 overflow-hidden relative group">
                <img
                  src={card.imageUrl}
                  alt={card.category}
                  className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-110"
                />
              </div>
              <div className="p-3 md:p-4 flex flex-col items-center justify-between flex-grow">
                <h2 className="text-base md:text-xl font-semibold text-gray-800">
                  {card.category}
                </h2>
                <div className="w-full mt-3 md:mt-4 flex justify-center opacity-100 group-hover:opacity-100 transition-opacity">
                  <button className="w-[70%] md:w-[60%] text-center text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90 rounded-md p-2 text-sm md:text-base">
                    Explore
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {showRightArrow && (
          <button
            onClick={scrollRight}
            className="absolute right-0 z-10 p-2 bg-gray-200 rounded-full shadow-md hover:bg-gray-300 transition -translate-y-1/2 top-1/2"
          >
            ❯
          </button>
        )}
      </div>
    </div>
  );
};

export default TrendingCard;
