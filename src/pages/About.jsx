import { Award, Users, Clock, Heart } from "lucide-react";
import React from 'react'
export default function About() {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for perfection in every service we provide.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Our certified professionals bring years of experience.",
    },
    {
      icon: Clock,
      title: "Punctuality",
      description: "We value your time and ensure timely services.",
    },
    {
      icon: Heart,
      title: "Customer Care",
      description: "Your satisfaction and comfort are our top priorities.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-amber-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              About Naileditt Beauty Parlor
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Where beauty meets expertise and every client leaves feeling confident and radiant.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
                Our Story
              </h2>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Founded in 2010, Naileditt Beauty Parlor has been the trusted
                  destination for beauty enthusiasts seeking premium services
                  and personalized care.
                </p>

                <p>
                  Our founder, Naileditt, envisioned a space where every woman
                  could feel pampered, beautiful, and confident.
                </p>

                <p>
                  Today, we offer a comprehensive range of services, from
                  everyday beauty maintenance to elaborate bridal packages.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-teal-200 to-amber-200 flex items-center justify-center">
                <Heart className="w-32 h-32 text-white opacity-50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className="bg-teal-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-8">
              <div className="text-5xl font-bold text-teal-600 mb-2">
                15+
              </div>
              <div className="text-xl text-gray-700">
                Years Experience
              </div>
            </div>

            <div className="p-8">
              <div className="text-5xl font-bold text-teal-600 mb-2">
                10K+
              </div>
              <div className="text-xl text-gray-700">
                Happy Clients
              </div>
            </div>

            <div className="p-8">
              <div className="text-5xl font-bold text-teal-600 mb-2">
                50+
              </div>
              <div className="text-xl text-gray-700">
                Expert Stylists
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Join Our Beauty Journey
          </h2>

          <p className="text-xl mb-8 text-teal-100">
            Experience passion, expertise, and personalized care.
          </p>
        </div>
      </section>
    </div>
  );
}
