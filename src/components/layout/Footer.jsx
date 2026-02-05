import { Link } from "react-router-dom";
import React from 'react'
import {
  Sparkles,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Sparkles className="w-6 h-6 text-teal-400" />
              <span className="text-xl font-serif font-bold text-white">
                 Naileditt Saloon/Beauty Parlor
              </span>
            </div>

            <p className="text-sm leading-relaxed">
              Your destination for beauty and elegance. We specialize in
              bridal makeup, hair styling, skincare, and premium spa
              treatments.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-teal-400">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-teal-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-teal-400">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-teal-400">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-teal-400">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Contact Info
            </h3>

            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 text-teal-400" />
                <span>
                  GF-002, YOGI DARSAN APARTMENT, 13-A NUTAN <br />
BHARAT CO OP SOCIETY, ALKAPURI, VADODARA, <br />
Vadodara, Gujarat, 390007 
                </span>
              </li>

              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-teal-400" />
                <span>+91 9404091818</span>
              </li>

              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-teal-400" />
                <span>dimple.nailedit@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Follow Us
            </h3>

            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-teal-600"
              >
                <Facebook className="w-5 h-5" />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-teal-600"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-teal-600"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>

            <div className="mt-6">
              <h4 className="text-white font-semibold mb-2 text-sm">
                Opening Hours
              </h4>
              <p className="text-sm">Mon - Sat: 9:00 AM - 8:00 PM</p>
              <p className="text-sm">Sunday: 10:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>
            © {new Date().getFullYear()} Naileditt saloon/Beauty Parlor. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
