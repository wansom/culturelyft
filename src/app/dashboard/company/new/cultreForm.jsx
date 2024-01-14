'use client'
import { communicationChannelsQuestions, conflictResolutionQuestions, decisionMakingQuestions, recognitionRewardsQuestions, teamDynamicsQuestions, workStylesQuestions } from "@/app/services/data";
import { useState } from "react";
import Select from "react-tailwindcss-select";
import { ToastContainer, toast } from "react-toastify";


const CultureForm = () => {
  const [formData, setFormData] = useState({
    decisionMaking: '',
    communicationChannels: '',
    workStyle: '',
    teamDynamics: '',
    recognitionRewards: '',
    conflictResolution: '',
  });
  const [decisionMaking, setDecisionMaking] = useState('');
  const [communicationChannels, setCommunicationChannels] = useState('');
  const [workStyle, setWorkStyle] = useState('');
  const [teamDynamics, setTeamDynamics] = useState('');
  const [recognitionRewards, setRecognitionRewards] = useState('');
  const [conflictResolution, setConflictResolution] = useState('');

  // Use these states in your component

  const handleDecisionMakingChange = (value) => {
    setDecisionMaking(value);
  };

  const handleCommunicationChannelsChange = (value) => {
    setCommunicationChannels(value);
  };

  const handleWorkStyleChange = (value) => {
    setWorkStyle(value);
  };

  const handleTeamDynamicsChange = (value) => {
    setTeamDynamics(value);
  };

  const handleRecognitionRewardsChange = (value) => {
    setRecognitionRewards(value);
  };

  const handleConflictResolutionChange = (value) => {
    setConflictResolution(value);
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
    <form className="space-y-4" onSubmit={handleSubmit}>
      <ToastContainer/>
      <label className="w-full block text-sm">
        <span className="text-gray-700 dark:text-gray-400">How are major decisions typically made in your company?</span>
        <Select
          className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
          value={decisionMaking}
          onChange={handleDecisionMakingChange}
          options={decisionMakingQuestions}
          
        />
      </label>

      <label className="w-full block text-sm">
        <span className="text-gray-700 dark:text-gray-400">What are the dominant communication channels within your company?</span>
        <Select
          className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
          value={communicationChannels}
          onChange={handleCommunicationChannelsChange}
          options={communicationChannelsQuestions}
          
        />
      </label>

      <label className="w-full block text-sm">
        <span className="text-gray-700 dark:text-gray-400">How would you describe the pace and expectations of work in your company?</span>
        <Select
          className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
          value={workStyle}
          onChange={handleWorkStyleChange}
          options={workStylesQuestions}
          
        />
      </label>

      <label className="w-full block text-sm">
        <span className="text-gray-700 dark:text-gray-400">How would you characterize the way teams operate and collaborate in your company?</span>
        <Select
          className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
          value={teamDynamics}
          onChange={handleTeamDynamicsChange}
          options={teamDynamicsQuestions}
          
        />
      </label>

      <label className="w-full block text-sm">
        <span className="text-gray-700 dark:text-gray-400">How do your company and teams acknowledge and reward individual and team achievements?</span>
        <Select
          className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
          value={recognitionRewards}
          onChange={handleRecognitionRewardsChange}
          options={recognitionRewardsQuestions}
          
        />
      </label>

      <label className="w-full block text-sm">
        <span className="text-gray-700 dark:text-gray-400">How are disagreements and conflicts typically addressed within your company and teams?</span>
        <Select
          className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
          value={conflictResolution}
          onChange={handleConflictResolutionChange}
          options={conflictResolutionQuestions}
          
        />
      </label>
      <button
        type="submit"
        className="block w-[200px] px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-[#01382E] border border-transparent rounded-lg active:bg-[#01382E] hover:bg-[#13A8BD] focus:outline-none focus:shadow-outline-purple"
      >
        Save And Continue
      </button>
    </form>
  );
};

export default CultureForm;
