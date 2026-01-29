import { Request, Response } from 'express';
import { IAnalyzeService } from '../services/IAnalyzeService';

export class AnalyzeController {
  constructor(private analyzeService: IAnalyzeService) {}

  analyze = async (req: Request, res: Response): Promise<void> => {
    try {
      const { text } = req.body;
      const result = await this.analyzeService.analyze({ text });
      res.status(200).json({
        success: true,
        data: result,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error analyzing text',
        error: error instanceof Error ? error.message : 'Unknown error',
      });
    }
  };
}
