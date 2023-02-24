import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userUpdated, getSingleUser } from "../redux/actions";
import { useNavigate, useParams } from "react-router-dom";
export const Edituser = () => {
  const initialData = { name: "", email: "", contact: "", address: "" };
  const [data, setData] = useState(initialData);
  const { user, users } = useSelector((state) => state.data);
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    dispatch(userUpdated(data, id));
    console.log("data updated sent is ", data);
    setData(initialData);
  };
  const handleButton = () => {
    navigate("/");
  };
  useEffect(() => {
    setData(JSON.parse(window.localStorage.getItem("user")));
    //dispatch(getSingleUser(id));
  }, []);
  useEffect(() => {
    console.log("user in useeffect is ", data);
  }, [data]);
  //   useEffect(() => {
  //     console.log("user got is", user);
  //     if (user) {
  //       setData({ ...user });
  //     }
  //   }, [user]);
  return (
    <div className="input-group">
      <input
        name="name"
        className="input-field"
        placeholder="Enter name"
        value={data.name || ""}
        onChange={(e) => {
          handleInputChange(e);
        }}
      />
      <input
        name="address"
        className="input-field"
        placeholder="Enter Address"
        value={data.address || ""}
        onChange={(e) => {
          handleInputChange(e);
        }}
      />
      <input
        name="email"
        type="email"
        className="input-field"
        placeholder="Enter Email"
        value={data.email || ""}
        onChange={(e) => {
          handleInputChange(e);
        }}
      />
      <input
        name="contact"
        type="tel"
        className="input-field"
        placeholder="Enter Contact"
        value={data.contact || ""}
        onChange={(e) => {
          handleInputChange(e);
        }}
      />
      <button
        onClick={() => {
          handleSubmit();
        }}
      >
        Submit
      </button>
      <button
        onClick={() => {
          handleButton();
        }}
      >
        Go Home
      </button>
    </div>
  );
};
