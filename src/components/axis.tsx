import { ScaleLinear } from "d3";

export const XAxisLabels = ({
  labels,
  xScale,
  innerHeight,
  showAxisLines,
}: {
  labels: number[];
  xScale: ScaleLinear<number, number, never>;
  innerHeight: number;
  showAxisLines?: boolean;
}) => {
  return (
    <>
      {labels.map((label) => (
        <g transform={`translate(${xScale(label)}, 0)`}>
          {showAxisLines && <line y2={innerHeight} />}
          <text
            style={{ textAnchor: "middle" }}
            dy="0.71em"
            y={innerHeight + 4}
          >
            {label}
          </text>
        </g>
      ))}
    </>
  );
};

export const YAxisLabels = ({
  labels,
  yScale,
  showAxisLines,
}: {
  labels: number[];
  yScale: ScaleLinear<number, number, never>;
  innerWidth: number;
  showAxisLines?: boolean;
}) => {
  return (
    <>
      {labels.map((label) => (
        <g transform={`translate(0, ${yScale(label)})`}>
          {showAxisLines && <line x2={innerHeight} />}
          <text
            style={{ textAnchor: "end" }}
            dx={-4}
            dy=".32em"
            y={yScale(label)}
          >
            {label}
          </text>
        </g>
      ))}
    </>
  );
};