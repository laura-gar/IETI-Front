import React from "react";
import { Card } from "react-bootstrap";
import "./TaskCard.css";
import "bootstrap/dist/css/bootstrap.min.css";

const TaskCard = ({ task }) => {
  const { name, description, dueDate, created } = task;
  return (
    <Card id="card">
      <Card.Header>{name}</Card.Header>
      <Card.Body id="card-body">
        <Card.Text>{description}</Card.Text>
        <Card.Text>{dueDate}</Card.Text>
        <Card.Text>{created}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default TaskCard;
