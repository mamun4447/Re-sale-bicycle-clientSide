import React, { useContext, useEffect, useState } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import Lottie from "lottie-react";
import { Link, useNavigate } from "react-router-dom";
import login from "../../assets/login.json";
import Buttons from "../../Components/Buttons";
import { AuthContext } from "../../Context/AuthProvider";
import toast from "react-hot-toast";
import useToken from "../../Hooks/UseToken";
import { GoogleAuthProvider } from "firebase/auth";
import SmallSpinner from "../../Components/SmallSpinner";
// import { useForm } from "react-hook-form";

const LogIn = () => {
  const { user, loader, logInWithEmailPass, loginWithGoogle } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [token, setToken] = useState();
  const provider = new GoogleAuthProvider();

  // console.log(token);
  // console.log(user);

  if (token) {
    return navigate("/");
  }

  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    logInWithEmailPass(email, password)
      .then((result) => {
        toast.success("User Log in Successful!");
        fetch(`https://cycle-server.vercel.app/jwt?email=${email}`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.accessToken) {
              localStorage.setItem("accessToken", data.accessToken);
              setToken(data.accessToken);
            }
          });

        setError("");
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
        // console.error(error.Error);
      });
  };

  const handleGoogle = (event) => {
    event.preventDefault();

    loginWithGoogle(provider)
      .then((res) => {
        toast.success("Loged In successfully!");
        navigate("/");
      })
      .then((error) => toast.error(error?.message));
  };

  return (
    <div>
      <div className=" min-h-screen mt-16">
        <div className="hero-content flex-col-reverse lg:flex-row-reverse">
          <form
            onSubmit={handleLogin}
            className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
          >
            <h1 className="text-4xl font-bold text-center mt-7 text-primary">
              Login now!
            </h1>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <p className="text-red-500">{error}</p>
                <label className="label">
                  <Link
                    to="#"
                    className="label-text-alt link link-hover text-black"
                  >
                    Forgot password?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <Buttons className="btn btn-accent">
                  {loader ? <SmallSpinner /> : <p>Login</p>}
                </Buttons>
              </div>
              <p>
                Don't have an account?{" "}
                <Link
                  className="underline text-primary underline-offset-1"
                  to="/signup"
                >
                  Register
                </Link>
              </p>

              {/* ------------Social Media SignIn----------- */}
              <div className="flex items-center justify-center m-2 text-3xl gap-4">
                <button
                  onClick={handleGoogle}
                  className="bg-slate-200 p-2 rounded-full"
                >
                  <FaGoogle />
                </button>
                <span className="bg-slate-200 p-2 rounded-full">
                  <FaFacebook />
                </span>
              </div>
            </div>
          </form>
          <div className="w-[40%]">
            <Lottie animationData={login} loop={true} />
          </div>
        </div>
      </div>
    </div>
  );
};;;;;;;;;;;;;;;

export default LogIn;
