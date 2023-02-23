import * as types from "./actionType";
const initialState = {
  users: [
    {
      id: 1,
      name: "Hammad",
      address: "banigala",
      email: "hammadalibu@gmail.com",
      contact: "03045360339",
    },
    {
      id: 2,
      name: "umer",
      address: "Rawalpindi",
      email: "umer@gmail.com",
      contact: "12345678911",
    },
    {
      id: 3,
      name: "saad",
      address: "Karachi",
      email: "saad@gmail.com",
      contact: "5432678543",
    },
  ],
};
const usersReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case types.DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    case types.UPDATE_USER:
      return {
        ...state,
        users: state.users.map((person) =>
          person.id === action.payload.id ? action.payload.user : person
        ),
      };
    case types.ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };

    default:
      return state;
  }
};
export default usersReducers;
