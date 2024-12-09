export const paths = {
  home: {
    path: "/",
    getHref: () => "/",
  },
  emojies: {
    path: "/emojies",
    getHref: () => "/emojies",
  },
  chart: {
    path: "/chart",
    getHref: () => "/chart",
  },
} as const;
