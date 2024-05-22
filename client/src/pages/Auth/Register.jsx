/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");

  const navigate = useNavigate();

  //form function ->
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8001/api/v1/auth/register",
        {
          name,
          email,
          password,
          phone,
          address,
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
    <Layout title={"Register - Ecommerce App"}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <img
              src="/images/register.png"
              alt="register"
              width="400"
              height="400"
            />
          </div>
          <div className="col-md-6">
            <br />
            <h2 className="text-center">REGISTER</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  value={name}
                  className="form-control"
                  id="name"
                  placeholder="Enter Your Name"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
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
                  placeholder="Enter your Password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  value={phone}
                  className="form-control"
                  id="phone"
                  placeholder="Enter Your Phone "
                  required
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  value={address}
                  className="form-control"
                  id="address"
                  placeholder="Enter Your Address"
                  required
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">Answer</label>
                <input
                  type="text"
                  value={answer}
                  className="form-control"
                  id="answer"
                  placeholder="What is your Favourite sports"
                  required
                  onChange={(e) => setAnswer(e.target.value)}
                />
              </div>
              <button type="submit" className="register-btn">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
