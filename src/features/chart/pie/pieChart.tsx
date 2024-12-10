import { arc, pie } from "d3";

export type PieChartProps = {
  data: {
    name: string;
    value: number;
    color: string;
    key: number;
  }[];
  width?: number;
  height?: number;
};

const pieArc = arc();

export const PieChart = ({
  data,
  width = 400,
  height = 400,
}: PieChartProps) => {
  const centerX = width / 2;
  const centerY = height / 2;

  const colorPie = pie();

  const radius = width > height ? height / 2 : width / 2;

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${centerX}, ${centerY})`}>
        {colorPie(data.map((d) => d.key)).map((d, i) => {
          return (
            <path
              fill={data[i].color}
              key={`pie-${i}-{d.data.name}`}
              d={
                pieArc({
                  innerRadius: width / 4,
                  outerRadius: radius,
                  ...d,
                })!
              }
            />
          );
        })}
      </g>
    </svg>
  );
};
