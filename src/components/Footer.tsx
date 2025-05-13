
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-navy py-10 text-white">
      <div className="container px-4 sm:px-8 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <span className="font-display text-2xl font-bold">Bheem Boy</span>
            </Link>
            <p className="text-white/60 text-sm mt-2">You deserve to be pampered</p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-white/60 text-sm">© {new Date().getFullYear()} Bheem Boy</p>
            <p className="text-white/60 text-sm mt-1">A satirical service at bheemboy.in</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
