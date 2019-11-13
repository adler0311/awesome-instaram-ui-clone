import React from "react";
import { WebView } from "react-native";

const ShoppingCardDetail = ({
  navigation: {
    state: {
      params: { link: uri }
    }
  }
}) => {
  return <WebView source={{ uri }}></WebView>;
};

export default ShoppingCardDetail;
