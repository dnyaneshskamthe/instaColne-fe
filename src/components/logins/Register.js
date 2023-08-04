import React from 'react';

const Register = () => {
  return (
    <div className="card">
      <div className="card-body">
        <form>
          <h3>Sign Up</h3>
          <div className="mb-3 row">
            <label className="col-sm-4 col-form-label">First name</label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control"
                placeholder="First name"
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-4 col-form-label">Last name</label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-4 col-form-label">Email address</label>
            <div className="col-sm-8">
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-4 col-form-label">Password</label>
            <div className="col-sm-8">
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
              />
            </div>
          </div>
            <button type="submit" className="registerBtn">
              Sign Up
            </button>
          <p className="forgot-password text-right">
            Already registered <a href="/">sign in?</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
