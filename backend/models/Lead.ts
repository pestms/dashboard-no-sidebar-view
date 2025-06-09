
import mongoose, { Schema, Document } from 'mongoose';
import { ILead, CustomerType, LeadPriority, LeadStatus, LeadSource } from '../types/database';

interface ILeadDocument extends Omit<ILead, '_id'>, Document {}

const leadSchema = new Schema<ILeadDocument>({
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
    trim: true,
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
  },
  phone: {
    type: String,
    trim: true,
    maxlength: 20
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
    min: 0
  },
  salesPersonId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  leadSource: {
    type: String,
    enum: ['Website Form', 'Phone Call', 'Referral', 'Advertisement', 'Other'] as LeadSource[],
    required: true,
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
    trim: true,
    maxlength: 2000
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Virtual for activities
leadSchema.virtual('activities', {
  ref: 'LeadActivity',
  localField: '_id',
  foreignField: 'leadId'
});

// Virtual for sales person details
leadSchema.virtual('salesPerson', {
  ref: 'User',
  localField: 'salesPersonId',
  foreignField: '_id',
  justOne: true
});

// Virtual for service details
leadSchema.virtual('serviceDetails', {
  ref: 'Service',
  localField: 'services',
  foreignField: '_id'
});

// Indexes
leadSchema.index({ email: 1 });
leadSchema.index({ phone: 1 });
leadSchema.index({ status: 1 });
leadSchema.index({ priority: 1 });
leadSchema.index({ salesPersonId: 1 });
leadSchema.index({ leadSource: 1 });
leadSchema.index({ createdAt: -1 });
leadSchema.index({ lastContact: -1 });

// Compound indexes
leadSchema.index({ status: 1, priority: 1 });
leadSchema.index({ salesPersonId: 1, status: 1 });

export const Lead = mongoose.model<ILeadDocument>('Lead', leadSchema);
