import React from "react";
import { Container } from "react-bootstrap";
import Graph from "../../components/Graph";
import StatCard from "../../components/StatCard";

import { stats, options, series, options1 } from "./data";

const Dashboard = () => {
  return (
    <Container fluid="true">
      <StatCard stats={stats} />
      <Graph options={options} series={series} options1={options1} />
    </Container>
  );
};

export default Dashboard;
