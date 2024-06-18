import Async from "./Async";
import { render, screen } from "@testing-library/react";

describe("Async Component", () => {
  test("renders list items after fetching data", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: 1, title: "delectus aut autem" }],
    });
    render(<Async />);

    const listElements = await screen.findAllByRole("listitem");
    expect(listElements).not.toHaveLength(0);
  });
});
