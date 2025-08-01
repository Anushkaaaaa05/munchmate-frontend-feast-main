import React from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';

const CartPage: React.FC = () => {
  const { state, removeItem, updateQuantity, clearCart } = useCart();
  const { toast } = useToast();

  const handleUpdateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(id);
    } else {
      updateQuantity(id, newQuantity);
    }
  };

  const handleRemoveItem = (id: number, name: string) => {
    removeItem(id);
    toast({
      title: "Item Removed",
      description: `${name} has been removed from your cart.`,
    });
  };

  const handleCheckout = () => {
    toast({
      title: "Order Placed!",
      description: "Your order has been placed successfully. You will receive a confirmation shortly.",
    });
    clearCart();
  };

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-light py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="text-center py-16">
            <CardContent>
              <ShoppingBag className="w-16 h-16 text-gray-medium mx-auto mb-4" />
              <h2 className="text-2xl font-semibold text-gray-dark mb-2">Your cart is empty</h2>
              <p className="text-gray-medium mb-6">
                Looks like you haven't added any items to your cart yet.
              </p>
              <Link to="/menu">
                <Button className="bg-red-primary hover:bg-red-secondary">
                  Browse Menu
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-light py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-dark mb-2">Your Cart</h1>
          <p className="text-gray-medium">
            {state.items.length} item{state.items.length !== 1 ? 's' : ''} in your cart
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {state.items.map((item) => (
              <Card key={item.id} className="overflow-hidden">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-dark">{item.name}</h3>
                      <p className="text-sm text-gray-medium">{item.cuisine}</p>
                      <p className="text-lg font-bold text-red-primary">₹{item.price}</p>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 p-0"
                      >
                        <Minus size={14} />
                      </Button>
                      
                      <span className="w-8 text-center font-medium">{item.quantity}</span>
                      
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 p-0"
                      >
                        <Plus size={14} />
                      </Button>
                    </div>
                    
                    <div className="flex flex-col items-end space-y-2">
                      <p className="font-semibold text-gray-dark">
                        ₹{item.price * item.quantity}
                      </p>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleRemoveItem(item.id, item.name)}
                        className="text-red-primary hover:text-red-secondary p-1"
                      >
                        <Trash2 size={16} />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-dark mb-4">Order Summary</h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-medium">Subtotal</span>
                    <span className="font-medium">₹{state.total}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-medium">Delivery Fee</span>
                    <span className="font-medium">₹40</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-medium">GST (5%)</span>
                    <span className="font-medium">₹{Math.round(state.total * 0.05)}</span>
                  </div>
                  
                  <hr className="border-border" />
                  
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span className="text-red-primary">
                      ₹{state.total + 40 + Math.round(state.total * 0.05)}
                    </span>
                  </div>
                </div>
                
                <Button 
                  onClick={handleCheckout}
                  className="w-full bg-red-primary hover:bg-red-secondary text-white mb-3"
                  size="lg"
                >
                  Proceed to Checkout
                </Button>
                
                <Link to="/menu" className="block">
                  <Button variant="outline" className="w-full">
                    Continue Shopping
                  </Button>
                </Link>
                
                {state.items.length > 1 && (
                  <Button 
                    variant="ghost" 
                    onClick={() => {
                      clearCart();
                      toast({
                        title: "Cart Cleared",
                        description: "All items have been removed from your cart.",
                      });
                    }}
                    className="w-full mt-2 text-red-primary hover:text-red-secondary"
                  >
                    Clear Cart
                  </Button>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;