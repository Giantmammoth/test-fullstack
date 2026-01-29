import { Historique, CreateHistoriqueDto } from '../models/Historique';

export interface IHistoriqueService {
  getAll(): Promise<Historique[]>;
  getById(id: string): Promise<Historique>;
  create(data: CreateHistoriqueDto): Promise<Historique>;
  refresh(): Promise<void>;
}
