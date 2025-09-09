import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useSpring, useScroll } from "framer-motion";

const logo = require("../Images/logo.jpg");

export default function Navbar() {
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [pestControlDropdown, setPestControlDropdown] = useState(false);

 const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown")) {
        setServicesDropdown(false);
        setPestControlDropdown(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <nav className="bg-white p-2 shadow-md z-50 fixed top-0 left-0 w-full">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        {/* <h1 className="text-xl font-bold text-[#006c67]">Company Name</h1> */}
        <img src={logo} alt="Company Logo" className="h-12 w-12 object-cover rounded-full" />
        {/* Nav Links */}
        <ul className="flex space-x-6 items-center relative">
          <li>
            <Link to="/" className="hover:text-green-800 font-bold">Home</Link>
          </li>
          <li>
            <Link to="/about_us" className="hover:text-green-800 font-bold">About Us</Link>
          </li>
          <li>
            <Link to="/contactus" className="hover:text-green-800 font-bold">Contact Us</Link>
          </li>

          {/* Services Dropdown */}
          <li
            className="relative dropdown"
            onClick={(e) => {
              e.stopPropagation();
              setServicesDropdown(!servicesDropdown);
              setPestControlDropdown(false); // Reset sub-dropdown
            }}
          >
            <span className="cursor-pointer hover:text-green-800 font-bold">Services</span>

            {/* Main Dropdown */}
            {servicesDropdown && (
              <div className="absolute left-0 mt-2  bg-gray-100 text-gray-800  shadow-lg rounded-md w-44 font-bold z-50">
                <ul>
                  {/* Pest Control Submenu */}
                  <li
                    className="p-2 hover:bg-green-800 hover:text-gray-100 cursor-pointer relative"
                    onClick={(e) => {
                      e.stopPropagation();
                      setPestControlDropdown(!pestControlDropdown);
                    }}
                  >
                    Pest Control
                    {pestControlDropdown && (
                      <div className="absolute top-0 left-full bg-green-800 text-gray-100 shadow-lg rounded-md w-60 z-50">
                        <ul>
                          <li className="p-2 hover:bg-green-900 cursor-pointer">
                            <Link to="/Services/Bedbug">Bedbug</Link>
                          </li>
                          <li className="p-2 hover:bg-green-900  cursor-pointer">
                            <Link to="/Services/Mosquito">Mosquito</Link>
                          </li>
                          <li className="p-2 hover:bg-green-900  cursor-pointer">
                            <Link to="/services/termite">Termite Repellent</Link>
                          </li>
                          <li className="p-2 hover:bg-green-900  cursor-pointer">
                            <Link to="/services/Rat">Rat Control</Link>
                          </li>
                          <li className="p-2 hover:bg-green-900  cursor-pointer">
                            <Link to="/services/Birds">Birds Netting</Link>
                          </li>
                          <li className="p-2 hover:bg-green-900  cursor-pointer">
                            <Link to="/Services/Woodwork">Wood Borer Control</Link>
                          </li>
                        </ul>
                      </div>
                    )}
                  </li>

                  {/* Inspection */}
                  <li className="p-2 hover:bg-green-800 hover:text-gray-100 cursor-pointer">
                    <Link to="/Allservices">Inspection</Link>
                  </li>
                </ul>
              </div>
            )}
          </li>

          {/* <li>
            <Link to="/offer" className="hover:text-[#006c67] font-bold">Offer</Link>
          </li> */}
        </ul>

        {/* Sign In Button */}
        <Link to="/Allservices" className="bg-[#229c4f] text-white px-6 py-2 rounded-md hover:bg-green-800 transition font-semibold">
          Sign In
        </Link>
      </div>
            {/* Scroll Indicator */}
        <motion.div
          id="scroll-indicator"
          style={{
            scaleX,
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: 4,
            originX: 0,
            backgroundColor: "green",
          }}
        />
    </nav>
    
  );
}
