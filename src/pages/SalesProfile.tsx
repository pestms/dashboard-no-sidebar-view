
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { StatsContainer } from '@/components/StatsContainer';
import { 
  Mail, 
  Phone, 
  Calendar, 
  Users, 
  DollarSign,
  Target,
  CheckCircle,
  TrendingUp,
  Home,
  FileText
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

// Mock sales agent data
const mockSalesAgent = {
  id: '3',
  name: 'Alex Thompson',
  email: 'alex@pestguard.com',
  phone: '+1 (555) 456-7890',
  role: 'sales',
  status: 'active',
  createdAt: '2024-01-15',
  avatar: '/placeholder.svg',
  department: 'Sales Department',
  location: 'San Francisco, CA'
};

export default function SalesProfile() {
  const navigate = useNavigate();

  const getRoleIcon = (role: string) => {
    return <Users className="w-4 h-4" />;
  };

  const getRoleBadgeColor = (role: string) => {
    return 'bg-blue-100 text-blue-800';
  };

  // Sales agent performance stats
  const salesStats = [
    {
      title: 'Active Leads',
      value: 32,
      change: '+12% from last month',
      icon: <Target className="h-4 w-4" />,
      trend: 'up' as const
    },
    {
      title: 'Quotations Created',
      value: 18,
      change: '+6 this month',
      icon: <FileText className="h-4 w-4" />,
      trend: 'up' as const
    },
    {
      title: 'Converted to Contracts',
      value: 14,
      change: '78% conversion rate',
      icon: <CheckCircle className="h-4 w-4" />,
      trend: 'up' as const
    },
    {
      title: 'Revenue This Month',
      value: '$18,750',
      change: '+28% from last month',
      icon: <DollarSign className="h-4 w-4" />,
      trend: 'up' as const
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Header */}
      <div className="bg-green-600 text-white p-4 sticky top-0 z-10">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-lg font-semibold">PestGuard CRM</h1>
            <p className="text-green-100 text-sm">Sales Dashboard</p>
          </div>
          <Avatar className="w-10 h-10">
            <AvatarImage src={mockSalesAgent.avatar} alt={mockSalesAgent.name} />
            <AvatarFallback className="bg-green-700 text-white">
              {mockSalesAgent.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="bg-white border-b border-border sticky top-16 z-10">
        <div className="flex overflow-x-auto">
          <Button 
            variant="ghost" 
            className="flex-1 min-w-0 rounded-none border-b-2 border-green-600 text-green-600"
            onClick={() => navigate('/sales/profile')}
          >
            <Home className="w-4 h-4 mr-2" />
            Profile
          </Button>
          <Button 
            variant="ghost" 
            className="flex-1 min-w-0 rounded-none"
            onClick={() => navigate('/sales/leads')}
          >
            <Users className="w-4 h-4 mr-2" />
            Leads
          </Button>
          <Button 
            variant="ghost" 
            className="flex-1 min-w-0 rounded-none"
            onClick={() => navigate('/sales/quotations')}
          >
            <FileText className="w-4 h-4 mr-2" />
            Quotes
          </Button>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* User Profile Section */}
        <Card>
          <CardContent className="p-4">
            <div className="flex flex-col items-center space-y-4 text-center">
              {/* Profile Image */}
              <Avatar className="w-20 h-20">
                <AvatarImage src={mockSalesAgent.avatar} alt={mockSalesAgent.name} />
                <AvatarFallback className="text-lg font-bold">
                  {mockSalesAgent.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              
              <div className="space-y-2">
                <h2 className="text-xl font-bold">{mockSalesAgent.name}</h2>
                <Badge 
                  variant="outline" 
                  className={`${getRoleBadgeColor(mockSalesAgent.role)} flex items-center gap-1`}
                >
                  {getRoleIcon(mockSalesAgent.role)}
                  Sales Agent
                </Badge>
                <p className="text-muted-foreground">{mockSalesAgent.department}</p>
              </div>
              
              <div className="w-full space-y-3">
                <div className="flex items-center justify-center gap-2">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">{mockSalesAgent.email}</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">{mockSalesAgent.phone}</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">Joined {mockSalesAgent.createdAt}</span>
                </div>
                <div className="flex justify-center">
                  <Badge variant={mockSalesAgent.status === 'active' ? 'default' : 'secondary'}>
                    {mockSalesAgent.status}
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Performance Stats - Mobile Grid */}
        <div className="grid grid-cols-2 gap-3">
          {salesStats.map((stat, index) => (
            <Card key={index} className="p-3">
              <div className="flex items-center gap-2 mb-2">
                <div className="p-1 bg-green-100 rounded">
                  {stat.icon}
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground">{stat.title}</p>
                <p className="text-lg font-bold">{stat.value}</p>
                <p className="text-xs text-green-600">{stat.change}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <Card>
          <CardContent className="p-4">
            <h3 className="font-semibold mb-3">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-3">
              <Button 
                className="h-12 bg-green-600 hover:bg-green-700"
                onClick={() => navigate('/sales/leads')}
              >
                <Users className="w-4 h-4 mr-2" />
                View Leads
              </Button>
              <Button 
                variant="outline" 
                className="h-12"
                onClick={() => navigate('/sales/quotations')}
              >
                <FileText className="w-4 h-4 mr-2" />
                Create Quote
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
