import citiesArray from '../lib/citiesArray.json';

import { TOGGLE_CITY } from '../actions/cities';

const initialState = {
  list: [...citiesArray.map(item => ({ ...item, selected: false }))],
};

export default function cities(state = initialState, { type, payload }) {
  switch (type) {
    case TOGGLE_CITY:
      return {
        ...state,
        list: state.list.map(item => {
          return payload.name === item.name ? 
            { ...item, selected: !item.selected }
            : {...item}
        })
      }
    default:
      return state
  }
};