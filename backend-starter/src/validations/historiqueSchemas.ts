import { z } from 'zod';

export const historiqueSchemas = {
  getById: z.object({
    params: z.object({
      id: z.string().min(1, 'ID is required'),
    }),
  }),

  saveOne: z.object({
    body: z.object({
      text: z.string().min(1, 'Text cannot be empty'),
      score: z.number().int().min(0).max(100, 'Score must be between 0 and 100'),
    }),
  }),
};
