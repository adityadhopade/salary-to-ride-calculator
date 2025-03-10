
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 py-12" id="about">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Salary-to-Ride</h3>
            <p className="text-gray-600 text-sm">
              A simple tool to help you understand your car buying power based on your income.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <p className="text-gray-600 text-sm">
              This calculator helps you make informed decisions about your next vehicle purchase
              by comparing your monthly income against different car price ranges.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Disclaimer</h3>
            <p className="text-gray-600 text-sm">
              The calculations provided are estimates only. Actual affordability may vary based on 
              credit score, down payment, interest rates, and other financial factors.
            </p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Salary-to-Ride Calculator. All rights reserved.</p>
          <p className="mt-2">Created with precision and elegance.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
