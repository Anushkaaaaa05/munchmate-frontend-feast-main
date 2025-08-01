import React from 'react';
import { Star, Clock, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MenuItem } from '@/data/menuData';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';

interface MenuCardProps {
  item: MenuItem;
}

const MenuCard: React.FC<MenuCardProps> = ({ item }) => {
  const { addItem } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      cuisine: item.cuisine
    });
    
    toast({
      title: "Added to Cart!",
      description: `${item.name} has been added to your cart.`,
    });
  };

  return (
    <Card className="overflow-hidden hover:shadow-hover transition-all duration-300 transform hover:-translate-y-1 bg-white-pure border-border">
      <div className="relative">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-48 object-cover"
        />
        {item.isVeg && (
          <div className="absolute top-2 left-2 bg-green-500 text-white p-1 rounded-full">
            <Leaf size={12} />
          </div>
        )}
        <div className="absolute top-2 right-2 bg-white-pure px-2 py-1 rounded-full flex items-center space-x-1">
          <Star className="w-3 h-3 text-yellow-500 fill-current" />
          <span className="text-xs font-medium">{item.rating}</span>
        </div>
      </div>
      
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-dark">{item.name}</h3>
          <span className="text-lg font-bold text-red-primary">₹{item.price}</span>
        </div>
        
        <p className="text-gray-medium text-sm mb-3 line-clamp-2">
          {item.description}
        </p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-1 text-gray-medium">
            <Clock size={14} />
            <span className="text-xs">{item.prepTime}</span>
          </div>
          <span className="text-xs bg-gray-light px-2 py-1 rounded-full text-gray-dark">
            {item.cuisine}
          </span>
        </div>
        
        <Button 
          onClick={handleAddToCart}
          className="w-full bg-red-primary hover:bg-red-secondary text-white"
        >
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default MenuCard;