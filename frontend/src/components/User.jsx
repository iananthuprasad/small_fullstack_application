// src/components/ItemList.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../styles/user.css'

const User = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Axios GET request
    axios
      .get("http://localhost:8000/api/users")
      .then((response) => {
        // Handle the successful response
        setItems(response.data);
        
      })
      .catch((error) => {
        // Handle the error
        console.error("Error fetching data:", error);
      });
  }, []); // Empty dependency array to run the effect only once on component mount



 const handleDelete = async (itemId) => {
   try {
     const response = await axios.delete(
       `http://localhost:8000/api/users/${itemId}`
     );
     console.log(response.data);
     window.location.reload()
   } catch (error) {
     console.error("Error deleting item:", error);
   }
   
 };

  

  return (
    <div>
      <div className="container mt-4">
        <h2 className="text-center mb-4">User List</h2>
        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead className="thead-dark">
              <tr>
                <th>name</th>
                <th>email</th>
                <th>gender</th>
                <th>status</th>
                <th colSpan={2}>action</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id}>
                  <>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.gender}</td>
                    <td>{item.status}</td>
                    <td>
                      <Link to={`/update/${item._id}`}>edit</Link>
                    </td>
                    <td onClick={() => handleDelete(item._id)}>delete</td>
                  </>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="linknewuser">
        <Link to="/adduser">Add New User</Link>
      </div>
    </div>
  );
};

export default User;
