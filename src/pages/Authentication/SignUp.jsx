import React, { useContext, useState } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Buttons from "../../Components/Buttons";
import login from "../../assets/login.json";
import Lottie from "lottie-react";
import { AuthContext } from "../../Context/AuthProvider";
import toast from "react-hot-toast";

const SignUp = () => {
  const {
    user,
    handleSignUpWithEmailPassword,
    nameAndImageUpload,
    loginWithGoogle,
  } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSignUp = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    const image = form.image.value;
    // console.log(name, email, password, confirm, image);

    if (password !== confirm) {
      toast.error("Password doesn't match");
      return;
    }

    handleSignUpWithEmailPassword(email, password)
      .then((user) => {
        console.log(user);
        setError("");
        toast.success("User Created successfully!");
        navigate("/");
      })
      .then((error) => {
        console.error(error);
        setError(error.message);
      });
  };
  return (
    <div>
      <div className=" min-h-screen">
        <div className="hero-content flex-col-reverse lg:flex-row-reverse">
          <form
            onSubmit={handleSignUp}
            className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
          >
            <h1 className="text-4xl font-bold text-center mt-7 text-primary">
              Login now!
            </h1>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="full name"
                  className="input input-bordered"
                />
              </div>
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
                  <span className="label-text text-black">Image</span>
                </label>
                <input
                  type="file"
                  name="image"
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
                {/* <p className="text-red-500">{error}</p> */}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">
                    Confirm Password
                  </span>
                </label>
                <input
                  type="password"
                  name="confirm"
                  placeholder="confirm password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <Buttons className="btn btn-primary text-white">
                  Sing Up
                </Buttons>
              </div>
              <p>
                Already have an account?{" "}
                <Link
                  className="underline text-primary underline-offset-1"
                  to="/login"
                >
                  Login
                </Link>
              </p>

              {/* ------------Social Media SignIn----------- */}
              <div className="flex items-center justify-center m-2 text-3xl gap-4">
                <button
                  //   onClick={handleGoogleLogin}
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
};

export default SignUp;
