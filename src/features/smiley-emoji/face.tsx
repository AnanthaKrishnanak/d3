type Props = {
  radius: number;
  strokeWidth: number;
  fill: string;
  stroke?: string;
};

export const Face = ({
  radius,
  strokeWidth,
  fill,
  stroke = "black",
}: Props) => {
  return (
    <circle r={radius} fill={fill} stroke={stroke} strokeWidth={strokeWidth} />
  );
};
