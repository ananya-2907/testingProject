import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "../Components/Homepage";
import Footer from "../Components/Footer";
import termit from "../Images/termit.jpg";

export default function TermitePage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    pincode: "",
    size: "",
    package: "",
    construction: "",
  });

  const form = useRef();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_2eb9m2p", "template_omojni5", form.current, {
      publicKey: "XWwwDcyWL7cmEF-TA",
    })
      .then(() => {
        alert(
          `Thank you, ${formData.name}, your request for Termite ${formData.package} service has been submitted.`
        );
      })
      .catch((error) => {
        alert("Something went wrong. Please try again.");
        console.error(error.text);
      });
  };

  return (
    <>
      <Navbar />
      <div className="relative">
        {/* Background with overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${termit})`,
            opacity: 0.1,
          }}
        ></div>

        {/* Content */}
        <div className="relative flex flex-col lg:flex-row p-6 py-28 max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="lg:w-2/3 lg:pr-8">
            <header className="mb-6">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-4 sm:mb-0 text-green-800">
                Termite Repellent Pest Control
              </h1>
              <p className="mt-3 text-gray-600">
                Safeguard your property from silent structural damage with
                Patelbros expert Termite Control services.
              </p>
            </header>

            <section className="mb-6">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-0 text-black">
                Why Book Termite Control Services?
              </h2>
              <ul className="list-disc ml-6 mt-3 text-gray-600  space-y-1">
                <li>Early detection to prevent irreversible wood damage</li>
                <li>Long-term protection with industry-grade solutions</li>
                <li>Prevents costly repairs and home resale value loss</li>
                <li>Safe and certified anti-termite chemicals used</li>
                <li>5 to 7-year warranty options available</li>
              </ul>
            </section>

            <section className="mb-6">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-0 text-black">When to Book?</h2>
              <ul className="list-disc ml-6 mt-3 text-gray-600 space-y-1">
                <li>Hollow-sounding wood</li>
                <li>Presence of mud tubes on walls or furniture</li>
                <li>Peeling paint that looks like water damage</li>
                <li>Discarded termite wings near windows or doors</li>
              </ul>
            </section>

            <section className="mb-6">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-0 text-black">Types of Services</h2>
              <div className="overflow-x-auto mt-4">
                <table className="min-w-full border text-sm text-left bg-white rounded-lg shadow">
                  <thead className="bg-gray-200">
                    <tr>
                      <th className="px-4 py-2">Service</th>
                      <th className="px-4 py-2">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t">
                      <td className="px-4 py-2 font-medium">Termite - Lite</td>
                      <td className="px-4 py-2">
                        Single Service | Drilling & Chemical Injection | 5-Year
                        Warranty
                      </td>
                    </tr>
                    <tr className="border-t">
                      <td className="px-4 py-2 font-medium">Termite - Pro</td>
                      <td className="px-4 py-2">
                        Dual Service | Includes Lite + Wood Treatment | 7-Year
                        Extended Warranty
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-6">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-0 text-black">How We Work</h2>
              <ol className="list-decimal ml-6 mt-3 text-gray-600 space-y-1">
                <li>Inspection of infected and at-risk areas</li>
                <li>Drilling holes near wooden bases & walls</li>
                <li>Injecting anti-termite chemicals safely</li>
                <li>Sealing holes and monitoring post-treatment</li>
              </ol>
            </section>

            <section className="mb-6">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-0 text-black">
                Terms and Conditions
              </h2>
              <p className="text-gray-600 mt-3">
                {/* Warranty is valid only when post-treatment instructions are
                followed. Re-inspection required every 6 months for Pro package. */}

                Warranty is valid for 1, 2, 3, 5 & 10 year. *t&c apply
              </p>
            </section>

            <footer className="pt-4 mt-8 border-t border-green-800">
              <p className="text-sm text-green-800 font-bold">
                Call us: 8707727951 | Email: patelbrospest@gmail.com
              </p>
            </footer>
          </div>

          {/* Booking Form (Unchanged) */}
          <div className="lg:w-1/3 relative top-4 h-fit bg-gray-50 p-6 rounded shadow-[0_4px_20px_rgba(34,197,94,0.4)] border mt-8 lg:mt-0">
            <h2 className="text-2xl font-semibold mb-4">Booking Form</h2>
            <form
              ref={form}
              onSubmit={handleSubmit}
              className="space-y-4"
            >
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
                <option value="Lite">Termite - Lite</option>
                <option value="Pro">Termite - Pro</option>
              </select>
              <select
                name="construction"
                required
                onChange={handleChange}
                className="border p-2 w-full"
              >
                <option value="">Construction Type</option>
                <option value="Pre-Construction">Pre-Construction</option>
                <option value="Post-Construction">Post-Construction</option>
              </select>

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
      <Footer />
    </>
  );
}
