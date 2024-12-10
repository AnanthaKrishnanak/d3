import { max, scaleBand, scaleLinear, line, curveNatural } from "d3";
import { Circle } from "../../../components/circle";
import {
  DEFAULT_HEIGHT,
  DEFAULT_WIDTH,
  DEFAULT_MARGIN,
} from "../../../constants/defaults";
import { Margin } from "../../../types";
import { AxisTitle } from "../../../components/title";
import { XAxisLabels, YAxisLabels } from "../../../components/axis";

type LineChartData = {
  x: string;
  y: number;
}[];

type LineChartProps = {
  data: LineChartData;
  width?: number;
  height?: number;
  margin?: Margin;
  xaxisLabel?: string;
  yaxisLabel?: string;
  showAxisLines?: boolean;
  showStroke?: boolean;
  color?: string;
};

export const LineChart = ({
  data,
  width = DEFAULT_WIDTH,
  height = DEFAULT_HEIGHT,
  margin = DEFAULT_MARGIN,
  xaxisLabel,
  yaxisLabel,
  showAxisLines,
  showStroke = true,
  color = "blue",
}: LineChartProps) => {
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  const xScale = scaleBand()
    .domain(data.map((d) => d.x))
    .range([0, innerWidth]);

  const yScale = scaleLinear()
    .domain([0, max(data, (d) => d.y) || 0])
    .range([innerHeight, 0]);

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        <YAxisLabels
          innerWidth={innerWidth}
          labels={yScale.ticks()}
          yScale={yScale}
          showAxisLines={showAxisLines}
        />
        <XAxisLabels
          innerHeight={innerHeight}
          labels={xScale.domain()}
          xScale={xScale}
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
        {showStroke &&
          data.map((d, i) => (
            <g
              key={d.x + i}
              transform={`translate(${xScale(d.x)}, ${yScale(d.y)})`}
            >
              <Circle r={4} color={color} />
            </g>
          ))}
        <path
          fill="none"
          stroke={color}
          strokeWidth={2}
          strokeLinejoin="round"
          d={line()
            .curve(curveNatural)
            .x((d) => xScale(d.x))
            .y((d) => yScale(d.y))(data)}
        />
      </g>
    </svg>
  );
};
