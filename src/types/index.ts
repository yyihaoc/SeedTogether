export interface Investment {
  id: string;
  businessName: string;
  description: string;
  targetAmount: number;
  currentAmount: number;
  returnRate: number;
  minInvestment: number;
  duration: number;
  risk: 'Low' | 'Medium' | 'High';
  category: string;
  imageUrl: string;
}

export interface UserInvestment {
  id: string;
  investmentId: string;
  amount: number;
  date: string;
  status: 'pending' | 'active' | 'completed';
  returns: number;
}