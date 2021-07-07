import axios from 'axios';

export default axios.create({
  baseURL: 'http://5f55a98f39221c00167fb11a.mockapi.io',
  headers: {
    'Content-type': 'application/json',
  },
});
