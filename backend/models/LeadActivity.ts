
import mongoose, { Schema, Document } from 'mongoose';
import { ILeadActivity, ActivityType, AgendaType } from '../types/database';

interface ILeadActivityDocument extends Omit<ILeadActivity, '_id'>, Document {}

const leadActivitySchema = new Schema<ILeadActivityDocument>({
  leadId: {
    type: Schema.Types.ObjectId,
    ref: 'Lead',
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  activityType: {
    type: String,
    enum: ['call', 'email', 'meeting', 'quote_sent', 'follow_up', 'note'] as ActivityType[],
    required: true
  },
  description: {
    type: String,
    required: true,
    trim: true,
    maxlength: 1000
  },
  scheduledDate: {
    type: Date
  },
  agenda: {
    type: String,
    enum: ['call', 'email', 'meeting', 'site_visit', 'quote_review', 'contract_signing'] as AgendaType[]
  },
  completedDate: {
    type: Date
  },
  isCompleted: {
    type: Boolean,
    required: true,
    default: false
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Add virtual for user details
leadActivitySchema.virtual('user', {
  ref: 'User',
  localField: 'userId',
  foreignField: '_id',
  justOne: true
});

// Add virtual for lead details
leadActivitySchema.virtual('lead', {
  ref: 'Lead',
  localField: 'leadId',
  foreignField: '_id',
  justOne: true
});

// Indexes
leadActivitySchema.index({ leadId: 1 });
leadActivitySchema.index({ userId: 1 });
leadActivitySchema.index({ activityType: 1 });
leadActivitySchema.index({ scheduledDate: 1 });
leadActivitySchema.index({ isCompleted: 1 });
leadActivitySchema.index({ createdAt: -1 });

export const LeadActivity = mongoose.model<ILeadActivityDocument>('LeadActivity', leadActivitySchema);
