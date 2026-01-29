import { AnalyzeRequest, AnalyzeResponse } from '../models/Analyze';

export interface IAnalyzeService {
  analyze(request: AnalyzeRequest): Promise<AnalyzeResponse>;
}
