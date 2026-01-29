import { z } from 'zod';

export const analyzeSchemas = {
  analyze: z.object({
    body: z.object({
      text: z.string().min(1, 'Text cannot be empty'),
    }),
  }),
};
