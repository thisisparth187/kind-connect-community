
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, HandHelping, Search, User, LayoutDashboard } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/90 shadow-md backdrop-blur-md" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <HandHelping className="h-8 w-8 text-helphand-primary" />
              <span className="text-xl font-bold text-helphand-primary">HelpHand</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <NavItem to="/" icon={<Home size={18} />} label="Home" current={location.pathname === "/"} />
            <NavItem to="/browse" icon={<Search size={18} />} label="Browse Requests" current={location.pathname === "/browse"} />
            <NavItem to="/request" icon={<HandHelping size={18} />} label="Post Request" current={location.pathname === "/request"} />
            <NavItem to="/dashboard" icon={<LayoutDashboard size={18} />} label="Dashboard" current={location.pathname === "/dashboard"} />
            <div className="pl-4 border-l border-gray-200">
              <NavItem to="/login" icon={<User size={18} />} label="Login" current={location.pathname === "/login"} />
            </div>
          </div>
          
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavItem to="/" label="Home" icon={<Home size={18} />} current={location.pathname === "/"} />
            <MobileNavItem to="/browse" label="Browse Requests" icon={<Search size={18} />} current={location.pathname === "/browse"} />
            <MobileNavItem to="/request" label="Post Request" icon={<HandHelping size={18} />} current={location.pathname === "/request"} />
            <MobileNavItem to="/dashboard" label="Dashboard" icon={<LayoutDashboard size={18} />} current={location.pathname === "/dashboard"} />
            <MobileNavItem to="/login" label="Login" icon={<User size={18} />} current={location.pathname === "/login"} />
          </div>
        </div>
      )}
    </nav>
  );
};

const NavItem = ({ to, icon, label, current }: { to: string; icon: React.ReactNode; label: string; current: boolean }) => (
  <Link
    to={to}
    className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      current
        ? "bg-helphand-softpurple text-helphand-primary"
        : "text-gray-700 hover:bg-helphand-softpurple/50 hover:text-helphand-primary"
    }`}
  >
    {icon}
    <span>{label}</span>
  </Link>
);

const MobileNavItem = ({ to, icon, label, current }: { to: string; icon: React.ReactNode; label: string; current: boolean }) => (
  <Link
    to={to}
    className={`flex items-center space-x-2 px-3 py-3 rounded-md text-base font-medium ${
      current
        ? "bg-helphand-softpurple text-helphand-primary"
        : "text-gray-700 hover:bg-helphand-softpurple/50 hover:text-helphand-primary"
    }`}
  >
    {icon}
    <span>{label}</span>
  </Link>
);

export default Navbar;
