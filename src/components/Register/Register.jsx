import React, { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { AuthContext } from "../Providers/AuthProviders/AuthProviders";
import { Link, useNavigate } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target.elements;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;


    createUser(email, password)
     .then((result) => {
        const createdUser = result.user;
        navigate("/");
      })
     .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="d-flex p-5 m-5 justify-content-center">
      <div>
        <p className="text-center fs-1">
          <b>Please Login</b>
        </p>
        <Form onSubmit={handleRegister}>
          <input
            type="name"
            name="name"
            className="form-control m-2"
            placeholder="Enter Your Name"
            required
          />
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
            Register
          </Button>
          <p>
            Already Have an account? <Link to="/register">Login Here</Link>
          </p>
          <p className='text-center'><Button className='btn-success p-2'>Login with google <FaGoogle className='m-2'/></Button></p>
          <p className='text-center'><Button className='btn-dark p-2'>Login with Github<FaGithub className='m-2'/></Button></p>
        </Form>
      </div>
    </div>
  );
};

export default Register;