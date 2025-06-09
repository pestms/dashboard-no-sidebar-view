
import mongoose, { Schema, Document } from 'mongoose';
import { IQuotation, QuotationStatus, CustomerType, IQuotationService } from '../types/database';

interface IQuotationDocument extends Omit<IQuotation, '_id'>, Document {}

const quotationServiceSchema = new Schema<IQuotationService>({
  serviceId: {
    type: Schema.Types.ObjectId,
    ref: 'Service',
    required: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
    default: 1
  },
  unitPrice: {
    type: Number,
    required: true,
    min: 0
  },
  totalPrice: {
    type: Number,
    required: true,
    min: 0
  },
  included: {
    type: Boolean,
    required: true,
    default: true
  }
}, { _id: false });

const quotationSchema = new Schema<IQuotationDocument>({
  quotationNumber: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    maxlength: 50
  },
  leadId: {
    type: Schema.Types.ObjectId,
    ref: 'Lead',
    required: true
  },
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
    lowercase: true
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
  problemDescription: {
    type: String,
    required: true,
    trim: true,
    maxlength: 2000
  },
  salesPersonId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  estimatedValue: {
    type: Number,
    required: true,
    min: 0
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected', 'revised'] as QuotationStatus[],
    required: true,
    default: 'pending'
  },
  validUntil: {
    type: Date,
    required: true
  },
  services: [quotationServiceSchema],
  notes: {
    type: String,
    trim: true,
    maxlength: 2000
  },
  
  // Version control
  parentQuotationId: {
    type: Schema.Types.ObjectId,
    ref: 'Quotation'
  },
  version: {
    type: Number,
    required: true,
    default: 1,
    min: 1
  },
  isLatestVersion: {
    type: Boolean,
    required: true,
    default: true
  },
  revisionReason: {
    type: String,
    trim: true,
    maxlength: 500
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Virtual for activities
quotationSchema.virtual('activities', {
  ref: 'LeadActivity',
  localField: 'leadId',
  foreignField: 'leadId'
});

// Virtual for lead details
quotationSchema.virtual('lead', {
  ref: 'Lead',
  localField: 'leadId',
  foreignField: '_id',
  justOne: true
});

// Virtual for sales person details
quotationSchema.virtual('salesPerson', {
  ref: 'User',
  localField: 'salesPersonId',
  foreignField: '_id',
  justOne: true
});

// Virtual for calculated fields
quotationSchema.virtual('subtotal').get(function() {
  return this.services.reduce((sum, service) => sum + (service.included ? service.totalPrice : 0), 0);
});

quotationSchema.virtual('taxRate').get(function() {
  return 0.1; // 10% tax rate
});

quotationSchema.virtual('taxAmount').get(function() {
  return this.subtotal * this.taxRate;
});

quotationSchema.virtual('totalAmount').get(function() {
  return this.subtotal + this.taxAmount;
});

// Indexes
quotationSchema.index({ quotationNumber: 1 });
quotationSchema.index({ leadId: 1 });
quotationSchema.index({ salesPersonId: 1 });
quotationSchema.index({ status: 1 });
quotationSchema.index({ validUntil: 1 });
quotationSchema.index({ createdAt: -1 });
quotationSchema.index({ isLatestVersion: 1 });

// Compound indexes
quotationSchema.index({ leadId: 1, version: -1 });
quotationSchema.index({ salesPersonId: 1, status: 1 });
quotationSchema.index({ status: 1, validUntil: 1 });

export const Quotation = mongoose.model<IQuotationDocument>('Quotation', quotationSchema);
