import "./NewUserRegister.css";
import { useState } from "react";
import md5 from "md5";
import axios from 'axios';
import {Link} from "react-router-dom"

export default function NewUserRegister() {
  const [formData, setFormData] = useState({});
  const[message,setMessage]=useState('')

  const handleData = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    if(formData.password === formData.confirm_password) {
      const hash_password = md5(formData.password); 
      const hash_confirm_password = md5(formData.confirm_password);
      const newData = {...formData, password: hash_password, confirm_password: hash_confirm_password};
  
      try {
        const response = await axios.post('http://localhost:7000/register', newData, {
          headers: { 'Content-Type': 'application/json' },
        });
        console.log(response.data);
        setMessage(response.data);
      } catch(error) {
        console.log(error);
      }
    } else {
      console.log("Passwords do not match");
      setMessage("Password does not Match :(")
    }
  };
  
  
  
  

  return (
    <div className="new_user_form_container">
     
      <form onSubmit={handleSubmit} className="new_user_inside_container">
      <h1>Register</h1> 
        <div className="each_form_div">
          <label htmlFor="user_name" className="user_name">
            User Name :
          </label>
          <input
            type="text"
            id="user_name"
            className="user_input"
            onChange={handleData}
            required
          />
        </div>
        <div className="each_form_div">
          <label htmlFor="email" className="phone">
            Email :
          </label>
          <input
            type="text"
            id="email"
            className="user_input"
            onChange={handleData}
            required
          />
        </div>
        <div className="each_form_div">
          <label htmlFor="password" className="password">
            Password :
          </label>
          <input
            type="password"
            id="password"
            className="user_input"
            onChange={handleData}
            required
          />
        </div>
        <div className="each_form_div">
          <label htmlFor="confirm_password" className="confirm">
            Confirm Password :
          </label>
          <input
            type="password"
            id="confirm_password"
            className="user_input"
            onChange={handleData}
            required
          />
        </div>
        <div>
          <button type="submit" className="register_button">
            Register
          </button>
          <Link to="/login" >
          <button  className="register_button">
         
            Login
          </button>
          </Link>
        </div>
        {message.length > 0 && <p className="user_message">{message}</p>}
      </form>
    </div>
  );
}
