import * as d3 from "d3";

type CricleProps = {
  cx: number;
  cy: number;
  r: number;
  fill: string;
};

//face
const width = 500;
const height = 500;
const centerX = width / 2;
const centerY = height / 2;
const strokeWidth = 10;
const radius = centerY - strokeWidth / 2;

//eyes
const eyeRadius = radius / 5;
const eyeOffesetX = 100;
const eyeOffsetY = 80;

//mouth
const mouthRadius = 180;
const mouthWidth = 15;

const Eye = (props: CricleProps) => {
  const { cx, cy, ...rest } = props;

  return (
    <g transform={`translate(${cx}, ${cy})`}>
      <circle {...rest} />
      <circle r={eyeRadius / 4} fill="white" cy={eyeRadius / 2} />
    </g>
  );
};

const mouthArc = ({
  innerRadius,
  outerRadius,
  startAngle,
  endAngle,
}: {
  innerRadius: number;
  outerRadius: number;
  startAngle: number;
  endAngle: number;
}) =>
  d3
    .arc()
    .innerRadius(innerRadius)
    .outerRadius(outerRadius)
    .startAngle(startAngle)
    .endAngle(endAngle)({
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
  })!;

export const SmileyEmoji = () => {
  return (
    <div className="flexCol">
      <h1>1. Smiley Emoji with SVG & D3</h1>
      <svg width={width} height={height}>
        <g transform={`translate(${centerX}, ${centerY})`}>
          <circle
            r={radius}
            fill="yellow"
            stroke="black"
            strokeWidth={strokeWidth}
          />
          <Eye cx={-eyeOffesetX} cy={-eyeOffsetY} r={eyeRadius} fill="black" />
          <Eye cx={+eyeOffesetX} cy={-eyeOffsetY} r={eyeRadius} fill="black" />
          <path
            d={mouthArc({
              innerRadius: mouthRadius,
              outerRadius: mouthRadius + mouthWidth,
              startAngle: Math.PI / 2,
              endAngle: (Math.PI * 3) / 2,
            })}
          />
        </g>
      </svg>
      <hr />
      <svg width={width} height={height}>
        <g transform={`translate(${centerX}, ${centerY})`}>
          <circle
            r={radius}
            fill="red"
            stroke="black"
            strokeWidth={strokeWidth}
          />
          <Eye cx={-eyeOffesetX} cy={-eyeOffsetY} r={eyeRadius} fill="black" />
          <Eye cx={+eyeOffesetX} cy={-eyeOffsetY} r={eyeRadius} fill="black" />
          <line
            x1="-90"
            y1="80"
            x2="40"
            y2="90"
            stroke="black"
            strokeWidth={mouthWidth}
          />
        </g>
      </svg>
    </div>
  );
};
