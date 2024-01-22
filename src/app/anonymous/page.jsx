'use client'
import Select from "react-tailwindcss-select";
import Navbar from "../components/navbar";
import { useState } from "react";
import { newsurveyRoles } from "../services/data";
import Drawer from "../components/drawer";
import { sendAnonEmail, sendMailToFirestore } from "../services/firestore";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Link from "next/link";
import ButtonLoader from "../components/button-loader";

const Anonymous = () => {
  const [surveyRole, setSurveyRole] = useState(null)
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    category: '',
    date:new Date()

  });
  const [trackindId, setTrackingID] = useState(null)
  const handleRoleChange = value => {

    setFormData((prevFormData) => ({
      ...prevFormData,
      ['category']: value.value,
    }));
    setSurveyRole(value)
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    setIsOpen(true)
  }
  const handleCopy = () => {
    toast.success(` 🦄ID Copied to clipboard!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    })
  }
  const sendEmail = () => {
    setLoading(true)
    sendAnonEmail({
      name: formData.name,
      subject: 'Anonymous Employee Feedback from Culturelyft',
      email: formData.email,
      content: formData.message,

    }).then(async (res) => {

      toast.success(` 🦄 You feeback has been submitted successfully!`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
      sendMailToFirestore(formData).then((id) => {
        setTrackingID(id)
        setLoading(false)
      })

    })
  }
  return (
    <main className="container mx-auto overflow-x-hidden">
      <Navbar />
      <ToastContainer />
      <section class="banner flex flex-col md:flex-row">
        <div class="banner-container basis-2/2 md:basis=1/3">
          <div class="bn-text mt-10">
            <div class="bn-txt-holder">
              <h1 class="text-[32px] md:text-[48px] mx-5 md:ml-28 text-black">
                Give your employees a voice, and listen to what they have to say

              </h1>
              <p className='mx-5 md:mx-28 my-5 text-black'>Culturelyft provides a safe and anonymous way for employees to share their feedback with you, so you can make informed decisions about your company culture.</p>
            </div>
          </div>
          <div class=""></div>
        </div>
        <div className='basis-1/3 md:basis-2/3'>
          <section class="bg-gray-50 dark:bg-gray-900">
            <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
              {
                !trackindId && (
                  <div className="mx-auto my-10 p-5 bg-gray-200 w-[90%] rounded-lg">
                    <h2 className="font-semibold text-10"> Dear {formData.name},</h2>
                    <p className="text-gray-600 text-6">Culturelyft is a platform dedicated to empowering employees to voice their feedback in a safe and anonymous way. We believe that honest insights from your team can lead to significant improvements in company culture, career development opportunities, and overall employee satisfaction.
                      Today, we are delivering an anonymous message from one of your employees. Please read carefully and consider their perspective:</p> <br />
                    <p className="font-bold text-black text-6">{formData.message}</p><br></br>

                    <p className="text-gray-600 text-6">Click here to log in to your Culturelyft portal to reply and view other feeback from your team</p><br />

                    To better workplaces, <br />

                    The Culturelyft Team
                    <button
                      onClick={sendEmail}
                      className=" flex items-center justify-center gap-2 w-[80%] px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-[#01382E] border border-transparent rounded-lg active:bg-[#01382E] hover:bg-[#13A8BD] focus:outline-none focus:shadow-outline-purple"
                    >
                      {loading && (<ButtonLoader />)}
                      Send Email
                    </button>
                  </div>
                )
              }
              {trackindId && (
                <div className="mx-auto my-10 p-5 bg-gray-200 w-[90%] rounded-lg">
                  <h2 className="font-semibold text-10">Here is your issue ID. Copy and use it to check if your feedback has been responded to</h2>
                  <div className="">
                    <CopyToClipboard text={trackindId}
                      onCopy={handleCopy}>
                      <div className="border-2 border-solid border-black py-2 w-full rounded-lg my-2 flex items-center justify-between px-3 text-[#13A8BD] cursor-pointer">{trackindId}<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                      </svg></div>
                    </CopyToClipboard>
                    <CopyToClipboard text={trackindId}
                      onCopy={handleCopy}>
                      <Link
                        href="/myissue"
                        className=" flex items-center justify-center gap-2 w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-[#01382E] border border-transparent rounded-lg active:bg-[#01382E] hover:bg-[#13A8BD] focus:outline-none focus:shadow-outline-purple"
                      >
                        Proceed To Issue Page<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>

                      </Link>
                    </CopyToClipboard>



                  </div>

                </div>

              )}

            </Drawer>
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto">
              <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Send Anonymous Feedback
                  </h1>
                  <form class="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                    <div>
                      <label htmlFor="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">what would you like to give feeback on?</label>
                      <textarea value={formData.message}
                        onChange={handleChange} type="text" name="message" id="message" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " placeholder="provide honest feedback" required=""></textarea>
                    </div>
                    <div>
                      <label htmlFor="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Who should receive this feedback?(Email)</label>
                      <input value={formData.email}
                        onChange={handleChange} type="email" name="email" id="email" placeholder="hr@culturelyft.com" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                    </div>
                    <div>
                      <label htmlFor="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Who should receive this feedback?(Name)</label>
                      <input value={formData.name}
                        onChange={handleChange} type="text" name="name" id="name" placeholder="Vincent" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                    </div>
                    <div>
                      <label htmlFor="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Which category does this fall?</label>
                      <Select className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700  focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"

                        value={surveyRole}
                        onChange={handleRoleChange}
                        options={newsurveyRoles}
                      />
                    </div>
                    <button
                      type="submit"
                      className=" flex items-center justify-center gap-2 w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-[#01382E] border border-transparent rounded-lg active:bg-[#01382E] hover:bg-[#13A8BD] focus:outline-none focus:shadow-outline-purple"
                    >
                      Preview Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>

      </section>

    </main>
  );
}

export default Anonymous;