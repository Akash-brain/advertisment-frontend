import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

const sections = [
  {
    name: "Spotlight",
    categories: [
      {
        name: "Media",
        image:
          "https://wallpapers.com/images/file/social-media-pictures-ru8kyfkfl08cxsbr.jpg",
        items: [
          {
            name: "Print Media",
            image:
              "https://www.bridgingpointsmedia.com/wp-content/uploads/2018/09/download-1-scaled.jpeg",
          },
          {
            name: "Electronics Media",
            image:
              "https://static.javatpoint.com/blog/images/advantages-and-disadvantages-of-electronic-media.png",
          },
          {
            name: "Digital Media",
            image:
              "https://th.bing.com/th/id/OIP.JCy6UwTXvCs-gBT1oK7HGQHaFX?rs=1&pid=ImgDetMain",
          },
          {
            name: "PR Services",
            image:
              "https://th.bing.com/th/id/R.df0e57c505eb407946be721ea5c52e71?rik=fCJJtfRaNiiaqQ&riu=http%3a%2f%2fwww.5wpr.com%2fnew%2fwp-content%2fuploads%2f2015%2f10%2fpr-services.jpg&ehk=TbdH5f7N7jgBoRE2I1fc45nG3btSmtZMt3F9N3QP1xo%3d&risl=&pid=ImgRaw&r=0",
          },
        ],
      },
      {
        name: "Advertising",
        image:
          "https://static.vecteezy.com/system/resources/previews/006/202/089/non_2x/flat-isometric-concept-illustration-advertising-campaigns-on-social-media-marketing-free-vector.jpg",
        items: [
          {
            name: "Outdoor Advertising",
            image:
              "https://miro.medium.com/v2/resize:fit:1200/1*k7hTzlFhuSWcwLzAq184TQ.jpeg",
          },
          {
            name: "Signage Advertising",
            image:
              "https://images.examples.com/wp-content/uploads/2018/04/Multipurpose-Corporate-Business-Signage-Billboard.jpg",
          },
          {
            name: "Transit Advertising",
            image:
              "https://th.bing.com/th/id/OIP.KSRaTs8JuGWdOoPvaOZIYAHaE7?rs=1&pid=ImgDetMain",
          },
          {
            name: "Non Traditional Advertising",
            image:
              "https://cfw.rabbitloader.xyz/eyJjIjp0cnVlLCJoIjoibWFya2V0aW5naG90c2hvdC5jb20iLCJ2IjoxMjUxOTI1MDI3LCJpIjoiY2ZjMjg4ZjQtNjJlOS00MjMxLWVmZWMtMDJkZmU0ZTIxYzAwIn0/wp-content/uploads/2021/02/guerilla-street-marketing-product-sampling.jpg",
          },
          {
            name: "Hoarding Advertising",
            image:
              "https://th.bing.com/th/id/R.22e634e83267f4a943b9e4db589b2c87?rik=GuRudOk2%2bRSvfA&riu=http%3a%2f%2ffreemockupzone.com%2fwp-content%2fuploads%2f2018%2f08%2fFree-Realistic-Outdoor-Advertisement-Hoarding-Billboard-Mockup-PSD-2018.jpg&ehk=pmyV48c%2bbRMb5Di56%2fWJJZSC9SilBKJbZc0aAV9b%2bFY%3d&risl=&pid=ImgRaw&r=0",
          },
        ],
      },
      {
        name: "Marketing",
        image:
          "https://th.bing.com/th/id/OIP.Wg_2zWu1B_HwIKXiUcB2uQHaF7?rs=1&pid=ImgDetMain",
        items: [
          {
            name: "Branding Services",
            image:
              "https://websitedesignkingston.com/wp-content/uploads/2020/12/Brand-logo-1.jpg",
          },
          {
            name: "Graphic Design",
            image:
              "https://cdn.dribbble.com/users/1501969/screenshots/11111500/media/80435873ac4c921df75834618c36458a.jpg",
          },
          {
            name: "LeafLets & Canopy",
            image:
              "https://th.bing.com/th/id/OIP.SdIttMT09tpoHeaQl9QwHAHaHa?rs=1&pid=ImgDetMain",
          },
        ],
      },
      {
        name: "Events",
        image:
          "https://th.bing.com/th/id/OIP.W2giC8TjletygTa_fV67_AHaE8?rs=1&pid=ImgDetMain",
        items: [
          {
            name: "Conference",
            image:
              "https://th.bing.com/th/id/OIP.FmXp_DVjc15sDz4XkHAVuwHaDt?rs=1&pid=ImgDetMain",
          },
          {
            name: "Workshop",
            image:
              "https://th.bing.com/th/id/OIP.QjjPL2NMBtCYxdzTgO8fCAHaE8?rs=1&pid=ImgDetMain",
          },
          {
            name: "Shows",
            image:
              "https://static1.srcdn.com/wordpress/wp-content/uploads/2020/12/Disney-Plus-Shows-2000s-Featured.jpeg",
            subItems: [
              {
                name: "fashion",
                image:
                  "https://th.bing.com/th/id/OIP.W2giC8TjletygTa_fV67_AHaE8?rs=1&pid=ImgDetMain",
              },
              {
                name: "talent",
                image:
                  "https://th.bing.com/th/id/OIP.QjjPL2NMBtCYxdzTgO8fCAHaE8?rs=1&pid=ImgDetMain",
              },
              {
                name: "Awards",
                image:
                  "https://th.bing.com/th/id/OIP.QjjPL2NMBtCYxdzTgO8fCAHaE8?rs=1&pid=ImgDetMain",
              },
            ],
          },
          {
            name: "Exhibitions",
            image:
              "https://canadianart.ca/wp-content/uploads/2014/10/Art-Toronto-View.jpg",
          },
          {
            name: "Cultural",
            image:
              "https://media.baamboozle.com/uploads/images/855127/1662774025_94880.jpeg",
          },
          {
            name: "Sports",
            image: "https://i-sam.unimedias.fr/2018/12/28/istock-915362996.jpg",
          },
        ],
      },
      {
        name: "Entertainment",
        image:
          "https://th.bing.com/th/id/OIP.5foIZ5Zy4-Aw8ePXUL6pfgHaE8?rs=1&pid=ImgDetMain",
        items: [],
      },
    ],
  },
  {
    name: "E-Mall",
    categories: [
      {
        name: "Fashion",
        image:
          "https://th.bing.com/th/id/OIP.BEbtuMSZY2_HFaoDQNTaCQHaE8?rs=1&pid=ImgDetMain",
        items: [
          {
            name: "Clothing",
            image:
              "https://cdn.shopify.com/s/files/1/0182/1471/5470/articles/How-to-Look-Stylish-in-Traditional-Indian-Clothing-Where-to-Buy-the-Best-Fashionable-Ethnic-Wear-for-Women-Online.jpg?v=1671543652",
          },
          {
            name: "Footwear",
            image:
              "https://static.pexels.com/photos/267320/pexels-photo-267320.jpeg",
          },
        ],
      },
      {
        name: "Food",
        image:
          "https://th.bing.com/th/id/OIP.BpxGsVL8UuOapTJY0Pf9HQHaFH?rs=1&pid=ImgDetMain",
        items: [
          {
            name: "Groceries",
            image:
              "https://d194ip2226q57d.cloudfront.net/images/deliverablegroceries_june2018.original.jpg",
          },
          {
            name: "Snacks",
            image:
              "https://www.bruker.com/es/applications/food-analysis-and-agriculture/food-quality/snacks/_jcr_content/teaserImage.coreimg.jpeg/1597679208099/savoury-snacks.jpeg",
          },
        ],
      },
      {
        name: "Makeup",
        image:
          "https://th.bing.com/th/id/R.ad5c0b3951cae028b941361c8d118098?rik=8TN2u2HqPXoPtw&riu=http%3a%2f%2fmasterbeautyphotography.com%2fwp-content%2fuploads%2f2016%2f03%2fLaura_0232-web-1.jpg&ehk=6gipwDxJs1OCy5dHzmYS7vm4w4MwajHFzlzsoo6XhJQ%3d&risl=&pid=ImgRaw&r=0",
        items: [
          {
            name: "Skincare",
            image:
              "https://www.chatelaine.com/wp-content/uploads/2017/10/New-Anti-Aging.jpg",
          },
          {
            name: "Cosmetics",
            image:
              "https://th.bing.com/th/id/OIP.pMCVRQ_hS3FTAkfa9wndHgHaLG?rs=1&pid=ImgDetMain",
          },
        ],
      },
      {
        name: "Travel",
        image:
          "https://inc42.com/wp-content/uploads/2022/01/Untitled-design-9.jpg",
        items: [
          {
            name: "Hotels",
            image:
              "https://images.rosewoodhotels.com/is/image/rwhg/heroshot-punta-bonita-pool-and-beach-1",
          },
          {
            name: "Tours",
            image:
              "https://th.bing.com/th/id/OIP.kOgI0Rn-N31E0gFxOm4-qAHaE7?rs=1&pid=ImgDetMain",
          },
        ],
      },
      {
        name: "Health",
        image:
          "https://th.bing.com/th/id/OIP.dRTYFpKoM08-5qzwy8KCkAHaEt?rs=1&pid=ImgDetMain",
        items: [
          {
            name: "Fitness",
            image: "https://static.toiimg.com/photo/75126749.cms",
          },
          {
            name: "Healthcare",
            image:
              "https://www.herzing.edu/sites/default/files/2022-10/healthcare-professionals.jpg",
          },
        ],
      },
    ],
  },
  {
    name: "Studio",
    categories: [
      {
        name: "Podcast",
        image:
          "https://assets.entrepreneur.com/content/3x2/2000/1633623991-shutterstock-1931610188.jpg",
        items: [
          {
            name: "Audio Podcast",
            image:
              "https://adjossible.com/wp-content/uploads/2020/05/podcast-audio.jpg",
          },
          {
            name: "Video Podcast",
            image:
              "https://th.bing.com/th/id/OIP.G6TTtxIzXYZty4csg6YZkgHaE8?rs=1&pid=ImgDetMain",
          },
        ],
      },
      {
        name: "Shows",
        image:
          "https://media.cntraveler.com/photos/5a789323a683116ef0a47339/master/pass/Le-Reve,-Wynn_2018_Hero_Le-Reve-Tree-Tomasz-Rossa.jpg",
        items: [
          {
            name: "Reality Shows",
            image:
              "https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/04/the-15-greatest-reality-shows-of-all-time.jpg",
          },
          {
            name: "Talk Shows",
            image:
              "https://th.bing.com/th/id/OIP.ITljuzpNy8C-uDDbgrvicQHaFR?rs=1&pid=ImgDetMain",
          },
        ],
      },
      {
        name: "Web Series",
        image:
          "https://th.bing.com/th/id/OIP.kBIJldPtn7izw_mrCOcXrAHaEK?rs=1&pid=ImgDetMain",
        items: [
          {
            name: "Drama Series",
            image:
              "https://static1.srcdn.com/wordpress/wp-content/uploads/2019/12/best-kdramas-on-netflix.jpg",
          },
          {
            name: "Comedy Series",
            image:
              "https://th.bing.com/th/id/OIP.GtUMRTh569s6jRYHy32omgAAAA?rs=1&pid=ImgDetMain",
          },
        ],
      },
      {
        name: "Shorts",
        image:
          "https://s.studiobinder.com/wp-content/uploads/2017/11/The-Best-Short-Films-for-Filmmakers-Featured-Image-StudioBinder.jpg",
        items: [
          {
            name: "Documentary",
            image:
              "https://th.bing.com/th/id/OIP.uOkZfzrR5fGspIRTkdxtsQHaEc?rs=1&pid=ImgDetMain",
          },
          {
            name: "Fiction",
            image:
              "https://talepost.com/wp-content/uploads/2020/01/Sci-fi-movies-coming-2019-still-have-to-wait1.jpg",
          },
        ],
      },
      {
        name: "Film",
        image:
          "https://dl6pgk4f88hky.cloudfront.net/2021/12/2ATHYW0-1038x778.jpg",
        items: [
          {
            name: "Music Videos",
            image: "https://i.ytimg.com/vi/CJ5Ir_Hqb30/maxresdefault.jpg",
          },
          {
            name: "Live Concerts",
            image:
              "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters:format(jpg)/https://specials-images.forbesimg.com/imageserve/1160891166/0x0.jpg",
          },
        ],
      },
      {
        name: "Sports",
        image: "https://wallpaper.dog/large/10716322.jpg",
        items: [
          {
            name: "Team Highlights",
            image:
              "https://images.thequint.com/thequint/2019-07/470743da-dd99-4819-8d2b-45ec54d4ee1a/AP19183636943964.jpg?rect=0,0,3854,2168&auto=format,compress&fmt=webp",
          },
          {
            name: "Player Profiles",
            image:
              "https://th.bing.com/th/id/OIP.zXbbie4-jG-3JzKxqeze3gAAAA?rs=1&pid=ImgDetMain",
          },
        ],
      },
      {
        name: "Album",
        image:
          "https://th.bing.com/th/id/OIP.4KYEpUuO-dCyNFwrPUuY0wHaFg?rs=1&pid=ImgDetMain",
        items: [
          {
            name: "Team Highlights",
            image:
              "https://kpopnews.atsit.in/l/es/wp-content/uploads/sites/3/2023/11/team-lanza-su-primer-album-de-larga-duracion-hoy-15-te-mostraremos-cuanto-hemos-crecido.jpg",
          },
          {
            name: "Player Profiles",
            image:
              "https://th.bing.com/th/id/OIP.lPO3Soq_vp4qrSZ6RNNu9gHaE7?rs=1&pid=ImgDetMain",
          },
        ],
      },
      {
        name: "Photoshoot",
        image:
          "https://merriam-webster.com/assets/mw/images/article/art-wap-landing-mp-lg/man%20taking%20photo%20of%20woman%20in%20studio-8332-4b82494270ca935b37c682e2ea7c562e@1x.jpg",
        items: [
          {
            name: "Fashion Shoot",
            image:
              "https://i.pinimg.com/originals/95/0e/1d/950e1da822d9e6d9f76279b042bcf1c1.jpg",
          },
          {
            name: "Product Shoot",
            image:
              "https://th.bing.com/th/id/OIP.nVorxYXTP5AG1YoE2on-FwHaE7?rs=1&pid=ImgDetMain",
          },
        ],
      },
    ],
  },
  {
    name: "Trending",
    categories: [
      {
        name: "Entertainments",
        image:
          "https://th.bing.com/th/id/OIP.q6ac8hJf3BKa8ANejalHTAHaE8?rs=1&pid=ImgDetMain",
        items: [
          {
            name: "New Releases",
            image: "https://images6.alphacoders.com/106/thumb-1920-1065654.png",
          },
          {
            name: "Celebrity News",
            image:
              "https://media1.popsugar-assets.com/files/thumbor/jsbiwwteFdSudRodhbNugtsvwq0/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2018/01/05/848/n/1922398/tmp_yvt5wO_9f7d251755fddd54_GettyImages-862169716.jpg",
          },
        ],
      },
      {
        name: "Fashion",
        image:
          "https://i.pinimg.com/originals/9a/a4/73/9aa4730dc0005ddbfdf727cd928c49cd.jpg",
        items: [
          {
            name: "Trendy Outfits",
            image:
              "https://th.bing.com/th/id/OIP.3JJNtQoY6OhihZ_-V_AEgAHaLH?rs=1&pid=ImgDetMain",
          },
          {
            name: "Home Decor",
            image:
              "https://th.bing.com/th/id/OIP.ay8BT7YMAjVPCIiM0v_-XwHaFj?rs=1&pid=ImgDetMain",
          },
        ],
      },
      {
        name: "Podcasts",
        image:
          "https://www.shoutmeloud.com/wp-content/uploads/2019/10/How-start-podcast-1024x665.jpg",
        items: [
          {
            name: "Top Podcasts",
            image:
              "https://assets-global.website-files.com/5dafa392fcdc196abf1f613a/62e098d216206df0c0717b4b_Frame%20258Quill%20Thumbnail.png",
          },
          {
            name: "Latest Episodes",
            image: "https://i.ytimg.com/vi/Gw8X7qrEoEM/maxresdefault.jpg",
          },
        ],
      },
    ],
  },
];

