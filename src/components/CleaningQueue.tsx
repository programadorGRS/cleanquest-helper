import React from 'react';
import { Clock, Search, Sparkles } from 'lucide-react';

const CleaningQueue = () => {
  // Mock data - in a real app this would come from a backend
  const cleanings = [
    {
      id: '1',
      property: 'My Home',
      status: 'searching',
      type: 'standard',
      requestedAt: '2024-02-20T10:00:00Z',
    },
    {
      id: '2',
      property: 'Beach House',
      status: 'assigned',
      type: 'deep',
      requestedAt: '2024-02-20T09:30:00Z',
      cleaner: 'John Doe',
      estimatedArrival: '10:45 AM',
    },
  ];

  return (
    <div className="mt-6 space-y-4">
      {cleanings.map((cleaning) => (
        <div
          key={cleaning.id}
          className="bg-white rounded-lg border p-4 space-y-2"
        >
          <div className="flex justify-between items-center">
            <h3 className="font-semibold">{cleaning.property}</h3>
            <span className="text-sm text-gray-500">
              {new Date(cleaning.requestedAt).toLocaleTimeString()}
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
          <div className="flex items-center gap-2 text-sm">
            {cleaning.status === 'searching' ? (
              <>
                <Search className="w-4 h-4 text-orange-500 animate-pulse" />
                <span className="text-orange-500">Searching for cleaners...</span>
              </>
            ) : (
              <>
                <div className="flex-1">
                  <p className="text-green-600">Cleaner assigned: {cleaning.cleaner}</p>
                  <p className="text-sm text-gray-500">
                    Estimated arrival: {cleaning.estimatedArrival}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CleaningQueue;