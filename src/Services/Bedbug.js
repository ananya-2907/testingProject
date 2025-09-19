import React, { useState, useRef } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Homepage";
import emailjs from "@emailjs/browser";
import bug from "../Images/bug.jpg";
import m1 from "../Images/m1.jpg";
import m2 from "../Images/m2.jpg";
import m3 from "../Images/m3.jpg";
import m4 from "../Images/m4.jpg";
// import b1 from "../Images/b1.jpg";
import { Phone } from "lucide-react";

export default function BedBugControlPage() {
  const form = useRef();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    pincode: "",
    size: "",
    package: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_2eb9m2p", "template_omojni5", form.current, {
        publicKey: "XWwwDcyWL7cmEF-TA",
      })
      .then(
        () => {
          alert(
            `Thank you, ${formData.name}, your request for Bed Bug ${formData.package} service has been submitted.`
          );
          setFormData({
            name: "",
            phone: "",
            pincode: "",
            size: "",
            package: "",
          });
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert("Something went wrong. Please try again later.");
        }
      );
  };

  return (
    <>
       <Navbar /> 
   <div className="relative flex flex-col lg:flex-row p-6 py-16 lg:py-24 max-w-7xl mx-auto">

  {/* Background image with opacity */}
  <div
    className="absolute py-16 inset-0 bg-cover bg-center"
    style={{
      backgroundImage: `url(${bug})`,
      opacity: 0.1,
    }}
  ></div>

  {/* Content wrapper to keep text/form above background */}
  <div className="relative z-10 flex flex-col mb-0 pb-0 lg:flex-row w-full">
    {/* Left Content */}
    <div className="lg:w-2/3 lg:pr-8">
      <header className="mb-6">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-4 mt-5 sm:mb-0 text-gray-700">Bed Bug Pest Control</h1>
      
  <div class="w-1/6 border-b-4 mt-6 mb-5 border-orange-700"></div>
        <p className="mt-2 text-gray-600">
          Don’t let bed bugs rob your sleep. Choose Patelbros for safe, effective, and professional bed bug elimination.
        </p>
      </header>

      <section className="mb-6">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-0 text-black">Why Book Bed Bug Control Services?</h2>
      <ul className="ml-6 mt-3 text-gray-700 space-y-1">
  <li className="relative pl-5 before:content-['>'] before:absolute before:left-0 before:text-orange-600 before:font-bold">
    Minimizes chances of contracting diseases
  </li>
  <li className="relative pl-5 before:content-['>'] before:absolute before:left-0 before:text-orange-600 before:font-bold">
    Ensures professional solutions
  </li>
  <li className="relative pl-5 before:content-['>'] before:absolute before:left-0 before:text-orange-600 before:font-bold">
    Saves time and money
  </li>
  <li className="relative pl-5 before:content-['>'] before:absolute before:left-0 before:text-orange-600 before:font-bold">
    Prevents upholstery damage
  </li>
  <li className="relative pl-5 before:content-['>'] before:absolute before:left-0 before:text-orange-600 before:font-bold">
    Promotes healthier indoor environment
  </li>
  <li className="relative pl-5 before:content-['>'] before:absolute before:left-0 before:text-orange-600 before:font-bold">
    Improves sleep quality
  </li>
  <li className="relative pl-5 before:content-['>'] before:absolute before:left-0 before:text-orange-600 before:font-bold">
    Ensures peace of mind
  </li>
</ul>

      </section>

      <section className="mb-6">
        <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-0 text-black">When to Book?</h2>
        <ul className=" ml-6 mt-3 text-gray-700 space-y-1">
          <li className="relative pl-5 before:content-['>'] before:absolute before:left-0 before:text-orange-600 before:font-bold">Reddish or rusty spots on bedsheets</li>
          <li className="relative pl-5 before:content-['>'] before:absolute before:left-0 before:text-orange-600 before:font-bold">Eggs, eggshells, or pale yellow skins</li>
          <li className="relative pl-5 before:content-['>'] before:absolute before:left-0 before:text-orange-600 before:font-bold">Live bed bugs on bed or curtains</li>
          <li className="relative pl-5 before:content-['>'] before:absolute before:left-0 before:text-orange-600 before:font-bold">Fecal spots on mattresses</li>
        </ul>
      </section>

      <section className="mb-2">
        <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-0 text-black">Types of Services</h2>
        <div className="overflow-x-auto mt-4">
          <table className="min-w-full border text-sm text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2">Service</th>
                <th className="px-4 py-2">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2 font-medium">BBMS - Lite</td>
                <td className="px-4 py-2">
                  Detecting hideouts, mild odor spray, 2 visits (Day 1 & Day 16), 1 person per service
                </td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-medium">BBMS - Pro</td>
                <td className="px-4 py-2">
                  Detecting hideouts, mild odor spray, inspect effectiveness, 4 visits (Days 1, 16, 46, 76), 1 person per service
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-lg sm:text-xl lg:text-2xl font-bold sm:mb-0 text-black mb-4">How We Work</h2>
        <ol className="list-decimal ml-6 text-gray-700 mt-3 space-y-1">
          <li>Identification of infested areas</li>
          <li>Application of mild-odor spray</li>
          <li>Follow-up inspections to ensure elimination</li>
        </ol>
      </section>

      <section className="mb-6">
        <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-0 text-black">Terms and Conditions</h2>
        <p className="text-gray-700 mt-3">
          Treatment effectiveness begins within 24 hours. Customer must follow post-treatment precautions as advised.
        </p>
      </section>

      <footer className="pt-4 mt-8 border-t border-green-800">
        <p className="text-sm text-green-800 font-bold">
          Call us: 8707727951 | Email: patelbrospest@gmail.com
        </p>
      </footer>
    </div>

    {/* Booking Form */}
    <div className="lg:w-1/3 relative mb-0 top-10 h-fit bg-gray-50 p-6 rounded shadow-[0_4px_20px_rgba(34,197,94,0.6)]  mt-0 lg:mt-0 border">
      <h2 className="text-2xl font-semibold mb-4">Booking Form</h2>
      <form ref={form} onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          type="text"
          required
          onChange={handleChange}
          value={formData.name}
          placeholder="Your Name"
          className="border p-2 w-full"
        />
        <input
          name="phone"
          type="tel"
          required
          onChange={handleChange}
          value={formData.phone}
          placeholder="Mobile Number"
          className="border p-2 w-full"
        />
        <input
          name="pincode"
          type="text"
          required
          onChange={handleChange}
          value={formData.pincode}
          placeholder="Pin Code"
          className="border p-2 w-full"
        />
        <select
          name="size"
          required
          onChange={handleChange}
          value={formData.size}
          className="border p-2 w-full"
        >
          <option value="">Select Size</option>
          <option value="1BHK">1BHK</option>
          <option value="2BHK">2BHK</option>
          <option value="3BHK">3BHK</option>
          <option value="Villa">Villa</option>
        </select>
        <select
          name="package"
          required
          onChange={handleChange}
          value={formData.package}
          className="border p-2 w-full"
        >
          <option value="">Select Package</option>
          <option value="Lite">BBMS - Lite</option>
          <option value="Pro">BBMS - Pro</option>
        </select>

        {/* Hidden fields for EmailJS template compatibility */}
        <input type="hidden" name="service" value="Bed Bug Control" />
        <input type="hidden" name="price" value="" />
        <input type="hidden" name="termite_type" value="" />
        <input type="hidden" name="details" value="" />

        <button
          type="submit"
          className="bg-green-700 text-white px-4 py-2 rounded w-full"
        >
          Book Now
        </button>
        {/* T&C note */}
    <p className="text-sm text-gray-800 mt-2 text-center">
      *Terms & Conditions apply
    </p>
      </form>
    </div>

  </div>
</div>

{/* call us */}
<div className="bg-gradient-to-r from-green-700 via-green-900 to-green-900 py-4 sm:py-6">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-[#e8c34e] font-extrabold text-base sm:text-lg md:text-xl lg:text-2xl tracking-wide flex flex-col sm:flex-row items-center justify-center text-center">
      <span>FOR BED BUG TREATMENT CALL AT :</span>
      <span className="mt-2 sm:mt-0 sm:ml-3 flex items-center">
        8707727951
        <Phone className="w-5 h-5 sm:w-6 sm:h-6 ml-2 inline-block text-[#e8c34e]" />
      </span>
    </h2>
  </div>
</div>


{/* why us */}

   <div className="bg-white py-16 mt-0 mb-10">
  <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    {/* Section Heading */}
    <div className="mb-10">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-800">
        Why Choose <span className="text-green-800">PatelBros?</span>
      </h2>
      <p className="text-gray-600 mt-3 mb-5 max-w-2xl mx-auto">
        We provide safe, effective, and eco-friendly pest control solutions to
        keep your home and family protected.
      </p>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Card 1 */}
      <div className="bg-white p-6 rounded shadow-[0_4px_20px_rgba(34,197,94,0.4)]  border text-center hover:shadow-lg transition">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <img src={m1} alt="Eco Friendly" className="w-full h-full object-cover" />
          </div>
        </div>
        <h3 className="font-semibold text-lg mb-2">ECO FRIENDLY TECHNOLOGIES</h3>
        <p className="text-gray-600 text-sm">
          Eco-friendly technologies that protect your home and the environment.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white p-6 rounded shadow-[0_4px_20px_rgba(34,197,94,0.4)]  border text-center hover:shadow-lg transition">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <img src={m2} alt="Free Home Inspection" className="w-full h-full object-cover" />
          </div>
        </div>
        <h3 className="font-semibold text-lg mb-2">FREE HOME INSPECTION</h3>
        <p className="text-gray-600 text-sm">
          We offer free inspections to assess and provide the best solutions.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white p-6 rounded shadow-[0_4px_20px_rgba(34,197,94,0.4)]  border text-center hover:shadow-lg transition">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <img src={m3} alt="Licensed & Protected" className="w-full h-full object-cover" />
          </div>
        </div>
        <h3 className="font-semibold text-lg mb-2">LICENSED & PROTECTED</h3>
        <p className="text-gray-600 text-sm">
          Certified professionals to keep your home and family safe from pests.
        </p>
      </div>

      {/* Card 4 */}
      <div className="bg-white p-6 rounded shadow-[0_4px_20px_rgba(34,197,94,0.4)]  border text-center hover:shadow-lg transition">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <img src={m4} alt="Fast Pest Removal" className="w-full h-full object-cover" />
          </div>
        </div>
        <h3 className="font-semibold text-lg mb-2">FAST PEST REMOVAL</h3>
        <p className="text-gray-600 text-sm">
          Quick and safe pest removal services with proven methods.
        </p>
      </div>
    </div>
  </section>
</div>

      <Footer />
    </>
  );
}
