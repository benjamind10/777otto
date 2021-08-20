import axios from 'axios';

const KEY = 'Wd4f2EpMTFLA5eYptQ';

export default axios.create({
  baseURL: 'https://www.magayo.com/api/results.php',
  params: {
    api_key: KEY,
    game: 'us_fl_cash3_eve',
    format: 'json',
  },
});
