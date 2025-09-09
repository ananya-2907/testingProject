import React, { useState, useRef } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Homepage";
import emailjs from "@emailjs/browser";
import wood from "../Images/wood.jpg";

export default function WoodBorerPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    pincode: "",
    size: "",
    package: "",
  });
  const form = useRef();

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
            `Thank you, ${formData.name}, your request for Wood Borer ${formData.package} service has been submitted.`
          );
        },
        (error) => {
          alert("Something went wrong. Please try again.");
          console.error(error);
        }
      );
  };

  return (
    <>
      <Navbar />

      {/* Background wrapper */}
      <div className="relative py-24 px-6">
        {/* Background Image Layer */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${wood})`,
            opacity: 0.1,
          }}
        ></div>

        {/* Foreground Content */}
        <div className="relative z-10 flex flex-col lg:flex-row max-w-7xl mx-auto gap-8">
          {/* Left Content */}
          <div className="lg:w-2/3">
            <header className="mb-6">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-4 sm:mb-0 text-green-800">
                Wood Borer Pest Control
              </h1>
              <p className="mt-3 text-gray-600">
                Protect your wooden furniture and interiors with Patelbros expert services.
              </p>
            </header>

            <section className="mb-6">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-0 text-black">
                Why Book Patelbros Control Services?
              </h2>
              <ul className="list-disc ml-6 mt-3 text-gray-700 space-y-1">
                <li>Proper inspection and detection</li>
                <li>Preserves your furniture and home</li>
                <li>Eliminates wood borers effectively</li>
                <li>Saves time and money</li>
                <li>Peace of mind with expert handling</li>
              </ul>
            </section>

            <section className="mb-6">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-0 text-black">When to Book?</h2>
              <ul className="list-disc ml-6 mt-3 text-gray-700 space-y-1">
                <li>Cracks or holes in wood</li>
                <li>Wooden dust around furniture</li>
                <li>Visible bugs or larvae</li>
                <li>Damaged or weak furniture</li>
              </ul>
            </section>

            <section className="mb-6">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-0 text-black">Types of Services</h2>
              <div className="overflow-x-auto mt-4">
                <table className="min-w-full border text-sm text-left">
                  <thead className="bg-gray-200">
                    <tr>
                      <th className="px-4 py-2">Service</th>
                      <th className="px-4 py-2">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t">
                      <td className="px-4 py-2 font-medium">Wood Borer - Lite</td>
                      <td className="px-4 py-2">
                        6/12 month options, syringing + spraying, 1 manpower/visit,
                        extended warranty available
                      </td>
                    </tr>
                    <tr className="border-t">
                      <td className="px-4 py-2 font-medium">Wood Borer - Pro</td>
                      <td className="px-4 py-2">
                        Includes Lite + enhanced treatment effectiveness
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-6">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-0 text-black">How We Work</h2>
              <ol className="list-decimal ml-6 mt-3 text-gray-700 space-y-1">
                <li>Identification of infested areas</li>
                <li>Injection of safe chemical syringes</li>
                <li>Spraying chemical petroleum base</li>
              </ol>
            </section>

            <section className="mb-6">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-0 text-black">Terms and Conditions</h2>
              <p className="text-gray-700 mt-3">
                Service effectiveness will be visible within 15 days. Lasting results
                depend on proper post-service care.
              </p>
            </section>

            <footer className="pt-4 mt-8 border-t border-green-800">
              <p className="text-sm text-green-800 font-bold">
                Call us: 8707727951 | Email: patelbrospest@gmail.com
              </p>
            </footer>
          </div>

          {/* Booking Form (unchanged) */}
          <div className="lg:w-1/3 bg-gray-50 p-6 rounded shadow-[0_4px_20px_rgba(34,197,94,0.4)] border h-fit">
            <h2 className="text-2xl font-semibold mb-4">Booking Form</h2>
            <form ref={form} onSubmit={handleSubmit} className="space-y-4">
              <input
                name="name"
                type="text"
                required
                onChange={handleChange}
                placeholder="Your Name"
                className="border p-2 w-full"
              />
              <input
                name="phone"
                type="tel"
                required
                onChange={handleChange}
                placeholder="Mobile Number"
                className="border p-2 w-full"
              />
              <input
                name="pincode"
                type="text"
                required
                onChange={handleChange}
                placeholder="Pin Code"
                className="border p-2 w-full"
              />
              <select
                name="size"
                required
                onChange={handleChange}
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
                className="border p-2 w-full"
              >
                <option value="">Select Package</option>
                <option value="Lite">Wood Borer - Lite</option>
                <option value="Pro">Wood Borer - Pro</option>
              </select>
              <button
                type="submit"
                className="bg-green-700 text-white px-4 py-2 rounded w-full"
              >
                Book Now
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
