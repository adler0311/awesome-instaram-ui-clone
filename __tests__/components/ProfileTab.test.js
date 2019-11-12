import React from "react";
import ProfileTab from "../../src/components/tabs/profile/ProfileTab";
import {
  render,
  waitForElement,
  fireEvent
} from "@testing-library/react-native";

describe("<ProfileTab />", () => {
  it("render second section", async () => {
    const { getAllByTestId, getByTestId } = render(<ProfileTab />);
    const listSegmentButton = getByTestId("list-segment");

    fireEvent.press(listSegmentButton);

    await waitForElement(() => getAllByTestId("card-thumbnail"));
  });
});
