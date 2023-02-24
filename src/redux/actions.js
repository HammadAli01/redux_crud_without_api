import * as types from "./actionType";
// const setUsers = (users) => ({
//   type: types.SET_USERS,
//   payload: users,
// });
export const userDeleted = (id) => ({
  type: types.DELETE_USER,
  id,
});
export const userAdded = (user) => ({
  type: types.ADD_USER,
  user,
});

export const userUpdated = (user, id) => ({
  type: types.UPDATE_USER,
  user,
});
export const getSingleUser = (id) => ({
  type: types.GET_SINGLE_USER,
  id,
});
// export const loadUsers = () => {
//   return function (dispatch, getState) {
//     const { users } = getState();
//     dispatch(setUsers(users));
//   };
// };
// export const deleteUser = (id) => {
//   return function (dispatch) {
//     userDeleted(id);
//   };
// };
// export const addUser = (user) => {
//   return function (dispatch) {
//     console.log("got user is =>", user);
//     userAdded({ ...user });
//   };
// };
// export const updateUser = (user, id) => {
//   return function (dispatch) {
//     userUpdated(user, id);
//   };
// };
