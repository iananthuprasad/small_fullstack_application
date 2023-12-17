import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import "../styles/user.css";

const UpdateUser = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [status, setStatus] = useState('');
  // const [data,setData]=useState([])

  const nav=useNavigate()
  

     useEffect(() => {
       // Axios GET request
       axios
         .get(`http://localhost:8000/api/users?id=`+id)
         .then((response) => {
           // Handle the successful response
           console.log(id)
           setName(response.data.name);
            setEmail(response.data.email);
             setGender(response.data.gender);
              setStatus(response.data.status);
         })
         .catch((error) => {
           // Handle the error
           console.error("Error fetching data:", error);
         });
     }, []);


// function xyz(){
//   const abc=data.filter((item)=>item._id===id)
//    console.log(abc.name);
// }
//  xyz()


  
  function handleSubmit() {
    // Implement logic to update user information
    const updatedUserData = {
      name,
      email,
      gender,
      status,
    };
      console.log(updatedUserData)
    // Send a request to update user data
    axios.put(`http://localhost:8000/api/users/${id}`, updatedUserData)
      .then((response) => {
        console.log('User updated successfully:', response);
        // Add any additional logic after a successful update
      })
      .catch((error) => {
        console.error('Error updating user:', error);
      });
      
nav('/')
 window.location.reload();
  }




  return (
    <div className='container'>
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

export default UpdateUser;

