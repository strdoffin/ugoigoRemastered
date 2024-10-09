import React from 'react';
import Image from 'next/image';

interface TripCardProps {
    title: string;
    location: string;
    description: string;
    imagesCount: number;
    mainImage: string;
    userImage: string;
}

const TripCard: React.FC<TripCardProps> = ({
    title,
    location,
    description,
    imagesCount,
    mainImage,
    userImage,
}) => {
    return (
        <div className="relative bg-white rounded-lg shadow-lg p-4 max-w-sm border border-gray-300 ">
            

            {/* Main Image */}
            <div className="relative w-full h-40 mb-4">
                <Image
                    src={mainImage}
                    alt={location}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                />
                {/* Image Counter */}
                <div className="absolute top-2 right-2 bg-gray-800 text-white text-sm px-2 py-1 rounded-lg opacity-75">
                    +{imagesCount}
                </div>
                {/* User Icon */}
                <div className="flex justify-center items-center bottom-0 right-0  rounded-full  h-16 aspect-square absolute z-10" >
                    <Image
                        src={userImage}
                        alt="User Icon"
                        width={32}
                        height={32}
                        className="relative rounded-full w-16 h-16 border-4 border-blue-500"
                    />
                </div>

            </div>

            {/* Card Content */}
            <div className="text-left">
                <span className="bg-blue-500 text-white rounded-md text-xs py-1 px-2 mb-2 inline-block">
                    ONE DAY TRIP
                </span>
                <h2 className="text-xl font-bold text-gray-800">{title}</h2>
                <p className="text-base font-semibold text-gray-600">{location}</p>
                <p className="text-sm text-gray-500 mt-2">{description}</p>
            </div>
        </div>
    );
};

export default TripCard;
