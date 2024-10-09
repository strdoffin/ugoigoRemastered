import TripCard from "@/components/TripCard";
export default function Page() {
    return (
        <div className="flex flex-col h-screen max-w-md mx-auto items-center justify-center rounded-xl bg-gradient-to-b from-[#C4E4E0] to-[#50988E] overflow-hidden">
            <div className="flex flex-col w-full h-full overflow-y-auto p-4">
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
