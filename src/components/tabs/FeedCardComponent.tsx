import React, { useState, useCallback } from "react";
import { Image, StyleSheet } from "react-native";
import { Text } from "native-base";
import HTML from "react-native-render-html";
import { Remarkable } from "remarkable";

const md = new Remarkable({ html: true });

import {
  Card,
  CardItem,
  Left,
  Body,
  Right,
  Thumbnail,
  Icon,
  Button
} from "native-base";

type Feed = {
  json_metadata: string;
  body: string;
  author: string;
  title: string;
  active_votes: [];
  created: string;
};

type PropFeedCardComponent = {
  feed: Feed;
  navigation: any;
};

const FeedCardComponent = ({ feed, navigation }: PropFeedCardComponent) => {
  const { image } = JSON.parse(feed.json_metadata);

  const [bookmarkToggle, setBookmarkToggle] = useState(false);
  const [likeToggle, setLikeToggle] = useState(false);

  const onToggleBookmark = useCallback(() => {
    setBookmarkToggle(!bookmarkToggle);
  }, [bookmarkToggle, setBookmarkToggle]);

  const onToggleLike = useCallback(() => {
    setLikeToggle(!likeToggle);
  }, [likeToggle, setLikeToggle]);

  const handlePress = () => {
    navigation.push("FeedDetail", { feed });
  };
  return (
    <Card>
      <CardItem>
        <Left>
          <Thumbnail
            testID="card-thumbnail"
            source={{
              uri: `https://steemitimages.com/u/${feed.author}/avatar`
            }}
          />
        </Left>
        <Body style={{ flex: 3 }}>
          <Text>{feed.author}</Text>
          <Text note>{new Date(feed.created).toDateString()}</Text>
        </Body>
      </CardItem>
      {image && image.length ? (
        <CardItem cardBody>
          <Image
            source={{
              uri: image[0]
            }}
            style={{ height: 200, width: null, flex: 1 }}
          />
        </CardItem>
      ) : null}
      <CardItem style={styles.iconContainer}>
        <Left>
          <Button transparent onPress={onToggleLike}>
            <Icon
              name={likeToggle ? "ios-heart" : "ios-heart-empty"}
              style={styles.icon}
            />
          </Button>
          <Button transparent>
            <Icon name="ios-chatbubbles" style={styles.icon} />
          </Button>
          <Button transparent>
            <Icon name="ios-send" style={styles.icon} />
          </Button>
        </Left>
        <Right>
          <Button transparent onPress={onToggleBookmark}>
            <Icon
              type="MaterialIcons"
              name={bookmarkToggle ? "bookmark" : "bookmark-border"}
              style={styles.icon}
            />
          </Button>
        </Right>
      </CardItem>
      <CardItem style={{ marginVertical: -10 }}>
        <Text>좋아요 {feed.active_votes.length}개</Text>
      </CardItem>
      <CardItem>
        <Text onPress={handlePress} style={{ fontSize: 16 }}>
          {feed.title}
        </Text>
      </CardItem>
      <CardItem>
        <HTML html={md.render(feed.body).slice(0, 100)} />
      </CardItem>
    </Card>
  );
};

const styles = StyleSheet.create({
  iconContainer: { height: 40 },
  icon: { color: "black", marginRight: 5 }
});

export default FeedCardComponent;
