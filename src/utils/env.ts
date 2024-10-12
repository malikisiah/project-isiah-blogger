import { z } from "zod";

const schema = z.object({ SUPABASE_URL: z.string(), SUPABASE_KEY: z.string() });

export const env = schema.parse(process.env);
