import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting Component", () => {
  test("renders  hello", () => {
    render(<Greeting />);
    const element = screen.getByText("Hello", { exact: false });
    expect(element).toBeInTheDocument();
  });
  test("will  renders good to see you", () => {
    render(<Greeting />);
    const good = screen.getByText("good to see you", { exact: false });
    expect(good).toBeInTheDocument();
  });
  test("will render changed when button clicked", () => {
    render(<Greeting />);
    const buttonelement = screen.getByRole("button");
    userEvent.click(buttonelement);

    const outputElement = screen.getByText("changed", { exact: false });
    expect(outputElement).toBeInTheDocument();
  });
  test("dont display good to see you when button clicked", () => {
    render(<Greeting />);
    const text = screen.getByText("good to see you", { exact: false });
    const btn = screen.getByRole("button");
    userEvent.click(btn);
    expect(text).not.toBeInTheDocument();
  });
  test("dont display good to see you when button is clicked", () => {
    render(<Greeting />);
    const btnele = screen.getByRole("button");
    userEvent.click(btnele);
    const existingelement = screen.queryByText("good to see you", {
      exact: false,
    });
    expect(existingelement).toBeNull();
  });
});
