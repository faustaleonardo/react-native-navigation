import React from 'react';

import { View, Text, StyleSheet, Button } from 'react-native';

const LandingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Public Landing Screen</Text>
      <View style={styles.signInButton}>
        <Button
          title="Go to Sign In"
          color="coral"
          onPress={() => navigation.navigate('Sign In')}
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
  signInButton: {
    marginTop: 10,
  },
});

export default LandingScreen;
