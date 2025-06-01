
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { service: 'Ant Control', leads: 45, revenue: 12600 },
  { service: 'Termite', leads: 32, revenue: 24800 },
  { service: 'Rodent', leads: 28, revenue: 18900 },
  { service: 'Cockroach', leads: 35, revenue: 15400 },
  { service: 'Bee Removal', leads: 18, revenue: 8200 },
  { service: 'General', leads: 52, revenue: 19600 },
];

const ServiceTypeChart = () => {
  return (
    <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
      <h3 className="text-white text-lg font-semibold mb-4">Service Type Performance</h3>
      
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
          <XAxis 
            dataKey="service" 
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#9CA3AF', fontSize: 10 }}
            angle={-45}
            textAnchor="end"
            height={60}
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
              name === 'leads' ? `${value} leads` : `$${value.toLocaleString()}`,
              name === 'leads' ? 'Leads' : 'Revenue'
            ]}
          />
          <Bar dataKey="leads" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>

      <div className="mt-4 text-center">
        <div className="text-sm text-gray-400">Most Popular: General Pest Control</div>
        <div className="text-sm text-gray-400">Highest Value: Termite Treatment</div>
      </div>
    </div>
  );
};

export default ServiceTypeChart;
