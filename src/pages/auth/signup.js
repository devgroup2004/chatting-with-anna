//import components
import TextInput from "../../components/ui/auth/TextInput";
import Button from "../../components/ui/auth/Button";
import GoogleBtn from "../../components/ui/auth/GoogleBtn";
import FacebookBtn from "../../components/ui/auth/FacebookBtn";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
    const navigate = useNavigate();
    return (
        <div className='h-full pt-10 flex flex-col justify-center'>
            <div>
            <div className='text-[50px] font-bold'>Welcome to Chatting with Anna</div>
                <div className='flex gap-3 mt-10 m-auto w-1/2'>
                    <span className='flex-1 text-right w-1/4 text-lg'>Email Address</span>
                    <div className="w-3/4">
                        <TextInput />
                    </div>
                </div>

                <div className='flex gap-3 mt-10 m-auto w-1/2'>
                    <span className='text-right w-1/2 text-lg'>First Name</span>
                    <div className="w-1/2">
                        <TextInput />
                    </div>
                    <span className='text-right w-1/2 text-lg'>Last Name</span>
                    <div className="w-1/2">
                        <TextInput />
                    </div>
                </div>

                <div className='flex gap-3 m-auto w-1/2 mt-10'>
                    <span className='flex-1 text-right w-1/4 text-lg'>Password</span>
                    <div className="w-3/4">
                        <TextInput />
                    </div>
                </div>

                <div className='flex gap-3 m-auto w-1/2 mt-10'>
                    <span className='flex-1 text-right w-1/4 text-lg'>Confirm Password</span>
                    <div className="w-3/4">
                        <TextInput />
                    </div>
                </div>

                <div className="w-[400px] m-auto flex flex-col gap-y-7 mt-10">
                    <Button text={"Sign up"} handleClick={() => {
                        navigate('/auth/signin');
                    }}/>
                    <GoogleBtn text="Sign up with Google"/>
                    <FacebookBtn text="Sign up with Facebook"/>
                </div>
            </div>
        </div>
    )
}

export default SignIn;