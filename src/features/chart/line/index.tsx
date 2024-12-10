import { Col, Row } from "antd";

import { LineChart } from "./lineChart";
import { randomColor } from "../../../utils/randomColor";

export const LineChartExample = () => {
  return (
    <>
      <h1>Line Chart</h1>
      <Row gutter={[20, 20]}>
        {Array.from({ length: 10 }).map(() => (
          <Col>
            <LineChart
              data={[
                { x: "A", y: Math.random() },
                { x: "B", y: Math.random() },
                { x: "D", y: Math.random() },
                { x: "F", y: Math.random() },
                { x: "G", y: Math.random() },
              ]}
              xaxisLabel="Category"
              yaxisLabel="Count"
              showAxisLines
              color={randomColor()}
            />
          </Col>
        ))}
      </Row>
    </>
  );
};
