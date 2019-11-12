import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Icon, Container, Content, Button } from "native-base";
import ProfileTabHeader from "./ProfileTabHeader";
import { fetchAccount, fetchFollowCount } from "../../../fetch";
import ProfileDetailHeader from "./ProfileDetailHeader";
import ProfileSegment from "./ProfileSegment";
import ProfileSection from "./ProfileSection";

type AccountResponse = {
  json_metadata: string;
  name: string;
  post_count: number;
};

const username = "anpigon";

const ProfileTab = () => {
  const [profile, setProfile] = useState({
    name: "",
    postCount: 0,
    about: "",
    website: ""
  });
  const [followings, setFollowings] = useState(0);
  const [followers, setFollowers] = useState(0);
  const [buttonIndex, setButtonIndex] = useState(0);

  useEffect(() => {
    fetchAccount(username).then(
      ({
        name,
        post_count: postCount,
        json_metadata: metadata
      }: AccountResponse) => {
        const { about, website } = JSON.parse(metadata).profile;
        setProfile({ name, postCount, about, website });
      }
    );

    fetchFollowCount(username).then(
      ({ follower_count: followers, following_count: followings }) => {
        setFollowers(followers);
        setFollowings(followings);
      }
    );
  }, []);

  return (
    <Container style={styles.container}>
      <ProfileTabHeader />
      <Content>
        <ProfileDetailHeader
          profile={profile}
          followings={followings}
          followers={followers}
        />
        <ProfileSegment
          buttonIndex={buttonIndex}
          setButtonIndex={setButtonIndex}
        />
        <ProfileSection buttonIndex={buttonIndex} username={username} />
      </Content>
    </Container>
  );
};

ProfileTab.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Icon name="ios-person" style={{ color: tintColor }} />
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default ProfileTab;
