import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const AddProduct = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          toast.success("Product has been Added");
          reset();
        }
      });
  };

  return (
    <div>
      <div class="card w-full md:w-1/2 mx-auto bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="text-primary font-bold text-2xl text-center">
            Add New Product
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-control">
              <label class="input-group">
                <span>Name</span>
                <input
                  {...register("productName", {
                    required: {
                      value: true,
                      message: "Product Name is required! ",
                    },
                  })}
                  type="text"
                  placeholder="Mobile Display"
                  class="input input-bordered w-full"
                />
              </label>
              <label class="label">
                {errors.productname?.type === "required" && (
                  <span class="label-text text-red-600">
                    {errors.productname.message}
                  </span>
                )}
              </label>
            </div>
            <div class="form-control">
              <label class="input-group">
                <span>Price</span>
                <input
                  {...register("price", {
                    required: {
                      value: true,
                      message: "Price is required! ",
                    },
                  })}
                  type="number"
                  placeholder="10"
                  class="input input-bordered w-full"
                />
                <span>USD</span>
              </label>
              <label class="label">
                {errors.price?.type === "required" && (
                  <span class="label-text text-red-600">
                    {errors.price.message}
                  </span>
                )}
              </label>
            </div>
            <div class="form-control">
              <label class="input-group">
                <span>MinQty</span>
                <input
                  {...register("minqty", {
                    required: {
                      value: true,
                      message: "Min Quantity is required! ",
                    },
                  })}
                  type="number"
                  placeholder="10"
                  class="input input-bordered w-full"
                />
                <span>Piece</span>
              </label>
              <label class="label">
                {errors.minqty?.type === "required" && (
                  <span class="label-text text-red-600">
                    {errors.minqty.message}
                  </span>
                )}
              </label>
            </div>
            <div class="form-control">
              <label class="input-group">
                <span>MaxQty</span>
                <input
                  {...register("maxqty", {
                    required: {
                      value: true,
                      message: "Max Quantity is required! ",
                    },
                  })}
                  type="number"
                  placeholder="10"
                  class="input input-bordered w-full"
                />
                <span>Piece</span>
              </label>
              <label class="label">
                {errors.maxqty?.type === "required" && (
                  <span class="label-text text-red-600">
                    {errors.maxqty.message}
                  </span>
                )}
              </label>
            </div>
            <div class="form-control">
              <label class="input-group">
                <span>Available</span>
                <input
                  {...register("available", {
                    required: {
                      value: true,
                      message: "Available Quantity is required! ",
                    },
                  })}
                  type="number"
                  placeholder="10"
                  class="input input-bordered w-full"
                />
                <span>Piece</span>
              </label>
              <label class="label">
                {errors.available?.type === "required" && (
                  <span class="label-text text-red-600">
                    {errors.available.message}
                  </span>
                )}
              </label>
            </div>
            <div class="form-control">
              <textarea
                {...register("description", {
                  required: {
                    value: true,
                    message: "Product Description is required! ",
                  },
                })}
                class="textarea textarea-bordered h-24"
                placeholder="Product Description"
              ></textarea>
              <label class="label">
                {errors.description?.type === "required" && (
                  <span class="label-text text-red-600">
                    {errors.description.message}
                  </span>
                )}
              </label>
            </div>
            <div class="form-control">
              <label class="input-group">
                <span>Image</span>
                <input
                  {...register("img", {
                    required: {
                      value: true,
                      message: "Image URL is required! ",
                    },
                  })}
                  type="text"
                  placeholder="Image URL"
                  class="input input-bordered w-full"
                />
              </label>
              <label class="label">
                {errors.img?.type === "required" && (
                  <span class="label-text text-red-600">
                    {errors.img.message}
                  </span>
                )}
              </label>
            </div>
            <input />
            <input
              className="btn btn-primary btn-outline w-full"
              type="submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
