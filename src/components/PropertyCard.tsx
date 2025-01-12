import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home } from 'lucide-react';

interface PropertyCardProps {
  name: string;
  address: string;
  image?: string;
  onSelect: () => void;
}

const PropertyCard = ({ name, address, image, onSelect }: PropertyCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow animate-fadeIn">
      <CardContent className="p-0">
        <div className="relative h-48">
          {image ? (
            <img 
              src={image} 
              alt={name} 
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-100 flex items-center justify-center">
              <Home className="w-12 h-12 text-gray-400" />
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg">{name}</h3>
          <p className="text-sm text-gray-500">{address}</p>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button 
          onClick={onSelect}
          className="w-full bg-primary hover:bg-primary/90"
        >
          Request Cleaning
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PropertyCard;