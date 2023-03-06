import { useState } from "react";
import { Link } from "react-router-dom";
import authService from "../services/authService";
import { toast } from "react-hot-toast";

const Register = () => {
  const [inputs, setInputs] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await authService.regsiter(inputs);
      toast.success("User registered successfully");
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong");
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <h2>Register</h2>
        <br />
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              <b>Name</b>
            </label>
            <input
              type="text"
              name="name"
              value={inputs.name || ""}
              id="name"
              onChange={handleChange}
              className="textInput"
            />
          </div>
          <div>
            <label>
              <b>Email</b>
            </label>
            <input
              type="email"
              name="email"
              value={inputs.email || ""}
              id="email"
              onChange={handleChange}
              className="textInput"
            />
          </div>
          <div>
            <label>
              <b>Password</b>
            </label>
            <input
              type="password"
              name="password"
              value={inputs.password || ""}
              id="password"
              onChange={handleChange}
              className="textInput"
            />
          </div>
          <button type="submit" className="submitBtn">
            Login
          </button>
        </form>
        <br />
        <span>
          Already have an account? <Link to="/login">login</Link> instead
        </span>
      </div>
    </div>
  );
};

export default Register;
