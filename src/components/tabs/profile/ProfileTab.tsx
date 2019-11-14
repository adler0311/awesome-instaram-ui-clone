import React, { useEffect, useState, useRef } from "react";
import { View, StyleSheet, Image, FlatList, Dimensions } from "react-native";
import { Icon, Container, Content } from "native-base";
import ProfileTabHeader from "./ProfileTabHeader";
import {
  fetchAccount,
  fetchFollowCount,
  fetchState,
  fetchPixabayImages
} from "../../../fetch";
import ProfileDetailHeader from "./ProfileDetailHeader";
import ProfileSegment from "./ProfileSegment";
import UpButton from "../../UpButton";
import FeedCardComponent from "../FeedCardComponent";

const { width } = Dimensions.get("window");

type AccountResponse = {
  json_metadata: string;
  name: string;
  post_count: number;
};

const ProfileTab = ({ screenProps: { navigation } }) => {
  const [profile, setProfile] = useState({
    name: "",
    postCount: 0,
    about: "",
    website: ""
  });
  const [followings, setFollowings] = useState(0);
  const [followers, setFollowers] = useState(0);
  const [buttonIndex, setButtonIndex] = useState(0);
  const [contents, setContents] = useState([]);
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [refreshing, setRefreshing] = useState(true);

  const onEndReachedCalledDuringMomentum = useRef(false);
  const flatListRef = useRef();

  const getPixabayImages = () => {
    fetchPixabayImages(page).then(data => {
      setImages(refreshing ? data : images.concat(data));
      setPage(page + 1);
    });
  };

  useEffect(() => {
    const username = "anpigon";

    if (!refreshing) return;

    getPixabayImages();

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

    getState();

    setRefreshing(false);
  }, [refreshing]);

  const getState = (username = "anpigon") => {
    fetchState(username)
      .then(({ content }) => Object.values(content))
      .then(data => {
        setPage(page + 1);
        setContents(contents.concat(data));
      });
  };

  const renderFlatListHeader = () => (
    <>
      <ProfileTabHeader />
      <ProfileDetailHeader
        profile={profile}
        followings={followings}
        followers={followers}
      />
      <ProfileSegment
        buttonIndex={buttonIndex}
        setButtonIndex={setButtonIndex}
      />
    </>
  );

  const renderItem = ({ item }) => (
    <View key={item.id} style={{ width: width / 3, height: width / 3 }}>
      <Image source={{ uri: item.webformatURL }} style={{ flex: 1 }} />
    </View>
  );

  const handleRefresh = () => {
    console.log("refreshing");

    setPage(1);
    setRefreshing(true);
  };

  const handleLoadMore = () => {
    console.log(onEndReachedCalledDuringMomentum.current);
    if (!onEndReachedCalledDuringMomentum.current) {
      console.log("load more");
      onEndReachedCalledDuringMomentum.current = true;

      getPixabayImages();
    }
  };

  const upButtonHandler = () => {
    flatListRef.current.scrollToOffset({ offset: 0, animated: true });
  };

  const renderSecondSection = () => {
    return (
      <>
        <Content>
          <ProfileTabHeader />
          <ProfileDetailHeader
            profile={profile}
            followings={followings}
            followers={followers}
          />

          <ProfileSegment
            buttonIndex={buttonIndex}
            setButtonIndex={setButtonIndex}
          />
          {contents.map(content => (
            <FeedCardComponent
              feed={content}
              key={content.post_id}
              navigation={navigation}
            />
          ))}
        </Content>
      </>
    );
  };

  const renderSection = () => {
    switch (buttonIndex) {
      case 0:
        return (
          <>
            <View style={{ flexWrap: "wrap", flexDirection: "row" }}>
              {renderFirstSection()}
            </View>
            <UpButton upButtonHandler={upButtonHandler} />
          </>
        );
      case 1:
        return renderSecondSection();
      case 2:
        return null;
      case 3:
        return null;
    }
  };

  const renderFirstSection = () => (
    <FlatList
      numColumns={3}
      data={images}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      onEndReached={handleLoadMore}
      onEndReachedThreshold={0.5}
      refreshing={refreshing}
      onRefresh={handleRefresh}
      ListHeaderComponent={renderFlatListHeader}
      onMomentumScrollBegin={() => {
        onEndReachedCalledDuringMomentum.current = false;
      }}
      ref={flatListRef}
    />
  );

  return <Container style={styles.container}>{renderSection()}</Container>;
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
