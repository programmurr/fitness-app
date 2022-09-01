import Workout from "../pages/Workout";
import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";

const renderWorkoutComponent = () => {
  render(
    <BrowserRouter>
      <RecoilRoot>
        <Workout />
      </RecoilRoot>
    </BrowserRouter>
  );
};

describe("Workout Page", () => {
  it("Displays the date in UK format", () => {
    renderWorkoutComponent();
    expect(screen.getByText("28/4/2022")).toBeInTheDocument();
  });

  it("Displays the time in UK", () => {
    renderWorkoutComponent();
    expect(screen.getByText("10:00:00")).toBeInTheDocument();
  });

  it("Displays the accurate time every second", () => {
    renderWorkoutComponent();
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(screen.getByText("10:00:01")).toBeInTheDocument();
  });

  it("'Select body part' element has a default value of 'Select'", () => {
    renderWorkoutComponent();
    expect(
      screen.getByRole("option", { name: "default-bodypart" }).selected
    ).toBe(true);
  });

  it("'Select exercise' element has a default value of 'Select'", () => {
    renderWorkoutComponent();
    expect(
      screen.getByRole("option", { name: "default-exercise" }).selected
    ).toBe(true);
  });

  it("Updates the 'Select body part' select value when a body part is clicked", () => {
    renderWorkoutComponent();
    userEvent.selectOptions(
      screen.getByLabelText("Select body part"),
      screen.getByRole("option", { name: /cardio/i })
    );
    expect(
      screen.getByRole("option", { name: "default-bodypart" }).selected
    ).toBe(false);
    expect(screen.getByRole("option", { name: /cardio/i }).selected).toBe(true);
  });
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
