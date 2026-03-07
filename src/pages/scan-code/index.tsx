import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const ScanCodeScreen = () => {
  return (
    <View style={styles.pageWrap}>
      <Text>scan code page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  pageWrap: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
