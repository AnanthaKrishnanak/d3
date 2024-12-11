import { ScaleOrdinal } from "d3";

type LegendProps = {
  colorScale: ScaleOrdinal<string, unknown, never>;
  onHover: (hoveredValue: string | null) => void;
};

export const Legend = ({ colorScale, onHover }: LegendProps) =>
  colorScale.domain().map((domain, i) => (
    <g
      transform={`translate(0, ${i * 20})`}
      key={domain}
      onMouseEnter={() => onHover(domain)}
      onMouseLeave={() => onHover(null)}
    >
      <circle fill={colorScale(domain) as string} r={6} />
      <text x={10} dy=".32em">
        {domain}
      </text>
    </g>
  ));
