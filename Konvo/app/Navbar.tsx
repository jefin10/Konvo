import React, { useState } from "react";
import { View, Text, Image, TextInput, StyleSheet } from "react-native";
import st from "@/styles/navStyle";
import i1 from '@/assets/images/1.jpg'


const Navbar = () => {
  const [search, setSearch] = useState("");

  return (
    <View style={st.navStyle}>
      <View style={st.logoSection}>
        <Image
          style={st.logo}
          source={require('@/assets/message.jpg')} 
        />
        <Text style={st.title}>KONVO</Text>
      </View>

      <View style={st.searchContainer}>
        <TextInput
          style={st.searchBar}
          placeholder="Search.."
          placeholderTextColor="#aaa"
          value={search}
          onChangeText={(text) => setSearch(text)}
        />
      </View>
    </View>
  );
};

export default Navbar;