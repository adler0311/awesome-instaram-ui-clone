import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon } from "native-base";

const LikesTab = () => (
  <View style={styles.container}>
    <Text>Likes Tab</Text>
  </View>
);

LikesTab.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Icon name="md-heart" style={{ color: tintColor }} />
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default LikesTab;
