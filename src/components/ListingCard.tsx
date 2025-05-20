
import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Heart } from "lucide-react";

export interface ListingProps {
  id: string;
  title: string;
  price: number;
  location: string;
  imageUrl: string;
  category: string;
  featured?: boolean;
  date: string;
}

const ListingCard: React.FC<ListingProps> = ({
  title,
  price,
  location,
  imageUrl,
  category,
  featured,
  date,
}) => {
  return (
    <Card className="overflow-hidden h-full hover:shadow-md transition-shadow duration-200 relative">
      {featured && (
        <Badge className="absolute top-2 left-2 bg-marketplace-orange z-10">
          Featured
        </Badge>
      )}
      
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
        <button className="absolute top-2 right-2 bg-white p-2 rounded-full hover:bg-gray-100">
          <Heart className="h-5 w-5 text-marketplace-gray-dark" />
        </button>
      </div>
      
      <CardContent className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="font-bold text-lg line-clamp-2 mb-1">{title}</h3>
        </div>
        
        <p className="text-xl font-bold text-marketplace-blue-dark">
          ${price.toLocaleString()}
        </p>
        
        <div className="flex items-center text-marketplace-gray mt-2 text-sm">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{location}</span>
        </div>
      </CardContent>
      
      <CardFooter className="px-4 py-3 bg-gray-50 text-sm text-marketplace-gray flex justify-between">
        <span>{category}</span>
        <span>{date}</span>
      </CardFooter>
    </Card>
  );
};

export default ListingCard;
