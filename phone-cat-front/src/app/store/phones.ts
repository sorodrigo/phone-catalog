import { ActionReducer, Action } from '@ngrx/store';

export const SET_PHONES = 'SET_PHONES';

const initialState = {
  list: []
};

export function phonesReducer(state = initialState, action: Action) {
  switch (action.type) {
    case SET_PHONES:
      return { ...state, list: action.payload };
    default:
      return state;
  }
}
