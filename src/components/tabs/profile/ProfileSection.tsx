import React, { useState, useEffect } from "react";
import { View, Text, Dimensions, Image } from "react-native";
import { Card } from "native-base";
import { fetchState } from "../../../fetch";
import CardComponent from "../../CardComponent";

const { width } = Dimensions.get("window");

let images = [
  "https://cdn.pixabay.com/photo/2018/11/29/21/19/hamburg-3846525__480.jpg",
  "https://cdn.pixabay.com/photo/2018/11/11/16/51/ibis-3809147__480.jpg",
  "https://cdn.pixabay.com/photo/2018/11/23/14/19/forest-3833973__480.jpg",
  "https://cdn.pixabay.com/photo/2019/01/05/17/05/man-3915438__480.jpg",
  "https://cdn.pixabay.com/photo/2018/12/04/22/38/road-3856796__480.jpg",
  "https://cdn.pixabay.com/photo/2018/11/04/20/21/harley-davidson-3794909__480.jpg",
  "https://cdn.pixabay.com/photo/2018/12/25/21/45/crystal-ball-photography-3894871__480.jpg",
  "https://cdn.pixabay.com/photo/2018/12/29/23/49/rays-3902368__480.jpg",
  "https://cdn.pixabay.com/photo/2017/05/05/16/57/buzzard-2287699__480.jpg",
  "https://cdn.pixabay.com/photo/2018/08/06/16/30/mushroom-3587888__480.jpg",
  "https://cdn.pixabay.com/photo/2018/12/15/02/53/flower-3876195__480.jpg",
  "https://cdn.pixabay.com/photo/2018/12/16/18/12/open-fire-3879031__480.jpg",
  "https://cdn.pixabay.com/photo/2018/11/24/02/05/lichterkette-3834926__480.jpg",
  "https://cdn.pixabay.com/photo/2018/11/29/19/29/autumn-3846345__480.jpg"
];

const ProfileSection = ({ buttonIndex, contents }) => {
  useEffect(() => {}, []);

  const renderSecondSection = () => {
    return contents.map(content => (
      <CardComponent key={content.post_id} feed={content} />
    ));
  };

  const renderFirstSection = () =>
    images.map((image, index) => (
      <View key={index} style={{ width: width / 3, height: width / 3 }}>
        <Image source={{ uri: image }} style={{ flex: 1 }} />
      </View>
    ));

  const renderSection = () => {
    switch (buttonIndex) {
      case 0:
        return (
          <View style={{ flexWrap: "wrap", flexDirection: "row" }}>
            {renderFirstSection()}
          </View>
        );
      case 1:
        return renderSecondSection();
      case 2:
        return null;
      case 3:
        return null;

      default:
        return (
          <View style={{ flexWrap: "wrap", flexDirection: "row" }}>
            {renderFirstSection()}
          </View>
        );
    }
  };

  return renderSection();
};

export default ProfileSection;
