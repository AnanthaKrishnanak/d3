/* eslint-disable @typescript-eslint/no-explicit-any */
import { csv } from "d3";
import React from "react";

const url =
  "https://gist.githubusercontent.com/AnanthaKrishnanak/46324aaf698973325e204f7bd922b45c/raw/13fba51127f81f58d4fffc3052333123465f52de/gistfile1.txt";

export type IrisFlowerDataSet = {
  sepal_length: number;
  sepal_width: number;
  petal_length: number;
  petal_width: number;
  species: string;
}[];

export const useIrisFlowerDataSet = () => {
  const [data, setData] = React.useState<unknown>();

  React.useEffect(() => {
    if (data) return;
    const row = (d: any) => {
      d.sepal_length = +d.sepal_length;
      d.sepal_width = +d.sepal_width;
      d.petal_length = +d.petal_length;
      d.petal_width = +d.petal_width;
      return d;
    };

    csv(url, row).then(setData);
  }, [data]);

  return data as IrisFlowerDataSet;
};
