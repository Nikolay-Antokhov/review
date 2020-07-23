import axios from 'axios';

const config = () => ({
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '+ localStorage.getItem('jwt'),
    'Salon-ID': localStorage.getItem('salonId')
  }
});

export default (url, data) => axios.post(process.env.REACT_APP_API_URL + url, data, config());
