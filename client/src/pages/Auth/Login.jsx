/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { useAuth } from "../../context/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  //form function ->
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8001/api/v1/auth/login", {
        email,
        password,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title={"Login - Ecommerce App"}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <img
              src="/images/login.png"
              alt="register"
              width="400"
              height="400"
            />
          </div>
          <div className="col-md-6">
            <h2 className="text-center mt-5">LOGIN</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  value={email}
                  className="form-control"
                  id="email"
                  placeholder="Enter Your Email "
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  value={password}
                  className="form-control"
                  id="password"
                  placeholder="Enter Your Password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="login-btn">
                Login
              </button>
              <button
                type="button"
                className="login-btn mx-2"
                onClick={() => {
                  navigate("/forgot-password");
                }}
              >
                Forgot Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
