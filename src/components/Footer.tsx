
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#FFFFF0] border-t border-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Us */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">About Beach Guide</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              We're on a mission to bring you the world's best beaches, tips, and stories. 
              Discover paradise one beach at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-600 hover:text-[#1ABC9C] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-gray-600 hover:text-[#1ABC9C] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-sm text-gray-600 hover:text-[#1ABC9C] transition-colors">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/signup" className="text-sm text-gray-600 hover:text-[#1ABC9C] transition-colors">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#1ABC9C] transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#1ABC9C] transition-colors"
              >
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">Contact</h3>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">
                <strong>Email:</strong>{" "}
                <a 
                  href="mailto:support@beachguide.app" 
                  className="hover:text-[#1ABC9C] transition-colors"
                >
                  support@beachguide.app
                </a>
              </p>
              <p className="text-sm text-gray-600">
                Copyright © 2025 Beach Guide
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-xs text-gray-500">
            Built with ❤️ using Loveable AI Builder
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
