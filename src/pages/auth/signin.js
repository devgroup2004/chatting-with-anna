

//import components
import TextInput from "../../components/ui/auth/TextInput";
import Button from "../../components/ui/auth/Button";
import GoogleBtn from "../../components/ui/auth/GoogleBtn";
import FacebookBtn from "../../components/ui/auth/FacebookBtn";


const SignIn = () => {
    return (
        <div className='h-full pt-10'>
            <div className='text-[45px] font-bold'>Welcome to Chatting with Anna</div>

            <div className='flex gap-3 mt-5 m-auto w-2/5'>
                <span className='flex-1 text-left w-1/4 text-lg'>Email Address</span>
                <div className="w-3/4">
                    <TextInput />
                </div>
            </div>

            <div className='flex gap-3 m-auto w-2/5 mt-7'>
                <span className='flex-1 text-left w-1/4 text-lg'>Password</span>
                <div className="w-3/4">
                    <TextInput />
                </div>
            </div>

            <div className="w-2/5 text-lg flex justify-end m-auto mt-2">
                <span className="cursor-pointer select-none">Forgot Password</span>
            </div>
            <div className="w-[400px] m-auto flex flex-col gap-5 mt-5">
                <Button text={"Sign in"}/>
                <Button text={"Sign up"}/>
                <GoogleBtn />
                <FacebookBtn />
            </div>
        </div>
    )
}

export default SignIn;