import React, { useContext, useState } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Buttons from "../../Components/Buttons";
import login from "../../assets/login.json";
import Lottie from "lottie-react";
import { AuthContext } from "../../Context/AuthProvider";
import toast from "react-hot-toast";
import useToken from "../../Hooks/UseToken";

const SignUp = () => {
  const {
    user,
    handleSignUpWithEmailPassword,
    nameAndImageUpload,
    loginWithGoogle,
  } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [imageUrl, setImageUrl] = useState();
  const [loginUserEmail, setLoginUserEmail] = useState("");
  const [token] = useToken(loginUserEmail);
  console.log(user);

  // const imageHostKey = process.env.REACT_APP_imgbb_key;
  // console.log(imageHostKey);
  const handleSignUp = (event) => {
    event.preventDefault();

    const form = event.target;
    const role = form.role.value;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    const image = form.image.files[0];
    // console.log(role);

    const userInfo = { name, email, role };

    if (password !== confirm) {
      toast.error("Password doesn't match");
      return;
    }

    //====Image Upload====//
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=1b41abcbd3e3a0a9277f75dc7cb38414`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => setImageUrl(imgData.data.url));

    //==handle Sign Up==//
    handleSignUpWithEmailPassword(email, password)
      .then((result) => {
        console.log(result.user);
        handleNameAndImage(name, imageUrl, userInfo, email);

        setError("");
        toast.success("User Created successfully!");
        navigate("/");
      })
      .then((error) => {
        console.error(error);
        setError(error?.message);
      });
  };

  //===nameAndImageUpload===/
  const handleNameAndImage = (name, imageUrl, userInfo, email) => {
    nameAndImageUpload(name, imageUrl)
      .then((result) => {
        setError("");
        userDatabaseCreate({ ...userInfo, imageUrl }, email);
      })
      .then((error) => {
        setError(error?.message);
      });
  };

  //====User data upload on database====//
  const userDatabaseCreate = (userInfo, email) => {
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("User created!");
        setLoginUserEmail(email);
        // getUserToken(email);
        // setCreatedUserEmail(email);
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
              Sign Up now!
            </h1>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Your Role</span>
                </label>
                <select className="input input-bordered px-2" name="role" id="">
                  <option selected>buyer</option>
                  <option>seller</option>
                </select>
              </div>
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
              <p>{error}</p>
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
};;;;;;;;;

export default SignUp;
