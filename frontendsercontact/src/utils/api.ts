import axios from 'axios';

export default axios.create({
 
  //baseURL: process.env.REACT_APP_API_SERVER,
  baseURL: 'http://localhost:3000',
});