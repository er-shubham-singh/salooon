import { useState } from "react";
import React from 'react'
export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Bridal", "Hair Styling", "Makeup", "Spa"];

  const galleryItems = [
    {
      category: "Bridal",
      image:
        "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Bridal Makeup",
    },
    {
      category: "Hair Styling",
      image:
        "https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Hair Styling",
    },
    {
      category: "Makeup",
      image:
        "https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Party Makeup",
    },
    {
      category: "Spa",
      image:
        "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Spa Treatment",
    },
    {
      category: "Bridal",
      image:
        "https://images.pexels.com/photos/1619697/pexels-photo-1619697.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Wedding Makeup",
    },
    {
      category: "Hair Styling",
      image:
        "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Hair Color",
    },
    {
      category: "Makeup",
      image:
        "https://images.pexels.com/photos/3373746/pexels-photo-3373746.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Evening Makeup",
    },
    {
      category: "Spa",
      image:
        "https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Facial Treatment",
    },
    {
      category: "Bridal",
      image:
        "https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Bridal Hair",
    },
    {
      category: "Hair Styling",
      image:
        "https://images.pexels.com/photos/3065171/pexels-photo-3065171.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Haircut",
    },
    {
      category: "Makeup",
      image:
        "https://images.pexels.com/photos/3373745/pexels-photo-3373745.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Professional Makeup",
    },
    {
      category: "Spa",
      image:
        "https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Massage",
    },
  ];

  const filteredItems =
    selectedCategory === "All"
      ? galleryItems
      : galleryItems.filter(
          (item) => item.category === selectedCategory
        );

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-teal-50 to-amber-50 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            Our Gallery
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Browse our stunning beauty transformations.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                  selectedCategory === category
                    ? "bg-teal-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Images */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden bg-gray-200">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-semibold">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-200">
                      {item.category}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-amber-50 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
          Want to Be Featured Here?
        </h2>
        <p className="text-xl text-gray-700">
          Book your appointment today.
        </p>
      </section>
    </div>
  );
}
