import React from "react";
import { Text } from "react-native";
import { Header, Icon, Left, Body, Right } from "native-base";

const HomeTabHeader = () => (
  <Header style={{ backgroundColor: "white", marginTop: 20 }}>
    <Left style={{ marginLeft: 10, flex: 1 }}>
      <Icon name="ios-camera" />
    </Left>
    <Body style={{ flex: 1, alignItems: "center" }}>
      <Text>Instagram</Text>
    </Body>
    <Right style={{ marginRight: 10, flex: 1 }}>
      <Icon name="ios-send" />
    </Right>
  </Header>
);

export default HomeTabHeader;
