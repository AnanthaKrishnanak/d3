import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import * as React from "react";
import { queryConfig } from "../reactQuery";
import { Spin } from "antd";

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: queryConfig,
      })
  );

  return (
    <React.Suspense
      fallback={
        <div className="flexCenter">
          <Spin />
        </div>
      }
    >
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </React.Suspense>
  );
};
