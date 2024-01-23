const MenuItem = ({text, }) => {
    return(
        <>
        <div className="cursor-pointer text-lg">
            {text}
        </div>
        </>
    )
}
const header = () => {
    return(
        <>
        <div className="bg-white flex justify-between py-4 px-3 text-black">
            <div className="flex gap-5">
                <div className="pr-10 border-r-2 border-black select-none text-lg">Chatbot with Anna</div>
                <MenuItem text={"About Us"}/>
                <MenuItem text={"Support"}/>
                <MenuItem text={"Products"}/>
                <MenuItem text={"Favourite"}/>
                <MenuItem text={"Help"}/>
            </div>
            <div className="flex gap-5">
                <MenuItem text={"Settings"}/>
                <MenuItem text={"Search"}/>
                <MenuItem text={"Sign In"}/>
            </div>
        </div>
        <div className="bg-[#19A5F3] text-white text-2xl py-2">
            Our Business can recommend you best products 
        </div>
        </>
    )
}

export default header;
