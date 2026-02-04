import { Link } from "react-router-dom";
import {
  Scissors,
  Sparkles,
  Heart,
  Star,
  Waves,
  ArrowRight,
} from "lucide-react";
import React from 'react'
export default function Services() {
  const services = [
    {
      icon: Scissors,
      title: "Hair Styling",
      description: "Transform your look with our expert hair services.",
      items: [
        "Haircut & Styling",
        "Hair Coloring & Highlights",
        "Keratin Treatment",
        "Hair Spa & Deep Conditioning",
        "Hair Extensions",
        "Straightening & Perming",
      ],
    },
    {
      icon: Sparkles,
      title: "Makeup Services",
      description: "Professional makeup for every occasion.",
      items: [
        "Party Makeup",
        "Engagement Makeup",
        "Professional Photoshoot Makeup",
        "HD Makeup",
        "Airbrush Makeup",
        "Makeup Lessons",
      ],
    },
    {
      icon: Heart,
      title: "Skincare",
      description: "Rejuvenate and nourish your skin.",
      items: [
        "Classic Facial",
        "Anti-Aging Treatment",
        "Acne Treatment",
        "Brightening Facial",
        "Gold Facial",
        "Chemical Peels",
      ],
    },
    {
      icon: Star,
      title: "Bridal Makeup",
      description: "Complete bridal packages for your special day.",
      items: [
        "Bridal Trial Makeup",
        "Wedding Day Makeup",
        "Pre-Wedding Treatments",
        "Bridal Hair Styling",
        "Mehendi Application",
        "Complete Bridal Package",
      ],
    },
    {
      icon: Waves,
      title: "Spa Treatments",
      description: "Relaxing spa services for complete wellness.",
      items: [
        "Body Massage",
        "Aromatherapy",
        "Hot Stone Therapy",
        "Body Scrubs & Wraps",
        "Manicure & Pedicure",
        "Foot Spa",
      ],
    },
  ];

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-teal-50 to-amber-50 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            Our Services
          </h1>

          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of beauty services designed to
            enhance your natural radiance.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-teal-50 rounded-2xl p-8 md:p-12 hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Left */}
                  <div className="md:w-1/3">
                    <div className="bg-teal-600 w-20 h-20 rounded-full flex items-center justify-center mb-6">
                      <service.icon className="w-10 h-10 text-white" />
                    </div>

                    <h2 className="text-3xl font-serif font-bold mb-4">
                      {service.title}
                    </h2>

                    <p className="text-gray-700 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Right */}
                  <div className="md:w-2/3">
                    <div className="grid sm:grid-cols-2 gap-4">
                      {service.items.map((item, i) => (
                        <div
                          key={i}
                          className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                        >
                          <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                            <span className="text-gray-800 font-medium">
                              {item}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-amber-50 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
          Ready to Book Your Service?
        </h2>

        <p className="text-xl text-gray-700 mb-8">
          Schedule an appointment today.
        </p>

        <Link
          to="/contact"
          className="inline-flex items-center bg-teal-600 text-white px-8 py-3 rounded-full hover:bg-teal-700 transition-colors font-semibold text-lg"
        >
          Book Appointment
          <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </section>
    </div>
  );
}

