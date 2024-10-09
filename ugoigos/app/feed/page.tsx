'use client'
import TripCard from "@/components/TripCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons'
import {useRouter} from "next/navigation";
export default function Page() {
    const router = useRouter();
    return (
        <div className="flex flex-col h-screen max-w-md mx-auto items-center justify-center rounded-xl bg-gradient-to-b from-[#C4E4E0] to-[#50988E] overflow-hidden ">
            
            <div className="w-full bg-[#579D93] p-4 rounded-t-lg mb-4 flex items-center">
                    <button onClick={() => { router.back() }} className="">
                        <FontAwesomeIcon icon={faChevronCircleLeft} className="text-white text-2xl" />
                    </button>
                    <h1 className="text-4xl text-white text-center flex-[0.95]">UGOIGO</h1>
                </div>
                
            <div className="flex flex-col gap-6 w-full h-full overflow-y-auto p-4">
                <TripCard
                    title="Siam Center"
                    location="Bangkok"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae excepturi ab esse repellendus iste quis, sunt consectetur totam? Dolores, dolor."
                    imagesCount={3}
                    mainImage="/siam.jpg"
                    userImage="/dof.jpg"
                />
                <TripCard
                    title="Siam Center"
                    location="Bangkok"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae excepturi ab esse repellendus iste quis, sunt consectetur totam? Dolores, dolor."
                    imagesCount={3}
                    mainImage="/siam.jpg"
                    userImage="/dof.jpg"
                />
                <TripCard
                    title="Siam Center"
                    location="Bangkok"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae excepturi ab esse repellendus iste quis, sunt consectetur totam? Dolores, dolor."
                    imagesCount={3}
                    mainImage="/siam.jpg"
                    userImage="/dof.jpg"
                />
                <TripCard
                    title="Siam Center"
                    location="Bangkok"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae excepturi ab esse repellendus iste quis, sunt consectetur totam? Dolores, dolor."
                    imagesCount={3}
                    mainImage="/siam.jpg"
                    userImage="/dof.jpg"
                />
            </div>
        </div>
    );
}
