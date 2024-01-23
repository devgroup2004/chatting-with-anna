//import components
import TextInput from "../../components/ui/auth/TextInput";
import Button from "../../components/ui/auth/Button";
import GoogleBtn from "../../components/ui/auth/GoogleBtn";
import FacebookBtn from "../../components/ui/auth/FacebookBtn";
import {useNavigate} from 'react-router-dom'

import { useAuthStore } from "../../store";

const SignIn = () => {
    const navigate = useNavigate();
    const { logIn } = useAuthStore();

    return (
        <div className='h-full pt-10 flex flex-col justify-center'>
            <div>
                <div className='text-[45px] font-bold'>Welcome to Chatting with Anna</div>

                <div className='flex gap-3 mt-10 m-auto w-2/5'>
                    <span className='flex-1 text-right w-1/4 text-lg'>Email Address</span>
                    <div className="w-3/4">
                        <TextInput />
                    </div>
                </div>

                <div className='flex gap-3 m-auto w-2/5 mt-10'>
                    <span className='flex-1 text-right w-1/4 text-lg'>Password</span>
                    <div className="w-3/4">
                        <TextInput />
                    </div>
                </div>

                <div className="w-2/5 text-lg flex justify-end m-auto mt-2">
                    <span className="cursor-pointer select-none" onClick={(e) => {
                        navigate('/auth/changepass')
                        }}>
                            Forgot Password
                    </span>
                </div>
                <div className="w-[400px] m-auto flex flex-col gap-y-7 mt-10">
                    <Button text={"Sign in"}  handleClick={() => {
                        logIn();
                        navigate('/mainboard');
                    }}/>
                    <Button text={"Sign up"}  handleClick={() => {navigate('/auth/signup')}}/>
                    <GoogleBtn text="Sign in with Google"/>
                    <FacebookBtn text="Sign in with Facebook"/>
                </div>
            </div>
        </div>
    )
}

export default SignIn;