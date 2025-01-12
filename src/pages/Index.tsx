import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-b from-primary/5 to-secondary/5">
      <div className="max-w-md w-full text-center animate-fadeIn">
        <h1 className="text-4xl font-bold mb-6 text-primary">IClean</h1>
        <p className="text-lg mb-8 text-gray-600">
          Professional cleaning services at your fingertips
        </p>
        <div className="space-y-4">
          <Button 
            onClick={() => navigate('/home')}
            className="w-full bg-primary hover:bg-primary/90"
          >
            Get Started
          </Button>
          <Button 
            variant="outline"
            onClick={() => navigate('/register-property')}
            className="w-full"
          >
            Register Property
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;