import { IHistoriqueService } from './IHistoriqueService';
import { IHistoriqueRepository } from '../repositories/IHistoriqueRepository';
import { Historique, CreateHistoriqueDto } from '../models/Historique';
import { NotFoundError } from '../utils/errors';

export class HistoriqueService implements IHistoriqueService {
  constructor(private historiqueRepository: IHistoriqueRepository) {}

  async getAll(): Promise<Historique[]> {
    return await this.historiqueRepository.findAll();
  }

  async getById(id: string): Promise<Historique> {
    const historique = await this.historiqueRepository.findById(id);
    if (!historique) {
      throw new NotFoundError(`Historique with id ${id} not found`);
    }
    return historique;
  }

  async saveOne(data: CreateHistoriqueDto): Promise<Historique> {
    return await this.historiqueRepository.create(data);
  }
}
