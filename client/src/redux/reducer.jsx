import { IS_LOGIN } from "./actions"

const initstate = {
  loggedIn: localStorage.getItem("token") ? true : false,
}

export function Reducer  (state=initstate,action){
  switch(action.type){
    case IS_LOGIN:
      return {...state, loggedIn: action.payload}
    default:
      return state
  }
}