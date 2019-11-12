import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon, Container, Content, Header } from "native-base";
import CardComponent from "../../CardComponent";
import { fetchFeeds, fetchFollowing } from "../../../fetch";
import StoryHeader from "./StoryHeader";
import HomeTabHeader from "./HomeTabHeader";

const HomeTab = () => {
  const [feeds, setFeeds] = useState([]);
  const [followings, setFollowings] = useState([]);

  useEffect(() => {
    fetchFeeds().then(feeds => setFeeds(feeds));
    fetchFollowing().then(followings => setFollowings(followings));
  }, []);

  return (
    <Container style={styles.container}>
      <Content>
        <HomeTabHeader />
        <StoryHeader followings={followings} />
        {feeds.map(feed => (
          <CardComponent feed={feed} key={feed.post_id} />
        ))}
      </Content>
    </Container>
  );
};

HomeTab.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Icon name="ios-home" style={{ color: tintColor }} />
  )
};

export default HomeTab;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
