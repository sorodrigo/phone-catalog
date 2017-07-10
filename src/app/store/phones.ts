import { Action } from '@ngrx/store';

export const SET_PHONES = 'SET_PHONES';
export const SET_LOADING = 'SET_LOADING';

const initialState = {
  list: [],
  loading: false
};

export function phonesReducer(state = initialState, action: Action) {
  switch (action.type) {
    case SET_PHONES:
      return { ...state, list: action.payload };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
}
