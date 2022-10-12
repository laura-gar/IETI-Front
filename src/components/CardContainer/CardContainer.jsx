import React from "react";
import TaskCard from "../../components/TaskCard/TaskCard";
import "./CardContainer.css";

const CardContainer = ({ tasks = [], title }) => {
  const hasTasks = tasks.length > 0;
  return (
    <div className="myContainer">
      <center>
        <h2>{title}</h2>
      </center>
      {!hasTasks && (
        <center>
          <h2 style={{ color: "#f00", marginTop: "20%" }}>No tasks yet</h2>
        </center>
      )}
      {hasTasks &&
        tasks.map((task) => {
          return (
            <center>
              <TaskCard task={task} key={task.id} style={{ margin: "10px" }} />
            </center>
          );
        })}
    </div>
  );
};
export default CardContainer;
