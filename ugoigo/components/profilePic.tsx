

export default function ProfilePic() {


    return (
        <div className="relative flex justify-center  rounded-full">
            <div className="relative  rounded-full aspect-square w-52 h-52 bg-white">
                <input
                    id="dropzone-file"
                    name="profilepic"
                    type="file"
                    className="hidden "
                />
                <label htmlFor="dropzone-file" className="absolute inset-0 flex items-center justify-center cursor-pointer">
                    <div className="absolute top-20 w-10 h-10  flex items-center justify-center ">
                        <div className="absolute w-[3px] h-full bg-[#72d1c0]"></div>
                        <div className="absolute h-[3px] w-full bg-[#72d1c0]"></div>
                    </div>
                </label>
            </div>

        </div>
    );
}
