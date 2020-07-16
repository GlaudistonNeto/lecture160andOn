import axios from 'axios';

export default axios.create({
  baseUrl: 'http://ec0553cb5665.ngrok.io' // it changes depending of the port of nrok server
});