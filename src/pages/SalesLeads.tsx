
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/store';
import { 
  setSearchTerm, 
  setStatusFilter, 
  setPriorityFilter,
  addLead,
  Lead 
} from '@/store/slices/leadsSlice';
import { LeadDetailsModal } from '@/components/LeadDetailsModal';
import { QuotationModal } from '@/components/QuotationModal';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  Search, 
  Plus, 
  Filter, 
  Eye, 
  FileText, 
  Phone, 
  Mail, 
  MapPin, 
  Building, 
  Home, 
  User,
  Users,
  ArrowLeft
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';

export default function SalesLeads() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { filteredLeads, searchTerm, statusFilter, priorityFilter } = useSelector((state: RootState) => state.leads);
  
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [isQuotationModalOpen, setIsQuotationModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newLead, setNewLead] = useState({
    customerName: '',
    customerType: 'Residential' as 'Residential' | 'Commercial',
    email: '',
    phone: '',
    address: '',
    serviceDetails: '',
    problemDescription: '',
    priority: 'medium' as 'low' | 'medium' | 'high',
    estimatedValue: 0,
    status: 'lead' as 'lead' | 'quote' | 'contract',
    lastContact: 'Just now',
    services: [] as string[]
  });

  const handleViewDetails = (lead: Lead) => {
    setSelectedLead(lead);
    setIsDetailsModalOpen(true);
  };

  const handleCreateQuotation = (lead: Lead) => {
    setSelectedLead(lead);
    setIsQuotationModalOpen(true);
  };

  const handleAddLead = () => {
    if (!newLead.customerName || !newLead.email || !newLead.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    dispatch(addLead(newLead));
    setIsAddModalOpen(false);
    setNewLead({
      customerName: '',
      customerType: 'Residential',
      email: '',
      phone: '',
      address: '',
      serviceDetails: '',
      problemDescription: '',
      priority: 'medium',
      estimatedValue: 0,
      status: 'lead',
      lastContact: 'Just now',
      services: []
    });
    
    toast({
      title: "Lead Added",
      description: "New lead has been successfully added to the system.",
    });
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'lead': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'quote': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'contract': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getCustomerIcon = (type: string) => {
    return type === 'Commercial' ? <Building className="w-4 h-4" /> : <Home className="w-4 h-4" />;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Header */}
      <div className="bg-green-600 text-white p-4 sticky top-0 z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-white hover:bg-green-700 p-1"
              onClick={() => navigate('/sales/profile')}
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div>
              <h1 className="text-lg font-semibold">Leads</h1>
              <p className="text-green-100 text-sm">({filteredLeads.length} leads)</p>
            </div>
          </div>
          <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
            <DialogTrigger asChild>
              <Button size="sm" className="bg-white text-green-600 hover:bg-gray-100">
                <Plus className="w-4 h-4" />
              </Button>
            </DialogTrigger>
            <DialogContent className="w-[95vw] max-w-md mx-auto bg-card border border-border">
              <DialogHeader>
                <DialogTitle>Add New Lead</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="customerName">Customer Name *</Label>
                  <Input
                    id="customerName"
                    value={newLead.customerName}
                    onChange={(e) => setNewLead({...newLead, customerName: e.target.value})}
                    className="bg-background border-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={newLead.email}
                    onChange={(e) => setNewLead({...newLead, email: e.target.value})}
                    className="bg-background border-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone *</Label>
                  <Input
                    id="phone"
                    value={newLead.phone}
                    onChange={(e) => setNewLead({...newLead, phone: e.target.value})}
                    className="bg-background border-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="problemDescription">Problem Description</Label>
                  <Textarea
                    id="problemDescription"
                    value={newLead.problemDescription}
                    onChange={(e) => setNewLead({...newLead, problemDescription: e.target.value, serviceDetails: e.target.value})}
                    className="bg-background border-border"
                    rows={3}
                  />
                </div>
              </div>
              <div className="flex justify-end gap-2 pt-4">
                <Button variant="outline" onClick={() => setIsAddModalOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleAddLead} className="bg-green-600 hover:bg-green-700">
                  Add Lead
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="bg-white border-b border-border sticky top-16 z-10">
        <div className="flex overflow-x-auto">
          <Button 
            variant="ghost" 
            className="flex-1 min-w-0 rounded-none"
            onClick={() => navigate('/sales/profile')}
          >
            <User className="w-4 h-4 mr-2" />
            Profile
          </Button>
          <Button 
            variant="ghost" 
            className="flex-1 min-w-0 rounded-none border-b-2 border-green-600 text-green-600"
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
        {/* Search and Filters */}
        <div className="space-y-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search leads..."
              value={searchTerm}
              onChange={(e) => dispatch(setSearchTerm(e.target.value))}
              className="pl-10 bg-background border-border"
            />
          </div>
          
          <div className="flex gap-2">
            <Select value={statusFilter} onValueChange={(value) => dispatch(setStatusFilter(value))}>
              <SelectTrigger className="flex-1 bg-background border-border">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-popover border border-border">
                <SelectItem value="All">All Status</SelectItem>
                <SelectItem value="Lead">Lead</SelectItem>
                <SelectItem value="Quote">Quote</SelectItem>
                <SelectItem value="Contract">Contract</SelectItem>
              </SelectContent>
            </Select>

            <Select value={priorityFilter} onValueChange={(value) => dispatch(setPriorityFilter(value))}>
              <SelectTrigger className="flex-1 bg-background border-border">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-popover border border-border">
                <SelectItem value="All">All Priority</SelectItem>
                <SelectItem value="High">High</SelectItem>
                <SelectItem value="Medium">Medium</SelectItem>
                <SelectItem value="Low">Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Leads List */}
        <div className="space-y-3">
          {filteredLeads.map((lead) => (
            <Card key={lead.id} className="p-4">
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3 flex-1">
                    <Avatar className="w-10 h-10 bg-green-100">
                      <AvatarFallback className="text-green-700">
                        {getCustomerIcon(lead.customerType)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium truncate">{lead.customerName}</h3>
                      <p className="text-sm text-muted-foreground flex items-center gap-1">
                        {getCustomerIcon(lead.customerType)}
                        {lead.customerType}
                      </p>
                      <div className="flex gap-2 mt-1">
                        <Badge 
                          variant="outline" 
                          className={`text-xs ${getPriorityColor(lead.priority)}`}
                        >
                          {lead.priority}
                        </Badge>
                        <Badge 
                          variant="outline" 
                          className={getStatusColor(lead.status)}
                        >
                          {lead.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-green-600">
                      ${lead.estimatedValue.toLocaleString()}
                    </p>
                  </div>
                </div>

                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Phone className="w-3 h-3" />
                    <span className="truncate">{lead.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3 h-3" />
                    <span className="truncate">{lead.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3 h-3" />
                    <span className="truncate">{lead.address}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleViewDetails(lead)}
                    className="flex-1"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => handleCreateQuotation(lead)}
                    className="flex-1 bg-green-600 hover:bg-green-700"
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    Create Quote
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <LeadDetailsModal
        lead={selectedLead}
        isOpen={isDetailsModalOpen}
        onClose={() => setIsDetailsModalOpen(false)}
      />

      <QuotationModal
        lead={selectedLead}
        isOpen={isQuotationModalOpen}
        onClose={() => setIsQuotationModalOpen(false)}
      />
    </div>
  );
}
