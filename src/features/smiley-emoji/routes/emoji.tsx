import { Eye } from "../components/eye";
import { Face } from "../components/face";
import { Mouth } from "../components/mouth";

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

const Eyes = () => (
  <>
    <Eye
      cx={-eyeOffesetX}
      cy={-eyeOffsetY}
      r={eyeRadius}
      fill="black"
      eyeRadius={eyeRadius}
    />
    <Eye
      cx={+eyeOffesetX}
      cy={-eyeOffsetY}
      r={eyeRadius}
      fill="black"
      eyeRadius={eyeRadius}
    />
  </>
);

export const SmileyEmoji = () => {
  return (
    <div className="flexCol">
      <h1>1. Smiley Emoji with SVG & D3</h1>
      <svg width={width} height={height}>
        <g transform={`translate(${centerX}, ${centerY})`}>
          <Face radius={radius} strokeWidth={strokeWidth} fill="yellow" />
          <Eyes />
          <Mouth
            innerRadius={mouthRadius}
            outerRadius={mouthRadius + mouthWidth}
            startAngle={Math.PI / 2}
            endAngle={(Math.PI * 3) / 2}
          />
        </g>
      </svg>
      <hr />
      <svg width={width} height={height}>
        <g transform={`translate(${centerX}, ${centerY})`}>
          <Face radius={radius} fill="red" strokeWidth={strokeWidth} />
          <Eyes />
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
