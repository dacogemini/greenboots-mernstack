import isEmpty from "../validation/is-empty";

import { SET_CURRENT_USER } from "../actions/types";

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        //current state
        ...state, //payload is object with decoded user
        isAuthenticated: !isEmpty(action.payload), //isAuthenticated depends on if this payload is empty or not
        user: action.payload //user will be actual payload
      };
    default:
      return state;
  }
}
