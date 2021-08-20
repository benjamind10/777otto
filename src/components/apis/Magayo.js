import axios from 'axios';
import configs from '../../configs';

const KEY = configs.M_KEY;

export default axios.create({
  baseURL: 'https://www.magayo.com/api/results.php',
  params: {
    api_key: KEY,
    game: 'us_fl_cash3_eve',
    format: 'json',
  },
});
