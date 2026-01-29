import { Historique, CreateHistoriqueDto } from '../models/Historique';

export interface IHistoriqueService {
  getAll(): Promise<Historique[]>;
  getById(id: string): Promise<Historique>;
  saveOne(data: CreateHistoriqueDto): Promise<Historique>;
}
