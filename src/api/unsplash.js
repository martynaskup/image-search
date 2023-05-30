import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 5ac241e6d320313fd8f62a929dd23c9c71a5ccc7d1f9b88d6b1dfe480168ef0d',
  },
});
