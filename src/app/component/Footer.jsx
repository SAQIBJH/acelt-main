import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaInstagram,  FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import AnimatedSection from './AnimatedSection';

const Footer = () => {
  return (
    <AnimatedSection>
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        {/* Footer top - Logo and Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Logo */}
          <div className="flex flex-col items-center sm:items-start">
            <img src="/logo.png" alt="Ace Energy Logo" className="h-12 mb-4" />
            <p className="text-gray-400 text-sm text-center sm:text-left">
              Providing cutting-edge energy solutions for the global industrial sector.
            </p>
          </div>

          {/* Products Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Products</h3>
            <ul>
              <li><Link href="/products" className="text-gray-400 hover:text-gray-300">Hot Induction Bends</Link></li>
              <li><Link href="/products"className="text-gray-400 hover:text-gray-300">Fittings & Flanges</Link></li>
              <li><Link href="/products"className="text-gray-400 hover:text-gray-300">Pipes & Tubing</Link></li>
              <li><Link href="/products" className="text-gray-400 hover:text-gray-300">Valves</Link></li>
            </ul>
          </div>

          {/* Solutions Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Solutions</h3>
            <ul>
              <li><Link href="/solutions"className="text-gray-400 hover:text-gray-300">Energy</Link></li>
              <li><Link href="/solutions"className="text-gray-400 hover:text-gray-300">Petrochemical</Link></li>
              <li><Link href="/solutions" className="text-gray-400 hover:text-gray-300">Marine</Link></li>
              <li><Link href="/solutions" className="text-gray-400 hover:text-gray-300">Water Treatment</Link></li>
            </ul>
          </div>

          {/* Terms Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul>
              <li><Link href="/terms"className="text-gray-400 hover:text-gray-300">Terms & Conditions</Link></li>
              <li><Link href="/privacy-policy"className="text-gray-400 hover:text-gray-300">Privacy Policy</Link></li>
              <li><Link href="/about"className="text-gray-400 hover:text-gray-300">About Us</Link></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom - Social Media */}
        <div className="flex justify-center space-x-6">
          <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300">
            <FaFacebookF size={24} />
          </Link>
          <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300">
            <FaInstagram size={24} />
          </Link>
          <Link href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300">
            <FaXTwitter size={24} />
          </Link>
          <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300">
            <FaYoutube size={24} />
          </Link>
          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300">
            <FaLinkedinIn size={24} />
          </Link>
        </div>

        {/* Footer Copyright */}
        <div className="text-center mt-8 text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Ace Energy. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </AnimatedSection>
  );
};

export default Footer;
