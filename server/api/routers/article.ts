import { createTRPCRouter, publicProcedure } from "../trpc";
import { z } from "zod";
import { kebabCase } from "lodash";
export const articleRouter = createTRPCRouter({
  getArticles: publicProcedure.query(async ({ ctx }) => {
    const { data } = await ctx.db
      .from("articles")
      .select("*")
      .order("date", { ascending: false });
    return data;
  }),
  updateArticle: publicProcedure
    .input(
      z.object({
        id: z.number(),
        title: z.string(),
        description: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      await ctx.db
        .from("articles")
        .update({
          title: input.title,
          description: input.description,
          slug: kebabCase(input.title),
        })
        .eq("id", input.id);
    }),
});
