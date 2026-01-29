import { IHistoriqueService } from './IHistoriqueService';
import { IHistoriqueRepository } from '../repositories/IHistoriqueRepository';
import { Historique, CreateHistoriqueDto } from '../models/Historique';

export class HistoriqueService implements IHistoriqueService {
  private historiques: Historique[] = [];

  constructor(private historiqueRepository: IHistoriqueRepository) {}

  async getAll(): Promise<Historique[]> {
    this.historiques = await this.historiqueRepository.getAll();
    return this.historiques;
  }

  async getById(id: string): Promise<Historique> {
    return await this.historiqueRepository.getById(id);
  }

  async create(data: CreateHistoriqueDto): Promise<Historique> {
    const historique = await this.historiqueRepository.create(data);
    this.historiques = [historique, ...this.historiques];
    return historique;
  }

  async refresh(): Promise<void> {
    await this.getAll();
  }

  getCachedHistoriques(): Historique[] {
    return this.historiques;
  }
}
