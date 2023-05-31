import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import img from "../assets/login-page-img.jpg";

const Login = () => {
  const { user, signIn, signInWithGoogle, signInWithGithub } =
    useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    setError("");

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        //console.log(loggedUser);
        form.reset();
      })
      .catch((error) => {
        setError("Invalid email and password. Please try again");
        //console.log(error);
      });
  };

  const handleGoogleSignIn = () => {
    setError("");
    signInWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => {
        setError("Invalid email and password. Please try again");
        //console.log(error);
      });
  };
  const handleGithubSignIn = () => {
    setError("");
    signInWithGithub()
      .then((result) => {
        const loggedUser = result.user;
        //console.log(loggedUser);
      })
      .catch((error) => {
        setError("Invalid email and password. Please try again");
        //console.log(error);
      });
  };

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user]);

  return (
    <div className="container mx-auto">
      <form action="">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered w-[100%]"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="flex relative">
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    type={show ? "text" : "password"}
                    name="password"
                    placeholder="password"
                    className="input input-bordered w-[100%]"
                    required
                  />
                  <p
                    onClick={() => setShow(!show)}
                    className="text-left absolute top-3 right-2"
                  >
                    <small>
                      {show ? (
                        <span>
                          <EyeSlashIcon className="h-6 w-6 text-blue-700" />
                        </span>
                      ) : (
                        <span>
                          <EyeIcon className="h-6 w-6 text-blue-700" />
                        </span>
                      )}
                    </small>
                  </p>
                </div>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-3">
                <p className="text-red-600 py-2">{error}</p>
              </div>
              <div className="form-control mt-3">
                <button onClick={handleLogin} className="btn btn-primary">
                  Login
                </button>
              </div>
              <div className="form-control mt-3">
                <button
                  onClick={handleGoogleSignIn}
                  className="btn btn-secondary"
                >
                  Login with Google
                </button>
              </div>
              <div className="form-control mt-3">
                <button onClick={handleGithubSignIn} className="btn btn-accent">
                  Login with Github
                </button>
              </div>
              <p className="p-2">
                <small className="text-center font-normal text-base">
                  Are you new?
                  <Link
                    to="/register"
                    className="text-center font-normal text-base link link-hover hover:text-blue-600"
                  >
                    {" "}
                    Register{" "}
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

export default Login;
