
import mongoose, { Schema } from 'mongoose';
import { IContract, CustomerType, IQuotationService } from '../types/database';

const contractServiceSchema = new Schema<IQuotationService>({
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
    min: 1
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

const contractSchema = new Schema<IContract>({
  contractNumber: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  quotationId: {
    type: Schema.Types.ObjectId,
    ref: 'Quotation',
    required: true
  },
  leadId: {
    type: Schema.Types.ObjectId,
    ref: 'Lead',
    required: true
  },
  customerName: {
    type: String,
    required: true,
    trim: true
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
    trim: true
  },
  phone: {
    type: String,
    trim: true
  },
  address: {
    type: String,
    required: true,
    trim: true
  },
  salesPersonId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  status: {
    type: String,
    enum: ['active', 'completed', 'cancelled', 'paused'],
    required: true,
    default: 'active'
  },
  startDate: {
    type: Date,
    required: true,
    default: Date.now
  },
  endDate: {
    type: Date
  },
  totalValue: {
    type: Number,
    required: true,
    min: 0
  },
  services: [contractServiceSchema],
  paymentTerms: {
    type: String,
    required: true,
    maxlength: 500
  },
  notes: {
    type: String,
    maxlength: 2000
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Pre-save middleware to generate contract number
contractSchema.pre('save', async function(next) {
  if (this.isNew && !this.contractNumber) {
    const count = await mongoose.model('Contract').countDocuments();
    this.contractNumber = `C-${new Date().getFullYear()}-${String(count + 1).padStart(4, '0')}`;
  }
  next();
});

// Indexes
contractSchema.index({ contractNumber: 1 });
contractSchema.index({ quotationId: 1 });
contractSchema.index({ leadId: 1 });
contractSchema.index({ salesPersonId: 1 });
contractSchema.index({ status: 1 });
contractSchema.index({ startDate: -1 });

export const Contract = mongoose.model<IContract>('Contract', contractSchema);
