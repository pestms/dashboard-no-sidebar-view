
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, Phone, Mail, MapPin, Calendar, User, DollarSign, FileText, Bug } from 'lucide-react';

interface LeadDetailDialogProps {
  lead: any;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const LeadDetailDialog = ({ lead, open, onOpenChange }: LeadDetailDialogProps) => {
  if (!lead) return null;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'lead': return 'bg-blue-500';
      case 'quote': return 'bg-yellow-500';
      case 'contract': return 'bg-green-500';
      default: return 'bg-gray-500';
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

  const services = [
    { name: 'Initial Inspection', price: '$120', included: true },
    { name: 'Ant Treatment', price: '$85', included: lead.description.includes('Ant') },
    { name: 'Cockroach Control', price: '$95', included: lead.description.includes('Cockroach') },
    { name: 'Rodent Control', price: '$150', included: lead.description.includes('Rodent') },
    { name: 'Termite Treatment', price: '$350', included: lead.description.includes('Termite') },
    { name: 'Bee Removal', price: '$200', included: lead.description.includes('Bee') },
    { name: 'Monthly Maintenance', price: '$65/month', included: lead.serviceType === 'Commercial' },
  ];

  const downloadDocument = (type: string) => {
    // Simulate download
    const fileName = type === 'quote' ? `Quote_${lead.name.replace(/\s+/g, '_')}.pdf` : `Contract_${lead.name.replace(/\s+/g, '_')}.pdf`;
    console.log(`Downloading ${fileName}`);
    // In a real app, this would trigger an actual download
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gray-900 border-gray-700 text-white">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-xl">
            <span className="text-2xl">{lead.icon}</span>
            <div>
              <div className="flex items-center gap-2">
                {lead.name}
                <Badge className={`${getStatusColor(lead.status)} text-white`}>
                  {lead.status.toUpperCase()}
                </Badge>
              </div>
              <p className="text-sm text-gray-400 font-normal">{lead.serviceType} Service</p>
            </div>
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          {/* Customer Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-green-400 flex items-center gap-2">
              <User className="w-5 h-5" />
              Customer Details
            </h3>
            <div className="bg-gray-800 rounded-lg p-4 space-y-3">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gray-400" />
                <span>{lead.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gray-400" />
                <span>{lead.email}</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gray-400 mt-1" />
                <span>{lead.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gray-400" />
                <span>Last Contact: {lead.lastContact}</span>
              </div>
              <div className="flex items-center gap-2">
                <Bug className="w-4 h-4 text-gray-400" />
                <span className={getPriorityColor(lead.priority)}>
                  {lead.priority.toUpperCase()} Priority
                </span>
              </div>
            </div>
          </div>

          {/* Service Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-400 flex items-center gap-2">
              <Bug className="w-5 h-5" />
              Service Requirements
            </h3>
            <div className="bg-gray-800 rounded-lg p-4 space-y-3">
              <div>
                <span className="text-gray-400">Problem Description:</span>
                <p className="text-white mt-1">{lead.description}</p>
              </div>
              <div>
                <span className="text-gray-400">Sales Person:</span>
                <p className="text-white">John Martinez</p>
              </div>
              <div>
                <span className="text-gray-400">Estimated Value:</span>
                <p className="text-green-400 font-semibold text-lg">{lead.estimatedValue}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Service Pricing Table */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-yellow-400 flex items-center gap-2 mb-4">
            <DollarSign className="w-5 h-5" />
            Service Pricing
          </h3>
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-700">
                <tr>
                  <th className="text-left p-3 text-gray-300">Service</th>
                  <th className="text-right p-3 text-gray-300">Price</th>
                  <th className="text-center p-3 text-gray-300">Included</th>
                </tr>
              </thead>
              <tbody>
                {services.map((service, index) => (
                  <tr key={index} className={`border-t border-gray-600 ${service.included ? 'bg-gray-750' : 'opacity-50'}`}>
                    <td className="p-3">{service.name}</td>
                    <td className="p-3 text-right font-medium">{service.price}</td>
                    <td className="p-3 text-center">
                      {service.included ? (
                        <span className="text-green-400">✓</span>
                      ) : (
                        <span className="text-gray-500">-</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="bg-gray-700">
                <tr>
                  <td className="p-3 font-semibold">Total Estimate</td>
                  <td className="p-3 text-right font-bold text-green-400">{lead.estimatedValue}</td>
                  <td className="p-3"></td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-6 pt-4 border-t border-gray-700">
          {lead.status === 'quote' && (
            <Button 
              onClick={() => downloadDocument('quote')}
              className="flex items-center gap-2 bg-yellow-600 hover:bg-yellow-700"
            >
              <Download className="w-4 h-4" />
              Download Quotation
            </Button>
          )}
          {lead.status === 'contract' && (
            <Button 
              onClick={() => downloadDocument('contract')}
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700"
            >
              <Download className="w-4 h-4" />
              Download Contract
            </Button>
          )}
          <Button variant="outline" className="border-gray-600 text-gray-300 hover:text-white">
            <FileText className="w-4 h-4 mr-2" />
            Edit Details
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LeadDetailDialog;
