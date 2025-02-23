import React, { useState } from 'react';
import PropertyCard from '../components/PropertyCard';
import ServiceTypeSelector from '../components/ServiceTypeSelector';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { Plus, User2, Wallet, FileText, Lock } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import CleaningQueue from '../components/CleaningQueue';
import PropertyDetails from '../components/PropertyDetails';

const Home = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedProperty, setSelectedProperty] = useState<string | null>(null);
  const [showPropertyDetails, setShowPropertyDetails] = useState(false);
  const [showServiceSelector, setShowServiceSelector] = useState(false);

  // Mock data - in a real app this would come from a backend
  const properties = [
    {
      id: '1',
      name: 'My Home',
      address: '123 Main St, City',
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04',
      type: 'house' as const,
      rooms: 3,
      bathrooms: 2,
      area: '150m²',
      rating: 4.5,
      temperature: '72°F',
      estimatedTime: '2.5 hours',
      description: 'A beautiful modern home with a spacious garden.'
    },
    {
      id: '2',
      name: 'Beach House',
      address: '456 Ocean Ave, Beach City',
      type: 'house' as const,
      rooms: 4,
      bathrooms: 3,
      area: '200m²',
      rating: 4.8,
      temperature: '75°F',
      estimatedTime: '3 hours',
      description: 'Luxurious beach house with ocean views.'
    },
  ];

  const handleServiceSelect = (type: 'standard' | 'deep') => {
    toast({
      title: "Service Requested",
      description: `Looking for available cleaners for ${type} cleaning...`,
    });
    setShowServiceSelector(false);
    setShowPropertyDetails(false);
  };

  const handlePropertyClick = (propertyId: string) => {
    setSelectedProperty(propertyId);
    setShowPropertyDetails(true);
  };

  const handleEditProperty = (propertyId: string) => {
    navigate(`/register-property?edit=${propertyId}`);
  };

  const handleRequestCleaning = () => {
    setShowPropertyDetails(false);
    setShowServiceSelector(true);
  };

  const handleBack = () => {
    setShowPropertyDetails(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 animate-fadeIn">
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">My Properties</h1>
          <div className="flex gap-2">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">
                  <User2 className="w-4 h-4 mr-2" />
                  Profile
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Profile Settings</SheetTitle>
                </SheetHeader>
                <div className="mt-6 space-y-2">
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start" 
                    onClick={() => navigate('/edit-profile')}
                  >
                    <User2 className="w-4 h-4 mr-2" />
                    Edit Profile
                  </Button>
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start"
                    onClick={() => navigate('/balance')}
                  >
                    <Wallet className="w-4 h-4 mr-2" />
                    Balance
                  </Button>
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start"
                    onClick={() => navigate('/transaction-history')}
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    Transaction History
                  </Button>
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start"
                    onClick={() => navigate('/change-password')}
                  >
                    <Lock className="w-4 h-4 mr-2" />
                    Change Password
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">View Queue</Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Cleaning Queue</SheetTitle>
                </SheetHeader>
                <CleaningQueue />
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto p-4">
        <div className="flex justify-end mb-6">
          <Button
            onClick={() => navigate('/register-property')}
            className="bg-primary hover:bg-primary/90"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Property
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {properties.map((property) => (
            <PropertyCard
              key={property.id}
              name={property.name}
              address={property.address}
              image={property.image}
              type={property.type}
              rating={property.rating}
              onSelect={() => handlePropertyClick(property.id)}
              onEdit={() => handleEditProperty(property.id)}
            />
          ))}
        </div>
      </div>

      {/* Property Details Dialog */}
      <Dialog open={showPropertyDetails} onOpenChange={setShowPropertyDetails}>
        <DialogContent className="sm:max-w-[600px]">
          <PropertyDetails
            property={properties.find(p => p.id === selectedProperty)}
            onRequestCleaning={handleRequestCleaning}
            onBack={handleBack}
          />
        </DialogContent>
      </Dialog>

      {/* Service Type Selection Dialog */}
      <Dialog open={showServiceSelector} onOpenChange={setShowServiceSelector}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Select Service Type</DialogTitle>
          </DialogHeader>
          <ServiceTypeSelector onSelect={handleServiceSelect} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Home;