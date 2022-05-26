import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import auth from "../../firebase.init";

const Checkout = () => {
  const [user] = useAuthState(auth);
  const [product, setProduct] = useState([]);
  const params = useParams();
  const url = `https://valophone.herokuapp.com/product/${params.id}`;
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
  const navigate = useNavigate();
  const date = new Date().toLocaleString();
  const onSubmit = (data) => {
    console.log(data);
    const price = parseInt(product.price * data.quantity);
    const inQty = parseInt(data.quantity);
    if (
      inQty < product.minqty ||
      inQty > product.maxqty ||
      inQty > product.available
    ) {
      toast.error(
        `You can't buy less than ${product.minqty}, more than ${product?.maxqty} and total stock ${product.available}.`
      );
    } else {
      const order = {
        user: user.email,
        product: product.productName,
        address: data.address,
        qty: data.quantity,
        cost: product.price,
        time: date,
        price,
        paymentStatus: "pending",
        orderStatus: "placed",
      };
      fetch("https://valophone.herokuapp.com/orders", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(order),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.insertedId) {
            toast.success("Your Order has been placed!");
            reset();
            navigate(`/payment/${result.insertedId}`);
          }
        });
    }
  };

  return (
    <div className="md:w-1/2 mx-auto mt-5">
      <h2 className="text-center font-bold text-primary text-3xl shadow-xl">
        Checkout
      </h2>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <div className="md:w-1/2 px-1">
          <h2 className="text-2xl font-bold text-center">You Are Buying</h2>
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
          <p>
            <b>Price:</b> {product?.price}
          </p>
        </div>
        <div className="md:w-1/2 ">
          <h2 className="text-2xl font-bold text-center">Order Information</h2>
          <div>
            <div className="form-control">
              <label className="input-group">
                <span>Name</span>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  disabled
                  value={user.displayName}
                />
              </label>
            </div>
            <div className="form-control mt-1">
              <label className="input-group">
                <span>Email</span>
                <input
                  className="input input-bordered w-full"
                  disabled
                  value={user.email}
                />
              </label>
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control mt-2">
                <label className="input-group">
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
                    className="input input-bordered w-full"
                  />
                </label>
                <label className="label">
                  {errors.phoneNumber?.type === "required" && (
                    <span className="label-text text-red-600">
                      {errors.phoneNumber.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control">
                <textarea
                  {...register("address", {
                    required: {
                      value: true,
                      message: "Address is required! ",
                    },
                  })}
                  className="textarea textarea-bordered h-24"
                  placeholder="Your complete address."
                ></textarea>
                <label className="label">
                  {errors.address?.type === "required" && (
                    <span className="label-text text-red-600">
                      {errors.address.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control mt-2">
                <label className="input-group">
                  <span>Quantity</span>
                  <input
                    type="number"
                    {...register("quantity", {
                      required: {
                        value: true,
                        message: "Purchase Quantity is required! ",
                      },
                    })}
                    placeholder={product.minqty}
                    className="input input-bordered w-full"
                  />
                </label>
                <label className="label">
                  {errors.quantity?.type === "required" && (
                    <span className="label-text text-red-600">
                      {errors.quantity.message}
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
