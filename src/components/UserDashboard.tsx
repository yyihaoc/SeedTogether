import React from 'react';
import { TrendingUp, Clock, DollarSign } from 'lucide-react';
import { UserInvestment } from '../types';
import { mockInvestments } from '../data/mockData';

interface Props {
  investments: UserInvestment[];
}

export default function UserDashboard({ investments }: Props) {
  const totalInvested = investments.reduce((sum, inv) => sum + inv.amount, 0);
  const totalReturns = investments.reduce((sum, inv) => sum + inv.returns, 0);
  
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <DollarSign className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-gray-500">Total Invested</p>
              <p className="text-2xl font-semibold">${totalInvested.toLocaleString()}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-green-100 rounded-lg">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-gray-500">Total Returns</p>
              <p className="text-2xl font-semibold">${totalReturns.toLocaleString()}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-purple-100 rounded-lg">
              <Clock className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-gray-500">Active Investments</p>
              <p className="text-2xl font-semibold">{investments.length}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold">Your Investments</h2>
        </div>
        <div className="divide-y divide-gray-200">
          {investments.map((investment) => {
            const details = mockInvestments.find(i => i.id === investment.investmentId);
            return (
              <div key={investment.id} className="p-6 hover:bg-gray-50">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-gray-900">{details?.businessName}</h3>
                    <p className="text-sm text-gray-500">Invested on {new Date(investment.date).toLocaleDateString()}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium
                    ${investment.status === 'active' ? 'bg-green-100 text-green-800' :
                    investment.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-blue-100 text-blue-800'}`}>
                    {investment.status.charAt(0).toUpperCase() + investment.status.slice(1)}
                  </span>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500">Amount Invested</p>
                    <p className="font-medium">${investment.amount.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Current Returns</p>
                    <p className="font-medium">${investment.returns.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Return Rate</p>
                    <p className="font-medium">{details?.returnRate}% p.a.</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}