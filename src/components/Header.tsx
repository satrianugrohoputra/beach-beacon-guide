
import React, { useState, useEffect, useRef } from 'react';
import { Sun, Map, Search, Menu, X, User, LogOut } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // This will be replaced with actual auth state
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
    // Add actual logout logic here
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
          ? 'h-12 px-4 bg-white/95 backdrop-blur-md shadow-md' 
          : 'h-16 px-6 bg-white shadow-sm'
        }
        flex items-center justify-between
      `}
    >
      {/* Logo */}
      <Link to="/" className="flex items-center space-x-3">
        <div className="p-2 bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl">
          <Map className={`text-white ${isScrolled ? 'w-5 h-5' : 'w-6 h-6'}`} />
        </div>
        <div>
          <h1 className={`font-bold text-[#006994] ${isScrolled ? 'text-lg' : 'text-xl'}`}>
            Beach Guide
          </h1>
          {!isScrolled && <p className="text-sm text-gray-600">PWA</p>}
        </div>
      </Link>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-6">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            to={link.href}
            className={`
              text-gray-700 hover:text-[#006994] transition-colors font-medium
              ${location.pathname === link.href ? 'text-[#006994]' : ''}
            `}
          >
            {link.label}
          </Link>
        ))}
        
        {isAuthenticated ? (
          <div className="flex items-center space-x-3">
            <Link
              to="/profile"
              className="text-gray-700 hover:text-[#006994] transition-colors font-medium"
            >
              My Profile
            </Link>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-1 text-gray-700 hover:text-[#006994] transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>
        ) : (
          <Link
            to="/login"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium transition-colors"
          >
            Login
          </Link>
        )}
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <Sheet open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
          <SheetTrigger asChild>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Menu className="w-6 h-6 text-gray-700" />
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
                      ? 'text-[#006994]' 
                      : 'text-gray-700 hover:text-[#006994]'
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
                    className="text-lg font-medium text-gray-700 hover:text-[#006994] transition-colors"
                  >
                    My Profile
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsDrawerOpen(false);
                    }}
                    className="flex items-center space-x-2 text-lg font-medium text-gray-700 hover:text-[#006994] transition-colors"
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
                    className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full text-center font-medium transition-colors"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    onClick={() => setIsDrawerOpen(false)}
                    className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-teal-500 hover:to-blue-600 text-white px-6 py-3 rounded-full text-center font-medium transition-colors"
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
