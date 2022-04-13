import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 9xtTWQAjz0XdP9pxy9HgTnDYuz5jw8FVvxtb1tnNEPI',
  },
});
