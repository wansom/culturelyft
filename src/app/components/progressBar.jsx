const ProgressBar = ({stage, percent}) => {
    return (
        <>

            <div class="flex justify-between mb-1 items-center w-full">
                <span class="text-base font-medium text-[#01382E] dark:text-white">{stage}</span>
                <span class="text-sm font-medium text-[#01382E] dark:text-white">{percent}</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div class="bg-[#01382E] h-2.5 rounded-full" style={{width:percent}}></div>
            </div>

        </>
    );
}

export default ProgressBar;