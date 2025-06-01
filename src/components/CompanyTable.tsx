import { useState } from 'react';
import { Search, Filter, ChevronDown, ChevronUp, ArrowUpDown, Eye, Star, Building, Phone, Mail, Calendar, Bug } from 'lucide-react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import LeadDetailDialog from './LeadDetailDialog';

const pestControlLeads = [
  {
    name: 'Johnson Family Residence',
    icon: '🏠',
    description: 'Ant infestation in kitchen and dining area',
    address: '123 Oak Street, Downtown District',
    phone: '(555) 123-4567',
    email: 'johnson@email.com',
    serviceType: 'Residential',
    priority: 'high',
    status: 'lead',
    lastContact: '2 days ago',
    estimatedValue: '$280'
  },
  {
    name: 'Green Valley Restaurant',
    icon: '🍽️',
    description: 'Cockroach problem in kitchen area',
    address: '456 Main Street, Business District',
    phone: '(555) 234-5678',
    email: 'manager@greenvalley.com',
    serviceType: 'Commercial',
    priority: 'high',
    status: 'quote',
    lastContact: '1 day ago',
    estimatedValue: '$850'
  },
  {
    name: 'Smith Apartment Complex',
    icon: '🏢',
    description: 'Rodent control for 24-unit building',
    address: '789 Elm Street, Residential Zone',
    phone: '(555) 345-6789',
    email: 'maintenance@smithapts.com',
    serviceType: 'Commercial',
    priority: 'medium',
    status: 'contract',
    lastContact: '3 days ago',
    estimatedValue: '$1,200'
  },
  {
    name: 'Davis Family Home',
    icon: '🏡',
    description: 'Termite inspection and treatment needed',
    address: '321 Pine Avenue, Suburban Area',
    phone: '(555) 456-7890',
    email: 'davis.family@email.com',
    serviceType: 'Residential',
    priority: 'high',
    status: 'quote',
    lastContact: '1 day ago',
    estimatedValue: '$650'
  },
  {
    name: 'City Hospital',
    icon: '🏥',
    description: 'Monthly pest prevention service',
    address: '555 Health Boulevard, Medical District',
    phone: '(555) 567-8901',
    email: 'facilities@cityhospital.org',
    serviceType: 'Commercial',
    priority: 'low',
    status: 'contract',
    lastContact: '1 week ago',
    estimatedValue: '$2,400'
  },
  {
    name: 'Wilson Residence',
    icon: '🏠',
    description: 'Bee hive removal from backyard',
    address: '888 Maple Drive, Garden District',
    phone: '(555) 678-9012',
    email: 'wilson.home@email.com',
    serviceType: 'Residential',
    priority: 'medium',
    status: 'lead',
    lastContact: '4 hours ago',
    estimatedValue: '$320'
  },
  {
    name: 'Corner Grocery Store',
    icon: '🏪',
    description: 'Fly control in produce section',
    address: '202 Commerce Street, Shopping Area',
    phone: '(555) 789-0123',
    email: 'owner@cornerstore.com',
    serviceType: 'Commercial',
    priority: 'medium',
    status: 'lead',
    lastContact: '6 hours ago',
    estimatedValue: '$450'
  },
  {
    name: 'Thompson Estate',
    icon: '🏰',
    description: 'Comprehensive pest management plan',
    address: '999 Luxury Lane, Elite Neighborhood',
    phone: '(555) 890-1234',
    email: 'estate@thompson.com',
    serviceType: 'Residential',
    priority: 'low',
    status: 'contract',
    lastContact: '2 weeks ago',
    estimatedValue: '$1,800'
  }
];

const CompanyTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [priorityFilter, setPriorityFilter] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [selectedLead, setSelectedLead] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const filteredAndSortedLeads = pestControlLeads
    .filter(lead => {
      const matchesSearch = lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           lead.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           lead.serviceType.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = statusFilter === 'all' || lead.status === statusFilter;
      const matchesPriority = priorityFilter === 'all' || lead.priority === priorityFilter;
      return matchesSearch && matchesStatus && matchesPriority;
    })
    .sort((a, b) => {
      let aValue = a[sortBy as keyof typeof a];
      let bValue = b[sortBy as keyof typeof b];
      
      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return sortOrder === 'asc' 
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
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
      case 'lead': return 'text-blue-400 bg-blue-900/20';
      case 'quote': return 'text-yellow-400 bg-yellow-900/20';
      case 'contract': return 'text-green-400 bg-green-900/20';
      default: return 'text-gray-400 bg-gray-900/20';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-400';
      case 'medium': return 'text-yellow-400';
      case 'low': return 'text-green-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'lead': return '🎯';
      case 'quote': return '📋';
      case 'contract': return '✅';
      default: return '❓';
    }
  };

  const handleViewDetails = (lead: any) => {
    setSelectedLead(lead);
    setIsDialogOpen(true);
  };

  return (
    <div className="bg-gray-900 rounded-lg border border-gray-800 animate-fade-in">
      <div className="p-6 border-b border-gray-800">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-white text-lg font-semibold flex items-center gap-2">
            <Bug className="w-5 h-5 text-green-400" />
            Pest Control Leads
            <span className="text-sm text-gray-400 font-normal">({filteredAndSortedLeads.length})</span>
          </h3>
        </div>
        
        <div className="flex items-center space-x-4 flex-wrap gap-2">
          <div className="relative flex-1 min-w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search leads..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-green-500 transition-colors"
            />
          </div>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center space-x-2 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 hover:text-white hover:bg-gray-700 transition-all duration-200">
                <Filter className="w-4 h-4" />
                <span>Status: {statusFilter === 'all' ? 'All' : statusFilter}</span>
                <ChevronDown className="w-3 h-3" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-gray-800 border-gray-700">
              <DropdownMenuItem onClick={() => setStatusFilter('all')} className="text-white hover:bg-gray-700">
                All Status
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setStatusFilter('lead')} className="text-blue-400 hover:bg-gray-700">
                🎯 Leads
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setStatusFilter('quote')} className="text-yellow-400 hover:bg-gray-700">
                📋 Quotes
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setStatusFilter('contract')} className="text-green-400 hover:bg-gray-700">
                ✅ Contracts
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center space-x-2 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 hover:text-white hover:bg-gray-700 transition-all duration-200">
                <span>Priority: {priorityFilter === 'all' ? 'All' : priorityFilter}</span>
                <ChevronDown className="w-3 h-3" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-gray-800 border-gray-700">
              <DropdownMenuItem onClick={() => setPriorityFilter('all')} className="text-white hover:bg-gray-700">
                All Priority
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setPriorityFilter('high')} className="text-red-400 hover:bg-gray-700">
                🔴 High Priority
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setPriorityFilter('medium')} className="text-yellow-400 hover:bg-gray-700">
                🟡 Medium Priority
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setPriorityFilter('low')} className="text-green-400 hover:bg-gray-700">
                🟢 Low Priority
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
              <DropdownMenuItem onClick={() => handleSort('status')} className="text-white hover:bg-gray-700">
                Sort by Status {sortBy === 'status' && (sortOrder === 'asc' ? '↑' : '↓')}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleSort('priority')} className="text-white hover:bg-gray-700">
                Sort by Priority {sortBy === 'priority' && (sortOrder === 'asc' ? '↑' : '↓')}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleSort('estimatedValue')} className="text-white hover:bg-gray-700">
                Sort by Value {sortBy === 'estimatedValue' && (sortOrder === 'asc' ? '↑' : '↓')}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-800">
              <th className="text-left p-4 text-gray-400 font-medium text-sm">Customer</th>
              <th className="text-left p-4 text-gray-400 font-medium text-sm">Service Details</th>
              <th className="text-left p-4 text-gray-400 font-medium text-sm">Contact</th>
              <th className="text-left p-4 text-gray-400 font-medium text-sm">Status</th>
              <th className="text-left p-4 text-gray-400 font-medium text-sm">Value</th>
              <th className="w-12"></th>
            </tr>
          </thead>
          <tbody>
            {filteredAndSortedLeads.map((lead, index) => (
              <tr key={index} className="border-b border-gray-800 hover:bg-gray-800/50 transition-all duration-200 group">
                <td className="p-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-lg">{lead.icon}</span>
                    <div>
                      <div className="text-white font-medium">{lead.name}</div>
                      <div className="text-xs text-gray-400">{lead.serviceType}</div>
                      <div className={`text-xs ${getPriorityColor(lead.priority)}`}>
                        {lead.priority} priority
                      </div>
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  <div className="text-gray-300 text-sm max-w-xs">
                    <div className="font-medium mb-1">{lead.description}</div>
                    <div className="text-xs text-gray-500">{lead.address}</div>
                  </div>
                </td>
                <td className="p-4">
                  <div className="text-sm">
                    <div className="flex items-center gap-1 text-gray-300 mb-1">
                      <Phone className="w-3 h-3" />
                      {lead.phone}
                    </div>
                    <div className="flex items-center gap-1 text-gray-400 text-xs mb-1">
                      <Mail className="w-3 h-3" />
                      {lead.email}
                    </div>
                    <div className="flex items-center gap-1 text-gray-500 text-xs">
                      <Calendar className="w-3 h-3" />
                      {lead.lastContact}
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  <span className={`px-3 py-1 rounded-full text-xs flex items-center gap-1 w-fit ${getStatusColor(lead.status)}`}>
                    {getStatusIcon(lead.status)} {lead.status}
                  </span>
                </td>
                <td className="p-4 text-green-400 font-medium text-sm">
                  {lead.estimatedValue}
                </td>
                <td className="p-4">
                  <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button 
                      onClick={() => handleViewDetails(lead)}
                      className="p-1 hover:bg-gray-700 rounded"
                    >
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

      <LeadDetailDialog 
        lead={selectedLead}
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
      />
    </div>
  );
};

export default CompanyTable;
