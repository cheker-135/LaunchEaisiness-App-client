import React, { useState } from "react";
import "./style.css";
import ButtonOutline from "../Components/Buttons/ButtonOutline";
import ButtonSimple from "../Components/Buttons/ButtonSimple";
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/user";

const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleLogin = async () => {
    await dispatch(login({ email, password }));
  };
  return (
    <div className="auth-container">
      <div className="content">
        <h1>
          Empowering
          <br />
          Your Business
          <br />
          <span>Success</span>
        </h1>
        <p>
          A business is an organization engaged in the production, sale, or
          provision of goods and services to meet A business is an organization
          engaged in the production
        </p>
        <ButtonSimple text={"read more"} herf={"/"} />
      </div>
      <div className="cercle"></div>
      <div className="form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="button-container">
          <ButtonSimple
            func={() => {
              handleLogin();
            }}
            herf={"#"}
            text={"login"}
          />
          <ButtonOutline text={"Register"} herf={"/register"} />
        </div>
      </div>
    </div>
  );
};

export default Login;
