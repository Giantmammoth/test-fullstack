export interface AnalyzeRequest {
  text: string;
}

export interface AnalyzeResponse {
  score: number;
  status: 'ok';
}

export interface AnalyzeApiResponse {
  success: boolean;
  data: AnalyzeResponse;
}
