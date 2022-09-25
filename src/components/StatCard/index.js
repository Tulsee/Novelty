import React from "react";
import { Row, Card, Col } from "react-bootstrap";

const StatCard = (props) => {
  const { stats } = props;
  return (
    <div className="mb-5" fluid>
      <Row>
        {stats.map((e, index) => {
          return (
            <Col md={4} lg={4} key={index}>
              <Card
                className="ml-2 mt-4 card-stat"
                style={{
                  maxWidth: "25rem",
                  backgroundColor: "#F1F1F1",
                  boxShadow: "0 3px 3px rgba(0,0,0,0.1)",
                  color: "#652D86",
                }}
              >
                <i className="text-center mt-2"> {e.icon}</i>

                <Card.Body className="card-body">
                  <Card.Title className="text-center">{e.label}</Card.Title>
                  <hr />
                  <Card.Text className={"text-center"}>
                    <h3>{e?.value}</h3>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default StatCard;
