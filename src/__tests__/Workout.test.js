import Workout from "../pages/Workout";
import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";

describe("Workout Page", () => {
  it("Displays the date in UK format", () => {
    render(
      <BrowserRouter>
        <RecoilRoot>
          <Workout />
        </RecoilRoot>
      </BrowserRouter>
    );
    expect(screen.getByText("28/4/2022")).toBeInTheDocument();
  });

  it("Displays the time in UK", () => {
    render(
      <BrowserRouter>
        <RecoilRoot>
          <Workout />
        </RecoilRoot>
      </BrowserRouter>
    );
    expect(screen.getByText("10:00:00")).toBeInTheDocument();
  });

  it("Displays the accurate time every second", () => {
    render(
      <BrowserRouter>
        <RecoilRoot>
          <Workout />
        </RecoilRoot>
      </BrowserRouter>
    );
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(screen.getByText("10:00:01")).toBeInTheDocument();
  });

  it("Does a new thing", () => {
    render(
      <BrowserRouter>
        <RecoilRoot>
          <Workout />
        </RecoilRoot>
      </BrowserRouter>
    );
    screen.debug();
  });

  xit("Default body part selected", () => {});
  xit("Selected body part updated", () => {});
  // Do below test for each body part
  // Maybe iterate over each body part, select it, and count number of exercises
  xit("Exercises populate when body part selected", () => {});
  xit("Default exercise selected", () => {});
  xit("Selected exercise updated", () => {});
  xit("Can change number of sets", () => {});
  xit("Can change number of reps", () => {});
  xit("Can change weight", () => {});
  // Below test current not implemented
  xit("Can add a new set/rep/weight group", () => {});
  xit("Can add a note", () => {});
  xit("Can add a new exercise", () => {});
  xit("Can add a new body part", () => {});
});
