import { z } from "zod";
import "dotenv/config";


// 1. Define schema for env vars
const envSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]),
  PORT: z
    .string()
    .transform((val) => parseInt(val, 10))
    .refine((val) => !isNaN(val) && val > 0, {
      message: "PORT must be a valid positive number",
    }),
  DATABASE_URL: z.string().url(),
});

// 2. Validate process.env
const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  console.error("❌ Invalid environment variables:");
  console.error(parsedEnv.error.format());
  process.exit(1); // Exit app if env vars are invalid
}

// 3. Inferred type from schema
type Env = z.infer<typeof envSchema>;

// 4. Export validated env
export const env: Env = parsedEnv.data;

// --- Example usage ---
console.log("✅ Environment variables validated!");
console.log(`Running in ${env.NODE_ENV} mode on port ${env.PORT}`);
console.log(`DB URL: ${env.DATABASE_URL}`);
