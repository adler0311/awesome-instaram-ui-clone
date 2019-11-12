import React from "react";
import { View } from "react-native";
import { Button, Icon } from "native-base";

const ProfileSegment = ({ buttonIndex, setButtonIndex }) => (
  <View
    style={{
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-around",
      borderTopWidth: 1,
      borderTopColor: "#D3D3D3"
    }}
  >
    <Button
      transparent
      onPress={() => setButtonIndex(0)}
      active={buttonIndex === 0}
    >
      <Icon
        name="ios-apps"
        style={buttonIndex === 0 ? {} : { color: "grey" }}
      />
    </Button>
    <Button
      transparent
      onPress={() => setButtonIndex(1)}
      active={buttonIndex === 1}
    >
      <Icon
        name="ios-list"
        style={buttonIndex === 1 ? {} : { color: "grey" }}
      />
    </Button>
    <Button
      transparent
      onPress={() => setButtonIndex(2)}
      active={buttonIndex === 2}
    >
      <Icon
        name="ios-people"
        style={buttonIndex === 2 ? {} : { color: "grey" }}
      />
    </Button>
    <Button
      transparent
      onPress={() => setButtonIndex(3)}
      active={buttonIndex === 3}
    >
      <Icon
        name="ios-bookmark"
        style={buttonIndex === 3 ? {} : { color: "grey" }}
      />
    </Button>
  </View>
);

export default ProfileSegment;
