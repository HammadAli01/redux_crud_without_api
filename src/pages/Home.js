import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userDeleted } from "../redux/actions";
import tableColumn from "../data";
export const Home = () => {
  const dispatch = useDispatch();
  const [newColumn, setNewColumn] = useState("");
  const [showField, setShowField] = useState(false);
  const { users, user } = useSelector((state) => state.data);
  console.log("users got in home is ", users);
  const navigate = useNavigate();
  const handleDelete = (id) => {
    dispatch(userDeleted(id));
  };
  const handleAddNewColumn = (e) => {
    if (e.key === "Enter") {
      tableColumn.push({ columnName: newColumn });
      setNewColumn("");
      setShowField(false);
    }
  };
  const handleEdit = (user) => {
    window.localStorage.setItem("user", JSON.stringify(user));
    navigate(`/Edituser/${user.id}`);
  };
  return (
    <div>
      <button color="secondary" onClick={() => navigate("/addUser")}>
        Add User
      </button>
      <table>
        <thead>
          <tr>
            {tableColumn.map((heading, index) => {
              return (
                <th key={index}>
                  {heading.columnName !== "action" && heading.columnName}
                </th>
              );
            })}
               <th>action</th>
            <th>
              <button
                className="action-button"
                onClick={() => {
                  setShowField(true);
                }}
              >
                Add Column
              </button>
              {showField && (
                <input
                  value={newColumn}
                  onChange={(e) => setNewColumn(e.target.value)}
                  onKeyDown={(e) => {
                    handleAddNewColumn(e);
                  }}
                />
              )}
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={index}>
                {tableColumn.map((heading, index) => (
                  <>
                    {heading.columnName !== "action" && (
                      <td>{user[heading.columnName]}</td>
                    )}
                  </>
                ))}
                {/* <td>{user["name"]}</td>
                <td>{user["email"]}</td>
                <td>{user["contact"]}</td>
                <td>{user["address"]}</td> */}
                <td />
                <td />
                <td>
                  <button
                    className="action-button"
                    onClick={() => {
                      handleEdit(user);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="action-button"
                    onClick={() => {
                      handleDelete(user.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
                        
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
