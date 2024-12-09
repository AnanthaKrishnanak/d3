type Props = {
  cx: number;
  cy: number;
  r: number;
  fill: string;
  eyeRadius: number;
};

export const Eye = (props: Props) => {
  const { cx, cy, eyeRadius, fill = "white", ...rest } = props;

  return (
    <g transform={`translate(${cx}, ${cy})`}>
      <circle {...rest} />
      <circle r={eyeRadius / 4} fill={fill} cy={eyeRadius / 2} />
    </g>
  );
};
