
import { Link } from "react-router-dom";
import { Heart, HandHelping, Mail, Twitter, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white pt-12 pb-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2">
              <HandHelping className="h-8 w-8 text-helphand-primary" />
              <span className="text-xl font-bold text-helphand-primary">HelpHand</span>
            </Link>
            <p className="mt-2 text-sm text-gray-500">
              Connecting those in need with those who can help.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-helphand-primary">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-helphand-primary">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-helphand-primary">
                <Instagram size={20} />
              </a>
              <a href="mailto:contact@helphand.org" className="text-gray-400 hover:text-helphand-primary">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Navigation</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/" className="text-gray-500 hover:text-helphand-primary">Home</Link></li>
              <li><Link to="/browse" className="text-gray-500 hover:text-helphand-primary">Browse Requests</Link></li>
              <li><Link to="/request" className="text-gray-500 hover:text-helphand-primary">Post Request</Link></li>
              <li><Link to="/dashboard" className="text-gray-500 hover:text-helphand-primary">Dashboard</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Account</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/login" className="text-gray-500 hover:text-helphand-primary">Login</Link></li>
              <li><Link to="/signup" className="text-gray-500 hover:text-helphand-primary">Sign Up</Link></li>
              <li><Link to="/profile" className="text-gray-500 hover:text-helphand-primary">Profile</Link></li>
              <li><Link to="/settings" className="text-gray-500 hover:text-helphand-primary">Settings</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Help</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/about" className="text-gray-500 hover:text-helphand-primary">About Us</Link></li>
              <li><Link to="/faq" className="text-gray-500 hover:text-helphand-primary">FAQ</Link></li>
              <li><Link to="/contact" className="text-gray-500 hover:text-helphand-primary">Contact Us</Link></li>
              <li><Link to="/privacy" className="text-gray-500 hover:text-helphand-primary">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} HelpHand. All rights reserved.
          </p>
          <p className="flex items-center text-gray-500 text-sm mt-2 md:mt-0">
            Made with <Heart size={14} className="mx-1 text-red-500" /> for a better world
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
