import React, { useEffect, useState, useRef, Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";
import { Icon, Container, Content, Button } from "native-base";
import CardComponent from "../../CardComponent";
import {
  fetchFeeds,
  fetchFollowing,
  fetchShoppingSearchResult
} from "../../../fetch";
import StoryHeader from "./StoryHeader";
import HomeTabHeader from "./HomeTabHeader";
import ShoppingCardDetail from "../../ShoppingCardDetail";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const display = 5;

const HomeTab = () => {
  const [shoppingItems, setShoppingItems] = useState([]);
  const [followings, setFollowings] = useState([]);
  const [page, setPage] = useState(1);
  const [refreshing, setRefreshing] = useState(true);

  const onEndReachedCalledDuringMomentum = useRef(true);
  const flatListRef = useRef();

  useEffect(() => {
    // fetchFeeds().then(feeds => setFeeds(feeds));

    if (refreshing) {
      fetchFollowing().then(followings => setFollowings(followings));
      getShoppingData();
      setRefreshing(false);
    }
  }, [refreshing]);

  const getShoppingData = () => {
    fetchShoppingSearchResult(page, display).then(data => {
      setShoppingItems(
        refreshing ? data.items : shoppingItems.concat(data.items)
      );

      setPage(page + display);
    });
  };

  const upButtonHandler = () => {
    flatListRef.current.scrollToOffset({ offset: 0, animated: true });
  };

  const handleRefresh = () => {
    console.log("refreshing");

    setPage(1);
    setRefreshing(true);
  };

  const handleLoadMore = () => {
    if (!onEndReachedCalledDuringMomentum.current) {
      console.log("load more");

      getShoppingData();
      onEndReachedCalledDuringMomentum.current = true;
    }
  };

  const renderFlatListHeader = () => (
    <View>
      <HomeTabHeader />
      <StoryHeader followings={followings} />
    </View>
  );

  const renderItem = ({ item }) => <CardComponent shoppingItem={item} />;

  return (
    <Container style={styles.container}>
      <FlatList
        data={shoppingItems}
        renderItem={renderItem}
        keyExtractor={item => item.productId.toString()}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={1}
        refreshing={refreshing}
        onRefresh={handleRefresh}
        ListHeaderComponent={renderFlatListHeader}
        onMomentumScrollBegin={() => {
          onEndReachedCalledDuringMomentum.current = false;
        }}
        ref={flatListRef}
      />
      <TouchableOpacity onPress={upButtonHandler} style={styles.upButton}>
        <Icon name="ios-arrow-up" />
      </TouchableOpacity>
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
  },
  upButton: {
    position: "absolute",
    width: 56,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    right: 20,
    bottom: 20,
    backgroundColor: "#eecd3b",
    borderRadius: 30,
    elevation: 8
  }
});
