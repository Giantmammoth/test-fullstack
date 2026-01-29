export const API_CONFIG = {
  BACKEND_URL: import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000',
  AI_SERVICE_URL: import.meta.env.VITE_AI_SERVICE_URL || 'http://localhost:3001',
} as const;
