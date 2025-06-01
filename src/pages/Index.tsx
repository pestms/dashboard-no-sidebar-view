
import MetricCard from '@/components/MetricCard';
import LeadSourcesChart from '@/components/LeadSourcesChart';
import RevenueChart from '@/components/RevenueChart';
import CompanyTable from '@/components/CompanyTable';
import { Search, Dashboard, Task, Projects, Customers, Company } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="border-b border-gray-800 p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <div>
                <h1 className="text-sm font-semibold">Acme Inc</h1>
                <p className="text-xs text-gray-400">Enterprise</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-purple-400">
              <Dashboard className="w-4 h-4" />
              <span className="text-sm">Dashboard</span>
            </div>
            <button className="px-4 py-2 bg-gray-800 rounded-lg text-sm hover:bg-gray-700 transition-colors">
              Import
            </button>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">Welcome Back, John!</h2>
          <p className="text-gray-400">Today you have <span className="text-white font-medium">3 new leads</span>, <span className="text-white font-medium">2 follow-ups due</span></p>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard
            title="Product Revenue"
            value="$10,312.10"
            change="+20%($2,423)"
            changeType="positive"
            icon={<div className="w-2 h-2 bg-green-400 rounded-full"></div>}
          />
          <MetricCard
            title="Total Sales Product"
            value="224"
            change="+20%(84)"
            changeType="positive"
            icon={<div className="w-2 h-2 bg-blue-400 rounded-full"></div>}
          />
          <MetricCard
            title="Total Deals"
            value="3,612"
            change="-15%(134)"
            changeType="negative"
            icon={<div className="w-2 h-2 bg-orange-400 rounded-full"></div>}
          />
          <MetricCard
            title="Conversion Rate"
            value="67%"
            change="+5%"
            changeType="positive"
            icon={<div className="w-2 h-2 bg-purple-400 rounded-full"></div>}
          />
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <LeadSourcesChart />
          <RevenueChart />
        </div>

        {/* Company Table */}
        <CompanyTable />
      </div>
    </div>
  );
};

export default Index;
