import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import MenuCard from '@/components/MenuCard';
import { menuData, MenuItem } from '@/data/menuData';

const MenuPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCuisine, setSelectedCuisine] = useState('all');
  const [isVegOnly, setIsVegOnly] = useState(false);

  const allItems: MenuItem[] = menuData.flatMap(cuisine => cuisine.items);

  const filteredItems = allItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCuisine = selectedCuisine === 'all' || item.cuisine === selectedCuisine;
    const matchesVeg = !isVegOnly || item.isVeg;
    
    return matchesSearch && matchesCuisine && matchesVeg;
  });

  const getItemsByCuisine = (cuisineName: string) => {
    return menuData.find(cuisine => cuisine.name === cuisineName)?.items || [];
  };

  return (
    <div className="min-h-screen bg-gray-light py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-dark mb-4">Our Menu</h1>
          <p className="text-lg text-gray-medium">
            Discover delicious dishes from various cuisines
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white-pure rounded-lg shadow-card p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-medium" size={20} />
              <Input
                placeholder="Search dishes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex gap-2 items-center">
              <Button
                variant={isVegOnly ? "default" : "outline"}
                onClick={() => setIsVegOnly(!isVegOnly)}
                className={isVegOnly ? "bg-green-500 hover:bg-green-600" : ""}
              >
                <Filter size={16} className="mr-2" />
                Veg Only
              </Button>
            </div>
          </div>
        </div>

        {/* Cuisine Tabs */}
        <Tabs value={selectedCuisine} onValueChange={setSelectedCuisine} className="space-y-8">
          <TabsList className="grid w-full grid-cols-5 bg-white-pure">
            <TabsTrigger value="all" className="data-[state=active]:bg-red-primary data-[state=active]:text-white">
              All
            </TabsTrigger>
            {menuData.map((cuisine) => (
              <TabsTrigger 
                key={cuisine.id} 
                value={cuisine.name}
                className="data-[state=active]:bg-red-primary data-[state=active]:text-white"
              >
                {cuisine.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* All Items */}
          <TabsContent value="all" className="space-y-6">
            {searchTerm || isVegOnly ? (
              <div>
                <h2 className="text-2xl font-semibold text-gray-dark mb-4">
                  {filteredItems.length} items found
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredItems.map((item) => (
                    <MenuCard key={item.id} item={item} />
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-12">
                {menuData.map((cuisine) => (
                  <div key={cuisine.id}>
                    <div className="mb-6">
                      <h2 className="text-2xl font-semibold text-gray-dark mb-2">
                        {cuisine.name}
                      </h2>
                      <p className="text-gray-medium">{cuisine.description}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                      {cuisine.items.map((item) => (
                        <MenuCard key={item.id} item={item} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </TabsContent>

          {/* Individual Cuisine Tabs */}
          {menuData.map((cuisine) => (
            <TabsContent key={cuisine.id} value={cuisine.name} className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-gray-dark mb-2">
                  {cuisine.name}
                </h2>
                <p className="text-gray-medium mb-6">{cuisine.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {getItemsByCuisine(cuisine.name)
                    .filter(item => {
                      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                           item.description.toLowerCase().includes(searchTerm.toLowerCase());
                      const matchesVeg = !isVegOnly || item.isVeg;
                      return matchesSearch && matchesVeg;
                    })
                    .map((item) => (
                      <MenuCard key={item.id} item={item} />
                    ))}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {filteredItems.length === 0 && (searchTerm || isVegOnly) && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-medium">No items found matching your criteria.</p>
            <Button 
              onClick={() => {
                setSearchTerm('');
                setIsVegOnly(false);
                setSelectedCuisine('all');
              }}
              className="mt-4 bg-red-primary hover:bg-red-secondary"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuPage;