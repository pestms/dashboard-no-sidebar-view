import { Types } from 'mongoose';

// Base interface for all database documents
export interface BaseDocument {
  _id?: Types.ObjectId;
  createdAt?: Date;
  updatedAt?: Date;
}

// User related types
export type UserRole = 'admin' | 'sales' | 'agent';

export interface IUser extends BaseDocument {
  email: string;
  passwordHash: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  phone?: string;
  avatarUrl?: string;
  isActive: boolean;
  lastLogin?: Date;
}

// Lead related types
export type CustomerType = 'Residential' | 'Commercial';
export type LeadPriority = 'low' | 'medium' | 'high';
export type LeadStatus = 'lead' | 'quote' | 'contract';
export type LeadSource = 'Website Form' | 'Phone Call' | 'Referral' | 'Advertisement' | 'Other';

export interface ILead extends BaseDocument {
  customerName: string;
  customerType: CustomerType;
  email: string;
  phone?: string;
  address: string;
  serviceDetails: string;
  problemDescription: string;
  priority: LeadPriority;
  status: LeadStatus;
  estimatedValue: number;
  salesPersonId?: Types.ObjectId;
  leadSource: LeadSource;
  lastContact?: Date;
  services: Types.ObjectId[]; // Array of service IDs
  notes?: string;
}

// Service related types
export interface IService extends BaseDocument {
  name: string;
  description?: string;
  basePrice: number;
  category?: string;
  isActive: boolean;
}

// Quotation related types
export type QuotationStatus = 'pending' | 'approved' | 'rejected' | 'revised';

export interface IQuotationService {
  serviceId: Types.ObjectId;
  name: string;
  description?: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  included: boolean;
}

export interface IQuotation extends BaseDocument {
  quotationNumber: string;
  leadId: Types.ObjectId;
  customerName: string;
  customerType: CustomerType;
  email: string;
  phone?: string;
  address: string;
  problemDescription: string;
  salesPersonId: Types.ObjectId;
  estimatedValue: number;
  status: QuotationStatus;
  validUntil: Date;
  services: IQuotationService[];
  notes?: string;
  
  // Version control
  parentQuotationId?: Types.ObjectId;
  version: number;
  isLatestVersion: boolean;
  revisionReason?: string;
  
  // Calculated fields (virtuals)
  subtotal: number;
  taxRate: number;
  taxAmount: number;
  totalAmount: number;
}

// Contract related types
export type ContractStatus = 'active' | 'completed' | 'cancelled' | 'paused';

export interface IContract extends BaseDocument {
  contractNumber: string;
  quotationId: Types.ObjectId;
  leadId: Types.ObjectId;
  customerName: string;
  customerType: CustomerType;
  email: string;
  phone?: string;
  address: string;
  salesPersonId: Types.ObjectId;
  status: ContractStatus;
  startDate: Date;
  endDate?: Date;
  totalValue: number;
  services: IQuotationService[];
  paymentTerms: string;
  notes?: string;
}

// Activity related types
export type ActivityType = 'call' | 'email' | 'meeting' | 'quote_sent' | 'follow_up' | 'note';
export type AgendaType = 'call' | 'email' | 'meeting' | 'site_visit' | 'quote_review' | 'contract_signing';

export interface ILeadActivity extends BaseDocument {
  leadId: Types.ObjectId;
  userId: Types.ObjectId;
  activityType: ActivityType;
  description: string;
  scheduledDate?: Date;
  agenda?: AgendaType;
  completedDate?: Date;
  isCompleted: boolean;
}
