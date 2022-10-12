import React from "react";
import { useEffect, useState, useRef } from "react";

const useHome = () => {
  const [tasks, setTasks] = useState([]);
  const [todo, setTodo] = useState([]);
  const [doing, setDoing] = useState([]);
  const [done, setDone] = useState([]);
  const [review, setReview] = useState([]);

  const updateValues = (status, val) => {
    if (status === "TODO") setTodo(val);
    else if (status === "DOING") setDoing(val);
    else if (status === "REVIEW") setReview(val);
    else {
      setDone(val);
    }
  };

  const userID = JSON.parse(localStorage.getItem("USER")).userId; 

  const fetchData = useRef(() => {});

  fetchData.current = async () => {
    await fetch(`https://ieti-tasks.herokuapp.com/api/v1/tasks/assignedTo/${userID}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "get",
    })
      .then((response) => Promise.all([response.json(), response.header]))
      .then(([body, headers]) => {
        const statusArray = ["TODO", "DOING", "REVIEW", "DONE"];
        setTasks(body);
        statusArray.forEach((st) => {
          const val = body.filter((stat) => stat.status === st);
          updateValues(st, val);
        });
      });
  };

  useEffect(() => {
    fetchData.current();
  }, []);

  return {
    tasks,
    todo,
    doing,
    done,
    review,
  };
};

export default useHome;
