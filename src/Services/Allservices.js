import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
// import Navbar from "../Components/Homepage";

export default function WoodBorerPage() {
  const [formData, setFormData] = useState({
    service: "wood-borer",
    name: "",
    phone: "",
    pincode: "",
    size: "",
    package: "",
    price: "",
    details: "",
    termiteType: "",
  });
  const form = useRef();

  const [showPrice, setShowPrice] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const serviceBenefits = {
    "wood-borer": `Our Wood Borer Control service protects your valuable wooden furniture, flooring, and structural elements from internal damage caused by wood-boring larvae. This early intervention helps preserve the aesthetics and longevity of wooden assets, enhances indoor hygiene, and prevents costly future repairs. Regular treatments also reduce the risk of secondary pest infestations that thrive on weakened wood.`,

    cockroach: `Cockroach infestations can be both a nuisance and a serious health hazard. Our treatment eliminates cockroaches at the source using safe, advanced techniques. This helps prevent the spread of foodborne illnesses such as Salmonella, typhoid, and gastroenteritis. Additionally, a cockroach-free environment improves air quality and protects against allergic reactions, especially in children and seniors.`,

    "wooden-rodent": `Rodents like rats and mice can cause significant damage by gnawing on wood, wires, and insulation, increasing fire hazards and repair costs. Our Wooden Rodent Control solution targets nesting areas and entry points to eliminate infestations and prevent recurrence. It also protects your home from rodent-borne diseases, foul odors, and contamination from droppings and urine.`,

    mosquito: `Mosquitoes are carriers of life-threatening diseases such as dengue, malaria, chikungunya, and Zika virus. Our Mosquito Control service includes fogging, larvicidal treatment, and outdoor barrier spraying to drastically reduce mosquito populations around your home. This ensures a safer, more comfortable environment for your family, especially during monsoon and breeding seasons.`,

    termite: `Termites silently destroy wooden structures from the inside out, often going undetected until serious damage occurs. Our Termite Control service uses drilling, injection, and wood treatments to eliminate termite colonies and prevent re-infestation. Backed by long-term warranties, this service safeguards your property’s structural integrity and increases its overall resale value.`,
  };

  const pricingData = {
    "wood-borer": {
      "2BHK": {
        Lite: {
          price: 2400,
          details:
            "3 Services / 6 Months | Syringing + Spraying | 1 Technician per Visit",
        },
        Pro: {
          price: 3400,
          details:
            "6 Services / 12 Months | Advanced Syringing + Spraying | 1 Technician per Visit",
        },
      },
      "3BHK": {
        Lite: {
          price: 2500,
          details:
            "3 Services / 6 Months | Syringing + Spraying | 1 Technician per Visit",
        },
        Pro: {
          price: 3500,
          details:
            "6 Services / 12 Months | Advanced Syringing + Spraying | 1 Technician per Visit",
        },
      },
      Villa: {
        Lite: {
          price: 2600,
          details:
            "3 Services / 6 Months | Syringing + Spraying | 1 Technician per Visit",
        },
        Pro: {
          price: 3600,
          details:
            "6 Services / 12 Months | Advanced Syringing + Spraying | 1 Technician per Visit",
        },
      },
      "1BHK": {
        Lite: {
          price: 2200,
          details:
            "3 Services / 6 Months | Syringing + Spraying | 1 Technician per Visit",
        },
        Pro: {
          price: 3200,
          details:
            "6 Services / 12 Months | Advanced Syringing + Spraying | 1 Technician per Visit",
        },
      },
    },
    // Other pricingData (cockroach, wooden-rodent, mosquito, termite) remain unchanged...
    cockroach: {
      "1BHK": {
        Lite: { price: 3500, details: "2 Services / 6 Months | Gel + Spray Treatment" },
        Pro: { price: 5000, details: "4 Services / 12 Months | Advanced Gel + Spray Treatment" },
      },
      "2BHK": {
        Lite: { price: 4000, details: "2 Services / 6 Months | Gel + Spray Treatment" },
        Pro: { price: 5500, details: "4 Services / 12 Months | Advanced Gel + Spray Treatment" },
      },
      "3BHK": {
        Lite: { price: 4500, details: "2 Services / 6 Months | Gel + Spray Treatment" },
        Pro: { price: 6000, details: "4 Services / 12 Months | Advanced Gel + Spray Treatment" },
      },
      Villa: {
        Lite: { price: 5000, details: "2 Services / 6 Months | Gel + Spray Treatment" },
        Pro: { price: 6500, details: "4 Services / 12 Months | Advanced Gel + Spray Treatment" },
      },
    },
    "wooden-rodent": {
      "1BHK": {
        Lite: { price: 950, details: "2 Services / 6 Months | Gel + Spray Treatment" },
        Pro: { price: 3500, details: "4 Services / 12 Months | Advanced Gel + Spray Treatment" },
      },
      "2BHK": {
        Lite: { price: 1200, details: "2 Services / 6 Months | Gel + Spray Treatment" },
        Pro: { price: 4000, details: "4 Services / 12 Months | Advanced Gel + Spray Treatment" },
      },
      "3BHK": {
        Lite: { price: 1500, details: "2 Services / 6 Months | Gel + Spray Treatment" },
        Pro: { price: 4500, details: "4 Services / 12 Months | Advanced Gel + Spray Treatment" },
      },
      Villa: {
        Lite: { price: 1800, details: "2 Services / 6 Months | Gel + Spray Treatment" },
        Pro: { price: 5000, details: "4 Services / 12 Months | Advanced Gel + Spray Treatment" },
      },
    },
    mosquito: {
      "1BHK": {
        Lite: { price: 1200, details: "2 Services / 3 Months | Indoor Fogging + Outdoor Spraying" },
        Pro: { price: 3200, details: "4 Services / 6 Months | Full Mosquito Barrier + Larvicidal Treatment" },
      },
      "2BHK": {
        Lite: { price: 1500, details: "2 Services / 3 Months | Indoor Fogging + Outdoor Spraying" },
        Pro: { price: 2500, details: "4 Services / 6 Months | Full Mosquito Barrier + Larvicidal Treatment" },
      },
      "3BHK": {
        Lite: { price: 1700, details: "2 Services / 3 Months | Indoor Fogging + Outdoor Spraying" },
        Pro: { price: 2700, details: "4 Services / 6 Months | Full Mosquito Barrier + Larvicidal Treatment" },
      },
      Villa: {
        Lite: { price: 2500, details: "2 Services / 3 Months | Indoor Fogging + Outdoor Spraying" },
        Pro: { price: 3500, details: "4 Services / 6 Months | Full Mosquito Barrier + Larvicidal Treatment" },
      },
    },
    termite: {
      "1BHK": {
        Lite: { price: 2500, details: "1 Service | Anti-Termite Drilling & Injection | 5-Year Warranty" },
        Pro: { price: 3500, details: "2 Services | Drilling + Wood Treatment | 7-Year Warranty" },
      },
      "2BHK": {
        Lite: { price: 3500, details: "1 Service | Anti-Termite Drilling & Injection | 5-Year Warranty" },
        Pro: { price: 4500, details: "2 Services | Drilling + Wood Treatment | 7-Year Warranty" },
      },
      "3BHK": {
        Lite: { price: 5500, details: "1 Service | Anti-Termite Drilling & Injection | 5-Year Warranty" },
        Pro: { price: 6500, details: "2 Services | Drilling + Wood Treatment | 7-Year Warranty" },
      },
      Villa: {
        Lite: { price: 8500, details: "1 Service | Anti-Termite Drilling & Injection | 5-Year Warranty" },
        Pro: { price: 9500, details: "2 Services | Drilling + Wood Treatment | 7-Year Warranty" },
      },
    },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedForm = { ...formData, [name]: value };

    if (["size", "package", "service"].includes(name)) {
      const updatedSize = name === "size" ? value : formData.size;
      const updatedPackage = name === "package" ? value : formData.package;
      const updatedService = name === "service" ? value : formData.service;

      if (
        updatedSize &&
        updatedPackage &&
        updatedService &&
        pricingData[updatedService] &&
        pricingData[updatedService][updatedSize] &&
        pricingData[updatedService][updatedSize][updatedPackage]
      ) {
        updatedForm.price =
          pricingData[updatedService][updatedSize][updatedPackage].price;
        updatedForm.details =
          pricingData[updatedService][updatedSize][updatedPackage].details;
      } else {
        updatedForm.price = "";
        updatedForm.details = "";
      }
      setShowPrice(false);
    }

    setFormData(updatedForm);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSending(true);

    try {
      await emailjs.sendForm("service_2eb9m2p", "template_omojni5", form.current, {
        publicKey: "XWwwDcyWL7cmEF-TA",
      });
      alert(
        `Thank you, ${formData.name}, your request has been submitted and emailed successfully.`
      );
    } catch (error) {
      console.error("EmailJS error:", error);
      alert("There was an error sending your request. Please try again later.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row justify-center items-stretch p-6 max-w-6xl mx-auto space-y-6 lg:space-y-0 lg:space-x-6">
        {/* Booking Form */}
        <div className="lg:w-1/2 h-full p-10 pr-10 text-white rounded-md shadow-[0_4px_20px_rgba(34,197,94,0.6)]  border bg-green-700 flex flex-col justify-between">
          <h2 className="text-2xl font-semibold mb-4 ">Booking Form</h2>
          <form ref={form} onSubmit={handleSubmit} className="space-y-4">
            <label htmlFor="service" className="block text-lg font-medium">
              Select Service
            </label>
            <select
              name="service"
              required
              onChange={handleChange}
              value={formData.service}
              className="border p-2 w-full text-gray-400 rounded-md"
            >
              <option value="wood-borer">Wood Borer Control</option>
              <option value="cockroach">Cockroach Control</option>
              <option value="wooden-rodent">Wooden Rodent Control</option>
              <option value="mosquito">Mosquito Control</option>
              <option value="termite">Termite Control</option>
            </select>

            <input
              name="name"
              type="text"
              required
              onChange={handleChange}
              placeholder="Your Name"
              className="border p-2 w-full text-gray-400 rounded-md"
            />
            <input
              name="phone"
              type="tel"
              required
              onChange={handleChange}
              placeholder="Mobile Number"
              className="border p-2 w-full text-gray-400 rounded-md"
            />
            <input
              name="pincode"
              type="text"
              required
              onChange={handleChange}
              placeholder="Pin Code"
              className="border p-2 w-full text-gray-400 rounded-md"
            />
            <select
              name="size"
              required
              onChange={handleChange}
              className="border p-2 w-full text-gray-400 rounded-md"
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
              className="border p-2 w-full text-gray-400 rounded-md"
            >
              <option value="">Select Package</option>
              <option value="Lite">Lite</option>
              <option value="Pro">Pro</option>
            </select>
            {formData.service === "termite" && (
              <select
                name="termiteType"
                required
                onChange={handleChange}
                value={formData.termiteType}
                className="border p-2 w-full text-gray-400 rounded-md"
              >
                <option value="">Select Termite Type</option>
                <option value="pre-construction">Pre Construction</option>
                <option value="post-construction">Post Construction</option>
              </select>
            )}

            <button
              type="submit"
              className="bg-green-900 text-gray-50 px-6 py-3 rounded w-full text-lg font-semibold hover:bg-green-800 transition"
            >
              {isSending ? "Sending..." : "Book Now"}
            </button>
            <input type="hidden" name="price" value={formData.price} />
            <input type="hidden" name="details" value={formData.details} />
            <input type="hidden" name="termite_type" value={formData.termiteType} />
          </form>
        </div>

        {/* Right Side Content */}
        <div className="lg:w-1/2 w-full h-full p-6 sm:p-8 md:p-10 flex flex-col lg:ml-20 justify-between">
          {/* Heading */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-800 mb-4 sm:mb-0">
              Why Choose{" "}
              <span className="text-green-800 block sm:inline uppercase">
                {formData.service.replace("-", " ")} Control?
              </span>
            </h2>
            {/* Icon */}
            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-green-100 flex items-center justify-center rounded-full shadow mx-auto sm:mx-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-green-700"
              >
                <path d="M12 22c5-1.5 8-5.5 8-10V5l-8-3-8 3v7c0 4.5 3 8.5 8 10z" />
              </svg>
            </div>
          </div>

          {/* Dynamic Description */}
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-8 text-center sm:text-left">
            {serviceBenefits[formData.service]}
          </p>

          {/* Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
            <div className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5 sm:w-6 sm:h-6 text-green-700"
              >
                <path d="M12 22c5-1.5 8-5.5 8-10V5l-8-3-8 3v7c0 4.5 3 8.5 8 10z" />
              </svg>
              <span className="text-gray-800 text-sm sm:text-base font-medium">
                Protects Furniture
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5 sm:w-6 sm:h-6 text-green-700"
              >
                <circle cx="12" cy="12" r="10" />
              </svg>
              <span className="text-gray-800 text-sm sm:text-base font-medium">
                Enhances Hygiene
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5 sm:w-6 sm:h-6 text-green-700"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6 4 4 6.5 4c1.74 0 3.41 1.01 4.07 2.5h1C13.09 5.01 14.76 4 16.5 4 19 4 21 6 21 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              <span className="text-gray-800 text-sm sm:text-base font-medium">
                Prevents Costly Repairs
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5 sm:w-6 sm:h-6 text-green-700"
              >
                <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 14.93V11h-2v5.93a8.001 8.001 0 01-6-7.73h2a6 6 0 006 6z" />
              </svg>
              <span className="text-gray-800 text-sm sm:text-base font-medium">
                Long-Lasting Results
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
