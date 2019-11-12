import React from "react";
import { View, Text } from "react-native";
import { Icon } from "native-base";

const SearchTab = () => (
  <View>
    <Text>SearchTab</Text>
  </View>
);

SearchTab.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Icon name="ios-search" style={{ color: tintColor }} />
  )
};

export default SearchTab;
