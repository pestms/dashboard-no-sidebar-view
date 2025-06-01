
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const data = [
  { month: 'Jan', conversionRate: 42, responseTime: 2.3 },
  { month: 'Feb', conversionRate: 37, responseTime: 1.8 },
  { month: 'Mar', conversionRate: 40, responseTime: 2.1 },
  { month: 'Apr', conversionRate: 41, responseTime: 1.9 },
  { month: 'May', conversionRate: 38, responseTime: 2.0 },
  { month: 'Jun', conversionRate: 43, responseTime: 1.7 },
];

const ConversionChart = () => {
  return (
    <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
      <h3 className="text-white text-lg font-semibold mb-4">Conversion Rate & Response Time</h3>
      
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
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
              name === 'conversionRate' ? `${value}%` : `${value}h`,
              name === 'conversionRate' ? 'Conversion Rate' : 'Avg Response Time'
            ]}
          />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="conversionRate" 
            stroke="#10B981" 
            strokeWidth={2}
            dot={{ fill: '#10B981', strokeWidth: 2 }}
            name="Conversion Rate"
          />
          <Line 
            type="monotone" 
            dataKey="responseTime" 
            stroke="#F59E0B" 
            strokeWidth={2}
            dot={{ fill: '#F59E0B', strokeWidth: 2 }}
            name="Response Time (hrs)"
          />
        </LineChart>
      </ResponsiveContainer>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-green-400">40.2%</div>
          <div className="text-sm text-gray-400">Avg Conversion</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-yellow-400">2.0h</div>
          <div className="text-sm text-gray-400">Avg Response</div>
        </div>
      </div>
    </div>
  );
};

export default ConversionChart;
