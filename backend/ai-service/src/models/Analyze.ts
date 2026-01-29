export interface AnalyzeRequest {
  text: string;
}

export interface AnalyzeResponse {
  score: number;
  status: 'ok';
}
