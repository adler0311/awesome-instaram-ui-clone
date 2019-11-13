import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MainScreen from "./src/components/MainScreen";
import { createAppContainer } from "react-navigation";
import { createStackNavigator, HeaderTitle } from "react-navigation-stack";
import { Icon } from "native-base";
import ShoppingCardDetail from "./src/components/ShoppingCardDetail";

const stackNavigator = createStackNavigator({
  Main: {
    screen: MainScreen,
    navigationOptions: () => ({
      header: null
    })
  },
  ShoppingCardDetail
});

export default createAppContainer(stackNavigator);
