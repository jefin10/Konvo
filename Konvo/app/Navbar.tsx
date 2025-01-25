import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import st from "@/styles/navStyle";

const Navbar = ({ handleSearch }) => {
  const [search, setSearch] = useState("");

  const onSearch = () => {
    if (handleSearch && search.trim() !== "") {
      handleSearch(search.trim());
    }
  };

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
        <TouchableOpacity style={st.searchButton} onPress={onSearch}>
          <Text style={st.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Navbar;
