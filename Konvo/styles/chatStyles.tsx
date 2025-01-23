import { StyleSheet } from "react-native";
import { SearchBar } from "react-native-screens";


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#120135', 
       },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 15,
      backgroundColor: '#1E0A43', 
      borderBottomWidth: 1,
      borderBottomColor: '#5D3EA4',
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      elevation: 4,
    },
    avatar: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginRight: 15,
    },
    headerInfo: {
      flex: 1,
    },
    headerName: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#fff',
      letterSpacing: 1,
    },
    chatContainer: {
      flex: 1,
      backgroundColor: '#120135',
    },
    messagesList: {
      padding: 15,
    },
    messageContainer: {
      marginVertical: 5,
    },
    sentMessage: {
      alignSelf: 'flex-end',
    },
    receivedMessage: {
      alignSelf: 'flex-start',
    },
    messageBubble: {
      borderRadius: 20,
      padding: 12,
      maxWidth: '100%',
    },
    sentBubble: {
      backgroundColor: '#5D3EA4', 
    },
    receivedBubble: {
      backgroundColor: '#1E0A43', 
    },
    messageText: {
      fontSize: 16,
      marginBottom: 4,
    },
    sentMessageText: {
      color: '#fff',
    },
    receivedMessageText: {
      color: '#fff',
    },
    timeText: {
      fontSize: 12,
      alignSelf: 'flex-end',
    },
    sentTimeText: {
      color: '#D1C4E9',
    },
    receivedTimeText: {
      color: '#D1C4E9',
    },
    footer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 10,
      paddingVertical: 10,
      backgroundColor: '#1E0A43',
      borderTopWidth: 1,
      borderTopColor: '#5D3EA4',
    },
    searchBar: {
      flex: 1,
      height: 40,
      paddingHorizontal: 10,
      backgroundColor: '#2E204B',
      color: '#fff',
      borderRadius: 20,
      marginRight: 10,
    },
    sendButton: {
      backgroundColor: '#5D3EA4',
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 20,
    },
    sendButtonText: {
      color: '#fff',
      fontWeight: 'bold',
    },
    


  });



  export default styles;