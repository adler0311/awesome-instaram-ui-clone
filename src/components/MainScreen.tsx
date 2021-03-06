import React from "react";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import HomeTab from "./tabs/home/HomeTab";
import AddMediaTab from "./tabs/AddMediaTab";
import LikesTab from "./tabs/LikesTab";
import ProfileTab from "./tabs/profile/ProfileTab";
import SearchTab from "./tabs/SearchTab";

const AppContainer = createAppContainer(
  createMaterialTopTabNavigator(
    {
      HomeTab,
      SearchTab,
      AddMediaTab,
      LikesTab,
      ProfileTab
    },
    {
      tabBarOptions: {
        showIcon: true,
        showLabel: false,
        style: {
          backgroundColor: "white"
        },
        indicatorStyle: {
          backgroundColor: "white"
        },
        activeTintColor: "black",
        inactiveTintColor: "#A9A9A9"
      },
      tabBarPosition: "bottom",
      swipeEnabled: true
    }
  )
);

const MainScreen = ({ navigation }) => {
  return <AppContainer screenProps={{ navigation }} />;
};

export default MainScreen;
