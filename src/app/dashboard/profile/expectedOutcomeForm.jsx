'use client'
import { updateUserDetails } from "@/app/services/firestore";
import { useRouter } from "next/navigation";

import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { PaystackButton } from 'react-paystack';
import { useState } from "react";

const ExpectedOutcomeForm = ({user,updateProgress}) => {
     const router =useRouter()
     const [amount, setAmount] = useState(1000);
     const [accountType,setAccountType]=useState('')

     const handleRadioChange = (event) => {
      setAccountType(event.target.value);
    };
    const config = {
      reference: (new Date()).getTime().toString(),
      email: user?.email,
      amount: amount,
      publicKey: 'pk_live_5f0995267a23b9b1d692ffccb39ffe681ee493dd',
      currency:'KES'
  };
    const handlePaystackSuccessAction = async () => {
      const payload = {
        uid: user.id,
        data: {
          amount:amount,
          accountType:accountType,
          profileUpdate:'100%',
          profileStage:"Profile Complete"
        }
      }
      try {
        await updateUserDetails(payload);
        toast.success(` 🦄 Details updated successfuly!`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
        updateProgress('Expected outcomes','100%')

      } catch (error) {
        console.log(error)
        toast.error(` 🦄 something went wrong!`, {
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
    };
  
    // you can call this function anything
    const handlePaystackCloseAction = () => {
      console.log('closed')
      toast.error('You cancelled the transaction')
    }

    
  const componentProps = {
    ...config,
    text: 'Submit for verification',
    onSuccess: (reference) => handlePaystackSuccessAction(reference),
    onClose: handlePaystackCloseAction,
};

    
    return ( 
      <div>
        <ToastContainer/>
        <div className='flex flex-col items-start justify-center'>
          
          <h3 className="mb-5 text-lg font-medium text-gray-900">We use third party applications to verify all application documents. This costs  KES. 2500</h3>
          <ul className="grid w-full gap-6 md:grid-cols-2">
                  <li>
                    <input 
                      type="radio" 
                      id="hosting-small" 
                      name="hosting" 
                      value="novice" 
                      className="hidden peer" 
                      onChange={handleRadioChange} 
                      required 
                    />
                    <label 
                      htmlFor="hosting-small" 
                      className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-[#e58e04] peer-checked:border-[#e58e04] peer-checked:text-[#e58e04] hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <div className="block">
                        <div className="w-full text-lg font-semibold">Novice</div>
                        <div className="w-full"><ul className="text-md font-light list-disc list-inside">
                          <li>3 weeks training bootcamp</li>
                          <li>No Prior sales experience</li>
                          <li>Can only work for a single company at a time</li>
                          <li>Low level sales tasks</li>
                          <li>25% platform commission on payments</li>
                          </ul></div>
                      </div>
                    </label>
                  </li>
                  <li>
                    <input 
                      type="radio" 
                      id="hosting-big" 
                      name="hosting" 
                      value="Intermediate" 
                      className="hidden peer" 
                      onChange={handleRadioChange} 
                      defaultChecked 
                    />
                    <label 
                      htmlFor="hosting-big" 
                      className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-[#e58e04] peer-checked:border-[#e58e04] peer-checked:text-[#e58e04] hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <div className="block">
                      <div className="w-full text-lg font-semibold">Intermediate</div>
                        <div className="w-full"><ul className="text-md font-light list-disc list-inside">
                          <li>3 weeks training bootcamp</li>
                          <li>At least 2years sales experience</li>
                          <li>Can work with multiple organizations at a time</li>
                          <li>High level sales tasks</li>
                          <li>15% platform commission on payments</li>
                          </ul></div>
                         
                      </div>
                    </label>
                  </li>
                </ul>            
                  <PaystackButton {...componentProps}  className=" flex items-center justify-center gap-2 w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-[#e58e04] border border-transparent rounded-lg active:bg-[#e58e04] hover:bg-[#13A8BD] focus:outline-none focus:shadow-outline-purple"/>
                </div>
      </div>  
     );
}
 
export default ExpectedOutcomeForm;