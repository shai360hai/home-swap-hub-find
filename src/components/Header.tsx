
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, User, Heart, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-marketplace-blue">
              <span className="flex items-center gap-1">
                MarketPlace<span className="text-marketplace-orange">2</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 px-8">
            <div className="relative flex-1 max-w-md">
              <Input 
                type="text" 
                placeholder="What are you looking for?" 
                className="pl-10 pr-3 py-2 w-full"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-marketplace-gray" />
            </div>
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-6">
            <Button variant="ghost" className="flex items-center gap-1">
              <Heart className="h-5 w-5" />
              <span>Favorites</span>
            </Button>

            <Button variant="ghost" className="flex items-center gap-1">
              <User className="h-5 w-5" />
              <span>Log In</span>
            </Button>

            <Button className="bg-marketplace-blue hover:bg-marketplace-blue-dark">
              Post Ad
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? 
                <X className="h-6 w-6" /> : 
                <Menu className="h-6 w-6" />
              }
            </Button>
          </div>
        </div>

        {/* Mobile Search (always visible on mobile) */}
        <div className="mt-3 md:hidden">
          <div className="relative">
            <Input 
              type="text" 
              placeholder="What are you looking for?" 
              className="pl-10 pr-3 py-2 w-full"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-marketplace-gray" />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t animate-fade-in">
            <nav className="flex flex-col space-y-2">
              <Button variant="ghost" className="justify-start">
                <Heart className="h-5 w-5 mr-2" />
                <span>Favorites</span>
              </Button>
              <Button variant="ghost" className="justify-start">
                <User className="h-5 w-5 mr-2" />
                <span>Log In</span>
              </Button>
              <Button className="bg-marketplace-blue hover:bg-marketplace-blue-dark w-full mt-2">
                Post Ad
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
