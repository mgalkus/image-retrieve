import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID V3Im8XxJbZZVZyLf8QPmS75qT81huXhg6zlkvgsMUAY"
  }
});
