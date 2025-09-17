import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useSpring, useScroll } from "framer-motion";

const logo = require("../Images/logo.jpg");

export default function Navbar() {
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [pestControlDropdown, setPestControlDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

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
  <div className="container mx-auto flex justify-between items-center relative">
    {/* Logo */}
    <div className="absolute left-2 top-0 lg:static">
      <img
        src={logo}
        alt="Company Logo"
        className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 object-cover rounded-full"
      />
    </div>

    {/* Hamburger Icon */}
    <div className="lg:hidden ml-auto">
      <button
        onClick={toggleMobileMenu}
        className="text-gray-800 focus:outline-none"
      >
        {isMobileMenuOpen ? (
          <span className="text-2xl">&#10005;</span> // X icon
        ) : (
          <span className="text-2xl">&#9776;</span> // Hamburger icon
        )}
      </button>
    </div>

    {/* Nav Links */}
    <ul
      className={`flex-col lg:flex lg:flex-row lg:space-x-6 items-center absolute lg:static bg-white w-full lg:w-auto left-0 top-full lg:top-auto transition-all duration-300 ${
        isMobileMenuOpen ? "flex mt-16" : "hidden"
      } lg:flex`}
    >
      <li className="p-2 lg:p-0">
        <Link to="/" className="hover:text-green-800 font-bold">
          Home
        </Link>
      </li>
      <li className="p-2 lg:p-0">
        <Link to="/about_us" className="hover:text-green-800 font-bold">
          About Us
        </Link>
      </li>
      <li className="p-2 lg:p-0">
        <Link to="/contactus" className="hover:text-green-800 font-bold">
          Contact Us
        </Link>
      </li>

          {/* Services Dropdown */}
          <li
            className="relative dropdown p-2 lg:p-0"
            onClick={(e) => {
              e.stopPropagation();
              setServicesDropdown(!servicesDropdown);
              setPestControlDropdown(false);
            }}
          >
            <span className="cursor-pointer overflow-hidden hover:text-green-800 font-bold">Services</span>

            {/* Main Dropdown */}
            {servicesDropdown && (
              <div className="absolute left-0  mt-2 bg-gray-100 text-gray-800 shadow-lg rounded-md w-44 font-bold z-50 lg:mt-2 lg:left-0">
                <ul>
                 {/* Pest Control Submenu */}
<li
  className="p-2 hover:bg-green-800 hover:text-gray-100  cursor-pointer relative"
  onClick={(e) => {
    e.stopPropagation();
    setPestControlDropdown(!pestControlDropdown);
  }}
> Pest Control
  {pestControlDropdown && (
    <div
      className={`
        absolute z-50 bg-green-800 overflow-hidden text-gray-100 shadow-lg  w-60
        lg:top-0 lg:left-full   /* Desktop → open to right */
        top-full left-2 transform -translate-x-1/2 mt-10  /* Mobile → open centered below */
        lg:transform-none lg:mt-0
      `}
    >
      <ul>
        <li className="p-2 hover:bg-green-900 cursor-pointer">
          <Link to="/Services/Bedbug">Bedbug</Link>
        </li>
        <li className="p-2 hover:bg-green-900 cursor-pointer">
          <Link to="/Services/Mosquito">Mosquito</Link>
        </li>
        <li className="p-2 hover:bg-green-900 cursor-pointer">
          <Link to="/services/termite">Termite Repellent</Link>
        </li>
        <li className="p-2 hover:bg-green-900 cursor-pointer">
          <Link to="/services/Rat">Rat Control</Link>
        </li>
         <li className="p-2 hover:bg-green-900 cursor-pointer">
          <Link to="/services/Flying">Flying Insects Control</Link>
        </li>
        <li className="p-2 hover:bg-green-900 cursor-pointer">
          <Link to="/services/Birds">Birds Netting</Link>
        </li>
        <li className="p-2 hover:bg-green-900 cursor-pointer">
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
        </ul>

         {/* Sign In Button */}
    <Link
      to="/Allservices"
      className="bg-[#229c4f] text-white px-6 py-2 rounded-md hover:bg-green-800 transition font-semibold hidden lg:inline-block"
    >
      Sign In
    </Link>
  </div>

 {/* Mobile Sign In Button */}
{isMobileMenuOpen && (
  <div className="lg:hidden px-4 pb-4">
    <Link
      to="/Allservices"
      className="bg-[#229c4f] text-white px-6 py-2 rounded-md hover:bg-green-800 transition font-semibold w-fit mx-auto block text-center"
    >
      Sign In
    </Link>
  </div>
)}


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
