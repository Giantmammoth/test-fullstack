import { Schema, model } from 'mongoose';
import { Historique } from './Historique';

const historiqueSchema = new Schema<Historique>(
  {
    text: {
      type: String,
      required: true,
    },
    score: {
      type: Number,
      required: true,
      min: 0,
      max: 100,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: false, // On gère createdAt manuellement
    toJSON: {
      transform: (doc, ret) => {
        ret.id = ret._id.toString();
        delete ret._id;
        delete ret.__v;
        return ret;
      },
    },
  }
);

export const HistoriqueModel = model<Historique>('Historique', historiqueSchema);
