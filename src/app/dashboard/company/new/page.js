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
        <div className="h-full w-full flex flex-col items-center justify-center py-20">
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