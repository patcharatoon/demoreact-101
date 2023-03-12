import React from "react";
import { Container } from "react-bootstrap";

function Signin(props) {
  return (
    <Container
      className="shadow p-4 mb-5 bg-white rounded"
      style={{ width: "500px" }}
    >
      <h3>Sign in</h3>

      <div>
        <p>Username</p>
        <input
          className="form-control"
          type="text"
          placeholder="demo@gmail.com"
          value={props.email}
          autoFocus
          required
          onChange={(e) => props.handleEmail(e)}
        />
      </div>

      <div>
        <p>Password</p>
        <input
          className="form-control"
          type="password"
          placeholder="demo1234"
          value={props.password}
          onChange={(e) => props.handlePassword(e)}
          required
        />
      </div>

      <div>
        <button
          className="btn btn-primary mt-2 w-100"
          onClick={() => props.handleSignin()}
        >
          Sign in
        </button>
        <div className="d-flex align-items-center justify-content-center">
          <p className="text-center mt-3 mr-1">Don't have an account?</p>
          <button
            className="btn btn-link px-0"
            onClick={() => props.setHasAccount(!props.hasAccount)}
          >
            Sign up
          </button>
        </div>
      </div>
    </Container>
  );
}
export default Signin;
