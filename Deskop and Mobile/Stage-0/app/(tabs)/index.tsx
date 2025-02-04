import React from 'react';
import { SafeAreaView, StyleSheet, Text, Button, Linking, StatusBar, View } from 'react-native';

const App = () => {
  const openGitHubRepo = () => {
    Linking.openURL('https://github.com/basii199/HNG-Tech');
  };

  const openHireReactNative = () => {
    Linking.openURL('http://hng.tech/hire/react-native-developers');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.text}>Welcome to My React Native App!</Text>

      {/* Wrapping Button in a View for spacing */}
      <View style={styles.buttonContainer}>
        <Button title="Visit GitHub Repository" onPress={openGitHubRepo} />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Hire a React Native Developer" onPress={openHireReactNative} />
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    marginBottom: 15, // Adds space between buttons
    width: '80%', // Ensures buttons have the same width
  },
});

export default App;
