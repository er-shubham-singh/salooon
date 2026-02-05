import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { supabase } from "../lib/supabase";
import React from 'react'
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    preferred_date: "",
    preferred_time: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle");

  const services = [
    "Hair Styling",
    "Makeup",
    "Skincare",
    "Bridal Makeup",
    "Spa Treatment",
    "Other",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const { error } = await supabase.from("appointments").insert([
        {
          ...formData,
        },
      ]);

      if (error) throw error;

      setSubmitStatus("success");

      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        preferred_date: "",
        preferred_time: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting appointment:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-amber-50 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Get in touch with us to book an appointment.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-serif font-bold mb-8">
              Book Your Appointment
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="input-style"
              />

              <input
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="input-style"
              />

              <input
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="input-style"
              />

              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="input-style"
              >
                <option value="">Select Service</option>
                {services.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>

              <input
                type="date"
                name="preferred_date"
                value={formData.preferred_date}
                onChange={handleChange}
                required
                className="input-style"
              />

              <input
                type="time"
                name="preferred_time"
                value={formData.preferred_time}
                onChange={handleChange}
                required
                className="input-style"
              />

              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="input-style"
              />

              {submitStatus === "success" && (
                <p className="text-green-600">
                  Appointment submitted successfully!
                </p>
              )}

              {submitStatus === "error" && (
                <p className="text-red-600">
                  Something went wrong. Try again.
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-teal-600 text-white py-3 rounded-lg"
              >
                {isSubmitting ? "Submitting..." : "Book Appointment"}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <MapPin /> 123 Beauty Street
            </div>
            <div className="flex items-center gap-3">
              <Phone /> +1 555 123456
            </div>
            <div className="flex items-center gap-3">
              <Mail /> info@Nailedittbeauty.com
            </div>
            <div className="flex items-center gap-3">
              <Clock /> 9 AM – 8 PM
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
