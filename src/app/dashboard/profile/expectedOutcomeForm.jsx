'use client'
import { updateUserDetails } from "@/app/services/firestore";
import { useRouter } from "next/navigation";

import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { PaystackButton } from 'react-paystack';
import { useState } from "react";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "@/app/services/firebase";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";


const ExpectedOutcomeForm = ({user,updateProgress}) => {
     const router =useRouter()
     const [amount, setAmount] = useState(51400);
     const [accountType,setAccountType]=useState('')
     const initialOptions = {
      clientId: 'AZdeGi84ZWAeB1L2elBSZ0jgOw7fjU_4eCi1biJvIlnh7idhpZ2gK-L2jCMR33S5589bJ3kf8pukiRKs',
      currency: "USD",
      intent: "capture",
      vault:true

  };
  
  const [loading,setLoading]=useState(false)
  const uploadFile = async (file) => {
    if (!file) return;
  
    setLoading(true);  // Start loading
  
    const storageRef = ref(storage, `resumes/${file.name}`);
  
    try {
      // Upload the file
      const snapshot = await uploadBytes(storageRef, file);
      
      // Get the URL of the uploaded file
      const url = await getDownloadURL(snapshot.ref);
      // Make sure the URL is defined before proceeding
      if (url) {
        const payload = {
          uid: user.id,
          data: {
            resume: url,
          },

        }
        // Update user details in Firestore
        await updateUserDetails(payload);
        toast.success("resume uploaded successfully")
      } else {
        console.error("File URL could not be retrieved");
      }
  
    } catch (error) {
      console.error("Error uploading file or updating user details:", error);
    } finally {
      setLoading(false);  // Stop loading
    }
  };
  

  const handleFileUpload=(e)=>{
    e.preventDefault()
    uploadFile(e.target.files[0]);
    
  }
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
    text: 'Verify Via Safaricom/Mpesa',
    onSuccess: (reference) => handlePaystackSuccessAction(reference),
    onClose: handlePaystackCloseAction,
};

    
    return ( 
      <div>
        <ToastContainer/>
        <div className='flex flex-col items-start justify-center py-5'>

          <form className="w-full">
          <fieldset className="w-full h-[127px] flex items-center  justify-between text-font-light px-5">
								<legend className="ml-5">Your Resume</legend>
								<label
									htmlFor="cr12"
									className=" text-dim flex items-center cursor-pointer justify-between  w-full text-lg"
								>Browse to files upload
									<input
										type="file"
										id="cr12"
										placeholder="Browse to files upload"
										className="font-light  hidden"
										name="cr12"
										onChange={handleFileUpload}
									></input>
									{loading &&  <div class="flex justify-center items-center">
    <div class="animate-spin rounded-full h-5 w-5 border-b-2 border-orange-500"></div>
  </div>}
                  {
                    !loading&&(	<svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="68"
                      height="68"
                      viewBox="0 0 28 28"
                      fill="none"
                    >
                      <path
                        d="M0.875 17.3252C1.10706 17.3252 1.32962 17.4174 1.49372 17.5815C1.65781 17.7456 1.75 17.9681 1.75 18.2002V22.5752C1.75 23.0393 1.93437 23.4844 2.26256 23.8126C2.59075 24.1408 3.03587 24.3252 3.5 24.3252H24.5C24.9641 24.3252 25.4092 24.1408 25.7374 23.8126C26.0656 23.4844 26.25 23.0393 26.25 22.5752V18.2002C26.25 17.9681 26.3422 17.7456 26.5063 17.5815C26.6704 17.4174 26.8929 17.3252 27.125 17.3252C27.3571 17.3252 27.5796 17.4174 27.7437 17.5815C27.9078 17.7456 28 17.9681 28 18.2002V22.5752C28 23.5035 27.6313 24.3937 26.9749 25.0501C26.3185 25.7064 25.4283 26.0752 24.5 26.0752H3.5C2.57174 26.0752 1.6815 25.7064 1.02513 25.0501C0.368749 24.3937 0 23.5035 0 22.5752V18.2002C0 17.9681 0.0921872 17.7456 0.256282 17.5815C0.420376 17.4174 0.642936 17.3252 0.875 17.3252Z"
                        fill="#5F5D5D"
                      />
                      <path
                        d="M13.3806 2.0056C13.4619 1.92411 13.5585 1.85946 13.6648 1.81535C13.7711 1.77124 13.885 1.74854 14.0001 1.74854C14.1152 1.74854 14.2292 1.77124 14.3355 1.81535C14.4418 1.85946 14.5383 1.92411 14.6196 2.0056L19.8696 7.2556C20.0339 7.4199 20.1262 7.64274 20.1262 7.8751C20.1262 8.10746 20.0339 8.3303 19.8696 8.4946C19.7053 8.6589 19.4825 8.7512 19.2501 8.7512C19.0178 8.7512 18.7949 8.6589 18.6306 8.4946L14.8751 4.73735V20.1251C14.8751 20.3572 14.7829 20.5797 14.6188 20.7438C14.4548 20.9079 14.2322 21.0001 14.0001 21.0001C13.7681 21.0001 13.5455 20.9079 13.3814 20.7438C13.2173 20.5797 13.1251 20.3572 13.1251 20.1251V4.73735L9.36963 8.4946C9.28828 8.57595 9.19169 8.64049 9.0854 8.68452C8.97911 8.72854 8.86518 8.7512 8.75013 8.7512C8.63508 8.7512 8.52115 8.72854 8.41486 8.68452C8.30856 8.64049 8.21198 8.57595 8.13063 8.4946C8.04928 8.41325 7.98474 8.31666 7.94071 8.21037C7.89668 8.10408 7.87402 7.99015 7.87402 7.8751C7.87402 7.76005 7.89668 7.64612 7.94071 7.53983C7.98474 7.43353 8.04928 7.33695 8.13063 7.2556L13.3806 2.0056Z"
                        fill="#5F5D5D"
                      />
                    </svg>)
                  }
								
								</label>
							</fieldset>
              <div class="flex items-center">
    <input checked id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-secondary bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 my-3"/>
    <label for="checked-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">By checking this box, I agree to a $3.99 fee for document verification through a third-party service *We don't verify profiles from UAE</label>
</div>
          </form>
                    <div className="space-y-3 w-full">
                   
      <PayPalScriptProvider options={initialOptions}> 
      <PayPalButtons
        createSubscription={(data, actions) => {
            
          return actions.subscription.create({
            plan_id: 'P-5P453542BW938944CM2PFVYQ',
          });
        }}
        onApprove={(data, actions) => {
            toast.success('Details Submitted');
            actions.subscription.get(data.subscriptionID).then(details => {
                // Example: Save the subscription details to your server
                updateUserDetails({
                    data: JSON.stringify({
                        subscriptionID: data.subscriptionID,
                        payerID: data.payerID,
                        facilitatorAccessToken: data.facilitatorAccessToken,
                        subscriptionDetails: details,
                        date:new Date(),
                        subscription:'active'
                      }),
                    uid:user.id
                  })
              });

        }}
      />
    </PayPalScriptProvider>
    <PaystackButton {...componentProps}  className=" flex items-center justify-center gap-2 w-full px-4 py-4 mt-4 text-lg font-medium leading-5 text-center text-white transition-colors duration-150border border-transparent rounded-lg bg-[#13A8BD] focus:outline-none focus:shadow-outline-purple"/>
                    </div>
                  
                </div>
      </div>  
     );
}
 
export default ExpectedOutcomeForm;