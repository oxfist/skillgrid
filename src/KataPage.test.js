import { render, screen } from "@testing-library/react";
import KataPage from "./KataPage";

describe("KataPage", () => {
  it("renders welcome message", () => {
    const welcomeMessage = "Game Design Katas to Improve Your Skills";
    const expectedWelcomeMessage = new RegExp(welcomeMessage, "i");

    render(<KataPage welcomeMessage={welcomeMessage} />);
    const title = screen.getByText(expectedWelcomeMessage);

    expect(title).toBeInTheDocument();
  });

  it("renders show me button", () => {
    const buttonText = "Show Me!";
    const expectedButton = new RegExp(buttonText, "i");

    render(<KataPage buttonText={buttonText} />);
    const title = screen.getByRole("button", expectedButton);

    expect(title).toBeInTheDocument();
  });
});
