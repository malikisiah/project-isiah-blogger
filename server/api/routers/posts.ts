import { createTRPCRouter, publicProcedure } from "../trpc";

export const postRouter = createTRPCRouter({
  getPosts: publicProcedure.query(async ({ ctx }) => {
    const { data } = await ctx.db.from("blog_posts").select("*");
    return data;
  }),
});
