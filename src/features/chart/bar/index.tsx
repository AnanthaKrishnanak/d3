import { Col, Row, Spin, Typography } from "antd";

import { useNamedColors } from "../api/useNamedColors";
import { Barchart } from "./barChart";

export const Chart = () => {
  const data = useNamedColors();

  if (!data) {
    return (
      <div className="flexCenter h-full">
        <Spin />
      </div>
    );
  }

  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <Typography.Title level={2}>BAR CHARTS</Typography.Title>
      </Col>

   {/*    {Array.from({ length: 10 }).map(() => (
        <Col> */}
          <Barchart
            /* data={data
              .map((d, i) => ({
                name: d.Keyword,
                value: 10 + Math.random(),
                color: d.Hex,
                key: i,
              }))
              .slice(0, Math.random() * data.length)} */
          />
      {/*   </Col>
      ))} */}
    </Row>
  );
};
