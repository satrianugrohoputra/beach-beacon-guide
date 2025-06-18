
import React, { useState, useEffect, useRef } from 'react';
import { Sun, Map, Search, Menu, X, User, LogOut } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const location = useLocation();
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const throttledScroll = () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      scrollTimeoutRef.current = setTimeout(handleScroll, 100);
    };

    window.addEventListener('scroll', throttledScroll);
    return () => {
      window.removeEventListener('scroll', throttledScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
  ];

  return (
    <header 
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled 
          ? 'h-12 px-4 bg-[#F5DEB3]/95 backdrop-blur-md shadow-md' 
          : 'h-16 px-6 bg-[#F5DEB3] shadow-sm'
        }
        flex items-center justify-between
      `}
    >
      {/* Logo */}
      <Link to="/" className="flex items-center space-x-3">
        <div className="p-2 bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl">
          {/* Beach Umbrella SVG Icon */}
          <svg 
            className={`text-white ${isScrolled ? 'w-5 h-5' : 'w-6 h-6'}`} 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M13 22c-.55 0-1-.45-1-1v-2h2v2c0 .55-.45 1-1 1zm-1-5v-3.5c0-.28.22-.5.5-.5s.5.22.5.5V17h-1zm-3-4.5c0-.28.22-.5.5-.5s.5.22.5.5V17H9v-4.5zm6 0c0-.28.22-.5.5-.5s.5.22.5.5V17h-1v-4.5zm-9 0c0-.28.22-.5.5-.5s.5.22.5.5V17H6v-4.5zm12 0c0-.28.22-.5.5-.5s.5.22.5.5V17h-1v-4.5zM12 10c6.08 0 11-3.36 11-7.5S18.08-5 12-5 1 0.36 1 4.5 5.92 10 12 10z"/>
          </svg>
        </div>
        <div>
          <h1 className={`font-bold text-[#333333] ${isScrolled ? 'text-lg' : 'text-xl'}`}>
            Beach Guide
          </h1>
          {!isScrolled && <p className="text-sm text-[#555555]">PWA</p>}
        </div>
      </Link>
      
      {/* Desktop Navigation */}
      <div className={`hidden md:flex items-center space-x-6 ${isScrolled ? 'hidden' : ''}`}>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            to={link.href}
            className={`
              text-[#333333] hover:text-[#1ABC9C] transition-colors font-medium
              ${location.pathname === link.href ? 'text-[#1ABC9C]' : ''}
            `}
          >
            {link.label}
          </Link>
        ))}
        
        {isAuthenticated ? (
          <div className="flex items-center space-x-3">
            <Link
              to="/profile"
              className="text-[#333333] hover:text-[#1ABC9C] transition-colors font-medium"
            >
              My Profile
            </Link>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-1 text-[#333333] hover:text-[#1ABC9C] transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>
        ) : (
          <>
            <Link
              to="/login"
              className="text-[#333333] hover:text-[#1ABC9C] transition-colors font-medium"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-teal-500 hover:to-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105"
            >
              Sign Up
            </Link>
          </>
        )}
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <Sheet open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
          <SheetTrigger asChild>
            <button className="p-2 hover:bg-black/10 rounded-lg transition-colors">
              <Menu className="w-6 h-6 text-[#333333]" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-3/4 p-6">
            <div className="flex flex-col space-y-6 mt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsDrawerOpen(false)}
                  className={`
                    text-lg font-medium transition-colors
                    ${location.pathname === link.href 
                      ? 'text-[#1ABC9C]' 
                      : 'text-[#333333] hover:text-[#1ABC9C]'
                    }
                  `}
                >
                  {link.label}
                </Link>
              ))}
              
              {isAuthenticated ? (
                <>
                  <Link
                    to="/profile"
                    onClick={() => setIsDrawerOpen(false)}
                    className="text-lg font-medium text-[#333333] hover:text-[#1ABC9C] transition-colors"
                  >
                    My Profile
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsDrawerOpen(false);
                    }}
                    className="flex items-center space-x-2 text-lg font-medium text-[#333333] hover:text-[#1ABC9C] transition-colors"
                  >
                    <LogOut className="w-5 h-5" />
                    <span>Logout</span>
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    onClick={() => setIsDrawerOpen(false)}
                    className="text-lg font-medium text-[#333333] hover:text-[#1ABC9C] transition-colors"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    onClick={() => setIsDrawerOpen(false)}
                    className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-teal-500 hover:to-blue-600 text-white px-6 py-3 rounded-full text-center font-medium transition-all duration-300 transform hover:scale-105"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
