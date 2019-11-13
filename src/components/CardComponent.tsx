import React, { useState, useCallback } from "react";
import { View, Text, Image, StyleSheet, WebView } from "react-native";
import HTML from "react-native-render-html";
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

type ShoppingItem = {
  hprice: string;
  image: string;
  link: string;
  lprice: string;
  mallName: string;
  productId: string;
  prouctType: string;
  title: string;
};

type PropCardComponent = {
  shoppingItem: ShoppingItem;
};

const CardComponent = ({ shoppingItem }: PropCardComponent) => {
  // const { image } = JSON.parse(feed.json_metadata);
  const [bookmarkToggle, setBookmarkToggle] = useState(false);
  const [likeToggle, setLikeToggle] = useState(false);

  const removeTag = (text: string): string => {
    return text.replace("<b>", "").replace("</b>", "");
  };

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
              uri: shoppingItem.image
            }}
          />
        </Left>
        <Body style={{ flex: 3 }}>
          <Text>{shoppingItem.mallName}</Text>
          <Text>
            {shoppingItem.lprice}원 ~ {shoppingItem.hprice}원
          </Text>
        </Body>
      </CardItem>
      {shoppingItem.image && shoppingItem.image.length ? (
        <CardItem cardBody>
          {/* 여기엔 썸네일 */}
          <Image
            source={{
              uri: shoppingItem.image
            }}
            style={{ height: 300, width: null, flex: 1 }}
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
        {/* <Text>좋아요 {feed.active_votes.length}개</Text> */}
      </CardItem>
      {/* 여기엔 제목이랑 내용 */}
      <CardItem>
        <Text style={{ fontSize: 16 }}>{removeTag(shoppingItem.title)}</Text>
      </CardItem>
      <CardItem
        onPress={() => {
          console.log("pressed");
        }}
      >
        <Text>보러가기</Text>
      </CardItem>
    </Card>
  );
};

const styles = StyleSheet.create({
  iconContainer: { height: 40 },
  icon: { color: "black", marginRight: 5 }
});

export default CardComponent;
