import React, { useState } from 'react';
import PropertyCard from '../components/PropertyCard';
import ServiceTypeSelector from '../components/ServiceTypeSelector';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Home = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedProperty, setSelectedProperty] = useState<string | null>(null);

  // Mock data - in a real app this would come from a backend
  const properties = [
    {
      id: '1',
      name: 'My Home',
      address: '123 Main St, City',
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04',
    },
    {
      id: '2',
      name: 'Beach House',
      address: '456 Ocean Ave, Beach City',
    },
  ];

  const handleServiceSelect = (type: 'standard' | 'deep') => {
    toast({
      title: "Service Requested",
      description: `Looking for available cleaners for ${type} cleaning...`,
    });
    setSelectedProperty(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 animate-fadeIn">
      <div className="max-w-4xl mx-auto p-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">My Properties</h1>
          <Button
            onClick={() => navigate('/register-property')}
            className="bg-primary hover:bg-primary/90"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Property
          </Button>
        </div>

        {selectedProperty ? (
          <>
            <h2 className="text-xl font-semibold mb-4">Select Service Type</h2>
            <ServiceTypeSelector onSelect={handleServiceSelect} />
          </>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {properties.map((property) => (
              <PropertyCard
                key={property.id}
                name={property.name}
                address={property.address}
                image={property.image}
                onSelect={() => setSelectedProperty(property.id)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;