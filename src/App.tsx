import React, { useState } from 'react';
import { Layout, Search } from 'lucide-react';
import InvestmentCard from './components/InvestmentCard';
import UserDashboard from './components/UserDashboard';
import { mockInvestments, mockUserInvestments } from './data/mockData';

function App() {
  const [showDashboard, setShowDashboard] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredInvestments = mockInvestments.filter(investment =>
    investment.businessName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    investment.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    investment.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleInvest = (id: string) => {
    alert(`Investment process started for opportunity ${id}`);
    // In a real app, this would open a modal or navigate to an investment flow
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">SeedTogether</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowDashboard(!showDashboard)}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
              >
                <Layout className="w-5 h-5" />
                {showDashboard ? 'View Opportunities' : 'Dashboard'}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {showDashboard ? (
          <UserDashboard investments={mockUserInvestments} />
        ) : (
          <>
            <div className="mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search investments by name, description, or category..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredInvestments.map((investment) => (
                <InvestmentCard
                  key={investment.id}
                  investment={investment}
                  onInvest={handleInvest}
                />
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default App;