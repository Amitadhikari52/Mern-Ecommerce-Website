import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Spinner = () => {
  const [count, setCount] = useState(3);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevValue) => prevValue - 1);
    }, 1000);
    count === 0 &&
      navigate("/login", {
        state: location.pathname,
      });
    return () => clearInterval(interval); // Cleanup function
  }, [count, navigate, location]);

  return (
    <div className="spinner-container">
      <h1 className="spinner-text">
        Redirecting in {count} second{count !== 1 ? "s" : ""}
      </h1>
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
