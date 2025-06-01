
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
    <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-gray-700 transition-all duration-200">
      <div className="flex items-center justify-between mb-4">
        <div className="text-gray-400 text-sm">{icon}</div>
      </div>
      <div className="space-y-2">
        <h3 className="text-gray-400 text-sm font-medium">{title}</h3>
        <div className="flex items-end justify-between">
          <span className="text-2xl font-bold text-white">{value}</span>
          <span className={`text-sm ${changeType === 'positive' ? 'text-green-400' : 'text-red-400'}`}>
            {change}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MetricCard;
