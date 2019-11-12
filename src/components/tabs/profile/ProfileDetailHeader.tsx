import React from "react";
import { View, Text, Image } from "react-native";
import { Icon, Button } from "native-base";

type Profile = {
  name: string;
  about: string;
  website: string;
  postCount: number;
};

type PropProfileDetailHeader = {
  profile: Profile;
  followings: number;
  followers: number;
};

const ProfileDetailHeader = ({
  profile,
  followings,
  followers
}: PropProfileDetailHeader) => {
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          flex: 1,
          paddingTop: 10,
          borderBottomWidth: 1,
          borderBottomColor: "#D3D3D3"
        }}
      >
        <View style={{ flex: 1 }}>
          <Image
            testID="profile-image"
            source={{
              uri: `https://steemitimages.com/u/${profile.name}/avatar`
            }}
            style={{ width: 75, height: 90, borderRadius: 37.5 }}
          />
        </View>
        <View style={{ flex: 3 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around"
            }}
          >
            <View style={{ alignItems: "center" }}>
              <Text>{profile.postCount}</Text>
              <Text style={{ fontSize: 10, color: "grey" }}>posts</Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <Text>{followers}</Text>
              <Text style={{ fontSize: 10, color: "grey" }}>followers</Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <Text>{followings}</Text>
              <Text style={{ fontSize: 10, color: "grey" }}>followings</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Button
              bordered
              transparent
              small
              dark
              style={{
                flex: 4,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
                height: 25,
                marginTop: 10,
                marginLeft: 5
              }}
            >
              <Text>Edit Profile</Text>
            </Button>
            <Button
              small
              dark
              bordered
              icon
              style={{
                flex: 1,
                borderRadius: 10,
                marginLeft: 5,
                height: 25,
                marginTop: 10,
                marginRight: 20,
                justifyContent: "center"
              }}
            >
              <Icon name="ios-settings" />
            </Button>
          </View>
        </View>
      </View>
      <View style={{ marginHorizontal: 10, marginVertical: 10 }}>
        <Text>{profile.name}</Text>
        <Text>{profile.about}</Text>
        <Text>{profile.website}</Text>
      </View>
    </>
  );
};

export default ProfileDetailHeader;
