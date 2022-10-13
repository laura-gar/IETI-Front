import ChangeThemeButton from "../Button/ChangeThemeButton";
import { ThemeContext } from "../../ThemeContext";
import "./Title.css";
import { useContext } from "react";
function Title() {
  const { state } = useContext(ThemeContext);

  return (
    <div
      className={`d-flex bd-highlight Title-${
        state.isDarkMode ? "dark" : "light"
      }`}
    >
      <div className="p-2 w-100 bd-highlight">
        <h1 className="text-left">TASK PLANNER</h1>
      </div>
      <ChangeThemeButton></ChangeThemeButton>
    </div>
  );
}

export default Title;
