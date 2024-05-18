import React from 'react';
import { Button } from 'react-bootstrap';
import { FaGithub, FaGoogle } from 'react-icons/fa';

import { Form, Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <div className="d-flex p-5 m-5 justify-content-center">
      <div>
        <p className="text-center fs-1">
          <b>Please Register</b>
        </p>
        <Form >
          <input
            type="text"
            name="name"
            className="form-control m-2"
            placeholder="Enter Your name"
          />
          <input
            type="email"
            name="email"
            className="form-control m-2"
            placeholder="Enter Your Email"
          />
          <input
            type="password"
            name="password"
            className="form-control m-2"
            placeholder="Enter Password"
          />
          <Button className="m-2 btn-warning" type="submit">
            Register 
          </Button>
          <p>
            Already Have an account? <Link to="/login">Login Here</Link>
          </p>
          <p className='text-center'><Button className='btn-success p-2'>Register with google <FaGoogle className='m-2'/></Button></p>
          <p className='text-center'><Button className='btn-dark p-2'>Register with Github<FaGithub className='m-2'/></Button></p>
        </Form>
      </div>
    </div>
        </div>
    );
};

export default Register;