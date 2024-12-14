import { Investment, UserInvestment } from '../types';

export const mockInvestments: Investment[] = [
  {
    id: '1',
    businessName: 'Green Energy Solutions',
    description: 'Innovative solar panel technology for residential buildings',
    targetAmount: 500000,
    currentAmount: 275000,
    returnRate: 12,
    minInvestment: 1000,
    duration: 24,
    risk: 'Medium',
    category: 'Clean Energy',
    imageUrl: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: '2',
    businessName: 'Urban Farming Co',
    description: 'Vertical farming solutions for urban areas',
    targetAmount: 300000,
    currentAmount: 150000,
    returnRate: 15,
    minInvestment: 500,
    duration: 18,
    risk: 'Medium',
    category: 'Agriculture',
    imageUrl: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: '3',
    businessName: 'Tech Education Hub',
    description: 'Online platform for affordable tech education',
    targetAmount: 250000,
    currentAmount: 200000,
    returnRate: 10,
    minInvestment: 250,
    duration: 12,
    risk: 'Low',
    category: 'Education',
    imageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80'
  }
];

export const mockUserInvestments: UserInvestment[] = [
  {
    id: '1',
    investmentId: '1',
    amount: 2000,
    date: '2024-03-15',
    status: 'active',
    returns: 240
  },
  {
    id: '2',
    investmentId: '2',
    amount: 1500,
    date: '2024-03-10',
    status: 'pending',
    returns: 0
  }
];