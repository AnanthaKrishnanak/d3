export const paths: { [key: string]: { path: string; getHref: () => string } } =
  {
    home: {
      path: "/",
      getHref: () => "/",
    },
    emojies: {
      path: "/emojies",
      getHref: () => "/emojies",
    },
    pie: {
      path: "/pie-chart",
      getHref: () => "/pie-chart",
    },
    bar: {
      path: "/bar-chart",
      getHref: () => "/bar-chart",
    },
    scatterPlot: {
      path: "/scatter-plot",
      getHref: () => "/scatter-plot",
    },
    line: {
      path: "/line-chart",
      getHref: () => "/line-chart",
    },
  } as const;
