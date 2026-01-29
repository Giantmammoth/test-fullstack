export interface IHealthService {
  getHealth(): Promise<{ status: 'ok'; service: string; timestamp: string }>;
}

