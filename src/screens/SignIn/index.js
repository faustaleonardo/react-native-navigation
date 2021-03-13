import React from 'react';

import { View, Text, StyleSheet, Button } from 'react-native';

const SignInScreen = ({ onSignIn, navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Public Sign In Screen</Text>
      <View style={styles.button}>
        <Button title="Sign In" color="coral" onPress={onSignIn} />
      </View>

      <Text>OR</Text>

      <View style={styles.button}>
        <Button
          title="Go to Sign Up"
          color="coral"
          onPress={() => navigation.navigate('Sign Up')}
        />
      </View>

      <View style={styles.button}>
        <Button
          title="Go to Forget Password"
          color="coral"
          onPress={() => navigation.navigate('Forget Password')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginTop: 10,
  },
});

export default SignInScreen;
