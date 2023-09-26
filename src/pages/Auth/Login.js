import React, { useState } from "react";
import Layout from "./../../components/layout/Layout";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import "../../styles/AuthStyles.css";
import { useAuth } from "../../context/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  // form submission
  const onClickLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/login`,
        { email, password }
      );
      if (response && response.data.success) {
        toast.success(response.data && response.data.message);
        setAuth({
          ...auth,
          user: response.data.user,
          token: response.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(response.data));
        navigate(location.state || "/");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title={"Login-shiva Karthikeyan Stores"}>
      <div className="register-container">
        <form className="form-container" onSubmit={onClickLogin}>
          <h1 style={{ color: "blueviolet" }}>Login</h1>

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

          <button type="submit" className="btn btn-primary">
            Login
          </button>
          <div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                navigate("/forgot-password");
              }}
              style={{ backgroundColor: "grey" }}
            >
              Forgot Password?
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
