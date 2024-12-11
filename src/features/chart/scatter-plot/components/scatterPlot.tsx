import { useMemo, useState } from "react";
import { extent, scaleLinear, scaleOrdinal } from "d3";

import { Circle } from "../../../../components/circle";
import { Margin } from "../../../../types";
import {
  DEFAULT_HEIGHT,
  DEFAULT_WIDTH,
  DEFAULT_MARGIN,
} from "../../../../constants/defaults";
import { XAxisLabels, YAxisLabels } from "../../../../components/axis";
import { AxisTitle } from "../../../../components/title";
import { randomColor } from "../../../../utils/randomColor";
import { Legend } from "../../../../components/legend";

type ScatterPlotData = {
  x: number;
  y: number;
  name: string;
};

export type ScatterPlotProps = {
  data: ScatterPlotData[];
  width?: number;
  height?: number;
  margin?: Margin;
  yaxisLabel?: string;
  xaxisLabel?: string;
  showAxisLines?: boolean;
};

export const ScatterPlot = ({
  data,
  width = DEFAULT_WIDTH,
  height = DEFAULT_HEIGHT,
  margin = DEFAULT_MARGIN,
  xaxisLabel,
  yaxisLabel,
  showAxisLines,
}: ScatterPlotProps) => {
  const xValue = (d: ScatterPlotData) => d.x;
  const yValue = (d: ScatterPlotData) => d.y;
  const [hovered, setHovered] = useState<string | null>(null);

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

  const colors = useMemo(() => {
    return [
      ...Array.from({ length: new Set(data.map((d) => d.name)).size }).map(() =>
        randomColor()
      ),
    ];
  }, [data]);

  const colorScale = scaleOrdinal()
    .domain(data.map((d) => d.name))
    .range(colors);

  const filterdData = useMemo(() => {
    return data.filter((d) => d.name === hovered);
  }, [data, hovered]);

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
        <g transform={`translate(${innerWidth + 20})`}>
          <Legend colorScale={colorScale} onHover={setHovered} />
        </g>
        <g opacity={hovered ? 0.2 : 1}>
          {data.map((d, i) => (
            <Circle
              key={i}
              r={4}
              cx={xScale(d.x)}
              cy={yScale(d.y)}
              fill={colorScale(d.name) as string}
            />
          ))}
        </g>
        {filterdData.map((d, i) => (
          <Circle
            key={i}
            r={4}
            cx={xScale(d.x)}
            cy={yScale(d.y)}
            fill={colorScale(d.name) as string}
          />
        ))}
      </g>
    </svg>
  );
};
