
import mongoose, { Schema } from 'mongoose';
import { ILead, CustomerType, LeadPriority, LeadStatus, LeadSource } from '../types/database';

const leadSchema = new Schema<ILead>({
  customerName: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100
  },
  customerType: {
    type: String,
    enum: ['Residential', 'Commercial'] as CustomerType[],
    required: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
  },
  phone: {
    type: String,
    trim: true,
    match: [/^\+?[\d\s\-\(\)]+$/, 'Please enter a valid phone number']
  },
  address: {
    type: String,
    required: true,
    trim: true,
    maxlength: 500
  },
  serviceDetails: {
    type: String,
    required: true,
    trim: true,
    maxlength: 1000
  },
  problemDescription: {
    type: String,
    required: true,
    trim: true,
    maxlength: 2000
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high'] as LeadPriority[],
    required: true,
    default: 'medium'
  },
  status: {
    type: String,
    enum: ['lead', 'quote', 'contract'] as LeadStatus[],
    required: true,
    default: 'lead'
  },
  estimatedValue: {
    type: Number,
    required: true,
    min: 0,
    default: 0
  },
  salesPersonId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  leadSource: {
    type: String,
    enum: ['Website Form', 'Phone Call', 'Referral', 'Advertisement', 'Other'] as LeadSource[],
    default: 'Website Form'
  },
  lastContact: {
    type: Date
  },
  services: [{
    type: Schema.Types.ObjectId,
    ref: 'Service'
  }],
  notes: {
    type: String,
    maxlength: 2000
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Indexes for performance
leadSchema.index({ status: 1 });
leadSchema.index({ priority: 1 });
leadSchema.index({ salesPersonId: 1 });
leadSchema.index({ customerType: 1 });
leadSchema.index({ createdAt: -1 });
leadSchema.index({ estimatedValue: -1 });

// Text search index
leadSchema.index({
  customerName: 'text',
  serviceDetails: 'text',
  problemDescription: 'text'
});

export const Lead = mongoose.model<ILead>('Lead', leadSchema);
