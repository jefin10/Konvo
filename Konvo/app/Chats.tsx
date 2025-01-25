import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, SafeAreaView } from 'react-native';
import { Link, useLocalSearchParams } from 'expo-router';
import st from '@/styles/navStyle';
import Navbar from './Navbar';
import { fetchUserChats, searchChats } from '@/api/apiService';

const Chats = () => {
  const [chats, setChats] = useState([]);
  const { userId } = useLocalSearchParams(); 

  const getChats = async (userId) => {
    try {
      const response = await fetchUserChats(userId);
      console.log('Chats response:', response.data);
      if (response.status === 200 && response.data) {
        setChats(response.data || []);
      }
    } catch (error) {
      console.error('Error fetching chats:', error);
    }
  };

  const handleSearch = async (query) => {
    try {
      const response = await searchChats(query);
      console.log('Search response:', response.data);
      if (response.data.exists) {
        setChats([
          {
            chat_person: response.data.userId,
            chat: [],
            timestamp: Date.now(),
          },
        ]);
        console.log('User exists:', response.data.userId);
      } else {
        setChats([]);
      }
    } catch (error) {
      console.error('Error searching chats:', error);
    }
  };

  useEffect(() => {
    if (userId) {
      console.log('Fetching chats for userId:', userId);
      getChats(userId);
    }
  }, [userId]);

  return (
    <SafeAreaView style={st.container}>
      <Navbar handleSearch={handleSearch} />
      <View style={st.chatUi}>
        <FlatList
          data={chats}
          keyExtractor={(item, index) =>
            item.chat_person || index.toString()
          }
          renderItem={({ item }) => {
            if (!userId || !item.chat_person) {
              console.warn('userId or chat_person is undefined:', {
                userId,
                chat_person: item.chat_person,
              });
              return null;
            }

            return (
              <Link
      href={{
        pathname: '/ChatScreen',
        params: {  
          userId: userId, 
          recId: item.chat_person 
        }
      }}
    >
                <View style={st.chatComponent}>
                  <Image
                    style={st.chatlogo}
                    source={require('@/assets/message.jpg')}
                  />
                  <View style={st.textContainer}>
                    <Text style={st.name}>{item.chat_person}</Text>
                    <Text style={st.time}>
                      {item.chat && item.chat.length > 0
                        ? new Date(
                            item.chat[item.chat.length - 1].time
                          ).toLocaleTimeString()
                        : 'New Contact'}
                    </Text>
                  </View>
                </View>
              </Link>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Chats;
