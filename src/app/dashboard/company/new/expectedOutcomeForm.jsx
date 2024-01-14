'use client'
import { aiImpactQuestions, dreamTeamEnvironmentQuestions, employeeMotivationObstaclesQuestions, idealLeadershipQuestions, leadershipImprovementQuestions, teamDynamicsQuestions } from "@/app/services/data";
import { useState } from "react";
import Select from "react-tailwindcss-select";
import { ToastContainer, toast } from "react-toastify";

const ExpectedOutcomeForm = ({user}) => {
    const [leadershipImprovement, setLeadershipImprovement] = useState('');
    const [teamImprovement, setTeamImprovement] = useState('');
    const [employeeMotivationObstacles, setEmployeeMotivationObstacles] = useState('');
    const [idealLeadership, setIdealLeadership] = useState('');
    const [dreamTeamEnvironment, setDreamTeamEnvironment] = useState('');
    const [aiImpact, setAIImpact] = useState('');

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

      const handleSubmit = () => {
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
        console.log('Leadership Improvement:', leadershipImprovement);
        console.log('Team Improvement:', teamImprovement);
        console.log('Employee Motivation Obstacles:', employeeMotivationObstacles);
        console.log('Ideal Leadership:', idealLeadership);
        console.log('Dream Team Environment:', dreamTeamEnvironment);
        console.log('AI Impact:', aiImpact);
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
              Save And Continue
            </button>
      </form>  
     );
}
 
export default ExpectedOutcomeForm;