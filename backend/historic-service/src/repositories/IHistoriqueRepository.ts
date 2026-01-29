import { Historique, CreateHistoriqueDto } from '../models/Historique';

export interface IHistoriqueRepository {
  findAll(): Promise<Historique[]>;
  findById(id: string): Promise<Historique | null>;
  create(data: CreateHistoriqueDto): Promise<Historique>;
}
