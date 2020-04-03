import { reqFetchWeatherReport } from '../api/weather';

export const GET_WEATHER_REPORT = 'GET_WEATHER_REPORT';
export const GET_WEATHER_REPORT_PENDING = 'GET_WEATHER_REPORT';
export const GET_WEATHER_REPORT_FULFILLED = 'GET_WEATHER_REPORT_FULFILLED';
export const GET_WEATHER_REPORT_REJECTED = 'GET_WEATHER_REPORT_REJECTED';

export const fetchWeatherReport = (payload) => ({
  type: GET_WEATHER_REPORT,
  payload: reqFetchWeatherReport(payload)
});
