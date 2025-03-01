export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      {/* About Section */}
      <div className="flex flex-col gap-4">
        <div>
          <h2 className="text-lg font-semibold">About Blink Beats</h2>
          <p className="text-sm mt-2 text-gray-400">
            Where creativity meets strategy to build exceptional brand
            experiences. At Blink Beats, we are committed to expanding your
            brand with high-quality service that combines creativity with value
            pricing. Our passion stems from our admiration for the advertising
            world.
          </p>
        </div>
        <div className="flex flex-wrap gap-10 justify-between">
          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-semibold">Quick Links</h2>
            <ul className="mt-2 space-y-1 text-gray-400">
              {[
                "Home",
                "Company",
                "Opportunities",
                "Our Services",
                "Testimonials",
                "Contact Us",
                "Refund Policy",
                "Payment Gateway",
              ].map((link) => (
                <li key={link} className="hover:text-white cursor-pointer">
                  {link}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold">Services</h2>
            <ul className="mt-2 space-y-1 text-gray-400">
              {[
                "Media",
                "Marketing",
                "Advertising",
                "Events",
                "Entertainment",
              ].map((service) => (
                <li key={service} className="hover:text-white cursor-pointer">
                  {service}
                </li>
              ))}
            </ul>
          </div>
          {/* Partners */}
          <div>
            <h2 className="text-lg font-semibold">Partners</h2>
            <ul className="mt-2 space-y-1 text-gray-400">
              {["Store", "Studio", "Delivery", "ABP"].map((partner) => (
                <li key={partner} className="hover:text-white cursor-pointer">
                  {partner}
                </li>
              ))}
            </ul>
          </div>
          {/* Newsletter & Contact */}
          <div className="w-72">
            <h2 className="text-lg font-semibold">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-sm mt-2 text-gray-400">
              Get the latest updates, offers, and discounts delivered directly
              to your inbox.
            </p>
            <div className="mt-4 flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 flex-1 text-black rounded-l-md"
              />
              <button className="bg-green-500 px-4 py-2 rounded-r-md hover:bg-green-600">
                Subscribe
              </button>
            </div>
          </div>
          <div className="w-72">
            <h2 className="text-lg font-semibold">GET IN TOUCH</h2>
            <p className="mt-2 text-gray-400">CALL: +91 8287831221</p>
            <p className="text-gray-400">Corporate Address:</p>
            <p className="text-gray-400">
              Unit 1101 Prabhavee Tech Park, Baner Road, Pune, Maharashtra,
              411045 INDIA
            </p>
            <a
              href="https://maps.google.com"
              className="text-red-500 hover:underline"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
        <div className="bg-gray-800 p-[0.5px]">

        </div>
        <div className="flex flex-wrap justify-around  gap-4 sm:text-center text-gray-500">
          <p className="sm:text-center">© Copyright 2025 by Blink Beats.</p>
          <p className="text-center">
            Passionately Created And Designed By{" "}
            <a className="hover:text-white" href="https://sharvinmanagement.com/">
              Sharvin Management Pvt. Ltd.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
