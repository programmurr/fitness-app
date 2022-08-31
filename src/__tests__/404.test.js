import NotFound from "../pages/404";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

describe("404 Page", () => {
  it("Displays '404 Not Found' message", () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );
    expect(screen.getByText(/404 not found/i)).toBeInTheDocument();
  });

  it("Renders a Home Link", () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );
    expect(screen.getByRole("link", { name: /home/i })).toBeInTheDocument();
  });
});
