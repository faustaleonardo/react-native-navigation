import React from 'react';

import { StyleSheet, View, Text } from 'react-native';

const PasswordChange = () => {
  return (
    <View style={styles.container}>
      <Text>Protected Password Change Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default PasswordChange;
