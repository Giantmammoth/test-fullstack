import { IAnalyzeService } from './IAnalyzeService';
import { AnalyzeRequest, AnalyzeResponse } from '../models/Analyze';

export class AnalyzeService implements IAnalyzeService {
  private readonly FORBIDDEN_WORDS = ['fraude', 'illégal', 'faux'];
  private readonly BASE_SCORE = 50;
  private readonly LONG_TEXT_BONUS = 20;
  private readonly FORBIDDEN_WORD_PENALTY = 10;
  private readonly MIN_SCORE = 0;
  private readonly MAX_SCORE = 100;
  private readonly LONG_TEXT_THRESHOLD = 100;

  async analyze(request: AnalyzeRequest): Promise<AnalyzeResponse> {
    let score = this.BASE_SCORE;
    const text = request.text.toLowerCase();

    // +20 points si longueur > 100 caractères
    if (request.text.length > this.LONG_TEXT_THRESHOLD) {
      score += this.LONG_TEXT_BONUS;
    }

    // -10 points si contient un mot interdit
    const hasForbiddenWord = this.FORBIDDEN_WORDS.some(word => 
      text.includes(word.toLowerCase())
    );
    if (hasForbiddenWord) {
      score -= this.FORBIDDEN_WORD_PENALTY;
    }

    // Score borné entre 0 et 100
    score = Math.max(this.MIN_SCORE, Math.min(this.MAX_SCORE, score));

    return {
      score,
      status: 'ok',
    };
  }
}
