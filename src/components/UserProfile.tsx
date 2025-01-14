import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { User, Wallet, Clock, Lock } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const UserProfile = () => {
  const { toast } = useToast();
  
  const handlePasswordChange = () => {
    toast({
      title: "Password Change Requested",
      description: "Check your email for password reset instructions.",
    });
  };

  return (
    <div className="space-y-6 p-4 max-w-2xl mx-auto">
      <Card className="p-6 space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center">
            <User className="w-10 h-10 text-gray-400" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">John Doe</h2>
            <p className="text-gray-500">john.doe@example.com</p>
          </div>
        </div>
        
        <div className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" defaultValue="John Doe" />
          </div>
          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" defaultValue="+1 234 567 890" />
          </div>
        </div>

        <div className="border-t pt-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Wallet className="w-5 h-5" />
              <span className="font-semibold">Balance</span>
            </div>
            <span className="text-xl font-bold">$250.00</span>
          </div>
        </div>

        <div className="border-t pt-6">
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5" />
            Recent Transactions
          </h3>
          <div className="space-y-3">
            {[
              { date: '2024-02-20', description: 'Cleaning Service', amount: -80 },
              { date: '2024-02-15', description: 'Deposit', amount: 200 },
              { date: '2024-02-10', description: 'Cleaning Service', amount: -70 },
            ].map((transaction, index) => (
              <div key={index} className="flex justify-between items-center text-sm">
                <div>
                  <p className="font-medium">{transaction.description}</p>
                  <p className="text-gray-500">{transaction.date}</p>
                </div>
                <span className={transaction.amount > 0 ? 'text-green-600' : 'text-red-600'}>
                  ${Math.abs(transaction.amount).toFixed(2)}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t pt-6">
          <Button
            onClick={handlePasswordChange}
            variant="outline"
            className="w-full flex items-center gap-2"
          >
            <Lock className="w-4 h-4" />
            Change Password
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default UserProfile;