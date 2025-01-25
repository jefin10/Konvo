import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import i1 from '@/assets/images/1.jpg';
import styles from '@/styles/chatStyles';
import { fetchChatsWithPerson, sendMessage } from '@/api/apiService';
import { useLocalSearchParams } from 'expo-router';

const ChatScreen = () => {
  const { userId, recId } = useLocalSearchParams();
  console.log(userId,recId);

  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const getMessages = async () => {
    try {
      const response = await fetchChatsWithPerson(userId, recId);
      console.log('Fetched Messages:', response.data);
      if (response.status === 200 && response.data) {
        setMessages(response.data);
      }
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  useEffect(() => {
    if (userId && recId) {
      console.log(`Fetching messages for userId: ${userId}, recId: ${recId}`);
      getMessages();
    }
  }, [userId, recId]);

  const handleSendMessage = async () => {
    if (newMessage.trim() === '') return;

    const newMsg = {
      message: newMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      send: true,
    };
    try{
      console.log(userId,recId,newMessage)
      const resp = await sendMessage(userId,recId,newMessage);
      setMessages([newMsg, ...messages]); 
    setNewMessage('');
    }
    catch(error){
      console.log("BRUH ERORR HERE" ,error)
    }
    


  };

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

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.avatar} source={i1} />
        <View style={styles.headerInfo}>
          <Text style={styles.headerName}>Chat with {userId}</Text>
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
        <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatScreen;
