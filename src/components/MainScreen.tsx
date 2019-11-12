import React from "react";
import { View, Text, StyleSheet } from "react-native";
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

const MainScreen = () => {
  return <AppContainer />;
};

export default MainScreen;
