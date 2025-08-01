import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Home, Menu } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  const location = useLocation();
  const { state } = useCart();
  
  const totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white-pure shadow-card sticky top-0 z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <span className="text-xl font-bold text-gray-dark">MunchMate</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/') 
                  ? 'text-red-primary bg-red-light' 
                  : 'text-gray-dark hover:text-red-primary'
              }`}
            >
              <Home size={18} />
              <span>Home</span>
            </Link>
            <Link
              to="/menu"
              className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/menu') 
                  ? 'text-red-primary bg-red-light' 
                  : 'text-gray-dark hover:text-red-primary'
              }`}
            >
              <Menu size={18} />
              <span>Menu</span>
            </Link>
            <Link
              to="/cart"
              className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors relative ${
                isActive('/cart') 
                  ? 'text-red-primary bg-red-light' 
                  : 'text-gray-dark hover:text-red-primary'
              }`}
            >
              <div className="relative">
                <ShoppingCart size={18} />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </div>
              <span>Cart</span>
            </Link>
          </div>

          {/* Mobile cart button */}
          <div className="md:hidden">
            <Link to="/cart">
              <Button variant="outline" size="sm" className="relative">
                <ShoppingCart size={18} />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-primary text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden bg-white-pure border-t border-border">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            to="/"
            className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium ${
              isActive('/') 
                ? 'text-red-primary bg-red-light' 
                : 'text-gray-dark hover:text-red-primary hover:bg-gray-light'
            }`}
          >
            <Home size={20} />
            <span>Home</span>
          </Link>
          <Link
            to="/menu"
            className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium ${
              isActive('/menu') 
                ? 'text-red-primary bg-red-light' 
                : 'text-gray-dark hover:text-red-primary hover:bg-gray-light'
            }`}
          >
            <Menu size={20} />
            <span>Menu</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;