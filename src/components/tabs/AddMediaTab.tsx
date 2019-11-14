import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon } from "native-base";

const AddMediaTab = () => (
  <View style={styles.container}>
    <Text>Add Media Tab</Text>
  </View>
);

AddMediaTab.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Icon name="md-add-circle-outline" style={{ color: tintColor }} />
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default AddMediaTab;
