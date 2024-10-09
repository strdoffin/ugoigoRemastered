'use client'
import { useState } from 'react';
import Image from 'next/image';

export default function ProfilePic() {
    const [image, setImage] = useState<string | null>(null);

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="relative flex justify-center rounded-full">
            <label htmlFor="dropzone-file" className="relative rounded-full aspect-square w-52 h-52 bg-white overflow-hidden border-4 border-[#72d1c0] cursor-pointer">
                {image ? (
                    <Image
                        src={image}
                        alt="Profile"
                        width={200}
                        height={200}
                        className="w-full h-full object-cover rounded-full"
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center cursor-pointer">
                        <div className="absolute top-20 w-10 h-10 flex items-center justify-center">
                            <div className="absolute w-[3px] h-full bg-[#72d1c0]"></div>
                            <div className="absolute h-[3px] w-full bg-[#72d1c0]"></div>
                        </div>
                    </div>
                )}
                <input
                    id="dropzone-file"
                    name="profilepic"
                    type="file"
                    className="hidden"
                    onChange={handleImageUpload}
                />
            </label>
        </div>
    );
}
