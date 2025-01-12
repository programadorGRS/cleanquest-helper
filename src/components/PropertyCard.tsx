import React from 'react';
import { Card } from "@/components/ui/card";
import { Building, Home, MapPin, Star } from 'lucide-react';

interface PropertyCardProps {
  name: string;
  address: string;
  image?: string;
  rating?: number;
  type: 'house' | 'company';
  onSelect: () => void;
}

const PropertyCard = ({ name, address, image, rating = 0, type, onSelect }: PropertyCardProps) => {
  return (
    <Card 
      className="group relative overflow-hidden rounded-2xl hover:shadow-lg transition-all duration-300 cursor-pointer animate-fadeIn"
      onClick={onSelect}
    >
      <div className="relative h-[280px]">
        {image ? (
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-100 flex items-center justify-center">
            {type === 'house' ? (
              <Home className="w-12 h-12 text-gray-400" />
            ) : (
              <Building className="w-12 h-12 text-gray-400" />
            )}
          </div>
        )}
        <div className="absolute top-4 right-4">
          <button className="text-white hover:text-primary transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
          </button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent text-white">
          <h3 className="font-semibold text-xl mb-1">{name}</h3>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">{address}</span>
          </div>
          {rating > 0 && (
            <div className="flex items-center gap-1 mt-1">
              <Star className="w-4 h-4 fill-current text-yellow-400" />
              <span className="text-sm">{rating.toFixed(1)}</span>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

export default PropertyCard;