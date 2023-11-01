import React, { useState } from "react";
import bannerImage from "../Assets/images/banner.png";
import shope from "../Assets/images/shop.png";
import { BsChevronDoubleRight } from "react-icons/bs";
import { useForm } from "react-hook-form";

export default function Banner() {
  // Styles for the background image
  const bannerStyle = {
    backgroundImage: `url(${bannerImage})`,
  };

  // Initialize the useForm hook for form handling
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Function to handle form submission
  const onSubmit = (data) => console.log(data);

  return (
    <section
      className="bg-bottom bg-no-repeat bg-fit min-h-[480px] lg:min-h-[600px] relative mt-0 md:mt-4"
      style={bannerStyle}
    >
      <div className="container flex gap-5">
        {/* Content Section */}
        <div className="relative w-full lg:max-w-2xl">
          <h2 className="head_text">Bangladesh's #1 Marketplace</h2>
          <p className="mt-4 w-full text-xl text-white lg:max-w-lg">
            Create a Daraz seller account in 5 minutes and reach millions of
            customers today!
          </p>
          <img
            className="max-w-[100%] md:max-w-[95%] absolute top-44 lg:top-48"
            src={shope}
            alt="Shopping Image"
          />
        </div>

        {/* Form Section (Visible on Larger Screens) */}
        <div className="hidden lg:block relative bottom-16">
          {/* Title and "Register as Global Seller" button */}
          <div className="flex items-center py-4 text-white gap-x-2">
            <p>Want to sell from overseas to Bangladesh?</p>
            <button className="p-2 border border-white rounded-md">
              Register as Global Seller
            </button>
          </div>

          <form
            className="p-10 bg-[#F7F7F7] rounded-2xl"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="text-center">
              <h2 className="text-4xl">Create an Account</h2>
              <p className="py-3 text-slate-600">
                Welcome! Millions of Daraz users are waiting to buy your
                product.
              </p>
            </div>

            <div className="flex flex-col gap-y-5">
              {/* Phone Number Field */}
              <div className="text-slate-500">
                <span className="py-2 text-sm font-semibold">Phone</span>
                <div className="flex items-center gap-3 p-3 text-sm border rounded-lg border-slate-300 bg-white">
                  <label htmlFor="text">+880</label>
                  <input
                    type="text"
                    className="w-full border-none outline-none"
                    id="name"
                    placeholder="Enter phone number"
                    {...register("name", { required: true })}
                  />
                </div>
                {errors.name && (
                  <span className="ml-1 text-xs text-red-700">
                    Please fill in the correct phone format
                  </span>
                )}
              </div>

              {/* Verification Field */}
              <div className="text-slate-500">
                <span className="py-2 text-sm font-semibold">Verification</span>
                <div className="flex items-center gap-3 p-3 text-sm border rounded-lg border-slate-300 bg-white">
                  <label htmlFor="" className="cursor-move">
                    <BsChevronDoubleRight size={20} />
                  </label>
                  <input
                    type="hidden"
                    className="w-full text-center border-none outline-none cursor-pointer"
                    id="name"
                    placeholder="Please slide to verify"
                    {...register("name", { required: true })}
                  />
                </div>
                {errors.name && (
                  <span className="ml-1 text-xs text-red-700">
                    Please slide to verify
                  </span>
                )}
              </div>

              <div className="p-2 text-center text-white rounded-md bg-orange">
                <input
                  className="cursor-pointer"
                  type="submit"
                  value="Create Account"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
