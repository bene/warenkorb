import "./index.css";

import superjson from "superjson";
import React from "react";
import ReactDOM from "react-dom/client";
import { httpBatchLink } from "@trpc/react-query";
import { QueryClientProvider } from "@tanstack/react-query";

import App from "./App.tsx";
import { queryClient } from "./query.ts";
import { config } from "./config.ts";
import { trpc } from "./trpc.ts";

const trpcClient = trpc.createClient({
  transformer: superjson,
  links: [
    httpBatchLink({
      url: `${config.apiUrl}/trpc`,
    }),
  ],
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </trpc.Provider>
  </React.StrictMode>,
);
