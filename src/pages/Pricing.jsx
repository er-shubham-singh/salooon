import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import React from 'react'
export default function Pricing() {
  const packages = [
    {
      name: "Basic Beauty",
      price: "$99",
      description: "Perfect for everyday beauty needs",
      features: [
        "Haircut & Styling",
        "Basic Facial",
        "Manicure",
        "Pedicure",
        "Hair Wash",
      ],
      popular: false,
    },
    {
      name: "Premium Glow",
      price: "$199",
      description: "Complete makeover package",
      features: [
        "Everything in Basic Beauty",
        "Professional Makeup",
        "Hair Coloring",
        "Spa Massage",
        "Advanced Facial Treatment",
        "Hair Treatment",
      ],
      popular: true,
    },
    {
      name: "Bridal Elegance",
      price: "$599",
      description: "Complete bridal beauty package",
      features: [
        "Pre-Wedding Skincare (3 sessions)",
        "Bridal Trial Makeup",
        "Wedding Day Makeup",
        "Bridal Hair Styling",
        "Mehendi Application",
        "Saree Draping",
        "Touch-up Kit",
      ],
      popular: false,
    },
  ];

  const priceList = [
    {
      category: "Hair Services",
      services: [
        { name: "Haircut", price: "$25 - $45" },
        { name: "Hair Coloring", price: "$60 - $120" },
        { name: "Highlights", price: "$80 - $150" },
        { name: "Keratin Treatment", price: "$150 - $300" },
        { name: "Hair Spa", price: "$40 - $80" },
      ],
    },
    {
      category: "Makeup",
      services: [
        { name: "Party Makeup", price: "$80 - $120" },
        { name: "HD Makeup", price: "$120 - $180" },
        { name: "Airbrush Makeup", price: "$150 - $200" },
        { name: "Engagement Makeup", price: "$100 - $150" },
      ],
    },
    {
      category: "Skincare",
      services: [
        { name: "Classic Facial", price: "$50 - $80" },
        { name: "Gold Facial", price: "$100 - $150" },
        { name: "Anti-Aging Treatment", price: "$120 - $180" },
        { name: "Acne Treatment", price: "$80 - $120" },
      ],
    },
    {
      category: "Spa",
      services: [
        { name: "Body Massage (60 min)", price: "$80 - $120" },
        { name: "Aromatherapy", price: "$100 - $150" },
        { name: "Manicure & Pedicure", price: "$40 - $70" },
        { name: "Body Scrub", price: "$70 - $100" },
      ],
    },
  ];

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-teal-50 to-amber-50 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-black">
            Pricing
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto ">
            Transparent pricing for all our services.
          </p>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl text-black md:text-4xl font-serif font-bold mb-4">
              Popular Packages
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-xl p-8 ${
                  pkg.popular ? "ring-2 ring-teal-600 scale-105" : ""
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-teal-600 text-white px-6 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-serif font-bold mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {pkg.description}
                  </p>
                  <div className="text-4xl font-bold text-teal-600">
                    {pkg.price}
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-teal-600 mt-1" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`block text-center py-3 rounded-full font-semibold ${
                    pkg.popular
                      ? "bg-teal-600 text-white hover:bg-teal-700"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  Book Now
                </Link>
              </div>
            ))}
          </div>

          {/* Individual Services */}
          <div className="grid md:grid-cols-2 gap-8">
            {priceList.map((category, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-teal-50 rounded-xl p-8"
              >
                <h3 className="text-2xl font-serif text-black font-bold mb-6">
                  {category.category}
                </h3>

                <ul className="space-y-4">
                  {category.services.map((service, i) => (
                    <li
                      key={i}
                      className="flex  text-black justify-between border-b pb-3"
                    >
                      <span>{service.name}</span>
                      <span className="text-teal-600 text-black font-semibold">
                        {service.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-teal-600 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
          Have Questions About Pricing?
        </h2>

        <p className="text-xl mb-8 text-teal-100">
          Contact us for custom packages.
        </p>

        <Link
          to="/contact"
          className="inline-flex items-center bg-white text-teal-600 px-8 py-3 rounded-full font-semibold"
        >
          Get in Touch
          <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </section>
    </div>
  );
}
