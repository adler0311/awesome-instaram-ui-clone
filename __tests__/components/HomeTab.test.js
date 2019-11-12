import React from "react";
import HomeTab from "../../src/components/tabs/home/HomeTab";
import { render, waitForElement } from "@testing-library/react-native";

describe("<HomeTab />", () => {
  it("render feeds", async () => {
    const { getAllByTestId } = render(<HomeTab />);

    await waitForElement(() => getAllByTestId("card-thumbnail"));
  });

  it("render followings", async () => {
    const { getAllByTestId } = render(<HomeTab />);

    await waitForElement(() => getAllByTestId("following-thumbnail"));
  });
});
