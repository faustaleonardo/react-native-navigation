import React from 'react';

import { StyleSheet, View, Text } from 'react-native';

const ForgetPassword = () => {
  return (
    <View style={styles.container}>
      <Text>Public Forget Password</Text>
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

export default ForgetPassword;
