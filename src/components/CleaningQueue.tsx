import React, { useState } from 'react';
import { Clock, Search, Sparkles, X, Check, User2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const CleaningQueue = () => {
  const { toast } = useToast();
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  // Mock data - in a real app this would come from a backend
  const cleanings = [
    {
      id: '1',
      property: 'My Home',
      status: 'searching',
      type: 'standard',
      requestedAt: '2024-02-20T10:00:00Z',
      scheduledFor: '2024-02-22T14:00:00Z',
      price: 80,
      address: '123 Main St, City',
      notes: 'Please pay special attention to the kitchen.',
    },
    {
      id: '2',
      property: 'Beach House',
      status: 'pending_approval',
      type: 'deep',
      requestedAt: '2024-02-20T09:30:00Z',
      scheduledFor: '2024-02-23T10:00:00Z',
      cleaner: {
        name: 'John Doe',
        rating: 4.8,
        completedJobs: 156,
        photo: null,
      },
      estimatedArrival: '10:45 AM',
      price: 120,
      address: '456 Beach Ave, Coast City',
      notes: 'Include window cleaning.',
    },
  ];

  const handleCancel = (cleaningId: string) => {
    toast({
      title: "Cleaning Cancelled",
      description: "The cleaning request has been cancelled.",
    });
  };

  const handleApprove = (cleaningId: string) => {
    toast({
      title: "Cleaner Approved",
      description: "The cleaner has been approved for this job.",
    });
  };

  const toggleExpand = (cleaningId: string) => {
    setExpandedCard(expandedCard === cleaningId ? null : cleaningId);
  };

  return (
    <div className="mt-6 space-y-4">
      {cleanings.map((cleaning) => (
        <Card
          key={cleaning.id}
          className={`p-4 space-y-2 cursor-pointer transition-all duration-300 ${
            expandedCard === cleaning.id ? 'ring-2 ring-primary' : ''
          }`}
          onClick={() => toggleExpand(cleaning.id)}
        >
          <div className="flex justify-between items-center">
            <h3 className="font-semibold">{cleaning.property}</h3>
            <span className="text-sm text-gray-500">
              {new Date(cleaning.scheduledFor).toLocaleDateString()}
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            {cleaning.type === 'standard' ? (
              <Clock className="w-4 h-4 text-primary" />
            ) : (
              <Sparkles className="w-4 h-4 text-secondary" />
            )}
            <span className="text-sm capitalize">{cleaning.type} Cleaning</span>
          </div>

          {expandedCard === cleaning.id && (
            <div className="mt-4 space-y-4 border-t pt-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-500">Address</p>
                  <p>{cleaning.address}</p>
                </div>
                <div>
                  <p className="text-gray-500">Price</p>
                  <p className="font-semibold">${cleaning.price}</p>
                </div>
                <div>
                  <p className="text-gray-500">Date & Time</p>
                  <p>{new Date(cleaning.scheduledFor).toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-gray-500">Notes</p>
                  <p>{cleaning.notes}</p>
                </div>
              </div>

              {cleaning.status === 'searching' ? (
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Search className="w-4 h-4 text-orange-500 animate-pulse" />
                    <span className="text-orange-500">Searching for cleaners...</span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCancel(cleaning.id);
                    }}
                  >
                    <X className="w-4 h-4 mr-2" />
                    Cancel
                  </Button>
                </div>
              ) : cleaning.status === 'pending_approval' && cleaning.cleaner ? (
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                      <User2 className="w-6 h-6 text-gray-400" />
                    </div>
                    <div>
                      <p className="font-semibold">{cleaning.cleaner.name}</p>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <span>⭐ {cleaning.cleaner.rating}</span>
                        <span>•</span>
                        <span>{cleaning.cleaner.completedJobs} jobs</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      className="flex-1"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleApprove(cleaning.id);
                      }}
                    >
                      <Check className="w-4 h-4 mr-2" />
                      Approve Cleaner
                    </Button>
                    <Button
                      variant="outline"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCancel(cleaning.id);
                      }}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ) : null}
            </div>
          )}
        </Card>
      ))}
    </div>
  );
};

export default CleaningQueue;