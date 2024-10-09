'use client'
import { faChevronCircleLeft, faChevronCircleRight , faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from 'next/navigation'
import Image from "next/image";
import { useState } from "react";
export default function Page() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(prev => !prev);
    };
    const router = useRouter();
    return (
        <>
            <div className="flex flex-col h-screen max-w-md mx-auto items-center rounded-xl bg-gradient-to-b from-[#C4E4E0] to-[#50988E]">
                <div className="w-full bg-[#579D93] p-4 rounded-t-lg mb-4 flex items-center">
                    <button onClick={() => { router.back() }} className="">
                        <FontAwesomeIcon icon={faChevronCircleLeft} className="text-white text-2xl" />
                    </button>
                    <h1 className="text-4xl text-white text-center flex-[0.95]">UGOIGO</h1>
                </div>
                <div className="h-screen flex flex-col justify-center items-center w-full ">
                    <div className="w-full flex justify-center mb-20">
                        <Image src="/ugoigo.svg" width={300} height={300} alt="logo" />
                    </div>
                    <div className="border-2 py-5 w-5/6 rounded-2xl">
                        <div className="flex flex-col items-center ">
                            <div className="flex flex-col w-5/6">
                                <label htmlFor="Username" className="text-white">Username</label>
                                <input type="text" name="Username" className="rounded-lg p-2 placeholder:px-1" placeholder="araimairoo" />
                            </div>
                            <div className="flex flex-col w-5/6 relative">
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
                            <button type="submit" onClick={() => { router.push("/") }} className="mt-10 p-2 flex justify-center w-3/4 text-white bg-white rounded-lg">
                                <h2 className="text-gray-600">Sign In</h2>
                                <FontAwesomeIcon icon={faChevronCircleRight} className="text-2xl ml-2 text-[#579D93]" />
                            </button>
                            <p className="mt-2 text-white text-center">Don&apos;t have account ? <Link href="/signup" className="underline font-bold">SIGN UP</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
