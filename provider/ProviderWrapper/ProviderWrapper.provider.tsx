"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DarkModeContextProvider, MenuContextProvider } from "@/context";
import { GlobalStyle } from "@/styles";
import { PropsWithChildren, useState } from "react";

export function ProviderWrapper({ children }: PropsWithChildren) {
  const [queryClient] = useState(new QueryClient());
  return (
    <>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <DarkModeContextProvider>
          <MenuContextProvider>{children}</MenuContextProvider>
        </DarkModeContextProvider>
      </QueryClientProvider>
    </>
  );
}
