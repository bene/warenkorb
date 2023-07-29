import fastify from "fastify";
import cors from "@fastify/cors";
import ws from "@fastify/websocket";
import { fastifyTRPCPlugin } from "@trpc/server/adapters/fastify";

import { router } from "./trpc";
import { listRouter } from "./routers/list";

const appRouter = router({
  list: listRouter,
});

const server = fastify({
  maxParamLength: 5000,
});

// Register plugins
server.register(cors);
server.register(ws);
server.register(fastifyTRPCPlugin, {
  prefix: "/trpc",
  useWSS: true,
  trpcOptions: { router: appRouter },
});

server.listen({ port: 3000 }).catch((err) => {
  console.error(err);
  process.exit(1);
});

export type AppRouter = typeof appRouter;
