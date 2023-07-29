import { router, publicProcedure } from "../trpc";

export const listRouter = router({
  demo: publicProcedure.query(async ({ ctx }) => {
    return {
      key: "Hallo",
      key2: "Welt",
    };
  }),
});
