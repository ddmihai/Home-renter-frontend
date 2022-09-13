import axios from "axios";


const API_REQUEST = axios.create({
    baseURL: 'https://home-renter-backend.herokuapp.com/api'
  });

  export default API_REQUEST; 