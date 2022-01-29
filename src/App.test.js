import { render, screen } from "@testing-library/react";
import App from "./App";

describe("home page", () => {
  it("renders welcome message", () => {
    const expectedWelcomeMessage = /Game design katas to improve your skills/i;

    render(<App />);
    const title = screen.getByText(expectedWelcomeMessage);

    expect(title).toBeInTheDocument();
  });

  it("renders show me link", () => {
    const expectedLink = /Show me!/i;

    render(<App />);
    const title = screen.getByRole("button", expectedLink);

    expect(title).toBeInTheDocument();
  });

  it("renders skillgrid link", () => {
    const expectedLink = /skillgrid/i;

    render(<App />);
    const title = screen.getByRole("link", expectedLink);

    expect(title).toBeInTheDocument();
  });
});
