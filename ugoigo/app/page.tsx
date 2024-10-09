// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Image from "next/image";
import Link from "next/link";
export default function Home() {
    return (
        <div className="flex flex-col h-screen max-w-md mx-auto items-center justify-center rounded-xl bg-gradient-to-b from-[#C4E4E0] to-[#50988E]">
            <Image src="/ugoigo.svg" width={300} height={300} alt="logo" />
            <h1 className="text-7xl font-bold text-white">U G O I G O</h1>
            <div className="w-11/12 h-[2px] bg-white mt-2"></div>
            <Link className="w-44 h-12 mt-5 bg-[#579D93] rounded-3xl flex justify-center items-center text-white font-semibold text-2xl" href="/signin">Get Started</Link>
        </div>
    );
}
