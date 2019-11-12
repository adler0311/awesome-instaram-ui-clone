import React, { useState, useCallback } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
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
  author: string;
  body: string;
  created: string;
  json_metadata: string;
  root_title: string;
  post_id: number;
  active_votes: [];
  children: number;
  pending_payout_value: string;
};

type PropCardComponent = {
  feed: Feed;
};

const CardComponent = ({ feed }: PropCardComponent) => {
  const { image } = JSON.parse(feed.json_metadata);
  const [bookmarkToggle, setBookmarkToggle] = useState(false);
  const [likeToggle, setLikeToggle] = useState(false);

  const onToggleBookmark = useCallback(() => {
    setBookmarkToggle(!bookmarkToggle);
  }, [bookmarkToggle, setBookmarkToggle]);

  const onToggleLike = useCallback(() => {
    setLikeToggle(!likeToggle);
  }, [likeToggle, setLikeToggle]);

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
          <Text>{new Date(feed.created).toDateString()}</Text>
        </Body>
      </CardItem>
      {image && image.length ? (
        <CardItem cardBody>
          {/* 여기엔 썸네일 */}
          <Image
            source={{
              uri: image[0]
            }}
            style={{ height: 200, width: null, flex: 1 }}
          />
        </CardItem>
      ) : null}
      <CardItem style={styles.iconContainer}>
        {/* 여기엔 아이콘들 */}
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
      {/* 여기엔 제목이랑 내용 */}
      <CardItem>
        <Text style={{ fontWeight: "bold" }}>{feed.root_title}</Text>
      </CardItem>
      <CardItem>
        <Text>{feed.body.slice(0, 100)}...</Text>
      </CardItem>
      <CardItem>
        <Right style={{ flex: 1 }}>
          <Text>{feed.pending_payout_value}</Text>
        </Right>
      </CardItem>
    </Card>
  );
};

const styles = StyleSheet.create({
  iconContainer: { height: 40 },
  icon: { color: "black", marginRight: 5 },
  contentContainer: {}
});

export default CardComponent;
