'use client'
import MainLoader from "@/app/components/main-loader";
import { UserContext } from "@/app/services/DataContext";

import { useContext, useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import CultureForm from "./cultreForm";
import ExpectedOutcomeForm from "./expectedOutcomeForm";
import OverviewForm from "./overViewForm";
import ProgressBar from "@/app/components/progressBar";
import Link from "next/link";


const NewCompanyProfile = () => {
  const { user, loading, error } = useContext(UserContext);
  const [formStep, setFormStep] = useState(1)
  const [percent, setPercent]=useState(user?.profileUpdate)
  const [stage,setStage] = useState('Overview')

 const handleProgressChange=(percent,stage)=>{
    setPercent(percent),
    setStage(stage)
  }
  if (loading) return <MainLoader />;
  if (error) return <div>Error fetching user data: {error.message}</div>;
  return (

    <div className="flex gap-5 mx-2">
      {/* <div className="clients-top-card  rounded-[16px] bg-white md:basis-1/3 w-full flex flex-col items-center  justify-center gap-4 max-h-[400px]">
        <div className="rounded-full h-40 w-40 bg-gray-200 mt-10 hover:bg-gray-100  flex flex-col items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" class="h-10 w-10 text-gray-400" width="1em" height="1em" viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 10.25a.75.75 0 0 1 .75.75v1.25H14a.75.75 0 0 1 0 1.5h-1.25V15a.75.75 0 0 1-1.5 0v-1.25H10a.75.75 0 0 1 0-1.5h1.25V11a.75.75 0 0 1 .75-.75"></path><path d="M9.778 21h4.444c3.121 0 4.682 0 5.803-.735a4.408 4.408 0 0 0 1.226-1.204c.749-1.1.749-2.633.749-5.697c0-3.065 0-4.597-.749-5.697a4.407 4.407 0 0 0-1.226-1.204c-.72-.473-1.622-.642-3.003-.702c-.659 0-1.226-.49-1.355-1.125A2.064 2.064 0 0 0 13.634 3h-3.268c-.988 0-1.839.685-2.033 1.636c-.129.635-.696 1.125-1.355 1.125c-1.38.06-2.282.23-3.003.702A4.405 4.405 0 0 0 2.75 7.667C2 8.767 2 10.299 2 13.364c0 3.064 0 4.596.749 5.697c.324.476.74.885 1.226 1.204C5.096 21 6.657 21 9.778 21M16 13a4 4 0 1 1-8 0a4 4 0 0 1 8 0m2-3.75a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5z"></path></g></svg>

          <p>Upload Picture</p>

        </div>
        <p className="text-center mx-6 text-[12px] ">Allowed *.jpeg, *.jpg, *.png, *.gif
          max size of 3 Mb</p>

      </div> */}
      
      <div className="rounded-[16px] bg-white w-full md:px-10 px-2 mx-2 md:mx-10 my-4">
        <div className="flex gap-1 flex-wrap my-4">
        <ProgressBar stage={user.profileStage} percent={user.profileUpdate}/>
   
          

        </div>
        {user.profileUpdate==='0%'&& (
         <OverviewForm user={user} updateProgress={handleProgressChange}/>
        )}
        {user.profileUpdate ==='50%'&& (
          <CultureForm  user={user} updateProgress={handleProgressChange}/>
        )}
         {user.profileUpdate ==='75%'&& (
          <ExpectedOutcomeForm  user={user} updateProgress={handleProgressChange}/>
        
        )}
         {user.profileUpdate ==='100%'&& (
        <div className=" flex flex-col items-center justify-center py-20">
          <img src="/success.png"/>
          <Link
            href="/dashboard"
            class="flex items-center justify-center max-w-1/2 px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-[#01382E] border border-transparent rounded-lg active:bg-[#01382E] hover:bg-[#13A8BD] focus:outline-none focus:shadow-outline-purple"
          >
            Proceed to Dashboard <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
</svg>

          </Link>
        </div>
        
        )}


      </div>
    </div>
  );
}

export default NewCompanyProfile;