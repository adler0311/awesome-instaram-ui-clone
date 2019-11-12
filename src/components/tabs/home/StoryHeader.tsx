import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Icon, Thumbnail } from "native-base";

type PropStoryHeader = {
  followings: string[];
};

const StoryHeader = ({ followings }: PropStoryHeader) => {
  return (
    <View style={{ height: 100 }}>
      <View style={styles.headerDetailContaier}>
        <Text>Stories</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Icon name="md-play" style={{ fontSize: 14, marginRight: 3 }} />
          <Text>Watch All</Text>
        </View>
      </View>
      <View style={{ flex: 3, marginTop: 5 }}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            alignItems: "center",
            paddingStart: 5,
            paddingEnd: 5
          }}
        >
          {followings.map((following, index) => (
            <Thumbnail
              testID="following-thumbnail"
              key={index}
              source={{
                uri: `https://steemitimages.com/u/${following}/avatar`
              }}
              style={styles.thumbnail}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default StoryHeader;

const styles = StyleSheet.create({
  headerDetailContaier: {
    paddingTop: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
    paddingHorizontal: 7
  },
  thumbnail: {
    marginHorizontal: 5,
    borderWidth: 2,
    borderColor: "pink"
  }
});
