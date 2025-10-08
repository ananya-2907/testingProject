import { Link } from "react-router-dom";
// import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
const logo = require("../Images/logo2.png");
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Services Section */}
        <div>
          <h2 className="text-lg font-bold mb-3">Our Services</h2>
          <ul className="space-y-2 text-sm">
            <li><Link to="/Services/cockroach-control" className="hover:text-gray-400">Cockroach Control</Link></li>
            <li><Link to="/Services/termite" className="hover:text-gray-400">Termite Control</Link></li>
            <li><Link to="Services/Bedbug" className="hover:text-gray-400">Bedbug Control</Link></li>
            <li><Link to="/Services/Mosquito" className="hover:text-gray-400">Mosquito Control</Link></li>
            <li><Link to="/Services/Woodwork" className="hover:text-gray-400">Wood Borer</Link></li>
            <li><Link to="/Services/Rat" className="hover:text-gray-400">Rodent Control</Link></li>
            <li><Link to="/Services/Flying" className="hover:text-gray-400">Flying Insects Control</Link></li>
          </ul>
        </div>

        {/* Other Links Section */}
        <div>
          <h2 className="text-lg font-bold mb-3">Other Links</h2>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about_us" className="hover:text-gray-400">About Us</Link></li>
            <li><Link to="/contactus" className="hover:text-gray-400">Contact Us</Link></li>
            <li><Link to="/feedback" className="hover:text-gray-400">Feedback</Link></li>
            <li><Link to="/blog" className="hover:text-gray-400">Blog</Link></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-lg font-bold mb-3">Call Us</h2>
          <p className="mb-3 text-sm">📞 <a href="tel:8828333888" className="hover:text-gray-400">8707727951</a></p>

          <h2 className="text-lg font-bold mb-3">Mail</h2>
          <p className="mb-2 text-sm">📧 <a href="mailto:info@rentokilpci-hicare.com" className="hover:text-gray-400">patelbrospest@gmail.com</a></p>

          <h2 className="text-lg font-bold mb-3">Address</h2>
          <p className="mb-3 text-sm hover:text-gray-400">🏢 Suti mill power house gwalior road jhansi 284001</p>

        </div>

        {/* Google Map (square) */}
          {/* <div className="w-56 h-56 mt-4">
            <iframe
              title="Google Map"

            src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d6640.504456762477!2d78.5561356!3d25.484043!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDI5JzAyLjYiTiA3OMKwMzMnMjEuMiJF!5e1!3m2!1sen!2sin!4v1757414449704!5m2!1sen!2sin"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div> */}
          <div className="flex gap-1 sm:gap-2">
  <img
    src={logo}
    alt="Logo"
    className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 object-contain"
  />
  <p className="font-bold text-gray-100 whitespace-nowrap text-xs mt-1 sm:text-sm md:text-base lg:text-lg hover:text-gray-400">
    HS PATEL BROS PEST SERVICES PVT LTD
  </p>
</div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm mt-6">
        © {new Date().getFullYear()} HSPatelBrosPestServicesPvt.Ltd. All rights reserved.
      </div>
    </footer>
  );
}
