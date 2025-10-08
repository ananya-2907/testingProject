import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaShieldAlt, FaBug, FaLeaf, FaQuoteLeft, FaWhatsapp} from "react-icons/fa";
import cockroach from "../Images/cockroach.png";
import termite from "../Images/termite.png";
// import { FaQuoteLeft } from "react-icons/fa";
import spray from "../Images/spray.jpg";
import bg3 from "../Images/bg3.png";
import mosquito from "../Images/mosquito.png";
import tech3 from "../Images/Tech3.jpeg";
import tech4 from "../Images/Tech4.jpeg";
import tech5 from "../Images/Tech5.jpeg";
import tech6 from "../Images/Tech6.jpeg";
import tech7 from "../Images/Tech7.jpeg";
import b1 from "../Images/b1.jpg";
import Allservice from "../Services/Allservices";
const images = [

  termite,
  spray,
  bg3
];
const technicians =[
  
  tech5,
  tech6,
   tech3,
  tech4,
  tech7
]


export default function Homepage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [technicianIndex, setTechnicianIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
  const techInterval = setInterval(() => {
    setTechnicianIndex((prevIndex) => (prevIndex + 1) % technicians.length);
  }, 2500); // 2 seconds

  return () => clearInterval(techInterval);
}, []);
  return (
    <div className="bg-green-800">

       <section className="relative h-[720px] overflow-hidden flex items-center">
      {/* Background Images */}
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt="Slide"
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity  duration-3000 ${
            index === currentIndex ? "opacity-55 z-10" : "opacity-0 z-0"
          }`}
        />
      ))}

      {/* Overlay Content */}
      <div className="absolute z-20 w-full text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-bold">Safe & Effective <span className="text-[#e8c34e]">Pest Control</span></h1>
        <p className="text-lg mt-4">Protect your home & business with our expert at <strong>HS PATEL BROS PEST SERVICES PVT LTD</strong></p>
        <Link
          to="/Allservices"
          className="mt-6 inline-block bg-[#229c4f] text-white px-6 py-3 rounded-md font-bold hover:bg-green-800"
        >
          Get a Free Inspection
        </Link>
      </div>
    </section>
    
<section 
   className="py-20 text-center bg-cover bg-center bg-green-100"
      
>
    <Allservice />
    </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-800 mb-5 sm:mb-0">Why Choose Us?</h2>
        <div className="mt-16 flex flex-wrap cursor-pointer justify-center gap-16 ">
          <div className="p-12 w-72  bg-gray-100 rounded-lg shadow-[0_4px_20px_rgba(34,197,94,0.5)] transform transition-transform duration-300 hover:scale-105">
            <FaShieldAlt className="text-5xl text-blue-500 mx-auto" />
            <h3 className="font-bold mt-3">Certified & Safe</h3>
            <p className="text-gray-500">We use eco-friendly and approved pest control techniques.</p>
          </div>
          <div className="p-12 w-72  bg-gray-100 shadow-[0_4px_20px_rgba(34,197,94,0.5)] rounded-lg transform transition-transform duration-300 hover:scale-105">
            <FaBug className="text-5xl text-red-500 mx-auto" />
            <h3 className="font-bold mt-3">Expert Solutions</h3>
            <p className="text-gray-500">Trained professionals to eliminate all types of pests.</p>
          </div>
          <div className="p-12 w-72  bg-gray-100 shadow-[0_4px_20px_rgba(34,197,94,0.5)] rounded-lg transform transition-transform duration-300 hover:scale-105">
            <FaLeaf className="text-5xl text-green-500 mx-auto" />
            <h3 className="font-bold mt-3">Eco-Friendly</h3>
            <p className="text-gray-500">We prioritize the environment with non-toxic treatments.</p>
          </div>
        </div>
      </section>

      {/* rate section */}
      <section
        className="relative py-24 bg-cover bg-center"
      
      style={{
            backgroundImage: `url(${b1})`,
          }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>
      
        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
          {/* Item 1 */}
          <div>
            <h3 className="text-4xl font-extrabold text-[#e8c34e]">5+</h3>
            <p className="mt-2 text-lg">Years of Experience</p>
          </div>
      
          {/* Item 2 */}
          <div>
            <h3 className="text-4xl font-extrabold text-[#e8c34e]">100+</h3>
            <p className="mt-2 text-lg">Happy Customer</p>
          </div>
      
          {/* Item 3 */}
          <div>
            <h3 className="text-4xl font-extrabold text-[#e8c34e]">20+</h3>
            <p className="mt-2 text-lg">Projects Complete</p>
          </div>
      
          {/* Item 4 */}
          <div>
            <h3 className="text-4xl font-extrabold text-[#e8c34e]">15+</h3>
            <p className="mt-2 text-lg">Cities</p>
          </div>
        </div>
      </section>
      
      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-800 sm:mb-0 mb-5">Our Services</h2>
          <p className="text-gray-500 mt-2 text-lg mb-10">We offer a variety of pest control services to keep your home safe.</p>
        </div>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 container mx-auto px-6">
          <div className="bg-white shadow-md rounded-lg border-b-4 border-green-700 overflow-hidden">
  <img 
    src={cockroach} 
    alt="Cockroach Control" 
    className="h-36 md:h-44 lg:h-52 w-full object-cover" 
  />
  <div className="p-5">
    <h3 className="font-bold">Cockroach Control</h3>
    <p className="text-gray-500">Eliminate cockroaches with our advanced solutions.</p>
    <Link to="/services/cockroach-control" className="text-blue-500 font-bold">
      Learn More
    </Link>
  </div>
</div>

      <div className="bg-white shadow-md rounded-lg border-b-4 border-green-700 overflow-hidden">
  <img 
    src={termite} 
    alt="Termite Control" 
    className="h-36 md:h-44 lg:h-52 w-full object-cover" 
  />
  <div className="p-5">
    <h3 className="font-bold">Termite Treatment</h3>
    <p className="text-gray-500">Protect your wooden structures from termites.</p>
    <Link 
      to="/services/termite-control" 
      className="text-blue-500 font-bold"
    >
      Learn More
    </Link>
  </div>
</div>

        <div className="bg-white shadow-md rounded-lg border-b-4 border-green-700 overflow-hidden">
  <img 
    src={mosquito} 
    alt="Mosquito Control" 
    className="h-36 md:h-44 lg:h-52 w-full object-cover" 
  />
  <div className="p-5">
    <h3 className="font-bold">Mosquito Control</h3>
    <p className="text-gray-500">Prevent mosquito-borne diseases with our service.</p>
    <Link 
      to="/services/mosquito-control" 
      className="text-blue-500 font-bold"
    >
      Learn More
    </Link>
  </div>
</div>

        </div>
      </section>


{/* Technicians + Blogs Side-by-Side Section */}
<section className="py-16 bg-green-100">
  <div className="container mx-auto px-6 flex flex-col md:flex-row gap-10">
    
    {/* Technicians */}
    <div className="md:w-1/2 text-center md:text-left">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-800 mb-4 sm:mb-0">Our Expert Technicians</h2>
      <p className="mt-4 text-gray-600 text-base">
        We proudly employ over <span className="text-green-800 font-bold">10+ years experienced technicians</span> who are certified, background-verified,
        and equipped with the latest pest control technology.
      </p>
      <div className="mt-6 flex justify-center md:justify-start">
        <img 
          src={technicians[technicianIndex]}    
          alt="Expert Pest Control Technician" 
          className="w-[550px] h-[350px] rounded-xl shadow-lg object-cover object-center" 
        />
      </div>
    </div>

    {/* Blogs */}
    <div className="md:w-1/2">
      <h2 className="text-4xl font-bold text-green-900 text-center md:text-left">Latest Blogs</h2>
      <div className="mt-6 space-y-6 ">
        {[
          { title: "Top 5 Signs of a Termite Infestation", summary: "Don’t ignore these common indicators in your home.", link: "/blog/termite-signs" },
          { title: "How to Prevent Cockroach Breeding", summary: "Easy home remedies and professional tips.", link: "/blog/cockroach-prevention" },
          { title: "Is Mosquito Fogging Safe?", summary: "Understand safety and effectiveness of fogging treatments.", link: "/blog/mosquito-fogging" },
        ].map((blog, idx) => (
          <div key={idx} className="bg-blue-50 hover:shadow-[0_4px_20px_rgba(34,197,94,0.4)] p-4 rounded-lg shadow-sm transition-shadow">
            <h3 className="font-bold text-lg text-blue-900">{blog.title}</h3>
            <p className="text-gray-700 mt-2">{blog.summary}</p>
            <Link to={blog.link} className="text-blue-600 font-semibold mt-2 inline-block">Read More →</Link>
          </div>
        ))}
      </div>
    </div>

  </div>
</section>

  <section className="py-16 bg-gray-50 text-center">
      {/* Section Heading */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-800 mb-4 sm:mb-0">Testimonials</h2>
      <h3 className="text-lg text-gray-500 mt-2">
        What our clients say about us.
      </h3>

      {/* Testimonial Cards */}
      <div className="mt-12 grid gap-8 md:grid-cols-3 max-w-6xl mx-auto px-6">
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-xl shadow-[0_4px_20px_rgba(34,197,94,0.8)] transition duration-300">
          <FaQuoteLeft className="text-yellow-400 text-2xl mx-auto" />
          <p className="mt-4 text-gray-700 italic">
           “Professional and trustworthy pest control experts. They worked neatly, on time, and gave me complete peace of mind.”
          </p>
          <div className="mt-6 flex flex-col items-center">
            <img
              src="https://assets.prod-wp.path2usa.com/wp-content/uploads/2022/06/02203218/p2u-article-hero-photo-requirements-for-indian-passport-renewal.jpg"
              alt="Allan Collins"
              className="w-12 h-12 rounded-full border-2 border-yellow-400"
            />
            <h4 className="mt-2 font-semibold text-gray-800">Priya Sharma</h4>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-xl shadow-[0_4px_20px_rgba(34,197,94,0.8)] transition duration-300">
          <FaQuoteLeft className="text-yellow-400 text-2xl mx-auto" />
          <p className="mt-4 text-gray-700 italic">
           “Excellent service! The team explained every step, used safe chemicals, and delivered results that really last.”
          </p>
          <div className="mt-6 flex flex-col items-center">
            <img
              src="https://images.unsplash.com/flagged/photo-1571367034861-e6729ad9c2d5?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Clay Worthington"
              className="w-12 h-12 rounded-full border-2 border-yellow-400"
            />
            <h4 className="mt-2 font-semibold text-gray-800">Rajeev Chauhan</h4>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-xl shadow-[0_4px_20px_rgba(34,197,94,0.8)] transition duration-300">
          <FaQuoteLeft className="text-yellow-400 text-2xl mx-auto" />
          <p className="mt-4 text-gray-700 italic">
           “HS PatelBros Pest Services responded quickly and handled the problem with great care. My wooden furniture is safe again, and I no longer worry about pests.”
          </p>
          <div className="mt-6 flex flex-col items-center">
            <img
              src="https://i.pinimg.com/originals/4c/cd/08/4ccd086a8b7970c7a1ab4961e9bfcafc.jpg"
              alt="Tanya Grant"
              className="w-12 h-12 rounded-full border-2 border-yellow-400"
            />
            <h4 className="mt-2 font-semibold text-gray-800">Surya Singh</h4>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12">
        <h4 className="text-lg font-semibold text-gray-800">
          No two homes are alike!
        </h4>
        <p className="text-gray-600 max-w-xl mx-auto mt-2">
          Our elite network, combined with your personal needs, allows us to
          create a home plan specifically tailored to you.
        </p>
         <Link to="/contactus" className="mt-4 inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
          Contact Us
        </Link>
        <p className="mt-2">Need help? Contact us today!</p>
        <p className="mt-2 font-bold">📞 8707727951</p>
        <p className="mt-2">📧 patelbrospest@gmail.com</p>
    
     
      </div>

    </section>

       {/* ✅ WhatsApp Floating Button */}
      <a
        href="https://wa.me/918707727951" 
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-10 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300 z-50"
      >
        <FaWhatsapp size={28} />
     
      </a>
     
    </div>
  );
}
