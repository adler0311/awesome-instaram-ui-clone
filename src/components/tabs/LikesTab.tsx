import React from "react";
import { View, Text } from "react-native";
import { Icon } from "native-base";

const LikesTab = () => (
  <View>
    <Text>Likes Tab</Text>
  </View>
);

LikesTab.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Icon name="md-heart" style={{ color: tintColor }} />
  )
};

export default LikesTab;
