import { IAnalyzeRepository } from './IAnalyzeRepository';
import { AnalyzeRequest, AnalyzeApiResponse } from '../models/Analyze';
import { API_CONFIG } from '../config/api';
import axios from 'axios';

export class AnalyzeRepository implements IAnalyzeRepository {
  async analyze(request: AnalyzeRequest): Promise<AnalyzeApiResponse> {
    const response = await axios.post<AnalyzeApiResponse>(
      `${API_CONFIG.AI_SERVICE_URL}/api/analyze`,
      request
    );
    return response.data;
  }
}
