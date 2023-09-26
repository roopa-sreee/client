import React, { useState } from "react";
import Layout from "../../components/layout/Layout";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../styles/AuthStyles.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhoneNum] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate("");

  // form submission

  const onClickRegister = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/register`,
        { name, email, password, phone, address, answer }
      );

      if (response && response.data.success) {
        console.log(response.data);
        toast.success(response && response.data.message);
        navigate("/login");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title={"Register-shiva Karthikeyan Stores"}>
      <div className="register-container">
        <form
          className="form-container"
          style={{ width: "45%" }}
          onSubmit={onClickRegister}
        >
          <h1 style={{ color: "blueviolet" }}>Register</h1>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="form-control"
              id="username"
              placeholder="What's your Name?"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="emailId" className="form-label">
              Email Id
            </label>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="form-control"
              id="emailId"
              placeholder="Enter You Email Id"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="form-control"
              id="password"
              placeholder="Enter the PassWord"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phoneNum" className="form-label">
              Phone Number
            </label>
            <input
              type="text"
              value={phone}
              onChange={(event) => setPhoneNum(event.target.value)}
              className="form-control"
              id="phoneNum"
              placeholder="Enter Your Mobile Number"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <input
              type="text"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
              className="form-control"
              id="address"
              placeholder="Type Your Address"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="answer" className="form-label">
              Answer
            </label>
            <input
              type="text"
              value={answer}
              onChange={(event) => setAnswer(event.target.value)}
              className="form-control"
              id="answer"
              placeholder="Which is your favourite Book? "
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
