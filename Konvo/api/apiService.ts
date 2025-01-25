import axios from "axios";

const API_BASE_URL = "http://10.0.2.2:5000/api/users"; 

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000, 
  headers:{
    "Content-Type":"application/json",
  },
});
export const registerUser = async (userId, username, password) => {
  return api.post("/register", { userId, username, password });
};

export const sendMessage = async (userId, chatPerson, text) => {
  console.log("inside send m essage");
  return api.post("/send-message", { userId, chatPerson, text });
};

export const fetchChatsWithPerson = async (userId, chatPerson) => {
  return api.get(`/${userId}/chats/${chatPerson}`);
};

export const fetchUserChats = async (userId) => {
  console.log("heyy its her");
  return api.get(`/chats/${userId}`);
};
export const chatOfPerson = async (userId, password) => {
  try {
    

    const response = await api.get(`/chat/${userId}/${password}`);
    return response;
  } catch (error) {
    console.log('API error:', error.response || error);
    throw error; 
  }
};


export const searchChats = async (query) => {
  return api.get(`/search/${query}`);
};
