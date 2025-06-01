
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { name: 'Website', value: 1445, color: '#3B82F6' },
  { name: 'Paid Ads', value: 903, color: '#EF4444' },
  { name: 'Emails', value: 722, color: '#F59E0B' },
  { name: 'Referral', value: 451, color: '#10B981' },
];

const LeadSourcesChart = () => {
  return (
    <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-white text-lg font-semibold">Lead Sources Breakdown</h3>
      </div>
      
      <div className="flex items-center justify-center mb-6">
        <div className="relative">
          <ResponsiveContainer width={200} height={200}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={2}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex items-center justify-center flex-col">
            <span className="text-2xl font-bold text-white">3,612</span>
            <span className="text-sm text-gray-400">Total Leads</span>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {data.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: item.color }}
              ></div>
              <span className="text-gray-300 text-sm">{item.name}</span>
            </div>
            <span className="text-white font-medium">{item.value.toLocaleString()}</span>
          </div>
        ))}
      </div>

      <button className="w-full mt-6 text-center py-2 text-gray-400 hover:text-white transition-colors text-sm">
        More details
      </button>
    </div>
  );
};

export default LeadSourcesChart;
