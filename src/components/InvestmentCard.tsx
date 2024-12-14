import React from 'react';
import { ArrowUpRight, TrendingUp, Clock, AlertTriangle } from 'lucide-react';
import { Investment } from '../types';

interface Props {
  investment: Investment;
  onInvest: (id: string) => void;
}

export default function InvestmentCard({ investment, onInvest }: Props) {
  const progress = (investment.currentAmount / investment.targetAmount) * 100;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="h-48 overflow-hidden">
        <img
          src={investment.imageUrl}
          alt={investment.businessName}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold text-gray-900">{investment.businessName}</h3>
          <span className={`px-3 py-1 rounded-full text-sm font-medium
            ${investment.risk === 'Low' ? 'bg-green-100 text-green-800' :
            investment.risk === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
            'bg-red-100 text-red-800'}`}>
            {investment.risk} Risk
          </span>
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-2">{investment.description}</p>
        
        <div className="space-y-4">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Progress</span>
            <span className="font-medium">{progress.toFixed(1)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-blue-600" />
              <div>
                <p className="text-gray-500">Return Rate</p>
                <p className="font-medium">{investment.returnRate}% p.a.</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-blue-600" />
              <div>
                <p className="text-gray-500">Duration</p>
                <p className="font-medium">{investment.duration} months</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-between items-center pt-4">
            <div>
              <p className="text-gray-500 text-sm">Min. Investment</p>
              <p className="font-semibold">${investment.minInvestment.toLocaleString()}</p>
            </div>
            <button
              onClick={() => onInvest(investment.id)}
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Invest Now
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}