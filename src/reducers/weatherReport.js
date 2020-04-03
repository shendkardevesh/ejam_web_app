import {
  GET_WEATHER_REPORT_PENDING,
  GET_WEATHER_REPORT_FULFILLED,
  GET_WEATHER_REPORT_REJECTED
} from '../actions/weatherReport';

const initialState = {
  reports: [],
  pending: false,
  errorStatus: false,
  error: {}
};

export default function counter(state = initialState, { type, payload }) {
  switch (type) {
    case GET_WEATHER_REPORT_FULFILLED:
      return {
        ...state,
        pending:false,
        reports: payload.data
      }
    case GET_WEATHER_REPORT_PENDING:
      return {
        ...state,
        pending: true
      }
    case GET_WEATHER_REPORT_REJECTED:
      return {
        ...state,
        pending: false,
        errorStatus: true,
        error: payload
      }
    default:
      return state
  }
};
