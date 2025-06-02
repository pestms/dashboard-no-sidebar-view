import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/store';
import { 
  setSearchTerm, 
  setStatusFilter, 
  addQuotation,
  updateQuotation,
  convertToContract
} from '@/store/slices/quotationsSlice';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
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
  FileText, 
  CheckCircle, 
  XCircle, 
  Clock, 
  Download,
  Edit,
  Building,
  Home,
  DollarSign,
  Calendar
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';

export default function SalesQuotations() {
  const dispatch = useDispatch();
  const { filteredQuotations, searchTerm, statusFilter } = useSelector((state: RootState) => state.quotations);
  
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newQuotation, setNewQuotation] = useState({
    customerName: '',
    customerType: 'Residential' as 'Residential' | 'Commercial',
    email: '',
    phone: '',
    address: '',
    problemDescription: '',
    salesPerson: 'Alex Thompson',
    estimatedValue: 0,
    status: 'pending' as 'pending' | 'approved' | 'rejected' | 'revised',
    services: [
      { name: 'Initial Inspection', price: 120, included: true },
      { name: 'Ant Treatment', price: 85, included: false },
      { name: 'Cockroach Control', price: 95, included: false },
      { name: 'Rodent Control', price: 150, included: false },
      { name: 'Termite Treatment', price: 350, included: false },
    ],
    validUntil: '',
    notes: ''
  });

  const handleAddQuotation = () => {
    if (!newQuotation.customerName || !newQuotation.email) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    const totalValue = newQuotation.services
      .filter(service => service.included)
      .reduce((sum, service) => sum + service.price, 0);

    dispatch(addQuotation({
      ...newQuotation,
      leadId: 'sales-' + Date.now().toString(), // Generate a leadId for sales-created quotations
      estimatedValue: totalValue,
      validUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
    }));

    setIsAddModalOpen(false);
    
    setNewQuotation({
      customerName: '',
      customerType: 'Residential',
      email: '',
      phone: '',
      address: '',
      problemDescription: '',
      salesPerson: 'Alex Thompson',
      estimatedValue: 0,
      status: 'pending',
      services: [
        { name: 'Initial Inspection', price: 120, included: true },
        { name: 'Ant Treatment', price: 85, included: false },
        { name: 'Cockroach Control', price: 95, included: false },
        { name: 'Rodent Control', price: 150, included: false },
        { name: 'Termite Treatment', price: 350, included: false },
      ],
      validUntil: '',
      notes: ''
    });

    toast({
      title: "Quotation Created",
      description: "New quotation has been successfully created.",
    });
  };

  const handleConvertToContract = (quotationId: string) => {
    dispatch(convertToContract(quotationId));
    toast({
      title: "Contract Created",
      description: "Quotation has been converted to a contract.",
    });
  };

  const handleUpdateStatus = (quotationId: string, status: 'pending' | 'approved' | 'rejected' | 'revised') => {
    dispatch(updateQuotation({ id: quotationId, status }));
    toast({
      title: "Status Updated",
      description: `Quotation status has been updated to ${status}.`,
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'approved': return 'bg-green-100 text-green-800 border-green-200';
      case 'rejected': return 'bg-red-100 text-red-800 border-red-200';
      case 'revised': return 'bg-blue-100 text-blue-800 border-blue-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending': return <Clock className="w-4 h-4" />;
      case 'approved': return <CheckCircle className="w-4 h-4" />;
      case 'rejected': return <XCircle className="w-4 h-4" />;
      case 'revised': return <Edit className="w-4 h-4" />;
      default: return <FileText className="w-4 h-4" />;
    }
  };

  const toggleService = (index: number) => {
    const updatedServices = [...newQuotation.services];
    updatedServices[index].included = !updatedServices[index].included;
    setNewQuotation({ ...newQuotation, services: updatedServices });
  };

  return (
    <div className="space-y-4 p-4 md:space-y-6 md:p-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Quotations</h1>
          <p className="text-muted-foreground">({filteredQuotations.length} quotes)</p>
        </div>
        <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
          <DialogTrigger asChild>
            <Button className="bg-green-600 hover:bg-green-700 w-full md:w-auto">
              <Plus className="w-4 h-4 mr-2" />
              Create Quotation
            </Button>
          </DialogTrigger>
          <DialogContent className="mx-4 max-w-2xl bg-card border border-border max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Create New Quotation</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="customerName">Customer Name *</Label>
                  <Input
                    id="customerName"
                    value={newQuotation.customerName}
                    onChange={(e) => setNewQuotation({...newQuotation, customerName: e.target.value})}
                    className="bg-background border-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={newQuotation.email}
                    onChange={(e) => setNewQuotation({...newQuotation, email: e.target.value})}
                    className="bg-background border-border"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  value={newQuotation.phone}
                  onChange={(e) => setNewQuotation({...newQuotation, phone: e.target.value})}
                  className="bg-background border-border"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="problemDescription">Problem Description</Label>
                <Textarea
                  id="problemDescription"
                  value={newQuotation.problemDescription}
                  onChange={(e) => setNewQuotation({...newQuotation, problemDescription: e.target.value})}
                  className="bg-background border-border"
                  rows={3}
                />
              </div>
              <div>
                <Label>Services & Pricing</Label>
                <div className="mt-2 space-y-2">
                  {newQuotation.services.map((service, index) => (
                    <div key={service.name} className="flex justify-between items-center p-2 border rounded">
                      <div className="flex-1">
                        <span className="text-sm font-medium">{service.name}</span>
                        <p className="text-xs text-muted-foreground">${service.price}</p>
                      </div>
                      <input
                        type="checkbox"
                        checked={service.included}
                        onChange={() => toggleService(index)}
                        className="w-4 h-4"
                      />
                    </div>
                  ))}
                  <div className="border-t pt-2">
                    <div className="flex justify-between items-center font-semibold">
                      <span>Total:</span>
                      <span className="text-green-600">
                        ${newQuotation.services
                          .filter(service => service.included)
                          .reduce((sum, service) => sum + service.price, 0)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-2 pt-4">
              <Button variant="outline" onClick={() => setIsAddModalOpen(false)} className="w-full md:w-auto">
                Cancel
              </Button>
              <Button onClick={handleAddQuotation} className="bg-green-600 hover:bg-green-700 w-full md:w-auto">
                Create Quotation
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col space-y-3 md:flex-row md:gap-4 md:items-center md:space-y-0">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Search quotations..."
            value={searchTerm}
            onChange={(e) => dispatch(setSearchTerm(e.target.value))}
            className="pl-10 bg-background border-border"
          />
        </div>
        
        <Select value={statusFilter} onValueChange={(value) => dispatch(setStatusFilter(value))}>
          <SelectTrigger className="w-full md:w-40 bg-background border-border">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="bg-popover border border-border">
            <SelectItem value="All">All Status</SelectItem>
            <SelectItem value="Pending">Pending</SelectItem>
            <SelectItem value="Approved">Approved</SelectItem>
            <SelectItem value="Rejected">Rejected</SelectItem>
            <SelectItem value="Revised">Revised</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Quotations List */}
      <div className="space-y-4">
        {filteredQuotations.map((quotation) => (
          <Card key={quotation.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3 flex-1">
                    <div className="flex items-center gap-2">
                      {quotation.customerType === 'Commercial' ? 
                        <Building className="w-4 h-4 text-muted-foreground" /> : 
                        <Home className="w-4 h-4 text-muted-foreground" />
                      }
                      <div>
                        <h3 className="font-medium">{quotation.customerName}</h3>
                        <p className="text-sm text-muted-foreground">{quotation.customerType}</p>
                        <p className="text-xs text-muted-foreground">ID: {quotation.id}</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-green-600 text-lg">
                      ${quotation.estimatedValue.toLocaleString()}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Valid: {quotation.validUntil}
                    </p>
                    <Badge 
                      variant="outline" 
                      className={`text-xs ${getStatusColor(quotation.status)} flex items-center gap-1 mt-1`}
                    >
                      {getStatusIcon(quotation.status)}
                      {quotation.status}
                    </Badge>
                  </div>
                </div>

                <div className="space-y-1 text-sm text-muted-foreground">
                  <p><span className="font-medium">Email:</span> {quotation.email}</p>
                  <p><span className="font-medium">Phone:</span> {quotation.phone}</p>
                  <p><span className="font-medium">Sales Person:</span> {quotation.salesPerson}</p>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-medium">Included Services:</p>
                  <div className="flex flex-wrap gap-1">
                    {quotation.services
                      .filter(service => service.included)
                      .map((service) => (
                        <Badge key={service.name} variant="secondary" className="text-xs">
                          {service.name} - ${service.price}
                        </Badge>
                      ))}
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-2 pt-2 border-t">
                  <Select
                    value={quotation.status}
                    onValueChange={(value) => handleUpdateStatus(quotation.id, value as any)}
                  >
                    <SelectTrigger className="flex-1 bg-background border-border">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-popover border border-border">
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="approved">Approved</SelectItem>
                      <SelectItem value="rejected">Rejected</SelectItem>
                      <SelectItem value="revised">Revised</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    className="px-3"
                  >
                    <Download className="w-4 h-4" />
                  </Button>

                  {quotation.status === 'approved' && (
                    <Button
                      size="sm"
                      onClick={() => handleConvertToContract(quotation.id)}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Convert to Contract
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredQuotations.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No quotations found matching your criteria.</p>
        </div>
      )}
    </div>
  );
}
