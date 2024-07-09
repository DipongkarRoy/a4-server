import { model, Schema } from 'mongoose';
import { TNursery } from './nursery.interface';

const NurserySchema = new Schema<TNursery>({
  category: { type: String, required: true },
  title: { type: String, required: true },
  price: { type: Number, required: true, min: 0 },
  description: { type: String, required: true },
  ratting: { type: Number },
  image: { type: String },
  brand: { type: String, required: true },
});

export const NuseryModel = model<TNursery>('Nursery', NurserySchema);
