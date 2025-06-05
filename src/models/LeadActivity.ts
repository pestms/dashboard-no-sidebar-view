
import mongoose, { Schema } from 'mongoose';
import { ILeadActivity, ActivityType } from '../types/database';

const leadActivitySchema = new Schema<ILeadActivity>({
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

// Indexes
leadActivitySchema.index({ leadId: 1 });
leadActivitySchema.index({ userId: 1 });
leadActivitySchema.index({ activityType: 1 });
leadActivitySchema.index({ scheduledDate: 1 });
leadActivitySchema.index({ isCompleted: 1 });
leadActivitySchema.index({ createdAt: -1 });

export const LeadActivity = mongoose.model<ILeadActivity>('LeadActivity', leadActivitySchema);
