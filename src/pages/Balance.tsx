import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { ArrowLeft, CreditCard, Plus } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from 'react-router-dom';

const Balance = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleAddFunds = () => {
    toast({
      title: "Funds Added",
      description: "Your balance has been updated successfully.",
    });
  };

  const handleAddCard = () => {
    toast({
      title: "Coming Soon",
      description: "Credit card functionality will be available soon.",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <Card className="max-w-2xl mx-auto p-6">
        <div className="flex items-center gap-4 mb-6">
          <Button variant="ghost" onClick={() => navigate('/home')}>
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <h1 className="text-2xl font-bold">Balance</h1>
        </div>

        <div className="space-y-6">
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-500">Current Balance</p>
            <p className="text-4xl font-bold">$250.00</p>
          </div>

          <div className="space-y-4">
            <div>
              <Label htmlFor="amount">Add Funds</Label>
              <div className="flex gap-2">
                <Input id="amount" type="number" placeholder="Enter amount" />
                <Button onClick={handleAddFunds}>
                  <Plus className="w-4 h-4 mr-2" />
                  Add
                </Button>
              </div>
            </div>

            <div className="border-t pt-4">
              <h2 className="font-semibold mb-4">Payment Methods</h2>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={handleAddCard}
              >
                <CreditCard className="w-4 h-4 mr-2" />
                Add Credit Card
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Balance;