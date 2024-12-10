import { scaleBand, scaleLinear, max } from "d3";

const tempData = [
  {
    category: "A",
    count: 1000,
  },
  {
    category: "B",
    count: 200,
  },
  {
    category: "C",
    count: 400,
  },
  {
    category: "D",
    count: 800,
  },
  {
    category: "E",
    count: 200,
  },
  {
    category: "F",
    count: 400,
  },
  {
    category: "G",
    count: 200,
  },
];

const height = 400;
const width = 400;
const margin = {
  top: 20,
  bottom: 20,
  left: 60,
  right: 20,
};

//margin convention
const innerHeight = height - margin.top - margin.bottom;
const innerWidth = width - margin.left - margin.right;

export const Barchart = () => {
  const yScale = scaleBand()
    .domain(tempData.map((d) => d.category))
    .range([0, innerHeight])
    .paddingInner(0.1);

  const xScale = scaleLinear()
    .domain([0, max(tempData, (d) => d.count) || 0])
    .range([0, innerWidth]);

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        {xScale.ticks().map((tickValue) => (
          <g transform={`translate(${xScale(tickValue)}, 0)`}>
            <line y2={innerHeight} stroke="#f2f2f2" />
            <text
              style={{ textAnchor: "middle" }}
              dy="0.71em"
              y={innerHeight + 3}
            >
              {tickValue}
            </text>
          </g>
        ))}
        {yScale.domain().map((d) => (  
          <text
            style={{ textAnchor: "end" }}
            x={-6}
            dy=".32em"
            y={(yScale(d) ?? 0) + yScale.bandwidth() / 2}
          >
            {d}
          </text>
        ))}
        {tempData.map((data) => (
          <rect
            x={0}
            y={yScale(data.category)}
            width={xScale(data.count)}
            height={yScale.bandwidth()}
            fill="blue"
          />
        ))}
      </g>
    </svg>
  );
};
