import React, { useState } from 'react';
import Layout from '../Components/Layout';
import toast from 'react-hot-toast';
import { useNavigate } from "react-router";
import axios from 'axios';

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [answer, setAnswer] = useState(""); 
  const navigate = useNavigate();

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    try {
      const res = await axios.put('https://ecommerce-backend-ebon-iota.vercel.app/api/v1/auth/forgotpassword', { email, password, answer });
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(`${error}`);
    }
  };

  return (
    <Layout title={"Forgot Password"}>
      <div className="register">
        <h1>Forgot Password</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="emailInput" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="emailInput"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="passwordInput" className="form-label">
              New Password
            </label>
            <input
              type="password"
              className="form-control"
              id="passwordInput"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="answerInput" className="form-label">
              Favourite Sport
            </label>
            <input
              type="text"
              className="form-control"
              id="answerInput"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-primary">
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default ForgotPassword;
