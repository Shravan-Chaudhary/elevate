import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

export enum UserRole {
  USER = 'user',
  ADMIN = 'admin',
}

export enum SubscriptionPlan {
  FREE = 'free',
  PRO = 'pro',
  ELITE = 'elite',
}

@Schema({
  collection: 'users',
  timestamps: true,
  toJSON: {
    transform: function (doc, ret) {
      delete ret.password;
      delete ret.__v;
      return ret;
    },
  },
})
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true, lowercase: true, index: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ type: String, enum: UserRole, default: UserRole.USER })
  role: UserRole;

  @Prop({ default: true })
  isActive: boolean;

  @Prop()
  lastLoginAt?: Date;

  // Subscription
  @Prop({
    type: String,
    enum: SubscriptionPlan,
    default: SubscriptionPlan.FREE,
  })
  subscriptionPlan: SubscriptionPlan;

  @Prop()
  stripeCustomerId?: string;

  @Prop()
  subscriptionEndDate?: Date;

  // Usage tracking
  @Prop({ default: 0 })
  interviewsUsed: number;

  @Prop()
  usageResetDate: Date;

  // Analytics
  @Prop({ default: 0 })
  totalInterviews: number;
}

export const UserSchema = SchemaFactory.createForClass(User);

// Virtual fields
UserSchema.virtual('fullName').get(function () {
  return this.name;
});

UserSchema.virtual('interviewLimit').get(function () {
  const limits = {
    [SubscriptionPlan.FREE]: 1,
    [SubscriptionPlan.PRO]: 20,
    [SubscriptionPlan.ELITE]: 50,
  };
  return limits[this.subscriptionPlan];
});

UserSchema.virtual('remainingInterviews').get(function () {
  const limits = {
    [SubscriptionPlan.FREE]: 1,
    [SubscriptionPlan.PRO]: 20,
    [SubscriptionPlan.ELITE]: 50,
  };
  const limit = limits[this.subscriptionPlan];
  return Math.max(0, limit - this.interviewsUsed);
});

// Indexes
// UserSchema.index({ email: 1 });
UserSchema.index({ subscriptionPlan: 1 });
UserSchema.index({ role: 1 });

// Reset usage monthly
UserSchema.pre('save', function (next) {
  try {
    if (this.isNew || !this.usageResetDate) {
      const today = new Date();
      const nextResetDate = new Date(today);
      nextResetDate.setMonth(today.getMonth() + 1);
      nextResetDate.setDate(1); // Set to first day of next month
      nextResetDate.setHours(0, 0, 0, 0);
      this.usageResetDate = nextResetDate;
    }

    // Check if it's time to reset usage
    const now = new Date();
    if (this.usageResetDate && now >= this.usageResetDate) {
      this.interviewsUsed = 0;
      const nextResetDate = new Date(now);
      nextResetDate.setMonth(now.getMonth() + 1);
      nextResetDate.setDate(1);
      nextResetDate.setHours(0, 0, 0, 0);
      this.usageResetDate = nextResetDate;
    }

    next();
  } catch (error) {
    next(
      error instanceof Error
        ? error
        : new Error('Unknown error in pre-save hook'),
    );
  }
});
