import React from "react";
import { Container, Content } from "native-base";
import { Remarkable } from "remarkable";
import HTML from "react-native-render-html";

const md = new Remarkable({ html: true });

const FeedDetail = ({
  navigation: {
    state: {
      params: { feed }
    }
  }
}) => {
  return (
    <Container style={{ flex: 1, margin: 20 }}>
      <Content>
        <HTML html={md.render(feed.body)} />
      </Content>
    </Container>
  );
};

export default FeedDetail;
