export const paths = {
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
} as const;
