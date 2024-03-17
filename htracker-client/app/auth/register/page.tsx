"use client";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { FiLoader } from "react-icons/fi";
import { useEffect, useState } from "react";
import { useUserContext } from "@/contexts";
import { notifyCustom, notifySuccess } from "@/helpers";
import { useRouter } from "next/navigation";

const Register = () => {
  const { dispatch } = useUserContext();
  const initialFormData = {
    username: "",
    email: "",
    password: "",
  };

  const router = useRouter();
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      notifyCustom(
        <div className="flex border p-2 rounded-md gap-2 bg-white  items-center">
          <FiLoader />
          <p className="text-sm">signing you up for htracker</p>
        </div>
      );
      const res = await axios({
        method: "POST",
        url: "http://localhost:4000/auth/register",
        data: {
          ...formData,
        },
      });
      setTimeout(() => {
        router.push("/");
        notifySuccess("Welcome, User");
      }, 3000);

      dispatch({ type: "SET_USER", payload: res?.data });
      setFormData(initialFormData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="min-h-screen flex justify-betwen h-screen">
      <div className="w-2/5 flex bg-secondary justify-center h-full items-center border p-12">
        <Image
          src="/static/images/auth/welcome.svg"
          width={500}
          height={500}
          alt="login"
        />
      </div>
      <div className="px-12 flex flex-col justify-center items-center w-3/5">
        <h1 className="text-5xl font-semibold">Sign Up</h1>
        <form
          className="flex flex-col gap-2 mt-8"
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <section className="flex flex-col gap-1">
            <label htmlFor="username" className="text-2xl">
              Username
            </label>
            <input
              placeholder="habitbuilder"
              type="text"
              name="username"
              value={formData.username}
              onChange={(e) => handleChange(e)}
              className="border-2 rounded-md px-2 py-1 focus:outline-none focus:border-secondary"
            />
          </section>
          <section className="flex flex-col gap-1">
            <label htmlFor="username" className="text-2xl">
              Email
            </label>
            <input
              placeholder="buildinghabits@htracker.com"
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) => handleChange(e)}
              className="border-2 rounded-md px-2 py-1 focus:outline-none focus:border-secondary"
            />
          </section>
          <section className="flex flex-col gap-1">
            <label htmlFor="password" className="text-2xl">
              Password
            </label>
            <input
              placeholder="••••••••••"
              type="password"
              name="password"
              value={formData.password}
              onChange={(e) => handleChange(e)}
              className="border-2 rounded-md px-2 py-1 focus:outline-none focus:border-secondary"
            />
          </section>
          <section className="mt-4 text-center">
            <button className="w-full text-xl px-6 py-2 bg-secondary text-white rounded">
              Submit
            </button>
          </section>
        </form>
        <div className="mt-6">
          <Link href="/auth/login">
            <p>
              Already have an account?
              <span className="text-secondary underline underline-offset-2 cursor-pointer">
                {" "}
                Sign in
              </span>
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Register;
