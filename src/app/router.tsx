import { paths } from "../config/path";
import { Home } from "../components/home";

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
      path: paths.pie.path,
      lazy: async () => {
        const { Chart } = await import("../features/chart/pie");
        return { Component: Chart };
      },
    },
    {
      path: paths.bar.path,
      lazy: async () => {
        const { Chart } = await import("../features/chart/bar");
        return { Component: Chart };
      },
    },
    {
      path: paths.scatterPlot.path,
      lazy: async () => {
        const { ScatterPlotExample } = await import(
          "../features/chart/scatter-plot"
        );
        return { Component: ScatterPlotExample };
      },
    },
    {
      path: paths.line.path,
      lazy: async () => {
        const { LineChartExample } = await import("../features/chart/line");
        return { Component: LineChartExample };
      },
    },
    {
      path: paths.tree.path,
      lazy: async () => {
        const { TreeExample } = await import("../features/chart/tree");
        return { Component: TreeExample };
      },
    },
  ]);

export const AppRouter = () => {
  const router = createAppRouter();

  return <RouterProvider router={router} />;
};
