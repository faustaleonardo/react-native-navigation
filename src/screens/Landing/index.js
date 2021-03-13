import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

const LandingScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Public Landing Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  flex: 1,
  backgroundColor: '#fff',
  justifyContent: 'center',
  alignItems: 'center',
});

export default LandingScreen;
