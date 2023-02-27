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
  user: {},
};
const usersReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_USERS:
      return {
        ...state,
        users: action.users,
      };
    case types.DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.id),
      };
    case types.UPDATE_USER:
      return {
        ...state,
        users: state.users.map((person) =>
          person.id === action.user.id ? action.user : person
        ),
      };
    case types.ADD_USER:
      return {
        ...state,
        users: [...state.users, action.user],
      };
    case types.GET_SINGLE_USER:
      return {
        ...state,
        user: state.users.filter((person) => {
          if (person.id === action.id) {
            return person;
          }
        }),
      };
    default:
      return state;
  }
};
export default usersReducers;
//personal vision(not more than 3 lines) and corporate vision and make its action plan not more than 2 pages
