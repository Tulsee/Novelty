import React from "react";
import Chart from "react-apexcharts";
import { Card } from "react-bootstrap";

const Graph = ({ options, options1, series }) => {
  return (
    <div>
      <Card border="success">
        <Card.Header as="h4" className="text-center">
          Earning Vs Time (Area Graph)
        </Card.Header>
        <Chart
          options={options}
          series={series}
          type="area"
          width="100%"
          height="500"
        />
      </Card>
      <Card border="danger" className="mt-2">
        <Card.Header as="h4" className="text-center">
          Earning Vs Time (Bar Graph)
        </Card.Header>
        <Chart
          options={options1}
          series={series}
          type="bar"
          width="100%"
          height="500"
        />
      </Card>
    </div>
  );
};
export default Graph;
