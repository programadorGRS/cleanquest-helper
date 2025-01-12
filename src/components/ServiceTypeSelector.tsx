import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Brush } from 'lucide-react';

interface ServiceTypeSelectorProps {
  onSelect: (type: 'standard' | 'deep') => void;
}

const ServiceTypeSelector = ({ onSelect }: ServiceTypeSelectorProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      <Card 
        className="cursor-pointer hover:shadow-lg transition-shadow"
        onClick={() => onSelect('standard')}
      >
        <CardContent className="flex flex-col items-center p-6">
          <Brush className="w-12 h-12 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Standard Cleaning</h3>
          <p className="text-center text-gray-500">
            Regular maintenance cleaning for your property
          </p>
        </CardContent>
      </Card>

      <Card 
        className="cursor-pointer hover:shadow-lg transition-shadow"
        onClick={() => onSelect('deep')}
      >
        <CardContent className="flex flex-col items-center p-6">
          <Sparkles className="w-12 h-12 text-secondary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Deep Cleaning</h3>
          <p className="text-center text-gray-500">
            Thorough cleaning for a complete refresh
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ServiceTypeSelector;