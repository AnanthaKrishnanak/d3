import React from "react";
import { csv } from "d3";

const API_URL =
  "https://gist.githubusercontent.com/AnanthaKrishnanak/dec8b3f3e7152068c747ed96d0d49fbf/raw/582bfee4e8724c89333898bc8b562175cd8c926f/mdnNamedColors.csv";
export const useNamedColors = () => {
  const [data, setData] = React.useState<unknown>();

  React.useEffect(() => {
    if (data) return;
    csv(API_URL).then(setData);
  }, [data]);

  return data as { Keyword: string; Hex: string; Specification: string }[];
};
