import {
  createTRPCProxyClient,
  createTRPCReact,
  httpBatchLink,
} from "@trpc/react-query";
import transformer from "superjson";
import type { AppRouter } from "@warenkorb/api";

import { config } from "./config";

export const trpc = createTRPCReact<AppRouter>();

export const trpcVanilla = createTRPCProxyClient<AppRouter>({
  transformer,
  links: [
    httpBatchLink({
      url: `${config.apiUrl}/trpc`,
    }),
  ],
});
