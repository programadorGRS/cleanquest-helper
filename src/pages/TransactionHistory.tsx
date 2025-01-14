import React from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TransactionHistory = () => {
  const navigate = useNavigate();

  const transactions = [
    { date: '2024-02-20', description: 'Cleaning Service', amount: -80, type: 'expense' },
    { date: '2024-02-15', description: 'Added Funds', amount: 200, type: 'deposit' },
    { date: '2024-02-10', description: 'Cleaning Service', amount: -70, type: 'expense' },
    { date: '2024-02-05', description: 'Added Funds', amount: 150, type: 'deposit' },
    { date: '2024-02-01', description: 'Cleaning Service', amount: -90, type: 'expense' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <Card className="max-w-2xl mx-auto p-6">
        <div className="flex items-center gap-4 mb-6">
          <Button variant="ghost" onClick={() => navigate('/home')}>
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <h1 className="text-2xl font-bold">Transaction History</h1>
        </div>

        <div className="space-y-4">
          {transactions.map((transaction, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-4 bg-gray-50 rounded-lg"
            >
              <div>
                <p className="font-medium">{transaction.description}</p>
                <p className="text-sm text-gray-500">{transaction.date}</p>
              </div>
              <span className={`font-semibold ${
                transaction.type === 'deposit' ? 'text-green-600' : 'text-red-600'
              }`}>
                {transaction.type === 'deposit' ? '+' : '-'}
                ${Math.abs(transaction.amount).toFixed(2)}
              </span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default TransactionHistory;