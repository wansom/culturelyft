'use client'
import Navbar from "../components/navbar";
import '../blog.css'
import { passwordReset } from "../services/auth";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import { useRouter } from "next/navigation";

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const router =useRouter()

  const handleEmailChange =async (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Add your logic for handling forgot password here
    setLoading(true);
await passwordReset(email).then(()=>{
 
  toast.success(` 🦄 Password recovery email sent to: ${email} !`, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    })
    setLoading(false);
    router.push('/login')


}).catch((err)=>{
  toast.error(` 🦄 ${err} !`, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    })
    setLoading(false)
})
    
  };
    return (  <main>
      <Navbar/>
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
              src="/login.jpg"
              alt="Office"
            />
          </div>
          <div class="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div class="w-full">
              <h1
                class="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200"
              >
                Forgot password
              </h1>
              <form onSubmit={handleSubmit}>
      <label className="block text-sm">
        <span className="text-gray-700 dark:text-gray-400">Email</span>
        <input
          className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700  focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
          placeholder="user@culturelyft.com"
          type="email"
          value={email}
          onChange={handleEmailChange}
        />
      </label>

      <button
        type="submit"
        className="flex items-center justify-center gap-2 w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-[#01382E] border border-transparent rounded-lg active:bg-[#01382E] hover:bg-[#13A8BD] focus:outline-none focus:shadow-outline-purple"
        disabled={loading}
      >
        {loading && (
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
          </div>
        )}
        Recover Password
      </button>
    </form>

            </div>
          </div>
        </div>
      </div>
    </div>
    </main>);
}
 
export default ForgotPassword;