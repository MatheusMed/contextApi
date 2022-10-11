import { ReducerActionType } from "../../types/reducerActionType";


export type UserType = {
  name: string;
  lastName: string;
  age: number;
}



export const userInitialState: UserType = {
  name: "Matheus",
  lastName: "Medeiros",
  age: 25
}


export const userReducer = (state: UserType, action: ReducerActionType) => {
  switch (action.type) {

    case 'CHANGE_NAME':
      return { ...state, name: action.payload.name }

    case 'CHANGE_LASTNAME':
      return { ...state, lastName: action.payload.lastName }


    case 'CHANGE_AGE':
      return { ...state, age: action.payload.age }

  }

  return state;
}
