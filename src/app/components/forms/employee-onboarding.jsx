'use state'
import { departments, profileTypes } from "@/app/services/data";
import { createEmployeeProfile } from "@/app/services/firestore";
import { useState } from "react";
import Select from "react-tailwindcss-select";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const EmployeeOnboarding = ({user}) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        role: '',
        date: '',
        department: '',
        profilePreference: [],
        employer:user.id,
        response:false
       
      });
      const [animal, setAnimal] = useState(null);
      const [profileType, setprofileType] = useState(null)

      const handleDepartmentChange = (value) => {
        setAnimal(value)
        let newValue = [];
        for (let i = 0; i < value.length; i++) {
          newValue.push(value[i].value);
        }
        setFormData((prevFormData) => ({
          ...prevFormData,
          profilePreference: newValue,
        }));
    
      };
      const handleprofileChange = value => {
    
        setFormData((prevFormData) => ({
          ...prevFormData,
          ['department']: value.value,
        }));
        setprofileType(value)
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
        try {
          await createEmployeeProfile(formData);
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
    return (<>
                <ToastContainer/>
     <form onSubmit={handleSubmit}>

        <div className=" space-y-5 mb-10">

          <label className="block text-sm w-full">
            <span className="text-gray-700 dark:text-gray-400">Employee Name</span>
            <input
              className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700  focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Vincent Kompany"
            />
          </label>

          <label className="block text-sm w-full">
            <span className="text-gray-700 dark:text-gray-400">Employee Email</span>
            <input
              className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700  focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="hr@culturelyft.com"
            />
          </label>
          <label className="block text-sm w-full">
            <span className="text-gray-700 dark:text-gray-400">Role</span>
            <input
              className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700  focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
              type="text"
              name="role"
              value={formData.role}
              onChange={handleChange}
              placeholder="Fullstack Engineer"
            />
          </label>
          <label className=" w-full block text-sm">
            <span className="text-gray-700 dark:text-gray-400">Date Hired</span>
            <input
              className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700  focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              placeholder=""
            />
          </label>
          <label className=" w-full block text-sm">
            <span className="text-gray-700 dark:text-gray-400">Department</span>
            <Select className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700  focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"              
              value={profileType}
              onChange={handleprofileChange}
              options={departments}
            />
          </label>
          <label className="block text-sm w-full">
            <span className="text-gray-700 dark:text-gray-400">Which Profile Areas do you want to create</span>
            <Select className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700  focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
              
              value={animal}
              onChange={handleDepartmentChange}
              options={profileTypes}
              isMultiple
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
    </>);
}
 
export default EmployeeOnboarding;