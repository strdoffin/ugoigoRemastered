'use client'
import { faChevronCircleLeft, faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from 'next/navigation'
import Image from "next/image";
export default function Page() {
    const router = useRouter();
    return (
        <>
            <div className="flex flex-col h-screen max-w-md mx-auto items-center rounded-xl bg-gradient-to-b from-[#C4E4E0] to-[#50988E]">
                <div className="w-full bg-[#579D93] p-4 rounded-t-lg mb-4 flex items-center">
                    <button onClick={()=>{router.back()}} className="">
                        <FontAwesomeIcon icon={faChevronCircleLeft} className="text-white text-2xl" />
                    </button>
                    <h1 className="text-3xl md:text-4xl text-white text-center flex-[0.95]">UGOIGO</h1>
                </div>
                <div>
                    <Image src ="/ugoigo.svg" fill alt="logo" / >
                </div>
                <div className="flex flex-col items-center pt-9">
                    <button type="submit" onClick={() => { router.push("/") }} className="p-2 flex justify-center w-full md:w-3/4 text-white bg-white rounded-lg">
                        <h2 className="text-gray-600">Sign In</h2>
                        <FontAwesomeIcon icon={faChevronCircleRight} className="text-2xl ml-2 text-[#579D93]" />
                    </button>
                    <p className="mt-2 text-white text-center">Don&apos;t have account ? <Link href="/signup" className="underline font-bold">SIGN UP</Link></p>
                </div>
            </div>
        </>

    )
}
