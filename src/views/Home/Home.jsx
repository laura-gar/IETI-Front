import React, { useContext } from "react";
import CardContainer from "../../components/CardContainer/CardContainer";
import Title from "../../components/Title/Title";
import useHome from "./hooks/useHome";
import "./Home.css";
import { ThemeContext } from "../../ThemeContext";

export default function Home() {
  const { todo, doing, done, review } = useHome();
  const { state } = useContext(ThemeContext);

  return (
    <div className="h-100">
      <Title />
      <div
        className={` h-100 home-body-${state.isDarkMode ? "dark" : "light"}`}
      >
        <CardContainer tasks={todo} title="TODO" key={"todo"} />
        <CardContainer tasks={doing} title="DOING" key={"doing"} />
        <CardContainer tasks={review} title="REVIEW" key={"review"} />
        <CardContainer tasks={done} title="DONE" key={"done"} />
      </div>
    </div>
  );
}
