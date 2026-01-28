import { IHealthService } from './IHealthService';
import { config } from '../config/app';

export class HealthService implements IHealthService {
  async getHealth(): Promise<{ status: 'ok'; service: string; timestamp: string }> {
    return {
      status: 'ok',
      service: config.serviceName,
      timestamp: new Date().toISOString(),
    };
  }
}

