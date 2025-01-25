import { StyleSheet } from "react-native";

const st = StyleSheet.create({
  searchButton: {
    marginLeft: 10,
    backgroundColor: "#5D3EA4",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
  },
  searchButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
    navStyle: {
      backgroundColor: "#120135",
      paddingVertical: 15,
      paddingHorizontal: 10,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      elevation: 4,
      borderBottomWidth: 1,
      borderBottomColor: "#ddd",
    },
    logoSection: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 10,
    },
    logo: {
      width: 50,
      height: 50,
      marginRight: 10,
    },
    title: {
      color: "#fff",
      fontSize: 28,
      fontWeight: "bold",
      letterSpacing: 1.5,
    },
    searchContainer: {
      marginTop: 5,
      color:"#fff",
      backgroundColor: "#5D3EA4 ",
      borderRadius: 20,
      paddingHorizontal: 10,
      elevation: 3,
      flexDirection:"row",
      justifyContent:"space-between"
    },
    searchBar: {
      height: 40,
      fontSize: 16,
      color: "#fff",
    },
    container: {
      flex: 1,
      backgroundColor: "#120135",
    },
    chatUi: {
      flex: 1,
      backgroundColor: "#120135",
      padding: 10,
    },
    chatComponent: {
      backgroundColor: "#1E0A43",
      flexDirection: "row",
      alignItems: "center",
      padding: 10,
      marginVertical: 5,
      borderRadius: 8,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      elevation: 2,
    },
    textContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingRight: 10,
    },
    chatlogo: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginRight: 15,
    },
    
    name: {
      color: "#fff",
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 5,
    },
    time: {
      color: "#D1C4E9",
      fontSize: 14,
    },
    individualChatContainer:{
      backgroundColor:"white"
    },
    chatTitle: {
      backgroundColor: "#1E0A43",
      flexDirection: "row",
      alignItems: "center",
      padding: 10,
      marginVertical: 5,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      elevation: 2,
    },
  });

export default st;
