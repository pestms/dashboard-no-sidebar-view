
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { name: 'Downtown District', value: 89, color: '#3B82F6' },
  { name: 'Business District', value: 76, color: '#10B981' },
  { name: 'Residential Zone', value: 134, color: '#F59E0B' },
  { name: 'Suburban Area', value: 98, color: '#EF4444' },
  { name: 'Medical District', value: 45, color: '#8B5CF6' },
  { name: 'Shopping Area', value: 67, color: '#06B6D4' },
];

const LeadSourcesChart = () => {
  const totalLeads = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-white text-lg font-semibold">Lead Sources by Area</h3>
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
            <span className="text-2xl font-bold text-white">{totalLeads}</span>
            <span className="text-sm text-gray-400">Total Leads</span>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {data.map((item, index) => {
          const percentage = Math.round((item.value / totalLeads) * 100);
          return (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: item.color }}
                ></div>
                <span className="text-gray-300 text-sm">{item.name}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-white font-medium">{item.value}</span>
                <span className="text-gray-400 text-sm">({percentage}%)</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 p-3 bg-gray-800 rounded-lg">
        <div className="text-sm text-gray-400 mb-1">Top Performing Area</div>
        <div className="text-green-400 font-medium">Residential Zone - 134 leads (26%)</div>
      </div>

      <button className="w-full mt-4 text-center py-2 text-gray-400 hover:text-white transition-colors text-sm border border-gray-700 rounded-lg hover:border-gray-600">
        View Area Analytics
      </button>
    </div>
  );
};

export default LeadSourcesChart;
