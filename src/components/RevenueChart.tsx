
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', revenue: 180000, target: 200000 },
  { month: 'Feb', revenue: 220000, target: 210000 },
  { month: 'Mar', revenue: 284000, target: 250000 },
  { month: 'Apr', revenue: 190000, target: 230000 },
  { month: 'May', revenue: 250000, target: 240000 },
  { month: 'Jun', revenue: 210000, target: 220000 },
];

const RevenueChart = () => {
  return (
    <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
      <h3 className="text-white text-lg font-semibold mb-2">Revenue Flow</h3>
      <div className="mb-6">
        <div className="text-2xl font-bold text-white">$284,000</div>
        <div className="text-sm text-gray-400">Total Revenue (Last 6 Months)</div>
        <div className="flex items-center mt-2">
          <span className="text-yellow-400 text-sm">🏆 Best Performing Month</span>
        </div>
        <div className="text-xs text-gray-500 mt-1">
          March is the highest revenue for the last 6 months with $51,500
        </div>
      </div>

      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <XAxis 
            dataKey="month" 
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#9CA3AF', fontSize: 12 }}
          />
          <YAxis hide />
          <Bar dataKey="revenue" fill="#EC4899" radius={[4, 4, 0, 0]} />
          <Bar dataKey="target" fill="#3B82F6" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueChart;
