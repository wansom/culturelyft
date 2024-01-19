import Image from "next/image";

const EmptyState = ({message}) => {
    return ( 
        <div className="h-full w-full flex flex-col items-center justify-center">
        <Image
                  src="/icons/ic_folder_empty.svg"
                  alt="logo"
                  width={150}
                  height={100}
                />
                <p className="text-gray-300 text-16 font-bold">{message}</p>
  
        </div>
     );
}
 
export default EmptyState;