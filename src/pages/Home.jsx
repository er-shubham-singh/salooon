import { Link } from "react-router-dom";
import { Scissors, Sparkles, Heart, Star, ArrowRight } from "lucide-react";
import React from 'react'
export default function Home() {
  const services = [
    {
      icon: Scissors,
      title: "Hair Styling",
      description:
        "Professional cuts, coloring, and styling to bring out your best look.",
    },
    {
      icon: Sparkles,
      title: "Makeup",
      description:
        "Expert makeup application for any occasion, from casual to glamorous.",
    },
    {
      icon: Heart,
      title: "Skincare",
      description:
        "Rejuvenating facials and treatments for glowing, healthy skin.",
    },
    {
      icon: Star,
      title: "Bridal Makeup",
      description:
        "Complete bridal packages to make your special day unforgettable.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      text:
        "Alisha Beauty Parlor transformed my look for my wedding day. The bridal package was absolutely worth it!",
      rating: 5,
    },
    {
      name: "Emily Davis",
      text:
        "The spa treatments here are heavenly. I always leave feeling refreshed and beautiful.",
      rating: 5,
    },
    {
      name: "Maria Garcia",
      text:
        "Best hair salon in town! The stylists really know what they're doing. Highly recommend!",
      rating: 5,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-50 via-white to-amber-50 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
              Discover Your Inner Beauty
            </h1>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Welcome to Alisha Beauty Parlor, where elegance meets expertise.
              We offer premium beauty services tailored to enhance your natural radiance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-teal-600 text-white px-8 py-3 rounded-full hover:bg-teal-700 transition-colors font-semibold"
              >
                Book Appointment
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center justify-center border-2 border-teal-600 text-teal-600 px-8 py-3 rounded-full hover:bg-teal-50 transition-colors font-semibold"
              >
                View Services
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-teal-200 to-amber-200 flex items-center justify-center">
              <Sparkles className="w-32 h-32 text-white opacity-50" />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Our Services
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto">
              From everyday beauty to special occasions, we provide a
              complete range of services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-6 bg-gradient-to-br from-gray-50 to-teal-50 rounded-xl hover:shadow-xl transition-all"
              >
                <div className="bg-teal-600 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-semibold mb-2">
                  {service.title}
                </h3>

                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center text-teal-600 font-semibold hover:text-teal-700"
            >
              View All Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                <p className="text-gray-700 mb-4 italic">
                  "{testimonial.text}"
                </p>

                <p className="font-semibold">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-teal-600 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
          Ready to Transform Your Look?
        </h2>

        <p className="text-xl mb-8 text-teal-100">
          Book your appointment today.
        </p>

        <Link
          to="/contact"
          className="inline-flex items-center bg-white text-teal-600 px-8 py-3 rounded-full hover:bg-gray-100 font-semibold"
        >
          Book Now
          <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </section>
    </div>
  );
}
