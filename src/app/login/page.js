'use client'
import Navbar from "../components/navbar";
import '../blog.css'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/navigation";
import { useState } from "react";
import { signIn } from "../services/auth";
import ButtonLoader from "../components/button-loader";

const UserLogin = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });
  const [loading,setLoading] =useState(false)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
setLoading(true)
    // Validate form fields
    const newErrors = {};
    if (formData.email.trim() === '') {
      newErrors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (formData.password.trim() === '') {
      newErrors.password = 'Password is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // If validation passes, you can perform the login logic here
    console.log('Login submitted:', formData);
    await signIn(formData).then(()=>{
      setLoading(false)
      router.push('/dashboard');

    }).catch((err)=>{
      setLoading(false)
      toast.error(` 🦄 ${err.message} !`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        })
    })

    // Navigate to the dashboard page
 
  };

  const isValidEmail = (email) => {
    // You can use a regex or any other method to validate email format
    return /\S+@\S+\.\S+/.test(email);
  };
    return (
    <main className="overflow-x-hidden">
            <Navbar/>
          <section className="mx-auto">
          <ToastContainer />

          <div class="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
        <div
          class="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800"
        >
          <div class="flex flex-col overflow-y-auto md:flex-row">
            <div class="h-32 md:h-auto md:w-1/2">
              <img
                aria-hidden="true"
                class="object-cover w-full h-full dark:hidden"
                src="/login.jpg"
                alt="Office"
              />
              <img
                aria-hidden="true"
                class="hidden object-cover w-full h-full dark:block"
                src="/login-.jpg"
                alt="Office"
              />
            </div>
            <div class="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
              <div class="w-full">
                <h1
                  class="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200"
                >
                  Login
                </h1>
                <form onSubmit={handleSubmit}>
      <label className="block text-sm">
        <span className="text-gray-700 dark:text-gray-400">Email</span>
        <input
          className={`block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input ${
            errors.email && 'border-red-500'
          }`}
          placeholder="user@culturelyft.com"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">{errors.email}</p>
        )}
      </label>
      <label className="block mt-4 text-sm">
        <span className="text-gray-700 dark:text-gray-400">Password</span>
        <input
          className={`block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input ${
            errors.password && 'border-red-500'
          }`}
          placeholder="***************"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && (
          <p className="text-red-500 text-xs mt-1">{errors.password}</p>
        )}
      </label>

      <button
        type="submit"
        className=" flex items-center justify-center gap-2 w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-[#01382E] border border-transparent rounded-lg active:bg-[#01382E] hover:bg-[#13A8BD] focus:outline-none focus:shadow-outline-purple"
      >
        Log In
       {loading&&(<ButtonLoader/>)}
      </button>
    </form>

  
                <hr class="my-8" />
  
                <p class="mt-4">
                  <a
                    class="text-sm font-medium text-[#13A8BD] dark:text-[#13A8BD] hover:underline"
                    href="/forgot-password"
                  >
                    Forgot your password?
                  </a>
                </p>
                <p class="mt-1">
                  <a
                    class="text-sm font-medium text-[#13A8BD] dark:text-[#13A8BD] hover:underline"
                    href="/signup"
                  >
                    Create account
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
          </section>
        </main>
      );
}
 
export default UserLogin;