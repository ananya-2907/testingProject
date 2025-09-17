import { useState, useRef } from "react";
import Navbar from "../Components/Homepage";
import Footer from "../Components/Footer";
import emailjs from "@emailjs/browser";
import bird from "../Images/bird.jpg";
import { Phone } from "lucide-react";
import m1 from "../Images/m1.jpg";
import m2 from "../Images/m2.jpg";
import m3 from "../Images/m3.jpg";
import m4 from "../Images/m4.jpg";

export default function BirdControlPage() {
  const form = useRef();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    pincode: "",
    service: "",
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
            `Thank you, ${formData.name}, your request for ${formData.service} has been submitted.`
          );
          setFormData({
            name: "",
            phone: "",
            pincode: "",
            service: "",
          });
        },
        (error) => {
          console.error("EmailJS error:", error);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <>
      <Navbar />
      <div className="relative flex flex-col lg:flex-row p-6 py-16 lg:py-24 max-w-7xl mx-auto">
        {/* Background layer with opacity */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${bird})`,
            opacity: 0.1, 
          }}
        ></div>

        {/* Content layer */}
        <div className="relative z-10 flex flex-col lg:flex-row w-full">
          {/* Left Side Content */}
          <div className="lg:w-2/3 lg:pr-8">
            <header className="mb-6">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-4 sm:mb-0 text-green-800">
                Bird Control & Netting Services
              </h1>
              <div class="w-1/6 border-b-4 mt-6 mb-5 border-orange-700"></div>
              <p className="text-gray-700 mt-4">
                Birds, while beautiful, can become a nuisance when they invade
                homes and commercial spaces. Their droppings damage surfaces and
                carry diseases, and nests can clog drains or vents.
              </p>
              <p className="text-gray-700 mt-2">
                Our bird netting and spike solutions offer humane and
                long-lasting control.
              </p>
            </header>

            <section className="mb-6">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-0 text-black">
                Why Book Bird Control?
              </h2>
              <ul className="list-disc ml-6 mt-3 text-gray-700 space-y-1">
                <li className="relative pl-5 before:content-['>'] before:absolute before:left-0 before:text-orange-600 before:font-bold">Prevents health hazards due to droppings</li>
                <li className="relative pl-5 before:content-['>'] before:absolute before:left-0 before:text-orange-600 before:font-bold">Protects balconies, windows, and solar panels</li>
                <li className="relative pl-5 before:content-['>'] before:absolute before:left-0 before:text-orange-600 before:font-bold">Non-harmful to birds – 100% humane methods</li>
                <li className="relative pl-5 before:content-['>'] before:absolute before:left-0 before:text-orange-600 before:font-bold">Custom fit nets & installations</li>
              </ul>
            </section>

            <section className="mb-6">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-0 text-black">
                Service Options
              </h2>
              <ul className=" ml-6 mt-3 text-gray-700 space-y-1">
                <li className="relative pl-5 before:content-['>'] before:absolute before:left-0 before:text-orange-600 before:font-bold">Bird Netting - Residential</li>
                <li className="relative pl-5 before:content-['>'] before:absolute before:left-0 before:text-orange-600 before:font-bold">Bird Spikes - Commercial</li>
              </ul>
            </section>

            <section className="mb-6">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-0 text-black">
                Service Details
              </h2>
              <table className="w-full border mt-4 text-sm text-left">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-2 border">Type</th>
                    <th className="px-4 py-2 border">Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border">Netting</td>
                    <td className="px-4 py-2 border">
                      UV-stabilized nets installed across balconies/windows –
                      transparent or colored
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">Spikes</td>
                    <td className="px-4 py-2 border">
                      Installed on ledges and AC units to prevent nesting
                      without harm
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>

            <section className="mb-6">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-0 text-black">
                Booking Process
              </h2>
              <ol className="ml-6 mt-3 text-gray-700 space-y-1">
                <li className="relative pl-5 before:content-['>'] before:absolute before:left-0 before:text-orange-600 before:font-bold">Fill in your number for a callback</li>
                <li className="relative pl-5 before:content-['>'] before:absolute before:left-0 before:text-orange-600 before:font-bold">Site inspection by technician</li>
                <li className="relative pl-5 before:content-['>'] before:absolute before:left-0 before:text-orange-600 before:font-bold">Custom quote and quick installation</li>
                <li className="relative pl-5 before:content-['>'] before:absolute before:left-0 before:text-orange-600 before:font-bold">Peaceful, bird-free surroundings</li>
              </ol>
            </section>

            <footer className="pt-4 mt-8 border-t border-green-800">
              <p className="text-sm text-green-800 font-bold">
                Call us: 8707727951 | Email: patelbrospest@gmail.com
              </p>
            </footer>
          </div>

          {/* Booking Form (Unchanged) */}
          <div className="lg:w-1/3 relative top-20 h-fit bg-gray-50 p-6 rounded shadow-[0_4px_20px_rgba(34,197,94,0.4)] border">
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
                name="service"
                required
                onChange={handleChange}
                value={formData.service}
                className="border p-2 w-full"
              >
                <option value="">Select Service</option>
                <option value="Bird Netting - Residential">
                  Bird Netting - Residential
                </option>
                <option value="Bird Spikes - Commercial">
                  Bird Spikes - Commercial
                </option>
              </select>

              {/* Hidden fields for EmailJS template */}
              <input type="hidden" name="size" value="" />
              <input type="hidden" name="package" value="" />
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
      <span>FOR BIRDS TREATMENT CALL AT :</span>
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
