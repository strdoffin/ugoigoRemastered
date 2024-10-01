import ProfilePic from "@/components/profilePic";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleRight} from '@fortawesome/free-solid-svg-icons'
export default function Page() {
  return (
    <>
        <div className="flex flex-col w-screen h-screen justify-center items-center ">
            <div className="absolute top-0 w-full bg-[#579D93] p-3">
                <h1 className="text-4xl text-white text-center">UGOIGO</h1>
            </div>
            <ProfilePic />
            <div className=" my-7 flex flex-col gap-2 ">
                <div className="flex gap-11 w-full justify-center">
                    <div className="flex flex-col">
                        <label htmlFor="Name" className="text-white">Name</label>
                        <input type="text" name="Name" id="Name" className="rounded-lg p-1 placeholder:px-1" placeholder="arai"/>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="Surname" className="text-white">Surname</label>
                        <input type="text" name="Surname" id="Surname" className="rounded-lg p-1 placeholder:px-1" placeholder="dee"/>
                    </div>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="Username"className="text-white">Username</label>
                    <input type="text" name="Username" className="rounded-lg p-1 placeholder:px-1" placeholder="araimairoo" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="Email"className="text-white">Email</label>
                    <input type="email" name="Email" className="rounded-lg p-1 placeholder:px-1" placeholder="example@gmail.com" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="Password"className="text-white">Password</label>
                    <input type="password" name="Password" className="rounded-lg p-1 placeholder:px-1" placeholder="secret" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="ConfirmPassword" className="text-white">ConfirmPassword</label>
                    <input type="password" name="ConfirmPassword" className="rounded-lg p-1 placeholder:px-1" placeholder="secret" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="Phone" className="text-white">Phone Number</label>
                    <input type="text" name="Phone" className="rounded-lg p-1 placeholder:px-1" placeholder="xxx-xxxx-xxxx" />
                </div>
                <div className="flex flex-col items-center pt-9">
                    <button className="p-2 flex justify-center w-3/4 text-white bg-white rounded-lg ">
                        <h2 className="text-gray-600">Create Account</h2>
                        <FontAwesomeIcon icon={faChevronCircleRight} className="text-2xl ml-2 text-[#579D93]" />
                    </button>
                    <p className="mt-2 text-white">Already have account ? <span className="underline font-bold">SIGN IN</span></p>
                </div>
            </div>

        </div>
    </>
    
  );
}
