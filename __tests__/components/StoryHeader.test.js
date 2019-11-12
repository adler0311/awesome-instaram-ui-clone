import React from "react";
import StoryHeader from "../../src/components/tabs/home/StoryHeader";
import { render, wait } from "@testing-library/react-native";

describe("<StoryHeader />", () => {
  it("render thumbnail", async () => {
    const followings = [
      "tony stark",
      "hulk",
      "spider-man",
      "superman",
      "jocker"
    ];
    const { getAllByTestId } = render(<StoryHeader followings={followings} />);
    wait(() => expect(getAllByTestId("thumbnail")).toBeTruthy());
  });
});
