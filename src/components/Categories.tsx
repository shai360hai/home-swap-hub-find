
import React from 'react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Car, Home, Tag, User, Image, LayoutGrid, Bookmark, Phone } from "lucide-react";

const categories = [
  { name: "Real Estate", icon: Home },
  { name: "Vehicles", icon: Car },
  { name: "Electronics", icon: Phone },
  { name: "Furniture", icon: Image },
  { name: "Jobs", icon: User },
  { name: "Services", icon: Tag },
  { name: "Fashion", icon: Bookmark },
  { name: "More", icon: LayoutGrid },
];

const Categories = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-marketplace-gray-dark">Browse Categories</h2>
        <Button variant="outline" size="sm">See All</Button>
      </div>

      {/* Desktop Categories */}
      <div className="hidden md:block overflow-hidden">
        <Tabs defaultValue={categories[0].name} className="w-full">
          <TabsList className="w-full justify-start overflow-x-auto">
            {categories.map((category) => (
              <TabsTrigger
                key={category.name}
                value={category.name}
                className="py-2 px-4 data-[state=active]:bg-marketplace-blue data-[state=active]:text-white"
              >
                <category.icon className="h-5 w-5 mr-2" />
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      {/* Mobile Categories (scrollable) */}
      <div className="md:hidden -mx-4">
        <div className="flex overflow-x-auto px-4 py-2 gap-3 scrollbar-hide">
          {categories.map((category) => (
            <Button
              key={category.name}
              variant="outline"
              className="flex-shrink-0 flex gap-2 items-center"
            >
              <category.icon className="h-5 w-5" />
              <span>{category.name}</span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
