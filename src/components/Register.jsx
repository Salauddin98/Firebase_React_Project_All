import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Register = () => {
  const { user, createUser } = useContext(AuthContext);

  const submitSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.value;
    const email = form.value;
    const password = form.value;
    console.log(name, email, password);

    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center mb-3">
          <h1 className="text-5xl font-bold">Please Register Here!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={submitSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              {/* <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label> */}
              <p className="mt-2">
                {" "}
                Already have an account?{" "}
                <Link className="link link-hover text-green-400" to="/login">
                  Log in
                </Link>
              </p>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
