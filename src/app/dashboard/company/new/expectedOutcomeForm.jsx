'use client'
import { aiImpactQuestions, dreamTeamEnvironmentQuestions, employeeMotivationObstaclesQuestions, idealLeadershipQuestions, leadershipImprovementQuestions, teamDynamicsQuestions } from "@/app/services/data";
import { updateUserDetails } from "@/app/services/firestore";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Select from "react-tailwindcss-select";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const ExpectedOutcomeForm = ({user,updateProgress}) => {
    const [leadershipImprovement, setLeadershipImprovement] = useState('');
    const [teamImprovement, setTeamImprovement] = useState('');
    const [employeeMotivationObstacles, setEmployeeMotivationObstacles] = useState('');
    const [idealLeadership, setIdealLeadership] = useState('');
    const [dreamTeamEnvironment, setDreamTeamEnvironment] = useState('');
    const [aiImpact, setAIImpact] = useState('');
     const router =useRouter()

    const handleLeadershipImprovementChange = (value) => {
        setLeadershipImprovement(value);
      };
    
      const handleTeamImprovementChange = (value) => {
        setTeamImprovement(value);
      };
    
      const handleEmployeeMotivationObstaclesChange = (value) => {
        setEmployeeMotivationObstacles(value);
      };
    
      const handleIdealLeadershipChange = (value) => {
        setIdealLeadership(value);
      };
    
      const handleDreamTeamEnvironmentChange = (value) => {
        setDreamTeamEnvironment(value);
      };
    
      const handleAIImpactChange = (value) => {
        setAIImpact(value);
      };

      const handleSubmit =async (e) => {
        e.preventDefault()
        // Perform any validation if needed
        if (!leadershipImprovement || !teamImprovement || !employeeMotivationObstacles || !idealLeadership || !dreamTeamEnvironment || !aiImpact) {
            toast.error(` 🦄 some fields are missing!`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              })
          return;
        }     
        const payload = {
          uid: user.id,
          data: {
            expectedOutcomes:[
             leadershipImprovement,teamImprovement,employeeMotivationObstacles,idealLeadership,dreamTeamEnvironment,aiImpact
            ],
            profileUpdate:'100%'
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
      
    
    return ( 
      <form onSubmit={handleSubmit}>
        <ToastContainer/>
    <div className="space-y-4">
      <label className="w-full block text-sm">
        <span className="text-gray-700 dark:text-gray-400">Where do you see the biggest need for improvement in your leadership team?</span>
        <Select
          className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
          value={leadershipImprovement}
          onChange={handleLeadershipImprovementChange}
          options={leadershipImprovementQuestions}
          
        />
      </label>

      <label className="w-full block text-sm">
        <span className="text-gray-700 dark:text-gray-400">What's one thing you'd change about how your teams work together?</span>
        <Select
          className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
          value={teamImprovement}
          onChange={handleTeamImprovementChange}
          options={teamDynamicsQuestions}
          
        />
      </label>

      <label className="w-full block text-sm">
        <span className="text-gray-700 dark:text-gray-400">What gets in the way of your employees feeling motivated?</span>
        <Select
          className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
          value={employeeMotivationObstacles}
          onChange={handleEmployeeMotivationObstaclesChange}
          options={employeeMotivationObstaclesQuestions}
          
        />
      </label>

      <label className="w-full block text-sm">
        <span className="text-gray-700 dark:text-gray-400">What would rockstar leadership look like in your company?</span>
        <Select
          className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
          value={idealLeadership}
          onChange={handleIdealLeadershipChange}
          options={idealLeadershipQuestions}
          
        />
      </label>

      <label className="w-full block text-sm">
        <span className="text-gray-700 dark:text-gray-400">Imagine your dream team environment. What's it like?</span>
        <Select
          className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
          value={dreamTeamEnvironment}
          onChange={handleDreamTeamEnvironmentChange}
          options={dreamTeamEnvironmentQuestions}
          
        />
      </label>

      <label className="w-full block text-sm">
        <span className="text-gray-700 dark:text-gray-400">How do you envision our AI helping you achieve these goals?</span>
        <Select
          className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
          value={aiImpact}
          onChange={handleAIImpactChange}
          options={aiImpactQuestions}
          
        />
      </label>
    </div>
    <button
              type="submit"
              className="block w-[200px] px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-[#01382E] border border-transparent rounded-lg active:bg-[#01382E] hover:bg-[#13A8BD] focus:outline-none focus:shadow-outline-purple"
            >
              Complete Profile
            </button>
      </form>  
     );
}
 
export default ExpectedOutcomeForm;