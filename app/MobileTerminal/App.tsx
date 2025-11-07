/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Login from './components/Login';
import Register from './components/Register';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [connectionStatus, setConnectionStatus] = useState('Disconnected');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    // WebSocket connection logic will go here later
    // For now, just simulate connection status
    setConnectionStatus('Connected');
  }, []);

  const handleLoginSuccess = (jwtToken: string) => {
    setToken(jwtToken);
    setIsLoggedIn(true);
    setShowRegister(false);
  };

  const handleRegisterSuccess = () => {
    setShowRegister(false);
  };

  if (!isLoggedIn) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        {showRegister ? (
          <Register onRegisterSuccess={handleRegisterSuccess} onNavigateToLogin={() => setShowRegister(false)} />
        ) : (
          <Login onLoginSuccess={handleLoginSuccess} onNavigateToRegister={() => setShowRegister(true)} />
        )}
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.container}>
        <Text style={styles.statusText}>Welcome! You are {connectionStatus}</Text>
        {/* Main app content will go here */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default App;
