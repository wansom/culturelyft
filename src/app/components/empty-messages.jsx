import Image from "next/image";

const EmptyMessages = () => {
    return ( 
        <div className="h-full w-full flex flex-col items-center justify-center">
        <Image
                  src="/icons/ic_email_disabled.svg"
                  alt="logo"
                  width={150}
                  height={100}
                />
                <p className="text-gray-300 text-16 font-bold">No messages selected</p>
  
        </div>
     );
}
 
export default EmptyMessages;