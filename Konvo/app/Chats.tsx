import { View, Text,FlatList,Image,SafeAreaView } from 'react-native'
import React from 'react'
import st from '@/styles/navStyle';
import i1 from '@/assets/images/1.jpg';
import i2 from '@/assets/images/2.jpg';
import i3 from '@/assets/images/3.jpeg';
import i4 from '@/assets/images/4.jpeg';
import i5 from '@/assets/images/5.jpeg';
import i6 from '@/assets/images/6.jpeg';
import i7 from '@/assets/images/7.jpeg';
import i8 from '@/assets/images/8.jpeg';
import i9 from '@/assets/images/9.jpeg';
import i10 from '@/assets/images/10.jpeg';
import i11 from '@/assets/images/11.jpg';
import { Link } from 'expo-router';
import Navbar from './Navbar';


const data = [
  {
    image: i1,
    name: "Gerom",
  },
  {
    image: i2,
    name: "Sophia",
  },
  {
    image: i3,
    name: "Maxwell",
  },
  {
    image: i4,
    name: "Isabella",
  },
  {
    image: i5,
    name: "Oliver",
  },
  {
    image: i6,
    name: "Emily",
  },
  {
    image: i7,
    name: "Ethan",
  },
  {
    image: i8,
    name: "Ava",
  },
  {
    image: i9,
    name: "Mason",
  },
  {
    image: i10,
    name: "Liam",
  },
  {
    image: i11,
    name: "Mia",
  },
];

const Chats = () => {
  return (
    <SafeAreaView style={st.container}>
      <Navbar/>
      <View style={st.chatUi}>
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => {
            return (
              <Link href="/ChatScreen">
              <View style={st.chatComponent}>
                <Image
                  style={st.chatlogo}
                  source={item.image} 
                />
                <View style={st.textContainer}>
                  <Text style={st.name}>{item.name}</Text>
                  <Text style={st.time}>12:00pm</Text>
                </View>
              </View>
              </Link>
            )
          }}
        />
      </View>
    </SafeAreaView>
  )
}

export default Chats