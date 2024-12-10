import { extent, scaleLinear } from "d3";

import { Circle } from "../../../../components/circle";
import { Margin } from "../../../../types";
import {
  DEFAULT_HEIGHT,
  DEFAULT_WIDTH,
  MARGIN,
} from "../../../../constants/defaults";
import { XAxisLabels, YAxisLabels } from "../../../../components/axis";
import { AxisTitle } from "../../../../components/title";

type ScatterPlotData = {
  x: number;
  y: number;
};

export type ScatterPlotProps = {
  data: ScatterPlotData[];
  width?: number;
  height?: number;
  margin?: Margin;
  yaxisLabel?: string;
  xaxisLabel?: string;
  showAxisLines?: boolean;
  fill?: string;
};

export const ScatterPlot = ({
  data,
  width = DEFAULT_WIDTH,
  height = DEFAULT_HEIGHT,
  margin = MARGIN,
  xaxisLabel,
  yaxisLabel,
  showAxisLines,
  fill = "blue",
}: ScatterPlotProps) => {
  const xValue = (d: ScatterPlotData) => d.x;
  const yValue = (d: ScatterPlotData) => d.y;

  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  const xScale = scaleLinear()
    .domain(extent(data, xValue).map((v) => (v === undefined ? 0 : v)))
    .range([0, innerWidth])
    .nice();

  const yScale = scaleLinear()
    .domain(extent(data, yValue).map((v) => (v === undefined ? 0 : v)))
    .range([0, innerHeight])
    .nice();

  return (
    <svg height={height} width={width}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        <XAxisLabels
          xScale={xScale}
          labels={xScale.ticks()}
          innerHeight={innerHeight}
          showAxisLines={showAxisLines}
        />
        <YAxisLabels
          yScale={yScale}
          labels={yScale.ticks()}
          innerWidth={innerWidth}
          showAxisLines={showAxisLines}
        />
        <AxisTitle>
          <AxisTitle.Xaxis innerHeight={innerHeight} innerWidth={innerWidth}>
            {xaxisLabel}
          </AxisTitle.Xaxis>
        </AxisTitle>
        <AxisTitle>
          <AxisTitle.Yaxis innerHeight={innerHeight}>
            {yaxisLabel}
          </AxisTitle.Yaxis>
        </AxisTitle>
        {data.map((d, i) => (
          <Circle key={i} r={4} cx={xScale(d.x)} cy={yScale(d.y)} fill={fill} />
        ))}
      </g>
    </svg>
  );
};
