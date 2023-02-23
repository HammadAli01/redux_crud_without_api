import * as types from "./actionType";
// const setUsers = (users) => ({
//   type: types.SET_USERS,
//   payload: users,
// });
export const userDeleted = (id) => ({
  type: types.DELETE_USER,
  payload: id,
});
export const userAdded = (user) => ({
  type: types.ADD_USER,
  payload: user,
});

export const userUpdated = (user, id) => ({
  type: types.UPDATE_USER,
  payload: { user, id },
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
