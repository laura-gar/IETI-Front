import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import { ThemeContext } from "../../ThemeContext";
import "./TaskCard.css";
import "bootstrap/dist/css/bootstrap.min.css";

const TaskCard = ({ task }) => {
  const { name, description, dueDate, created } = task;
  const { state, dispatch } = useContext(ThemeContext);
  return (
    <Card id={`card-${state.isDarkMode ? "dark" : "light"}`}>
      <Card.Header>{name}</Card.Header>
      <Card.Body>
        <Card.Text>{description}</Card.Text>
        <Card.Text>{dueDate}</Card.Text>
        <Card.Text>{created}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default TaskCard;
