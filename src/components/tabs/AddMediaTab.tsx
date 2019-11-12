import React from "react";
import { View, Text } from "react-native";
import { Icon } from "native-base";

const AddMediaTab = () => (
  <View>
    <Text>Add Media Tab</Text>
  </View>
);

AddMediaTab.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Icon name="md-add-circle-outline" style={{ color: tintColor }} />
  )
};

export default AddMediaTab;
