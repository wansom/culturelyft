'use client'
import { questions, conflictResolutionQuestions, decisionMakingQuestions, recognitionRewardsQuestions, teamDynamicsQuestions, workStylesQuestions } from "@/app/services/data";
import { updateUserDetails } from "@/app/services/firestore";
import { useState } from "react";
import Select from "react-tailwindcss-select";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";


const CultureForm = ({user,updateProgress}) => {
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

  const handleSubmit =async (e) => {
    e.preventDefault();
    // Perform any validation if needed
    if (!decisionMaking || !communicationChannels || !workStyle || !teamDynamics || !recognitionRewards || !conflictResolution) {
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
        culture:[
          decisionMaking,communicationChannels,workStyle,teamDynamics,recognitionRewards,conflictResolution
        ],
        profileUpdate:'75%',
        profileStage:'Expected outcomes'
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
      updateProgress('Expected outcomes','75%')
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
    <form className="space-y-4" onSubmit={handleSubmit}>
      <ToastContainer/>
      <label className="w-full block text-sm">
        <span className="text-gray-700 dark:text-gray-400">{questions[0].question}</span>
        <Select
          className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
          value={decisionMaking}
          onChange={handleDecisionMakingChange}
          options={questions[0].options}
          
        />
      </label>

      <label className="w-full block text-sm">
        <span className="text-gray-700 dark:text-gray-400">{questions[1].question}</span>
        <Select
          className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
          value={communicationChannels}
          onChange={handleCommunicationChannelsChange}
          options={questions[1].options}
          
        />
      </label>

      <label className="w-full block text-sm">
        <span className="text-gray-700 dark:text-gray-400">{questions[2].question}</span>
        <Select
          className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
          value={workStyle}
          onChange={handleWorkStyleChange}
          options={questions[2].options}
          
        />
      </label>

      <label className="w-full block text-sm">
        <span className="text-gray-700 dark:text-gray-400">{questions[3].question}</span>
        <Select
          className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
          value={teamDynamics}
          onChange={handleTeamDynamicsChange}
          options={questions[3].options}
          
        />
      </label>

      <label className="w-full block text-sm">
        <span className="text-gray-700 dark:text-gray-400">{questions[4].question}</span>
        <Select
          className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
          value={recognitionRewards}
          onChange={handleRecognitionRewardsChange}
          options={questions[4].options}
          
        />
      </label>

      <label className="w-full block text-sm">
        <span className="text-gray-700 dark:text-gray-400">{questions[5].question}</span>
        <Select
          className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
          value={conflictResolution}
          onChange={handleConflictResolutionChange}
          options={questions[5].options}
          
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
