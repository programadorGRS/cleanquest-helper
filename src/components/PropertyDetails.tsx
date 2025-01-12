import React from 'react';
import { Button } from "@/components/ui/button";
import { Building, Home, MapPin, Clock, Thermometer, Star } from 'lucide-react';

interface PropertyDetailsProps {
  property?: {
    id: string;
    name: string;
    address: string;
    image?: string;
    type: 'house' | 'company';
    description?: string;
    rooms?: number;
    bathrooms?: number;
    area?: string;
    rating?: number;
    temperature?: string;
    estimatedTime?: string;
  };
  onRequestCleaning: () => void;
  onBack: () => void;
}

const PropertyDetails = ({ property, onRequestCleaning, onBack }: PropertyDetailsProps) => {
  if (!property) return null;

  return (
    <div className="space-y-4 animate-fadeIn">
      <div className="relative h-[400px] rounded-2xl overflow-hidden">
        {property.image ? (
          <img 
            src={property.image} 
            alt={property.name} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-100 flex items-center justify-center">
            {property.type === 'house' ? (
              <Home className="w-16 h-16 text-gray-400" />
            ) : (
              <Building className="w-16 h-16 text-gray-400" />
            )}
          </div>
        )}
        <button 
          onClick={onBack}
          className="absolute top-4 left-4 w-10 h-10 rounded-full bg-black/30 text-white flex items-center justify-center hover:bg-black/50 transition-colors"
        >
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
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
        <button 
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/30 text-white flex items-center justify-center hover:bg-black/50 transition-colors"
        >
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
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent text-white">
          <h2 className="text-2xl font-semibold mb-2">{property.name}</h2>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            <span>{property.address}</span>
          </div>
          {property.rating && (
            <div className="flex items-center gap-2 mt-2">
              <Star className="w-5 h-5 fill-current text-yellow-400" />
              <span>{property.rating.toFixed(1)}</span>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {property.estimatedTime && (
          <div className="flex items-center gap-2 p-4 bg-gray-50 rounded-xl">
            <Clock className="w-5 h-5 text-gray-500" />
            <div>
              <p className="text-sm text-gray-500">Time</p>
              <p className="font-medium">{property.estimatedTime}</p>
            </div>
          </div>
        )}
        {property.temperature && (
          <div className="flex items-center gap-2 p-4 bg-gray-50 rounded-xl">
            <Thermometer className="w-5 h-5 text-gray-500" />
            <div>
              <p className="text-sm text-gray-500">Temperature</p>
              <p className="font-medium">{property.temperature}</p>
            </div>
          </div>
        )}
        {property.rating && (
          <div className="flex items-center gap-2 p-4 bg-gray-50 rounded-xl">
            <Star className="w-5 h-5 text-gray-500" />
            <div>
              <p className="text-sm text-gray-500">Rating</p>
              <p className="font-medium">{property.rating.toFixed(1)}</p>
            </div>
          </div>
        )}
      </div>

      {property.description && (
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Overview</h3>
          <p className="text-gray-600">{property.description}</p>
        </div>
      )}

      <Button 
        onClick={onRequestCleaning}
        className="w-full h-14 text-lg font-medium bg-black hover:bg-black/90 text-white rounded-xl"
      >
        Request Cleaning
      </Button>
    </div>
  );
};

export default PropertyDetails;