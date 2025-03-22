"use client";

import { ReactNode } from "react";
import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import { ReactQueryDevtools } from "react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {

      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 10,
      retry: 2,
      refetchOnWindowFocus: false,
    },
    mutations: {
      retry: 1,
    },
  },
  queryCache: new QueryCache({
    onError: (error) => {
      console.error("❌ Query Error:", error);
    },
  }),
  mutationCache: new MutationCache({
    onError: (error) => {
      console.error("❌ Mutation Error:", error);
    },
  }),
});

type QueryProviderProps = {
  children: ReactNode;
};

const QueryProvider = ({ children }: QueryProviderProps) => {
  return (
    <QueryClientProvider client={queryClient} >
      {children}
      <ReactQueryDevtools initialIsOpen={false}
        position="bottom-right" />
    </QueryClientProvider>
  );
};

export default QueryProvider;
