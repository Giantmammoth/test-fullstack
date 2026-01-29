import { IHistoriqueRepository } from './IHistoriqueRepository';
import {
  Historique,
  CreateHistoriqueDto,
  HistoriqueApiResponse,
  SingleHistoriqueApiResponse,
} from '../models/Historique';
import { API_CONFIG } from '../config/api';
import axios from 'axios';

export class HistoriqueRepository implements IHistoriqueRepository {
  async getAll(): Promise<Historique[]> {
    const response = await axios.get<HistoriqueApiResponse>(
      `${API_CONFIG.BACKEND_URL}/api/historiques`
    );
    return response.data.data;
  }

  async getById(id: string): Promise<Historique> {
    const response = await axios.get<SingleHistoriqueApiResponse>(
      `${API_CONFIG.BACKEND_URL}/api/historiques/${id}`
    );
    return response.data.data;
  }

  async create(data: CreateHistoriqueDto): Promise<Historique> {
    const response = await axios.post<SingleHistoriqueApiResponse>(
      `${API_CONFIG.BACKEND_URL}/api/historiques`,
      data
    );
    return response.data.data;
  }
}
