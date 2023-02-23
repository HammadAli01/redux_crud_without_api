import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import tableColumn from "./data";
import { useState, useEffect } from "react";
import { userDeleted, userAdded, userUpdated } from "./redux/actions";
function App() {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.data);
  const [newColumn, setNewColumn] = useState("");
  const [showField, setShowField] = useState(false);
  const initialNewData = {
    name: "",
    address: "",
    contact: "",
    email: "",
    exist: false,
  };
  const [newData, setNewData] = useState(initialNewData);
  const handleDelete = (userId) => {
    dispatch(userDeleted(userId));
  };
  const handleInputChange = (e) => {
    setNewData({ ...newData, [e.target.name]: e.target.value });
  };
  const handleSubmitButton = () => {
    if (newData.exist) {
      dispatch(
        userUpdated(
          {
            id: newData.id,
            name: newData.name,
            address: newData.address,
            contact: newData.contact,
            email: newData.email,
          },
          newData.id
        )
      );
    } else {
      console.log("newdata is =>", newData);
      dispatch(
        userAdded({
          id: users.length + 1,
          name: newData.name,
          address: newData.address,
          contact: newData.contact,
          email: newData.email,
        })
      );
      //dispatch for add
      // setData([...data, { ...newData, id: data.length + 1 }]);
      // setNewData(initialNewData);
    }
  };
  const handleEdit = (user) => {
    setNewData({ ...user, ["exist"]: true });
  };
  const handleAddNewColumn = (e) => {
    if (e.key === "Enter") {
      tableColumn.push({ columnName: newColumn });
      setNewColumn("");
      setShowField(false);
    }
  };
  useEffect(() => {
    console.log("called again  users", users);
  }, [users]);
  return (
    <div className="App">
      <div className="input-group">
        <input
          name="name"
          className="input-field"
          placeholder="Enter name"
          value={newData.name}
          onChange={(e) => {
            handleInputChange(e);
          }}
        />
        <input
          name="address"
          className="input-field"
          placeholder="Enter Address"
          value={newData.address}
          onChange={(e) => {
            handleInputChange(e);
          }}
        />
        <input
          name="email"
          type="email"
          className="input-field"
          placeholder="Enter Email"
          value={newData.email}
          onChange={(e) => {
            handleInputChange(e);
          }}
        />
        <input
          name="contact"
          type="tel"
          className="input-field"
          placeholder="Enter Contact"
          value={newData.contact}
          onChange={(e) => {
            handleInputChange(e);
          }}
        />
        <button
          onClick={() => {
            handleSubmitButton();
          }}
        >
          Submit
        </button>
      </div>
      <table>
        <thead>
          <tr>
            {tableColumn.map((heading, index) => {
              return <th key={index}>{heading.columnName}</th>;
            })}
               
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
                <td>{user["id"]}</td>
                <td>{user["name"]}</td>
                <td>{user["email"]}</td>
                <td>{user["contact"]}</td>
                <td>{user["address"]}</td>
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
}

export default App;
