import React from 'react';
import { Card } from "@/components/ui/card";
import { Building, Home, MapPin, Star, Pencil } from 'lucide-react';

interface PropertyCardProps {
  name: string;
  address: string;
  image?: string;
  rating?: number;
  type: 'house' | 'company';
  onSelect: () => void;
  onEdit: () => void;
}

const PropertyCard = ({ name, address, image, rating = 0, type, onSelect, onEdit }: PropertyCardProps) => {
  const handleEditClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onEdit();
  };

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
          <button 
            className="text-white hover:text-primary transition-colors"
            onClick={handleEditClick}
          >
            <Pencil className="w-6 h-6" />
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