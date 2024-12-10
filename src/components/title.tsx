export const AxisTitle = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

AxisTitle.Xaxis = (
  props: React.SVGAttributes<SVGElement> & {
    innerHeight: number;
    innerWidth: number;
    xaxisLabelOffset?: number;
  }
) => {
  const { innerHeight, innerWidth, xaxisLabelOffset = 40, ...rest } = props;
  return (
    <text {...rest} x={innerWidth / 2} y={innerHeight + xaxisLabelOffset} />
  );
};

AxisTitle.Yaxis = (
  props: React.SVGAttributes<SVGElement> & {
    innerHeight: number;
    yaxisLabelOffset?: number;
  }
) => {
  const { innerHeight, yaxisLabelOffset = 40, ...rest } = props;
  return (
    <text
      transform={`translate(${-yaxisLabelOffset}, ${
        innerHeight / 2
      }) rotate(-90)`}
      {...rest}
    />
  );
};
