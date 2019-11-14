import React from "react";
import { Text } from "react-native";
import { Header, Icon, Left, Body, Right } from "native-base";

const ProfileTabHeader = () => (
  <Header style={{ backgroundColor: "white", marginTop: 20 }}>
    <Left style={{ marginLeft: 10, flex: 1 }}>
      <Icon name="ios-person-add" />
    </Left>
    <Body style={{ flex: 1, alignItems: "center" }}>
      <Text>anpigon</Text>
    </Body>
    <Right style={{ marginRight: 10, flex: 1 }}>
      <Icon name="history" type="MaterialIcons" />
    </Right>
  </Header>
);

export default ProfileTabHeader;
