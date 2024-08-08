"use client";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import InputField from "@/components/InputFields";

export default function Auth() {
  const [showPassword, setShowPassword] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false); 

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (data) => {
    if (isSignUp) {
      console.log("Sign-Up Data: ", data);
      setShowSuccessPopup(true);
    } else {
      const isValidCredentials = data.username === "user" && data.password === "password"; 
      if (isValidCredentials) {
        setShowSuccessPopup(true);
      } else {
      }
    }
  };

  return (
    <>
      <div className="w-full border">
        <div className="border flex bg-greenMedium w-full m-auto flex items-center justify-center flex-col h-[6rem]">
          <h3 className="custom-h3 text-white">{isSignUp ? "Sign Up" : "Log In"}</h3>
          <h5 className="custom-h5 text-white font-light text-greyLight">
            {isSignUp ? "Create your account" : "Sign In to continue"}
          </h5>
        </div>
        <div className="flex items-center justify-center mt-10">
          <form onSubmit={handleSubmit(onSubmit)} className="px-8 pt-6 pb-8 mb-8">
            {errors.general && (
              <p className="text-red-500 text-xs italic">{errors.general.message}</p>
            )}

            {isSignUp ? (
              <>
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-12">
              <div className="py-4">
                  <InputField
                    label="Name"
                    type="text"
                    placeholder="Enter your name"
                    {...register("name", { required: "Name is required" })}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs italic">{errors.name.message}</p>
                  )}
                </div>

                <div className="py-4">
                  <InputField
                    label="Username"
                    type="text"
                    placeholder="Enter your username"
                    {...register("username", { required: "Username is required" })}
                  />
                  {errors.username && (
                    <p className="text-red-500 text-xs italic">{errors.username.message}</p>
                  )}
                </div>

                <div className="py-4">
                  <InputField
                    label="Email"
                    type="email"
                    placeholder="Enter your email"
                    {...register("email", { required: "Email is required" })}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs italic">{errors.email.message}</p>
                  )}
                </div>

                <div className="py-4">
                  <InputField
                    label="Phone No"
                    type="tel"
                    placeholder="Enter your phone number"
                    {...register("phone", { required: "Phone number is required" })}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs italic">{errors.phone.message}</p>
                  )}
                </div>

                <div className="py-4">
                  <InputField
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    showPassword={true}
                    onTogglePassword={handleTogglePassword}
                    {...register("password", { required: "Password is required" })}
                  />
                  {errors.password && (
                    <p className="text-red-500 text-xs italic">{errors.password.message}</p>
                  )}
                </div>

                <div className="py-4">
                  <InputField
                    label="Confirm Password"
                    type="password"
                    placeholder="Confirm your password"
                    {...register("confirmPassword", { required: "Confirm Password is required" })}
                  />
                  {errors.confirmPassword && (
                    <p className="text-red-500 text-xs italic">{errors.confirmPassword.message}</p>
                  )}
                </div>
              </div>

              </>
            ) : (
              <>
                <div className="py-4">
                  <InputField
                    label="Username"
                    type="text"
                    placeholder="Enter your username"
                    {...register("username", { required: "Username is required" })}
                  />
                  {errors.username && (
                    <p className="text-red-500 text-xs italic">{errors.username.message}</p>
                  )}
                </div>

                <div className="py-4">
                  <InputField
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    showPassword={true}
                    onTogglePassword={handleTogglePassword}
                    {...register("password", { required: "Password is required" })}
                  />
                  {errors.password && (
                    <p className="text-red-500 text-xs italic">{errors.password.message}</p>
                  )}
                </div>
              </>
            )}

            <div className="flex items-center justify-between mt-12">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                {isSignUp ? "Sign Up" : "Login"}
              </button>
              <button
                type="button"
                onClick={() => setIsSignUp(!isSignUp)}
                className="custom-h5"
              >
                {isSignUp ? "Already Have an Account? Log In" : "Don't Have an Account? Sign up"}
              </button>
            </div>
          </form>
        </div>
      </div>

      {showSuccessPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-lg font-bold">Success</h2>
            <p className="mt-2">You have successfully {isSignUp ? "signed up" : "logged in"}!</p>
            <button
              onClick={() => setShowSuccessPopup(false)}
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </>
  );
}
