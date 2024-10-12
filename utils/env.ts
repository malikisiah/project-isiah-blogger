import { z } from "zod";

const schema = z.object({
  SUPABASE_URL: z.string(),
  SUPABASE_KEY: z.string(),
  EXPO_PUBLIC_API_URL: z.string(),
});

export const env = schema.parse(process.env);
