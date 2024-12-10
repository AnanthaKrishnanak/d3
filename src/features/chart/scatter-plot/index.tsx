import { Col, Row } from "antd";

import { useIrisFlowerDataSet } from "./api/useIrisFlowerDataSet";
import { ScatterPlot } from "./components/scatterPlot";
import { randomColor } from "../../../utils/randomColor";

export const ScatterPlotExample = () => {
  const data = useIrisFlowerDataSet();

  if (!data) return <h1>Loading...</h1>;

  return (
    <>
      <h1>Scatter Plot </h1>
      <Row gutter={[20, 20]}>
        {Array.from({ length: 10 }).map(() => (
          <Col span={8}>
            <ScatterPlot
              data={data.map((d, i) => ({
                x: d.sepal_length + i * Math.random(),
                y: d.sepal_width,
              }))}
              xaxisLabel="Sepal Length"
              yaxisLabel="Sepal Width"
              margin={{
                top: 24,
                left: 52,
                right: 20,
                bottom: 44,
              }}
              showAxisLines
              fill={randomColor()}
            />
          </Col>
        ))}
      </Row>
    </>
  );
};
