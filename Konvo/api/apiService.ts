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
  return api.post("/send-message", { userId, chatPerson, text });
};

export const fetchChatsWithPerson = async (userId, chatPerson) => {
  return api.get(`/${userId}/chats/${chatPerson}`);
};

export const fetchUserChats = async (userId) => {
  return api.get(`/chat/${userId}`);
};
export const chatOfPerson = async (userId, password) => {
  try {
    console.log("heyy its here");

    const response = await api.get(`/chat/${userId}/${password}`);
    return response;
  } catch (error) {
    console.log('API error:', error.response || error);
    throw error; 
  }
};