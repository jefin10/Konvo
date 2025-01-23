import { View, Text } from 'react-native'
import React from 'react'
import Navbar from '@/app/Navbar'
import Chats from '@/app/Chats'
import Login from './Login'
const index = () => {
  return (
    <View style={{ flex: 1 }}>
      <Login/>
    </View>
  )
}

export default index