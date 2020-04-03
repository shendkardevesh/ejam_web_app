import axios from 'axios';

const defaultHeader = {
  'Content-Type': 'application/json'
};

const reqFetchWeatherReport = (cities) => {
  const options = {
    baseURL: 'http://localhost:5000/',
    method: 'get',
    url: 'weather/report',
    headers: defaultHeader,
    params: {
      cities
    },
    responseType: 'json'
  };
  return axios(options);
};

export {
  reqFetchWeatherReport
};
