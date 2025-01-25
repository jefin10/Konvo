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
import { Link, useRouter } from 'expo-router';
import { registerUser } from '@/api/apiService';

const { width } = Dimensions.get('window');

const Signin = () => {
  const [username, setUsername] = useState('');
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSignin = async () => {
    if (!username || !userId|| !password || !confirmPassword) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    setIsLoading(true);
    try {
      const response = await registerUser(username,userId, password);
      
      if (response.status === 201) {
        Alert.alert('Success', 'Account created successfully');
        router.replace({
          pathname: '/Login',
        });
      }
    } catch (error) {
      console.error('Signin error:', error);
      Alert.alert(
        'Signin Failed',
        error.response?.data?.message || 'Unable to create account'
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
        <Text style={styles.title}>Create Account</Text>
        <TextInput
          style={styles.input}
          placeholder="User Id"
          placeholderTextColor="#aaa"
          value={userId}
          onChangeText={setUserId}
          autoCapitalize="none"
          editable={!isLoading}
        />
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
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#aaa"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          editable={!isLoading}
        />
        <TouchableOpacity 
          style={[styles.signinButton, isLoading && styles.signinButtonDisabled]}
          onPress={handleSignin}
          disabled={isLoading}
        >
          {isLoading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.signinButtonText}>Sign In</Text>
          )}
        </TouchableOpacity>
        <Text style={styles.loginLink}>
          Already have an account - <Link href="/Login">Log In</Link>
        </Text>
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
  signinButton: {
    width: '80%',
    height: 50,
    backgroundColor: '#5D3EA4',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signinButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signinButtonDisabled: {
    opacity: 0.7,
  },
  loginLink: {
    color: '#fff',
    marginTop: 15,
  }
});

export default Signin;