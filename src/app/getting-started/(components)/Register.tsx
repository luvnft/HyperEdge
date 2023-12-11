"use client"
import Image from 'next/image';
import { arrowUp } from '../../(assets)';
import { useState } from 'react'
import { useRouter } from 'next/navigation';

const Register = ({setConfirm}:any) => {
    const router = useRouter()
    const [role, setRole] = useState("-1");
    const [labels, setLabels] = useState({fname: "",lname: "",email: "" });
    const [isLoading, setIsLoading] = useState(false);

    const handleRoleChange = (e:any)=>{
        setRole(e.target.value)
        if(e.target.value=="1"){
            setLabels({fname: "Representaive First Name", lname: "Representaive Last Name", email: "Business Email" })
        }else{
            setLabels({fname: "First Name", lname: "Last Name", email: "Email" })
        }
    }
    const handleSubmit = ()=>{
        setIsLoading(!isLoading)
        // setConfirm(true)
    }
  return (
    <>
        <div className="h-screen relative bg-gray-gradient overflow-hidden">
        <div className="absolute bg-gradient-to-br h-full rounded-full blue__gradient blur-2xl circle-left"></div>
        <div className="absolute bg-gradient-to-br h-full rounded-full blue__gradient blur-2xl circle-right"></div>

        <div className="absolute w-96 h-96 backdrop-blur-sm pink__gradient rounded-full z-9 top-1/2 right-1/2"></div>
        <div className="absolute w-72 h-72 backdrop-blur-sm pink__gradient rounded-full z-9 bottom-1/2 left-1/2"></div>
        <div className="absolute w-16 h-16 backdrop-blur-sm bg-black-gradient rounded-full z-9 inset-y-2/4 inset-x-3/4"></div>

        <div className="absolute top-0 w-full h-screen backdrop-blur-sm bg-gradient-to-br to-gray-600/30 from-gray-800/40"></div>
    </div>

    <div className="flex justify-center">
        <div className="w-[90%] sm:w-5/6 md:w-4/6 xl:w-3/6 absolute top-[8%] backdrop-blur-xl bg-white/10 rounded-lg p-6 xs:p-10 sm:p-10 md:p-10">
            <h1 className="text-white font-semibold text-xl sm:text-2xl md:text-3xl mb-2">Get Started for free</h1>
            <p className="text-white text-xs sm:text-xl mb-5">Register yourself as a Creator or a Brand</p>
            <div className="relative text-sm xl:text-base">
                <div className="flex flex-col gap-2 mb-4">
                    <label className="text-white" htmlFor="role">Role</label>
                    <select onChange={handleRoleChange}  id="role" className={`${role== "-1"? 'text-gray-300' : 'text-white'} outline-none focus:border-[#def9fa] w-full form-input py-2 px-4 rounded-md bg-transparent border border-white/30`}>
                        <option className="text-black" selected value="-1">What best describes you ?</option>
                        <option className="text-black" value="0">Influencer</option>
                        <option className="text-black" value="1">Brand</option>
                    </select>
                </div>
                {
                    role=="-1"? null : (
                <>
                <div className="sm:flex flex-1 items-center gap-4 mb-4">
                    <div className="flex flex-col gap-2 w-full mb-4 sm:mb-0">
                        <label className="text-white" htmlFor="fname">{labels.fname}</label>
                        <input 
                            type="text" 
                            id="fname"
                            placeholder="First Name..." 
                            className="placeholder:text-gray-300 text-white outline-none focus:border-[#def9fa] w-full form-input py-2 px-4 rounded-md bg-transparent border border-white/30"
                        />
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                        <label className="text-white" htmlFor="lname">{labels.lname}</label>
                        <input 
                            type="text" 
                            id="lname"
                            placeholder="Last Name..." 
                            className="placeholder:text-gray-300 text-white outline-none focus:border-[#def9fa] w-full form-input py-2 px-4 rounded-md bg-transparent border border-white/30"
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-2 mb-4">
                    <label className="text-white" htmlFor="email">{labels.email}</label>
                    <input 
                        type="email"
                        id="email" 
                        placeholder="Enter your email.." 
                        className="placeholder:text-gray-300 text-white outline-none focus:border-[#def9fa] w-full form-input py-2 px-4 rounded-md bg-transparent border border-white/30"
                    />
                </div>
                <div className="flex flex-col gap-2 mb-4">
                    <label className="text-white" htmlFor="password">Password</label>
                    <input 
                        type="password"
                        id="password" 
                        placeholder="Enter your password.." 
                        className="placeholder:text-gray-300 text-white outline-none focus:border-[#def9fa] w-full form-input py-2 px-4 rounded-md bg-transparent border border-white/30"
                    />
                </div>
                </>
                )}
                <div className='flex items-center gap-2 mt-2'>
                    <button onClick={handleSubmit} className={`flex items-center justify-center text-sm py-2 px-4 xs:py-2 xs:px-6 font-medium xl:text-base text-dimWhite bg-transparent -outline-offset-2 outline-2 outline-dimWhite rounded-[10px] outline-none`}>
                        <Image src={arrowUp} className="rotate-[220deg]" alt="up"/>
                        <span>Back</span>
                    </button>
                    <button onClick={handleSubmit} className={`flex items-center justify-center text-sm py-2 px-4 xs:py-2 xs:px-6 font-medium xl:text-base text-primary bg-blue-gradient rounded-[10px] outline-none`}>
                        {
                            isLoading? 
                            <div className="animate-spin inline-block w-5 h-5 xl:w-6 xl:h-6 border-[3px] border-current border-t-transparent text-cyan-700 rounded-full dark:text-white" role="status" aria-label="loading">
                                <span className="sr-only">Loading...</span>
                            </div>:"Submit"
                        }
                    </button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Register
