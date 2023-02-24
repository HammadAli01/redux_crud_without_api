import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userAdded } from "../redux/actions";
import { useNavigate } from "react-router-dom";
import tableColumn from "../data";
export const Adduser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { users } = useSelector((state) => state.data);
  const columns = tableColumn.map((field) => field.columnName);
  const [newData, setNewData] = useState({});
  const handleInputChange = (e) => {
    setNewData({ ...newData, [e.target.name]: e.target.value });
  };
  const handleSubmitButton = () => {
    console.log("newdata is =>", newData);
    // const tempData={...columns.map((field)=>[`${field}`]:newData[field])}
    dispatch(userAdded(newData));
    navigate("/");
  };

  return (
    <div className="input-group">
      {columns}
      {columns.map((field) => (
        <input
          key={field}
          name={field}
          className="input-field"
          placeholder={`Enter ${field}`}
          value={newData.field}
          onChange={(e) => {
            handleInputChange(e);
          }}
        />
      ))}
      {/* <input
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
      /> */}
      <button
        onClick={() => {
          handleSubmitButton();
        }}
      >
        Submit
      </button>
    </div>
  );
};
