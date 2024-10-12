import { publicProcedure, router } from "./trpc";
import { db } from "@/src/database/db";
const appRouter = router({
  getArticles: publicProcedure.mutation(async () => {
    const { data: blogPosts } = await db.from("blog_posts").select("*");

    return blogPosts;
  }),
});

export type AppRouter = typeof appRouter;
