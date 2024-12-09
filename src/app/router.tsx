import { paths } from "../config/path";
import { Home } from "../features/home";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

const createAppRouter = () =>
  createBrowserRouter([
    {
      path: paths.home.path,
      element: <Home />,
    },
    {
      path: paths.emojies.path,
      lazy: async () => {
        const { SmileyEmoji } = await import(
          "../features/smiley-emoji/routes/emoji"
        );
        return { Component: SmileyEmoji };
      },
    },
    {
      path: paths.chart.path,
      lazy: async () => {
        const { Chart } = await import("../features/chart");
        return { Component: Chart };
      },
    },
  ]);

export const AppRouter = () => {
  const router = createAppRouter();

  return <RouterProvider router={router} />;
};
