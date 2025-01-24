import React, { useState } from "react";
import "./style.css";
import ButtonOutline from "../Components/Buttons/ButtonOutline";
import ButtonSimple from "../Components/Buttons/ButtonSimple";
import { useDispatch } from "react-redux";
import { register } from "../redux/actions/user";

const Register = () => {
  const [FName, setFName] = useState("");
  const [LName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const RegisterHandel = async (user) => {
    await dispatch(register(user));
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
          type="text"
          placeholder="First Name"
          value={FName}
          onChange={(e) => setFName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={LName}
          onChange={(e) => setLName(e.target.value)}
        />
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
          <ButtonSimple text={"login"} herf={"/login"} />
          <ButtonOutline
            text={"Register"}
            herf={"#"}
            func={() =>
              RegisterHandel({
                firstname: FName,
                lastname: LName,
                email,
                password,
              })
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
