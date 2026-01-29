import { IAnalyzeService } from './IAnalyzeService';
import { IAnalyzeRepository } from '../repositories/IAnalyzeRepository';
import { AnalyzeRequest, AnalyzeResponse } from '../models/Analyze';

export class AnalyzeService implements IAnalyzeService {
  constructor(private analyzeRepository: IAnalyzeRepository) {}

  async analyze(request: AnalyzeRequest): Promise<AnalyzeResponse> {
    const response = await this.analyzeRepository.analyze(request);
    if (!response.success) {
      throw new Error('Failed to analyze text');
    }
    return response.data;
  }
}
