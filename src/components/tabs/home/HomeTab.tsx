import React, { useEffect, useState, useRef } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Icon, Container } from "native-base";

import CardComponent from "../../CardComponent";
import { fetchFollowing, fetchShoppingSearchResult } from "../../../fetch";
import StoryHeader from "./StoryHeader";
import HomeTabHeader from "./HomeTabHeader";
import UpButton from "../../UpButton";

const display = 5;

const HomeTab = ({ screenProps }) => {
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

  const renderItem = ({ item }) => (
    <CardComponent shoppingItem={item} navigation={screenProps.navigation} />
  );

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
      <UpButton upButtonHandler={upButtonHandler} />
    </Container>
  );
};

HomeTab.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Icon name="ios-home" style={{ color: tintColor }} />
  )
};

export default HomeTab;

// export default HomeTab;
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
