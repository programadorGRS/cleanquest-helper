import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, Wallet, Clock, Lock, Edit2 } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const UserProfile = () => {
  const { toast } = useToast();
  
  const handlePasswordChange = () => {
    toast({
      title: "Password Change Requested",
      description: "Check your email for password reset instructions.",
    });
  };

  const handleProfileUpdate = () => {
    toast({
      title: "Profile Updated",
      description: "Your profile information has been saved.",
    });
  };

  return (
    <div className="space-y-6 p-4 max-w-2xl mx-auto">
      <Card className="p-6 space-y-6">
        <div className="flex items-center gap-4">
          <div className="relative">
            <Avatar className="w-20 h-20">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback>
                <User className="w-10 h-10 text-gray-400" />
              </AvatarFallback>
            </Avatar>
            <Button 
              size="icon" 
              variant="outline" 
              className="absolute bottom-0 right-0 rounded-full"
              onClick={() => toast({
                title: "Upload Photo",
                description: "Photo upload functionality coming soon.",
              })}
            >
              <Edit2 className="w-4 h-4" />
            </Button>
          </div>
          <div>
            <h2 className="text-2xl font-bold">John Doe</h2>
            <p className="text-gray-500">john.doe@example.com</p>
          </div>
        </div>
        
        <div className="space-y-4">
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" defaultValue="John Doe" />
          </div>
          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" defaultValue="+1 234 567 890" />
          </div>
          <div>
            <Label htmlFor="address">Address</Label>
            <Input id="address" defaultValue="123 Main St, City" />
          </div>
          <Button 
            onClick={handleProfileUpdate}
            className="w-full bg-[#1B1B1B] hover:bg-[#1B1B1B]/90"
          >
            Save Changes
          </Button>
        </div>

        <div className="border-t pt-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Wallet className="w-5 h-5" />
              <span className="font-semibold">Current Balance</span>
            </div>
            <span className="text-xl font-bold">$250.00</span>
          </div>
        </div>

        <div className="border-t pt-6">
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5" />
            Transaction History
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