import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [gender, setGender] = useState();
  const [status, setStatus] = useState();

  const nav=useNavigate()

  const handleSubmit = async () => {
    try {
      const newItem = { name, email,gender,status };
      const response = await axios.post(
        "http://localhost:8000/api/users/",
        newItem
      );
      console.log("Item added:", response.data);
    } catch (error) {
      console.error("Error adding item:", error);
    }
    nav('/')
  };

  return (
    <div className="container">
      <h2 className="text-center mb-4">ENTER THE USER DETAILS</h2>
      <div className="form">
        <input
          type="text"
          placeholder="enter the name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="formelement"
        />
        <input
          type="text"
          placeholder="enter the email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="formelement"
        />
        <input
          type="text"
          placeholder="enter the gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="formelement"
        />
        <input
          type="text"
          placeholder="enter the status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="formelement"
        />
        <button onClick={handleSubmit} className="formbtn">
          submit
        </button>
      </div>
    </div>
  );
};

export default AddUser;
