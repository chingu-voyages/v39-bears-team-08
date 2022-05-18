import React, { useContext, useState } from "react";
import { Context } from "../../Context";
import { Form, Row, Col, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./signinComponent.css";

// test login
// ray@gmail.com
// password
export default function SignInComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLoggedIn, setIsLoggedIn, setUserData, userData } =
    useContext(Context);

  let navigate = useNavigate();
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onformSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res);
        setIsLoggedIn(true);
        console.log("line 33 from signin", res.data);
        setUserData(res.data);

        navigate("/budgetpage");
      })
      .catch((err) => {
        console.log("line 37");
        console.log(err);
        return;
      });

    console.log("sub");
  };
  return (
    <div className="sign-in-box">
      <h1 className="sign-in-header">Wallet Zen</h1>
      <Form onSubmit={onformSubmit}>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Email
          </Form.Label>
          <Col sm="10">
            <Form.Control value={email} onChange={handleEmailChange} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Password
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="password"
              placeholder="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </Col>
        </Form.Group>
        <Button type="submit">Sign in</Button>
        <Link to="/createUser">
          <Button type="submit">Sign Up</Button>
        </Link>
      </Form>
    </div>
  );
}
