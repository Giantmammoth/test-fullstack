import { IHistoriqueRepository } from './IHistoriqueRepository';
import { Historique, CreateHistoriqueDto } from '../models/Historique';
import { HistoriqueModel } from '../models/HistoriqueSchema';

export class HistoriqueRepository implements IHistoriqueRepository {
  async findAll(): Promise<Historique[]> {
    return await HistoriqueModel.find().sort({ createdAt: -1 });
  }

  async findById(id: string): Promise<Historique | null> {
    return await HistoriqueModel.findById(id);
  }

  async create(data: CreateHistoriqueDto): Promise<Historique> {
    const historique = new HistoriqueModel({
      ...data,
      createdAt: new Date(),
    });
    return await historique.save();
  }
}
