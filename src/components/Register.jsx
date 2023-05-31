import React, { useContext, useEffect, useState } from "react";
import img from "../assets/login-page-img.jpg";
import { AuthContext } from "../providers/AuthProviders";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Register = () => {
  const { user, createUser, profileUpdate } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [control, setControl] = useState(false);

  const handleRegister = (event) => {
    event.preventDefault();
    setError("");
    setMessage("");
    const form = event.target;
    if (
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/.test(
        password
      )
    ) {
      //console.log("okay");
    } else {
      setError("The password you entered isn't correct!");
      return;
    }
    if (email) {
      createUser(email, password)
        .then((result) => {
          const loggedUser = result.user;
          //console.log(loggedUser);
          form.reset();
        })
        .catch((error) => {
          //console.log(error)
          //console.log(">>>> ", error.message);
        });
      setMessage("Successfully created your account!");
      if (photoUrl) {
        profileUpdate(user, name, photoUrl)
          .then((result) => {
            const loggedUser = result.user;
            //console.log(loggedUser);
            form.reset();
          })
          .catch((error) => {
            //console.log(error)
            // console.log(">>>> ", error.message);
          });
      }
    } else {
      setError("The email and password you’ve entered is not correct.");
    }
  };

  return (
    <div className="container mx-auto">
      <form action="">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full name</span>
                </label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  name="name"
                  placeholder="Full name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email*</span>
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password*</span>
                </label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL (Optional)</span>
                </label>
                <input
                  onChange={(e) => setPhotoUrl(e.target.value)}
                  type="text"
                  name="photoUrl"
                  placeholder="Photo Url"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button onClick={handleRegister} className="btn btn-primary">
                  Register
                </button>

                <p className="text-green-600 py-2">{message}</p>
                <p className="text-red-600 py-2">{error}</p>
              </div>
              <p className="p-2">
                <small className="text-center font-normal text-base">
                  Already have an account?
                  <Link
                    to="/login"
                    className="text-center font-normal text-base link link-hover hover:text-blue-600"
                  >
                    {" "}
                    Login{" "}
                  </Link>
                  here.
                </small>
              </p>
            </div>
          </div>
          <div className="text-center lg:text-left">
            <img className="w-100" src={img} alt="" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
