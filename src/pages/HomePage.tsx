import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import MenuCard from '@/components/MenuCard';
import { getFeaturedItems, menuData } from '@/data/menuData';
import heroBanner from '@/assets/hero-banner.jpg';

const HomePage: React.FC = () => {
  const featuredItems = getFeaturedItems();

  return (
    <div className="min-h-screen bg-gradient-light">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBanner})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Welcome to <span className="text-red-secondary">MunchMate</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Delicious food delivered to your doorstep. From street food to fine dining.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/menu">
              <Button size="lg" className="bg-red-primary hover:bg-red-secondary text-white px-8 py-3 text-lg">
                Order Now
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-gray-dark px-8 py-3 text-lg"
            >
              View Menu
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white-pure">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-4">
              Why Choose MunchMate?
            </h2>
            <p className="text-lg text-gray-medium max-w-2xl mx-auto">
              We bring you the best dining experience with quality food and quick delivery.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6 shadow-card hover:shadow-hover transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-red-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-red-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-dark mb-2">Quick Delivery</h3>
                <p className="text-gray-medium">
                  Fast and reliable delivery within 30 minutes to your location.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 shadow-card hover:shadow-hover transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-red-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-red-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-dark mb-2">Quality Food</h3>
                <p className="text-gray-medium">
                  Fresh ingredients and authentic recipes from the best chefs.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 shadow-card hover:shadow-hover transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-red-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <ArrowRight className="w-8 h-8 text-red-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-dark mb-2">Easy Ordering</h3>
                <p className="text-gray-medium">
                  Simple and intuitive interface for a seamless ordering experience.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-16 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-4">
              Featured Dishes
            </h2>
            <p className="text-lg text-gray-medium">
              Try our most popular and delicious dishes loved by customers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredItems.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/menu">
              <Button size="lg" className="bg-red-primary hover:bg-red-secondary text-white">
                View Full Menu
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Cuisines Section */}
      <section className="py-16 bg-white-pure">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-4">
              Popular Cuisines
            </h2>
            <p className="text-lg text-gray-medium">
              Explore different cuisines from around the world.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {menuData.map((cuisine) => (
              <Link key={cuisine.id} to={`/menu#${cuisine.id}`}>
                <Card className="hover:shadow-hover transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-semibold text-gray-dark mb-2">
                      {cuisine.name}
                    </h3>
                    <p className="text-sm text-gray-medium">
                      {cuisine.items.length} items
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;