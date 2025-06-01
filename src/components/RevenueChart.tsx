
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const data = [
  { month: 'Jan', leads: 67, quotations: 42, contracts: 28 },
  { month: 'Feb', leads: 83, quotations: 48, contracts: 31 },
  { month: 'Mar', leads: 95, quotations: 56, contracts: 38 },
  { month: 'Apr', leads: 71, quotations: 45, contracts: 29 },
  { month: 'May', leads: 89, quotations: 52, contracts: 34 },
  { month: 'Jun', leads: 76, quotations: 51, contracts: 33 },
];

const RevenueChart = () => {
  const totalLeads = data.reduce((sum, item) => sum + item.leads, 0);
  const totalContracts = data.reduce((sum, item) => sum + item.contracts, 0);
  const conversionRate = Math.round((totalContracts / totalLeads) * 100);

  return (
    <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
      <h3 className="text-white text-lg font-semibold mb-2">Lead Conversion Flow</h3>
      <div className="mb-6">
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div>
            <div className="text-2xl font-bold text-blue-400">{totalLeads}</div>
            <div className="text-sm text-gray-400">Total Leads</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-yellow-400">{data.reduce((sum, item) => sum + item.quotations, 0)}</div>
            <div className="text-sm text-gray-400">Quotations</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-400">{totalContracts}</div>
            <div className="text-sm text-gray-400">Contracts</div>
          </div>
        </div>
        <div className="flex items-center mt-2">
          <span className="text-green-400 text-sm">📈 {conversionRate}% Conversion Rate</span>
        </div>
        <div className="text-xs text-gray-500 mt-1">
          March showed the highest conversion with 38 contracts from 95 leads
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
            formatter={(value, name) => [value, name === 'leads' ? 'Leads' : name === 'quotations' ? 'Quotations' : 'Contracts']}
          />
          <Legend />
          <Bar dataKey="leads" fill="#3B82F6" radius={[2, 2, 0, 0]} name="Leads" />
          <Bar dataKey="quotations" fill="#F59E0B" radius={[2, 2, 0, 0]} name="Quotations" />
          <Bar dataKey="contracts" fill="#10B981" radius={[2, 2, 0, 0]} name="Contracts" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueChart;
