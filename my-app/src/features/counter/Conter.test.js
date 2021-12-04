import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Counter } from "./Counter";
import { Provider } from "react-redux";
import { store } from "../../app/store";

describe("Counter Tests", () => {
  test("Render 0 as inicial state", () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );

    const counter = screen.getByText("0");
    expect(counter).toBeInTheDocument();
  });

  test("Render 1 when clicked + button ", () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );

    const addButton = screen.getByLabelText("Increment value");
    userEvent.click(addButton);
    const counter = screen.getByText("1");
    expect(counter).toBeInTheDocument();
  });

  test("Render 0 when clicked reset", () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );

    const resetButton = screen.getByLabelText("Reset");
    userEvent.click(resetButton);
    const counter = screen.getByText("0");
    expect(counter).toBeInTheDocument();
  });

  test("Render -1 when clicked - button", () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );

    const resetButton = screen.getByLabelText("Decrement value");
    userEvent.click(resetButton);
    const counter = screen.getByText("-1");
    expect(counter).toBeInTheDocument();
  });
});
