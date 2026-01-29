import {
  Historique,
  CreateHistoriqueDto,
} from '../models/Historique';

export interface IHistoriqueRepository {
  getAll(): Promise<Historique[]>;
  getById(id: string): Promise<Historique>;
  create(data: CreateHistoriqueDto): Promise<Historique>;
}
