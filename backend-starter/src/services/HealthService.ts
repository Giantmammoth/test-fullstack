import { IHealthService } from './IHealthService';

export class HealthService implements IHealthService {
  async getHealth(): Promise<{ status: 'ok'; service: string; timestamp: string }> {
    return {
      status: 'ok',
      service: 'backend-starter',
      timestamp: new Date().toISOString(),
    };
  }
}

