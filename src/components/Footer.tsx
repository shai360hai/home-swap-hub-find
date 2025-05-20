
import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-3 text-marketplace-blue">MarketPlace<span className="text-marketplace-orange">2</span></h3>
            <p className="text-marketplace-gray-dark">
              The leading platform for classified ads in the region.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-marketplace-gray-dark mb-3">Categories</h4>
            <ul className="space-y-2">
              <li><Link to="#" className="text-marketplace-gray hover:text-marketplace-blue">Real Estate</Link></li>
              <li><Link to="#" className="text-marketplace-gray hover:text-marketplace-blue">Vehicles</Link></li>
              <li><Link to="#" className="text-marketplace-gray hover:text-marketplace-blue">Electronics</Link></li>
              <li><Link to="#" className="text-marketplace-gray hover:text-marketplace-blue">Jobs</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-marketplace-gray-dark mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="#" className="text-marketplace-gray hover:text-marketplace-blue">About Us</Link></li>
              <li><Link to="#" className="text-marketplace-gray hover:text-marketplace-blue">Contact</Link></li>
              <li><Link to="#" className="text-marketplace-gray hover:text-marketplace-blue">Terms of Service</Link></li>
              <li><Link to="#" className="text-marketplace-gray hover:text-marketplace-blue">Privacy Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-marketplace-gray-dark mb-3">Connect With Us</h4>
            <p className="text-marketplace-gray mb-3">
              Stay updated with our latest offers
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-marketplace-gray hover:text-marketplace-blue">Facebook</a>
              <a href="#" className="text-marketplace-gray hover:text-marketplace-blue">Instagram</a>
              <a href="#" className="text-marketplace-gray hover:text-marketplace-blue">Twitter</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-6 text-center text-marketplace-gray">
          <p>© 2025 MarketPlace2. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
