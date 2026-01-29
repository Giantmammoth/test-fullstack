export interface Historique {
  id: string;
  text: string;
  score: number;
  createdAt: string;
}

export interface CreateHistoriqueDto {
  text: string;
  score: number;
}

export interface HistoriqueApiResponse {
  success: boolean;
  data: Historique[];
}

export interface SingleHistoriqueApiResponse {
  success: boolean;
  data: Historique;
}
