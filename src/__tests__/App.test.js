import App from "../App";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

describe("App Home", () => {
  it("Renders the MurrFit title", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(
      screen.getByRole("heading", { name: /murrfit/i })
    ).toBeInTheDocument();
  });

  it("Renders the 'Start Workout' Link", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(
      screen.getByRole("link", { name: /start workout/i })
    ).toBeInTheDocument();
  });
});