function CategoryScreen() {
  const location = useLocation();
  const navigate = useNavigate();

  const [activeSection, setActiveSection] = useState(sections[0]?.name || "");
  const [activeCategory, setActiveCategory] = useState(
    sections[0]?.categories[0]?.name || ""
  );

  const formatPathName = (name) =>
    name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

  useEffect(() => {
    const path = location.pathname.split("/").pop();
    const formattedCategory = path.replace(/-/g, " ");
    const section = sections.find((s) =>
      s.categories.some(
        (c) => formatPathName(c.name) === formatPathName(formattedCategory)
      )
    );

    if (section) {
      setActiveSection(section.name);
      setActiveCategory(
        section.categories.find(
          (c) => formatPathName(c.name) === formatPathName(formattedCategory)
        )?.name || ""
      );
    } else {
      setActiveSection(sections[0]?.name || "");
      setActiveCategory(sections[0]?.categories[0]?.name || "");
    }
  }, [location, sections]);
  const [subItems, setSubItems] = useState([]);
  const togg = (items) => {
    console.log(items);
    setSubItems(items);
    navigate(`/services/${formatPathName(items.name)}`);
  };
  const handleSectionClick = (sectionName) => {
    const defaultCategory =
      sections.find((s) => s.name === sectionName)?.categories[0]?.name || "";
    console.log(defaultCategory);
    setActiveSection(sectionName);
    setSubItems([]);
    setActiveCategory(defaultCategory);
    if (defaultCategory) {
      navigate(`/services/${formatPathName(defaultCategory)}`);
    }
  };

  const handleCategoryClick = (categoryName) => {
    setActiveCategory(categoryName);
    console.log(categoryName);
    setSubItems([]);
    navigate(`/services/${formatPathName(categoryName)}`);
  };

  const activeCategories =
    sections.find((section) => section.name === activeSection)?.categories ||
    [];
  const activeItems =
    activeCategories.find((category) => category.name === activeCategory)
      ?.items || [];

  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => setIsLoading(false);
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="w-full sm:mt-28 mt-14 bg-white shadow-md">
        <div className="max-w-screen-xl mx-auto px-4">
          <nav className="flex items-center justify-between sm:justify-center overflow-x-auto space-x-4 sm:space-x-8 border-y border-gray-200 py-2 sm:py-4">
            {sections.map((section) => (
              <li
                key={section.name}
                className={`list-none text-sm sm:text-lg font-medium text-slate-600 hover:text-slate-800 sm:font-bold text-center transition-all rounded-md duration-500 pb-2 px-2 sm:px-8 md:px-12 lg:px-16 cursor-pointer hover:bg-gray-100 relative group ${
                  activeSection === section.name ? "text-green-500" : ""
                }`}
                onClick={() => handleSectionClick(section.name)}
              >
                <a className="block py-2">{section.name}</a>
                <div
                  className={`absolute left-0 bottom-0 w-full h-0.5 bg-green-400 ${
                    activeSection === section.name ? "scale-x-100" : "scale-x-0"
                  } transition-transform origin-center`}
                ></div>
              </li>
            ))}
          </nav>
        </div>
      </div>

      <div className="flex w-full sm:h-full px-4 lg:px-16 lg:pe-12">
        {/* Sidebar */}
        <div
          className="sidebardiv lg:w-1/6 bg-white py-2 mt-4 overflow-y-auto"
          style={{
            border: "1px solid rgb(238, 238, 238)",
            maxHeight: "400px", // Adjust as needed
            scrollbarWidth: "none", // Firefox
          }}
        >
          <ul className="space-y-4">
            {activeCategories.map((category) => (
              <li
                key={category.name}
                className={`sidebar-item p-3 text-sm rounded cursor-pointer font-medium transition-all ${
                  activeCategory === category.name
                    ? "bg-green-100 border-r-4 lg:border-l-4 lg:border-r-0 border-green-500"
                    : "hover:bg-green-100"
                }`}
                onClick={() => handleCategoryClick(category.name)}
              >
                <div className="flex items-center gap-3 flex-wrap">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-10 h-10 rounded-md"
                  />
                  <p className="lg:text-lg text-sm font-semibold md:text-base">
                    {category.name}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content */}
        {subItems.length == 0 && (
          <div
            // className="lg:w-5/6 p-1"
            className="lg:w-5/6 p-1 bg-white overflow-y-auto"
            style={{
              border: "1px solid rgb(238, 238, 238)",
              maxHeight: "500px", // Adjust as needed
              scrollbarWidth: "none", // Firefox
            }}
          >
            <div
              className="md:text-lg text-sm font-bold text-gray-700 ml-6 mt-4"
              style={{ borderBottom: "2px solid rgb(244, 246, 251)" }}
            >
              {activeItems.length > 0 && activeCategory}
            </div>
            <div
              className={`${
                activeItems.length > 0
              }grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6`}
              style={{
                background: "rgb(244, 246, 251)",
                padding: "8px",
              }}
            >
              <div className="min-h-screen bg-gray-100">
                {activeItems.length > 0 ? (
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                    {activeItems.map((item) => (
                      <div
                        key={item.name}
                        className="w-34 h-52 sm:h-full border rounded-lg p-4 flex flex-col justify-between bg-white shadow hover:shadow-lg transition-all duration-300 cursor-pointer"
                      >
                        {/* Image Section */}
                        <div
                          className="w-full bg-gray-200 rounded-lg mb-4 relative"
                          style={{ height: "120px" }}
                        >
                          {isLoading && (
                            <div className="absolute inset-0 bg-gray-300 animate-pulse rounded-lg"></div>
                          )}
                          <img
                            src={item.image}
                            alt={item.name}
                            onLoad={handleImageLoad}
                            className={`w-full h-full object-cover rounded-lg scale-95 transition-all duration-300 ${
                              isLoading ? "hidden" : "hover:scale-100"
                            }`}
                          />
                        </div>
                        {/* Item Name */}
                        <h3 className="lg:text-lg text-sm font-semibold text-base text-center mb-2">
                          {item.name}
                        </h3>
                        {/* Button Section */}
                        <div className="flex items-center justify-center">
                          <button
                            onClick={() => togg(item)}
                            className="bg-green-600 text-white lg:text-sm md:text-base px-2 py-1 sm:px-3 sm:py-2 rounded hover:bg-green-700 transition"
                          >
                            VIEW
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex items-center justify-center w-full bg-light-black text-black">
                    <div className="text-center">
                      <h1 className="text-5xl font-bold mb-8 animate-pulse">
                        Coming Soon
                      </h1>
                      <p className="text-lg max-w-md mx-auto">
                        We're working hard to bring something amazing. Stay
                        tuned for updates!
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        {subItems.subItems?.length > 0 && (
          <div className="lg:w-5/6 p-4">
            <h2
              className="text-lg font-bold text-gray-700 mb-4 pb-3"
              style={{ borderBottom: "2px solid rgb(244, 246, 251)" }}
            >
              {activeItems?.length > 0 && activeCategory}
            </h2>
            <div
              className={`grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-6`}
              style={{
                background: "rgb(244, 246, 251)",
                padding: "8px",
              }}
            >
              {subItems.subItems.map((item) => (
                <div
                  key={item.name || item.id}
                  className="border rounded-lg p-4 flex flex-col justify-between bg-white shadow hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  {/* Image Section */}
                  <div
                    className="w-full bg-gray-200 rounded-lg mb-4 relative"
                    style={{ height: "120px" }}
                  >
                    {isLoading && (
                      <div className="absolute inset-0 bg-gray-300 animate-pulse rounded-lg"></div>
                    )}
                    <img
                      src={item.image}
                      alt={item.name}
                      onLoad={handleImageLoad}
                      className={`w-full h-full object-cover rounded-lg scale-95 transition-all duration-300 ${
                        isLoading ? "hidden" : "hover:scale-100"
                      }`}
                    />
                  </div>
                  {/* Item Name */}
                  <h3 className="lg:text-lg font-semibold text-base text-center mb-2">
                    {item.name}
                  </h3>
                  {/* Button Section */}
                  <div className="flex items-center justify-center">
                    <button className="bg-green-600 text-white lg:text-sm px-4 py-2 rounded hover:bg-green-700 transition">
                      VIEW
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default CategoryScreen;
