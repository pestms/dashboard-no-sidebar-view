
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { month: 'Jan', revenue: 18500, contracts: 42, quotes: 58 },
  { month: 'Feb', revenue: 22100, contracts: 48, quotes: 65 },
  { month: 'Mar', revenue: 28400, contracts: 56, quotes: 72 },
  { month: 'Apr', revenue: 19200, contracts: 45, quotes: 61 },
  { month: 'May', revenue: 25800, contracts: 52, quotes: 68 },
  { month: 'Jun', revenue: 24750, contracts: 51, quotes: 69 },
];

const RevenueChart = () => {
  const totalRevenue = data.reduce((sum, item) => sum + item.revenue, 0);
  const totalContracts = data.reduce((sum, item) => sum + item.contracts, 0);

  return (
    <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
      <h3 className="text-white text-lg font-semibold mb-2">Revenue & Contract Flow</h3>
      <div className="mb-6">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <div className="text-2xl font-bold text-white">${(totalRevenue / 1000).toFixed(0)}K</div>
            <div className="text-sm text-gray-400">Total Revenue (6 Months)</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-400">{totalContracts}</div>
            <div className="text-sm text-gray-400">Active Contracts</div>
          </div>
        </div>
        <div className="flex items-center mt-2">
          <span className="text-green-400 text-sm">📈 March Best Month</span>
        </div>
        <div className="text-xs text-gray-500 mt-1">
          March had the highest revenue with $28.4K from 56 active contracts
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
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#1F2937', 
              border: '1px solid #374151',
              borderRadius: '8px',
              color: '#fff'
            }}
            formatter={(value, name) => [
              name === 'revenue' ? `$${value.toLocaleString()}` : value,
              name === 'revenue' ? 'Revenue' : name === 'contracts' ? 'Contracts' : 'Quotes'
            ]}
          />
          <Bar dataKey="revenue" fill="#10B981" radius={[4, 4, 0, 0]} />
          <Bar dataKey="contracts" fill="#3B82F6" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>

      <div className="flex items-center justify-center mt-4 space-x-6">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-500 rounded"></div>
          <span className="text-gray-400 text-sm">Revenue</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-blue-500 rounded"></div>
          <span className="text-gray-400 text-sm">Contracts</span>
        </div>
      </div>
    </div>
  );
};

export default RevenueChart;
