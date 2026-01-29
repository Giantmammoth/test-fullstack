import { AnalyzeRequest, AnalyzeApiResponse } from '../models/Analyze';

export interface IAnalyzeRepository {
  analyze(request: AnalyzeRequest): Promise<AnalyzeApiResponse>;
}
