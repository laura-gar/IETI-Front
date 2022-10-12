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

  const userID = "6331cff43857e916e74cd3ca";

  const fetchData = useRef(() => {});

  fetchData.current = async () => {
    await fetch(`http://192.168.1.60:1601/api/v1/tasks/assignedTo/${userID}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "get",
    })
      .then((response) => Promise.all([response.json(), response.header]))
      .then(([body, headers]) => {
        console.log(body);
        const statusArray = ["TODO", "DOING", "REVIEW", "DONE"];
        setTasks(body);
        console.log(tasks);
        statusArray.forEach((st) => {
          const val = body.filter((stat) => stat.status === st);
          console.log(st, val);
          updateValues(st, val);
        });
      });
  };

  useEffect(() => {
    fetchData.current();
  }, []);

  // useEffect(() => {
  //     const fetchData = async() => {
  //         const data = await fetch(`http://192.168.1.60:1601/api/v1/tasks/assignedTo/${userID}`, {
  //             headers: {
  //                 "Content-Type": "application/json",
  //             },
  //             method: "get", })
  //             .then((response) => Promise.all([response.json(), response.header]))
  //             .then(([body, headers]) => {
  //                 console.log(body);
  //                 const statusArray = ['TODO', 'DOING', 'REVIEW', 'DONE'];
  //                 setTasks(body);
  //                 console.log(tasks);
  //                 statusArray.forEach(st => {
  //                     const val = tasks.filter(stat => stat.status === st);
  //                     console.log(st, val);
  //                     updateValues(st, val);
  //                 });
  //             });
  //     }
  //     fetchData();
  // }, []);

  return {
    tasks,
    todo,
    doing,
    done,
    review,
  };
};

export default useHome;
