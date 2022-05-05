import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Card, Title, Paragraph} from 'react-native-paper';

const title = 'title';
const content = 'content';

const HomeScreen = ({navigation}) => (
  <TouchableOpacity
    onPress={() =>
      navigation?.push('Details', {
        title,
        content,
      })
    }>
    <Card>
      <Card.Content>
        <Title>{title}</Title>
        <Paragraph>{content}</Paragraph>
      </Card.Content>
    </Card>
  </TouchableOpacity>
);

export default HomeScreen;
