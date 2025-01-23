import { View, Text, Image, FlatList, TextInput, Button, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import i1 from '@/assets/images/1.jpg';
import styles from '@/styles/chatStyles';


const messages = [
  {
    message: 'Hello, how are you?',
    time: '12:22',
    send: true,
  },
  {
    message: 'I am fine, thank you!',
    time: '12:23',
    send: false,
  },
  {
    message: 'Great to hear that!',
    time: '12:24',
    send: true,
  },
];

const ChatScreen = () => {
  const [newMessage, setNewMessage] = useState('');

  const renderMessage = ({ item }) => (
    <View
      style={[
        styles.messageContainer,
        item.send ? styles.sentMessage : styles.receivedMessage,
      ]}
    >
      <View
        style={[
          styles.messageBubble,
          item.send ? styles.sentBubble : styles.receivedBubble,
        ]}
      >
        <Text
          style={[
            styles.messageText,
            item.send ? styles.sentMessageText : styles.receivedMessageText,
          ]}
        >
          {item.message}
        </Text>
        <Text
          style={[
            styles.timeText,
            item.send ? styles.sentTimeText : styles.receivedTimeText,
          ]}
        >
          {item.time}
        </Text>
      </View>
    </View>
  );

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;

    messages.unshift({
      message: newMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      send: true,
    });
    setNewMessage('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.avatar} source={i1} />
        <View style={styles.headerInfo}>
          <Text style={styles.headerName}>Chat with Friend</Text>
        </View>
      </View>

      <SafeAreaView style={styles.chatContainer}>
        <FlatList
          data={messages}
          renderItem={renderMessage}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.messagesList}
        />
      </SafeAreaView>

      <View style={styles.footer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Type your message..."
          placeholderTextColor="#aaa"
          value={newMessage}
          onChangeText={setNewMessage}
        />
        <TouchableOpacity style={styles.sendButton} >
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatScreen;
