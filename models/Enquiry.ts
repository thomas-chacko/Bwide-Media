import mongoose, { Schema, Model } from 'mongoose';

export interface IEnquiry {
  name: string;
  company?: string;
  phone: string;
  email: string;
  services: string[];
  message: string;
  budget?: string;
  contactMethod: 'Phone' | 'WhatsApp' | 'Email';
  status: 'new' | 'contacted' | 'converted' | 'closed';
  createdAt: Date;
  updatedAt: Date;
}

const enquirySchema = new Schema<IEnquiry>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    company: {
      type: String,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    services: {
      type: [String],
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    budget: {
      type: String,
    },
    contactMethod: {
      type: String,
      enum: ['Phone', 'WhatsApp', 'Email'],
      default: 'Phone',
    },
    status: {
      type: String,
      enum: ['new', 'contacted', 'converted', 'closed'],
      default: 'new',
    },
  },
  {
    timestamps: true,
  }
);

// Add indexes for better query performance
enquirySchema.index({ email: 1 });
enquirySchema.index({ createdAt: -1 });
enquirySchema.index({ status: 1 });

const Enquiry: Model<IEnquiry> = 
  mongoose.models.Enquiry || mongoose.model<IEnquiry>('Enquiry', enquirySchema);

export default Enquiry;
