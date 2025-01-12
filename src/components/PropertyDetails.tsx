import React from 'react';
import { Button } from "@/components/ui/button";
import { Home, Bath, Ruler, MapPin } from 'lucide-react';

interface PropertyDetailsProps {
  property?: {
    id: string;
    name: string;
    address: string;
    image?: string;
    rooms: number;
    bathrooms: number;
    area: string;
  };
  onRequestCleaning: () => void;
}

const PropertyDetails = ({ property, onRequestCleaning }: PropertyDetailsProps) => {
  if (!property) return null;

  return (
    <div className="space-y-4">
      <div className="relative h-48 rounded-lg overflow-hidden">
        {property.image ? (
          <img 
            src={property.image} 
            alt={property.name} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-100 flex items-center justify-center">
            <Home className="w-12 h-12 text-gray-400" />
          </div>
        )}
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold">{property.name}</h3>
          <div className="flex items-center text-gray-500 mt-1">
            <MapPin className="w-4 h-4 mr-1" />
            <span className="text-sm">{property.address}</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="flex items-center gap-2">
            <Home className="w-4 h-4 text-gray-500" />
            <span className="text-sm">{property.rooms} Rooms</span>
          </div>
          <div className="flex items-center gap-2">
            <Bath className="w-4 h-4 text-gray-500" />
            <span className="text-sm">{property.bathrooms} Bathrooms</span>
          </div>
          <div className="flex items-center gap-2">
            <Ruler className="w-4 h-4 text-gray-500" />
            <span className="text-sm">{property.area}</span>
          </div>
        </div>

        <Button 
          onClick={onRequestCleaning}
          className="w-full bg-primary hover:bg-primary/90"
        >
          Request Cleaning
        </Button>
      </div>
    </div>
  );
};

export default PropertyDetails;