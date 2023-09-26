import React, { useState } from "react";
import Layout from "./../../components/layout/Layout";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import "../../styles/AuthStyles.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");

  const navigate = useNavigate();

  //reset password function
  const onClickReset = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/forgot-password`,
        {
          email,
          newPassword,
          answer,
        }
      );
      if (response && response.data.success) {
        toast.success(response.data && response.data.message);
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
    <Layout title={"Reset password-sks"}>
      <div className="register-container">
        <form
          className="form-container"
          style={{ width: "45%" }}
          onSubmit={onClickReset}
        >
          <h3 style={{ color: "blueviolet" }}>RESET PASSWORD</h3>

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
            <label htmlFor="answer" className="form-label">
              Security Answer
            </label>
            <input
              type="text"
              value={answer}
              onChange={(event) => setAnswer(event.target.value)}
              className="form-control"
              id="answer"
              placeholder="Enter your Favourite Book"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              New Password
            </label>
            <input
              type="password"
              value={newPassword}
              onChange={(event) => setNewPassword(event.target.value)}
              className="form-control"
              id="password"
              placeholder="Enter the New PassWord"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Reset Password
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default ForgotPassword;
