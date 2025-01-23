import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  Image, 
  StyleSheet, 
  Dimensions, 
  StatusBar, 
  SafeAreaView,
  ActivityIndicator,
  Alert
} from 'react-native';
import AppNavigator from './AppNavigator';
import { chatOfPerson } from '@/api/apiService';
import { Link, useRouter } from 'expo-router';
import Chats from './Chats';

const { width } = Dimensions.get('window');

const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false); 
  const router = useRouter();
  const handleLogin = async () => {
    if (!username || !password) {
      Alert.alert('Error', 'Please enter both username and password');
      return;
    }
  
    setIsLoading(true);
    try {
      const response = await chatOfPerson(username, password);
      console.log('Login response:', response.data);
      if (response.status === 200 && response.data) {
        router.replace('/Chats');
      }
    } catch (error) {
      console.log('Login error:', error);
      Alert.alert(
        'Login Failed',
        'Invalid username or password'
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <StatusBar 
        backgroundColor="#120135"
        barStyle="light-content"
      />
      <SafeAreaView style={styles.container}>
        <Image 
          source={require('@/assets/message.jpg')} 
          style={styles.logo}
        />
        <Text style={styles.title}>Konvo</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#aaa"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
          editable={!isLoading}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#aaa"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          editable={!isLoading}
        />
        <TouchableOpacity 
          style={[styles.loginButton, isLoading && styles.loginButtonDisabled]}
          onPress={handleLogin}
          disabled={isLoading}
        >
          {isLoading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.loginButtonText}>Log In</Text>
          )}
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#120135',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: width * 0.4,
    height: width * 0.4,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 40,
    letterSpacing: 2,
  },
  input: {
    width: '80%',
    height: 50,
    backgroundColor: '#1E0A43',
    borderRadius: 10,
    paddingHorizontal: 15,
    color: '#fff',
    fontSize: 16,
    marginBottom: 20,
  },
  loginButton: {
    width: '80%',
    height: 50,
    backgroundColor: '#5D3EA4',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginButtonDisabled: {
    opacity: 0.7,
  },
});

export default Login;
