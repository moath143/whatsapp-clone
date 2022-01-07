import axios from "axios";

const URL = "http://localhost:8080";
export const addUser = async (data) => {
  
  try {
    let res = await axios.post(`${URL}/add`, data);
    return res.data
  } catch (error) {
    console.log("error while calling addUser api", error);
  }
};

export const getUsers = async () => {

  try {
    let res = await axios.get(`${URL}/users`);
    console.log(res);
      return res.data;
  } catch (error) {
    console.log("error while calling getusers api");
  }
};

export const setConversation = async (data) => {
  try {
    await axios.post(`${URL}/conversation/add`, data);
  } catch (error) {
    console.log("error while calling setConversation API", error);
  }
};

export const getConversation = async (data) => {
  try {
    let res = await axios.post(`${URL}/conversation/get`, data);
    return res.data;
  } catch (error) {
    console.log("error while calling getConversation API", error);
  }
};

export const newMessage = async (data) => {
  try {
    await axios.post(`${URL}/message/add`, data);
  } catch (error) {
    console.log("error while calling newMessage", error);
  }
};

export const getMessages = async (id) => {
  try {
    return await axios.get(`${URL}/message/get/${id}`);
  } catch (error) {
    console.log("error while calling getMessage", error);
  }
};
