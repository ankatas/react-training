import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter";

describe("Counter", () => {
  it("renders", () => {
    render(<Counter initialValue={0} />);

    // redundant? could just check that the element exist
    const value = screen.getByText("0").innerHTML;
    expect(value).toBe("0");

    const incrementEl = screen.getByText("+");
    expect(incrementEl).toBeInTheDocument();

    const decrementEl = screen.getByText("-");
    expect(decrementEl).toBeInTheDocument();
  });

  it("re-initializes value when props change", () => {
    // TODO: Test that the rendered value matches after the props have been changed
    // TODO: Create a helper function for testing the value
    const { rerender } = render(<Counter initialValue={0} />);

    rerender(<Counter initialValue={132} />);

    expect(screen.getByText("132")).toBeInTheDocument();
  });

  it("increments value on click", () => {
    // TODO: Test that the rendered value matches
    // TODO: Test that the rendered value has been incremented after clicking
    render(<Counter initialValue={100} />);

    const incrementEl = screen.getByText("+");

    userEvent.click(incrementEl);
    userEvent.click(incrementEl);
    userEvent.click(incrementEl);
    userEvent.click(incrementEl);

    expect(screen.getByText("104")).toBeInTheDocument();
  });
});
