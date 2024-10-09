'use client'
import { useState } from "react"; // Import useState from React
import ProfilePic from "@/components/profilePic";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleLeft, faChevronCircleRight, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import Link from "next/link";
import { useRouter } from 'next/navigation'
export default function Page() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(prev => !prev);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(prev => !prev);
    };
    const router = useRouter()
    return (
        <>
            <div className="flex flex-col h-screen max-w-md mx-auto items-center rounded-xl bg-gradient-to-b from-[#C4E4E0] to-[#50988E]">
                <div className="w-full bg-[#579D93] p-4 rounded-t-lg mb-2 flex items-center">
                    <button onClick={() => { router.push("/") }} className=""> 
                        <FontAwesomeIcon icon={faChevronCircleLeft} className="text-white text-2xl" />
                    </button>
                    <h1 className="text-3xl md:text-4xl text-white text-center flex-[0.95]">UGOIGO</h1> 
                </div>

                <ProfilePic />
                <div className="my-7 flex flex-col gap-4 w-full px-4">
                    <div className="flex flex-col md:flex-row gap-6 justify-center">
                        <div className="flex flex-col w-full md:w-1/2">
                            <label htmlFor="Name" className="text-white">Name</label>
                            <input type="text" name="Name" id="Name" className="rounded-lg p-2 placeholder:px-1" placeholder="arai" />
                        </div>
                        <div className="flex flex-col w-full md:w-1/2">
                            <label htmlFor="Surname" className="text-white">Surname</label>
                            <input type="text" name="Surname" id="Surname" className="rounded-lg p-2 placeholder:px-1" placeholder="dee" />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="Username" className="text-white">Username</label>
                        <input type="text" name="Username" className="rounded-lg p-2 placeholder:px-1" placeholder="araimairoo" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="Email" className="text-white">Email</label>
                        <input type="email" name="Email" className="rounded-lg p-2 placeholder:px-1" placeholder="example@gmail.com" />
                    </div>
                    <div className="flex flex-col relative">
                        <label htmlFor="Password" className="text-white">Password</label>
                        <input type={showPassword ? "text" : "password"} name="Password" className="rounded-lg p-2 placeholder:px-1" placeholder="secret" />
                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="absolute right-2 top-8 text-[#50988E]"
                        >
                            {showPassword ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
                        </button>
                    </div>
                    <div className="flex flex-col relative">
                        <label htmlFor="ConfirmPassword" className="text-white">Confirm Password</label>
                        <input type={showConfirmPassword ? "text" : "password"} name="ConfirmPassword" className="rounded-lg p-2 placeholder:px-1" placeholder="secret" />
                        <button
                            type="button"
                            onClick={toggleConfirmPasswordVisibility}
                            className="absolute right-2 top-8 text-[#50988E]"
                        >
                            {showConfirmPassword ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
                        </button>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="Phone" className="text-white">Phone Number</label>
                        <input type="tel" name="Phone" className="rounded-lg p-2 placeholder:px-1" placeholder="xxx-xxxx-xxxx" />
                    </div>
                    <div className="flex flex-col items-center pt-6">
                        <button type="submit" onClick={()=>{router.push("/")}} className="p-2 flex justify-center w-full md:w-3/4 text-white bg-white rounded-lg">
                            <h2 className="text-gray-600">Create Account</h2>
                            <FontAwesomeIcon icon={faChevronCircleRight} className="text-2xl ml-2 text-[#579D93]" />
                        </button>
                        <p className="mt-2 text-white text-center">Already have an account? <Link href="/signin" className="underline font-bold">SIGN IN</Link></p>
                    </div>
                </div>
            </div>
        </>
    );
}
