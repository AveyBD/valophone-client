import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";

const Checkout = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  const [product, setProduct] = useState([]);
  const params = useParams();
  const url = `http://localhost:5000/product/${params.id}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="md:w-1/2 mx-auto mt-5">
      <h2 className="text-center font-bold text-primary text-3xl shadow-xl">
        Checkout
      </h2>
      <div class="card lg:card-side bg-base-100 shadow-xl">
        <div className="md:w-1/2 px-1">
          <h2 class="text-2xl font-bold text-center">You Are Buying</h2>
          <img className="w-3/4 mx-auto" src={product.img} alt={product.name} />
          <p className="text-xl font-bold text-primary mt-5">
            {product.productName}
          </p>
          <p>
            <b>Description:</b> {product.description}
          </p>
          <p>
            <b>Minimum Quantity:</b> {product.minqty}
          </p>
          <p>
            <b>Maximum Quantity:</b> {product?.maxqty}
          </p>
          <p>
            <b>Available:</b> {product?.available}
          </p>
        </div>
        <div className="md:w-1/2 ">
          <h2 class="text-2xl font-bold text-center">Order Information</h2>
          <div>
            <div class="form-control">
              <label class="input-group">
                <span>Name</span>
                <input
                  type="text"
                  class="input input-bordered w-full"
                  disabled
                  value={user.displayName}
                />
              </label>
            </div>
            <div class="form-control mt-1">
              <label class="input-group">
                <span>Email</span>
                <input
                  class="input input-bordered w-full"
                  disabled
                  value={user.email}
                />
              </label>
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div class="form-control mt-2">
                <label class="input-group">
                  <span>Phone</span>
                  <input
                    {...register("phoneNumber", {
                      required: {
                        value: true,
                        message: "Phone Number is required! ",
                      },
                    })}
                    type="text"
                    placeholder="0178945612"
                    class="input input-bordered w-full"
                  />
                </label>
                <label class="label">
                  {errors.phoneNumber?.type === "required" && (
                    <span class="label-text text-red-600">
                      {errors.phoneNumber.message}
                    </span>
                  )}
                </label>
              </div>
              <input
                className="btn btn-primary btn-outline w-full"
                type="submit"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
