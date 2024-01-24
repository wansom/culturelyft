'use client'
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Select from 'react-tailwindcss-select';
import 'react-toastify/dist/ReactToastify.css';
import { departments, organizationTypes } from "@/app/services/data";
import { updateUserDetails } from "@/app/services/firestore";

const OverviewForm = ({user,updateProgress}) => {
    const [formData, setFormData] = useState({
        company: '',
        companyEmail: '',
        phoneNumber: '',
        departments: [],
        organizationType: '',
        city: '',
        profileUpdate:'50%',
        profileStage:'Company Culture'
      });
      const [animal, setAnimal] = useState(null);
      const [organizationType, setOrganizationType] = useState(null)

      const handleDepartmentChange = (value) => {
        setAnimal(value)
        let newValue = [];
        for (let i = 0; i < value.length; i++) {
          newValue.push(value[i].value);
        }
        setFormData((prevFormData) => ({
          ...prevFormData,
          departments: newValue,
        }));
    
      };
      const handleOrganizationChange = value => {
    
        setFormData((prevFormData) => ({
          ...prevFormData,
          ['organizationType']: value.value,
        }));
        setOrganizationType(value)
      }
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name);
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
          uid: user.id,
          data: formData,

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
          updateProgress('Company Culture','50%')
        } catch (error) {
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
        <div className=" space-y-5 mb-10">

          <label className="block text-sm w-full">
            <span className="text-gray-700 dark:text-gray-400">Company Name</span>
            <input
              className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700  focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Culture Lyft"
            />
          </label>

          <label className="block text-sm w-full">
            <span className="text-gray-700 dark:text-gray-400">Company Email</span>
            <input
              className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700  focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
              type="email"
              name="companyEmail"
              value={user.companyEmail}
              onChange={handleChange}
              placeholder="hr@culturelyft.com"
            />
          </label>
          <label className="block text-sm w-full">
            <span className="text-gray-700 dark:text-gray-400">Phone Number</span>
            <input
              className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700  focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="+1-212-456-7890"
            />
          </label>
          <label className=" w-full block text-sm">
            <span className="text-gray-700 dark:text-gray-400">City</span>
            <input
              className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700  focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="San Francisco"
            />
          </label>
          <label className=" w-full block text-sm">
            <span className="text-gray-700 dark:text-gray-400">Departments</span>
            <Select className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700  focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
              value={animal}
              onChange={handleDepartmentChange}
              options={departments}
              isMultiple
            />
          </label>
          <label className="block text-sm w-full">
            <span className="text-gray-700 dark:text-gray-400">Type of Organization</span>
            <Select className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700  focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
              value={organizationType}
              onChange={handleOrganizationChange}
              options={organizationTypes}

            />
          </label>
        </div>

        <button
          type="submit"
          className="block w-[200px] px-4 py-2 mt-2 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-[#01382E] border border-transparent rounded-lg active:bg-[#01382E] hover:bg-[#13A8BD] focus:outline-none focus:shadow-outline-purple"
        >
          Save And Continue
        </button>
      </form>
     );
}
 
export default OverviewForm;