import { shallow } from "enzyme";
import { renderHook } from "@testing-library/react-hooks";

import App from "./App";
import Home from "./views/Home/Home";
import Login from "./views/Login/Login";
import useLogin from "./views/Login/hooks/useLogin";
import * as React from "react";
import * as Router from "react-router-dom";
import { ThemeContext } from "../src/ThemeContext";
import useHome from "./views/Home/hooks/useHome";

describe("<App/>", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toHaveLength(1);
  });
});

describe("Test useLogin hook", () => {
  it("should render Login hook correctly", () => {
    const { result } = renderHook(() => useLogin());
  });
});

describe("Test useHome hook", () => {
  it("should render Home hook correctly", () => {
    const { result } = renderHook(() => useHome());
  });
});
