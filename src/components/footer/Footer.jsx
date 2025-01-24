import React from "react";

const Footer = () => {
  return (
    <footer className="bg-zinc-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">About Us</h3>
          <p className="text-sm">
            Travel Companion is your ultimate guide to exploring the world.
            Discover top destinations, plan your trips, and embark on
            unforgettable adventures.
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-100">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-100">
                Destinations
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-100">
                Travel Tips
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-100">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
          <ul className="space-y-2">
            <li>
              <span className="font-semibold">Email:</span>{" "}
              travelcompanion@example.com
            </li>
            <li>
              <span className="font-semibold">Phone:</span> +1 234 567 890
            </li>
            <li>
              <span className="font-semibold">Address:</span> 123 Wanderlust
              Lane, Adventure City, World
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 py-4 mt-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-sm">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Travel Companion. All Rights
            Reserved.
          </p>
          <div className="space-x-4">
            <a href="#" className="hover:text-gray-100">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-100">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
