import { arc } from "d3";
type Props = {
  innerRadius: number;
  outerRadius: number;
  startAngle: number;
  endAngle: number;
};

export const Mouth = ({
  innerRadius,
  outerRadius,
  startAngle,
  endAngle,
}: Props) => {
  const mouthArc = arc()
    .innerRadius(innerRadius)
    .outerRadius(outerRadius)
    .startAngle(startAngle)
    .endAngle(endAngle)({
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
  });

  return <path d={mouthArc!} />;
};
