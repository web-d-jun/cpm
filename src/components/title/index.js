import React from 'react';
import {Text, StyleSheet} from 'react-native';

const Title = props => {
  return <Text style={styles.title}>instagram</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    textAlign: 'left',
  },
});
