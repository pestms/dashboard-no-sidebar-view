import MetricCard from '@/components/MetricCard';
import LeadSourcesChart from '@/components/LeadSourcesChart';
import RevenueChart from '@/components/RevenueChart';
import ConversionChart from '@/components/ConversionChart';
import ServiceTypeChart from '@/components/ServiceTypeChart';
import CompanyTable from '@/components/CompanyTable';
import { Search, BarChart3, CheckSquare, FolderOpen, Users, Building2, TrendingUp, DollarSign, Target, Percent, FileText, Shield, Bug } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="border-b border-gray-800 p-6 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center animate-pulse">
                <Shield className="w-4 h-4 text-white" />
              </div>
              <div>
                <h1 className="text-sm font-semibold">PestGuard Pro</h1>
                <p className="text-xs text-gray-400">Pest Control CRM</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-green-400">
              <BarChart3 className="w-4 h-4" />
              <span className="text-sm">Dashboard</span>
            </div>
            <button className="px-4 py-2 bg-gray-800 rounded-lg text-sm hover:bg-gray-700 transition-all duration-200 hover:scale-105">
              Import Leads
            </button>
          </div>
        </div>

        <div className="animate-fade-in">
          <h2 className="text-2xl font-bold mb-2">Welcome Back, Sarah!</h2>
          <p className="text-gray-400">Today you have <span className="text-white font-medium">8 new leads</span>, <span className="text-white font-medium">3 quotes pending</span>, and <span className="text-white font-medium">2 contracts to review</span></p>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard
            title="Monthly Revenue"
            value="$24,750"
            change="+18%($3,600)"
            changeType="positive"
            icon={<DollarSign className="w-6 h-6 text-green-400" />}
          />
          <MetricCard
            title="Active Contracts"
            value="147"
            change="+12%(16)"
            changeType="positive"
            icon={<FileText className="w-6 h-6 text-blue-400" />}
          />
          <MetricCard
            title="Lead Conversion"
            value="68%"
            change="+5%"
            changeType="positive"
            icon={<Target className="w-6 h-6 text-purple-400" />}
          />
          <MetricCard
            title="Quote Success Rate"
            value="73%"
            change="+8%"
            changeType="positive"
            icon={<Percent className="w-6 h-6 text-orange-400" />}
          />
        </div>

        {/* Charts Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <LeadSourcesChart />
          <RevenueChart />
        </div>

        {/* Charts Row 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ConversionChart />
          <ServiceTypeChart />
        </div>

        {/* Company Table */}
        <CompanyTable />
      </div>
    </div>
  );
};

export default Index;
