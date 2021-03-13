import React from 'react';

import { StyleSheet, View, Text, Button } from 'react-native';

const SignUpScreen = ({ onSignUp }) => {
  return (
    <View style={styles.container}>
      <Text>Public Sign Up</Text>
      <View style={styles.button}>
        <Button title="Sign Up" onPress={onSignUp} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 10,
  },
});

export default SignUpScreen;
