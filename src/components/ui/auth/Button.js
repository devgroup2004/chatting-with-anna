const Button = ({text}) => {
    return(
        <div className="bg-[#19A5F3] rounded-3xl text-white w-full py-2 
            cursor-pointer select-none text-[18px]">
            { text }
        </div>
    )
}

export default Button;