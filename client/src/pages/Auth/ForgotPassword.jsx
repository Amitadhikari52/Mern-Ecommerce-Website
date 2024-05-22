/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  //form function ->
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8001/api/v1/auth/forgot-password",
        {
          email,
          newPassword,
          answer,
        }
      );
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title={"Forgot Password - Shopzy App"}>
      <div className="forgot-password-container">
        <div className="forgot-password-form-container">
          <div className="forgot-password-logo-container">Forgot Password</div>

          <form onSubmit={handleSubmit} className="forgot-password-form">
            <div className="forgot-password-form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                value={email}
                id="email"
                name="email"
                placeholder="Enter your email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="forgot-password-form-group">
              <label htmlFor="email">Answer</label>
              <input
                type="text"
                value={answer}
                id="email"
                name="email"
                placeholder="Enter your Favourite sports"
                required
                onChange={(e) => setAnswer(e.target.value)}
              />
            </div>

            <div className="forgot-password-form-group">
              <label htmlFor="new password">New Password</label>
              <input
                type="password"
                value={newPassword}
                id="newPassword"
                name="newPassword"
                placeholder="Enter your New Password"
                required
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>

            <button className="forgot-password-submit-btn" type="submit">
              Reset Password
            </button>
          </form>

          <p className="forgot-password-signup-link">
            Don't have an account?
            <Link to="/register" className="forgot-password-signup-link link">
              Sign up now
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default ForgotPassword;
