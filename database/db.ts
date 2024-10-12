import { createClient } from "@supabase/supabase-js";
import { Database } from "./database.types";
import { env } from "../utils/env";

export const db = createClient<Database>(env.SUPABASE_URL, env.SUPABASE_KEY);
