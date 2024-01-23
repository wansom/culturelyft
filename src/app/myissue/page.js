'use client'
import { useState } from "react";
import ButtonLoader from "../components/button-loader";
import Navbar from "../components/navbar";
import { ToastContainer } from "react-toastify";
import { fetchMessageResponse } from "../services/firestore";

const page = () => {
    const [loading,setLoading]= useState(false)
    const [id,setId]=useState(null)
    const [response, setResponse]=useState(null)
    const [submitted,setSubmitted]=useState(false)
    const handleIDChange=(e)=>{
        setId(e.target.value)

    }
    const handleSubmit =(e)=>{
        e.preventDefault()
        setLoading(true)
        setSubmitted(true)
        fetchMessageResponse(id).then((res)=>{
            setLoading(false)
            console.log(res);
            setResponse(res)
        })


    }

    const fetchData = async () => {
      try {
        // Fetch single message based on messageId
        const result = await fetchSingleMessage(messageId);

        if (result) {
          setMessage(result);
        } else {
          // Handle case where the message with the provided ID is not found
          setError('No such message found.');
        }
      } catch (error) {
        // Handle error fetching the message
        setError('Error fetching message. Please try again.');
      } finally {
        // Set loading to false regardless of success or error
        setLoading(false);
      }
    };
    return ( 
        <main>
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
            {!submitted&&(
                <div class="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
                <div class="w-full">
                  <h1
                    class="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200"
                  >
                    Find out if your anonymous message has a response
                  </h1>
                  <form onSubmit={handleSubmit}>
          <label className="block text-sm">
            <span className="text-gray-700 dark:text-gray-400">Enter Tracking ID</span>
            <input
              className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700  focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
              placeholder="ls2ULcKTYHufbPrLnCd"
              type="text"
              value={id}
              onChange={handleIDChange}
              required
            />
          </label>
    
          <button
            type="submit"
            className="flex items-center justify-center gap-2 w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-[#01382E] border border-transparent rounded-lg active:bg-[#01382E] hover:bg-[#13A8BD] focus:outline-none focus:shadow-outline-purple"
            disabled={loading}
          >
            {loading && (
              <ButtonLoader/>
            )}
            Check Response
          </button>
        </form>
    
                </div>
              </div>
            )}
            {
                !response?.reply&&submitted&& (
                    <div className="flex flex-col items-center justify-center pl-10">
                        <img src="/icons/ic_folder_empty.svg" className="h-40"/>
                        <h1>Your feedback has no response yet</h1>

                    </div>
                )
            }
              {
                response?.reply&&submitted&& (
                    <div className="flex items-center justify-center pl-10">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
</svg>

                        
                        <h1>{response?.reply}</h1>

                    </div>
                )
            }

          </div>
        </div>
      </div>
      </main>
     );
}
 
export default page;