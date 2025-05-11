
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-8">
        <div className="flex gap-6 md:gap-10 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-display text-2xl font-bold text-primary">
              Bheem Boy
            </span>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden md:inline-flex px-3 py-1 text-xs rounded-full bg-secondary text-navy font-semibold">
            Coming Soon
          </span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
