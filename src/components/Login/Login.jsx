import React from "react";
import { Button } from "react-bootstrap";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Form, Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="d-flex p-5 m-5 justify-content-center">
      <div>
        <p className="text-center fs-1">
          <b>Please Login</b>
        </p>
        <Form>
          <input
            type="email"
            name="email"
            className="form-control m-2"
            placeholder="Enter Your Email"
            required
          />
          <input
            type="password"
            name="password"
            className="form-control m-2"
            placeholder="Enter Password"
            required
          />
          <Button className="m-2 btn-warning" type="submit">
            Login
          </Button>
          <p>
            Don't Have an account? <Link to="/register">Register Here</Link>
          </p>
          <p className='text-center'><Button className='btn-success p-2'>Login with google <FaGoogle className='m-2'/></Button></p>
          <p className='text-center'><Button className='btn-dark p-2'>Login with Github<FaGithub className='m-2'/></Button></p>
        </Form>
      </div>
    </div>
  );
};

export default Login;
