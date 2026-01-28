import { Document } from 'mongoose';

export interface Historique extends Document {
  id: string;
  text: string;
  score: number;
  createdAt: Date;
}

export interface CreateHistoriqueDto {
  text: string;
  score: number;
}
