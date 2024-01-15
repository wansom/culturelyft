'use client'
import { departments, newsurveyRoles, surveyTypes } from "@/app/services/data";
import { useState } from "react";
import Select from "react-tailwindcss-select";
import { ToastContainer, toast } from "react-toastify";

const StartSurvey = ({user}) => {
        const [formData, setFormData] = useState({
            title: '',
            departments: [],
            type: '',
            role : '',
           
          });
          const [responseType, setType] = useState('');
          const [department, setDepartment] = useState([])
          const[surveyRole,setSurveyRole]=useState(null)

          const handleDepartmentChange = (value) => {
            setDepartment(value)
            let newValue = [];
            for (let i = 0; i < value?.length; i++) {
              newValue.push(value[i].value);
            }
            setFormData((prevFormData) => ({
              ...prevFormData,
              departments: newValue,
            }));
        
          };
          const handletypeChange = value => {
        
            setFormData((prevFormData) => ({
              ...prevFormData,
              ['type']: value.value,
            }));
            setType(value)
          }
          const handleRoleChange = value => {
        
            setFormData((prevFormData) => ({
              ...prevFormData,
              ['role']: value.value,
            }));
            setSurveyRole(value)
          }
        
          const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData((prevFormData) => ({
              ...prevFormData,
              [name]: value,
            }));
          };
        const handleSubmit = async (e) => {
            e.preventDefault();
            try {
                console.log(formData);
            //   await createEmployeeProfile(formData);
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
                <span className="text-gray-700 dark:text-gray-400">Survey Title</span>
                <input
                  className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700  focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Culture Improvement survey"
                />
              </label>      
              <label className=" w-full block text-sm">
                <span className="text-gray-700 dark:text-gray-400">Select Response Type</span>
                <Select className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700  focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"              
                  value={responseType}
                  onChange={handletypeChange}
                  options={surveyTypes}
                />
              </label>
              <label className="block text-sm w-full">
                <span className="text-gray-700 dark:text-gray-400">Who Should Fill this survey?</span>
                <Select className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700  focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                  
                  value={department}
                  onChange={handleDepartmentChange}
                  options={departments}
                  isMultiple
                />
              </label>
              <label className="block text-sm w-full">
                <span className="text-gray-700 dark:text-gray-400">Role of this survey?</span>
                <Select className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700  focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                  
                  value={surveyRole}
                  onChange={handleRoleChange}
                  options={newsurveyRoles}
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
        </>
    );
}
 
export default StartSurvey;