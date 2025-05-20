
import React from 'react';
import { Button } from "@/components/ui/button";

const FeaturedSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-marketplace-blue to-marketplace-blue-dark py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-lg">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Find what you need, sell what you don't
          </h1>
          <p className="text-lg mb-6 opacity-90">
            The largest marketplace with thousands of new listings every day
          </p>
          <div className="flex gap-4">
            <Button className="bg-white text-marketplace-blue hover:bg-gray-100 hover:text-marketplace-blue-dark">
              Post an Ad
            </Button>
            <Button variant="outline" className="text-white border-white hover:bg-white/10">
              Browse Listings
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="hidden md:block absolute right-0 top-0 bottom-0 w-1/3 bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
    </div>
  );
};

export default FeaturedSection;
