
import { ReactNode } from 'react';

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative';
  icon: ReactNode;
}

const MetricCard = ({ title, value, change, changeType, icon }: MetricCardProps) => {
  return (
    <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <div className="flex items-center justify-between mb-4">
        <div className="text-gray-400 text-2xl">{icon}</div>
        <div className={`px-2 py-1 rounded-full text-xs ${changeType === 'positive' ? 'bg-green-900/50 text-green-400' : 'bg-red-900/50 text-red-400'}`}>
          {change}
        </div>
      </div>
      <div className="space-y-2">
        <h3 className="text-gray-400 text-sm font-medium">{title}</h3>
        <div className="flex items-end justify-between">
          <span className="text-2xl font-bold text-white animate-fade-in">{value}</span>
        </div>
      </div>
    </div>
  );
};

export default MetricCard;
