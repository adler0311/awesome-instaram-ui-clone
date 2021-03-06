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
import { NavigationStackProp } from "react-navigation-stack";

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
  navigation: NavigationStackProp;
};

const CardComponent = ({ shoppingItem, navigation }: PropCardComponent) => {
  const [bookmarkToggle, setBookmarkToggle] = useState(false);
  const [likeToggle, setLikeToggle] = useState(false);

  const title = shoppingItem.title.replace("<b>", "").replace("</b>", "");

  const onToggleBookmark = useCallback(() => {
    setBookmarkToggle(!bookmarkToggle);
  }, [bookmarkToggle, setBookmarkToggle]);

  const onToggleLike = useCallback(() => {
    setLikeToggle(!likeToggle);
  }, [likeToggle, setLikeToggle]);

  const handlePress = () => {
    navigation.push("ShoppingCardDetail", {
      link: shoppingItem.link,
      title
    });
  };

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
            {shoppingItem.lprice}원 ~{" "}
            {+shoppingItem.hprice > 0 ? `${shoppingItem.hprice}원` : ""}
          </Text>
        </Body>
      </CardItem>
      {shoppingItem.image && shoppingItem.image.length ? (
        <CardItem cardBody>
          <Image
            source={{
              uri: shoppingItem.image
            }}
            style={{ height: 300, width: null, flex: 1 }}
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
      <CardItem style={{ marginVertical: -10 }}></CardItem>
      <CardItem>
        <Text style={{ fontSize: 16 }}>{title}</Text>
      </CardItem>
      <CardItem>
        <Right style={{ flex: 1 }}>
          <Text onPress={handlePress}>보러가기</Text>
        </Right>
      </CardItem>
    </Card>
  );
};

const styles = StyleSheet.create({
  iconContainer: { height: 40 },
  icon: { color: "black", marginRight: 5 }
});

export default CardComponent;
