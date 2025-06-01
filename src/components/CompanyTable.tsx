
import { useState } from 'react';
import { Search, Filter, ChevronDown, ChevronUp, ArrowUpDown, Eye, Star, Building } from 'lucide-react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const companies = [
  {
    name: 'Loom',
    icon: '🎥',
    description: 'Video messaging tool that he...',
    domain: 'loom.com',
    location: 'San Francisco, 140 2nd Street, 3rd Floor, United...',
    employees: 150,
    revenue: '$50M',
    status: 'hot'
  },
  {
    name: 'Notion',
    icon: '📝',
    description: 'All-in-one workspace that co...',
    domain: 'notion.so',
    location: 'San Francisco, 2300 Harrison Street, United Sta...',
    employees: 200,
    revenue: '$100M',
    status: 'warm'
  },
  {
    name: 'Slack',
    icon: '💬',
    description: 'Team communication platfor...',
    domain: 'slack.com',
    location: 'San Francisco, 500 Howard Street, United State...',
    employees: 2500,
    revenue: '$1B',
    status: 'hot'
  },
  {
    name: 'Canva',
    icon: '🎨',
    description: 'Graphic design tool that enab...',
    domain: 'canva.com',
    location: 'Sydney, 110 Kippax Street, Australia, and has 1 o...',
    employees: 3000,
    revenue: '$1.5B',
    status: 'cold'
  },
  {
    name: 'Facebook',
    icon: '📘',
    description: 'Social networking platform th...',
    domain: 'facebook.com',
    location: 'Menlo Park, 1 Hacker Way, United States, and ha...',
    employees: 70000,
    revenue: '$117B',
    status: 'warm'
  },
  {
    name: 'Twitter',
    icon: '🐦',
    description: 'Microblogging and social net...',
    domain: 'twitter.com',
    location: 'San Francisco, 1355 Market Street, United States...',
    employees: 7500,
    revenue: '$5B',
    status: 'hot'
  },
  {
    name: 'Spotify',
    icon: '🎵',
    description: 'Digital music streaming servi...',
    domain: 'spotify.com',
    location: 'Stockholm, Regeringsgatan 19, Sweden, and has...',
    employees: 6600,
    revenue: '$13B',
    status: 'warm'
  },
  {
    name: 'OpenAI',
    icon: '🤖',
    description: 'Artificial intelligence researc...',
    domain: 'openai.com',
    location: 'San Francisco, 3180 18th Street, United States, a...',
    employees: 1500,
    revenue: '$2B',
    status: 'hot'
  }
];

const CompanyTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const filteredAndSortedCompanies = companies
    .filter(company => {
      const matchesSearch = company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           company.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = statusFilter === 'all' || company.status === statusFilter;
      return matchesSearch && matchesStatus;
    })
    .sort((a, b) => {
      let aValue = a[sortBy as keyof typeof a];
      let bValue = b[sortBy as keyof typeof b];
      
      if (sortBy === 'employees') {
        aValue = a.employees;
        bValue = b.employees;
      }
      
      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return sortOrder === 'asc' 
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }
      
      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return sortOrder === 'asc' ? aValue - bValue : bValue - aValue;
      }
      
      return 0;
    });

  const handleSort = (field: string) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder('asc');
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'hot': return 'text-red-400 bg-red-900/20';
      case 'warm': return 'text-yellow-400 bg-yellow-900/20';
      case 'cold': return 'text-blue-400 bg-blue-900/20';
      default: return 'text-gray-400 bg-gray-900/20';
    }
  };

  return (
    <div className="bg-gray-900 rounded-lg border border-gray-800 animate-fade-in">
      <div className="p-6 border-b border-gray-800">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-white text-lg font-semibold flex items-center gap-2">
            <Building className="w-5 h-5" />
            Company Leads
            <span className="text-sm text-gray-400 font-normal">({filteredAndSortedCompanies.length})</span>
          </h3>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search companies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
            />
          </div>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center space-x-2 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 hover:text-white hover:bg-gray-700 transition-all duration-200">
                <Filter className="w-4 h-4" />
                <span>Filter: {statusFilter === 'all' ? 'All' : statusFilter}</span>
                <ChevronDown className="w-3 h-3" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-gray-800 border-gray-700">
              <DropdownMenuItem onClick={() => setStatusFilter('all')} className="text-white hover:bg-gray-700">
                All Status
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setStatusFilter('hot')} className="text-red-400 hover:bg-gray-700">
                🔥 Hot Leads
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setStatusFilter('warm')} className="text-yellow-400 hover:bg-gray-700">
                ⚡ Warm Leads
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setStatusFilter('cold')} className="text-blue-400 hover:bg-gray-700">
                ❄️ Cold Leads
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center space-x-2 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 hover:text-white hover:bg-gray-700 transition-all duration-200">
                <ArrowUpDown className="w-4 h-4" />
                <span>Sort</span>
                <ChevronDown className="w-3 h-3" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-gray-800 border-gray-700">
              <DropdownMenuItem onClick={() => handleSort('name')} className="text-white hover:bg-gray-700">
                Sort by Name {sortBy === 'name' && (sortOrder === 'asc' ? '↑' : '↓')}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleSort('employees')} className="text-white hover:bg-gray-700">
                Sort by Size {sortBy === 'employees' && (sortOrder === 'asc' ? '↑' : '↓')}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleSort('status')} className="text-white hover:bg-gray-700">
                Sort by Status {sortBy === 'status' && (sortOrder === 'asc' ? '↑' : '↓')}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-800">
              <th className="text-left p-4 text-gray-400 font-medium text-sm">Company</th>
              <th className="text-left p-4 text-gray-400 font-medium text-sm">Description</th>
              <th className="text-left p-4 text-gray-400 font-medium text-sm">Domains</th>
              <th className="text-left p-4 text-gray-400 font-medium text-sm">Status</th>
              <th className="text-left p-4 text-gray-400 font-medium text-sm">Size</th>
              <th className="w-12"></th>
            </tr>
          </thead>
          <tbody>
            {filteredAndSortedCompanies.map((company, index) => (
              <tr key={index} className="border-b border-gray-800 hover:bg-gray-800/50 transition-all duration-200 group">
                <td className="p-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-lg">{company.icon}</span>
                    <div>
                      <span className="text-white font-medium">{company.name}</span>
                      <div className="text-xs text-gray-400">{company.revenue}</div>
                    </div>
                  </div>
                </td>
                <td className="p-4 text-gray-300 text-sm max-w-xs truncate">
                  {company.description}
                </td>
                <td className="p-4">
                  <a href={`https://${company.domain}`} className="text-blue-400 hover:text-blue-300 transition-colors text-sm">
                    {company.domain}
                  </a>
                </td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(company.status)}`}>
                    {company.status}
                  </span>
                </td>
                <td className="p-4 text-gray-300 text-sm">
                  {company.employees.toLocaleString()} employees
                </td>
                <td className="p-4">
                  <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-1 hover:bg-gray-700 rounded">
                      <Eye className="w-4 h-4 text-gray-400 hover:text-white" />
                    </button>
                    <button className="p-1 hover:bg-gray-700 rounded">
                      <Star className="w-4 h-4 text-gray-400 hover:text-yellow-400" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CompanyTable;
