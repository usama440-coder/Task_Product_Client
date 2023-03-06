import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../slice/auth.slice";
import toast from "react-hot-toast";

const Login = () => {
  const [inputs, setInputs] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginUser(inputs))
      .unwrap()
      .then((data) => {
        toast.success("Logged in successfully");
        navigate("/");
      })
      .catch((err) => {
        toast.error(err?.message || "Something went wrong");
      });
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <h2>Login</h2>
        <br />
        <form onSubmit={handleSubmit}>
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
          Do not have an account? <Link to="/register">register</Link> instead
        </span>
      </div>
    </div>
  );
};

export default Login;
