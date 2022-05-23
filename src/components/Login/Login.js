import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import auth from "../../firebase.init";

const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  if (gError) {
    toast.error(gError?.message);
  }
  if (gUser) {
    console.log(gUser);
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card w-96 bg-green-200 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-3xl font-bold">Card title!</h2>
          <div className="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline btn-primary"
          >
            Continue With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
