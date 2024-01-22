const BuyProduct = () => {
    return (
        <>
            <div className="rounded-lg overflow-hidden shadow-md border border-gray-300 m-4">
                <div className="bg-gray-400 p-2 flex justify-start items-center">
                    <p className="pl-10 pr-10 mr-10 font-bold text-white text-2xl">Your Cart</p>
                </div>
                <div class="bg-white p-4">
                    Some comment
                </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md border border-gray-300 m-4">
                <div className="bg-gray-400 p-2 flex justify-start items-center">
                    <p className="pl-10 pr-10 font-bold text-white text-2xl">Order Summary</p>
                </div>
                <div class="bg-white p-4">
                    Some comment
                </div>
            </div>
            <div className="m-4 grid grid-cols-3 gap-4">

                <div className="rounded-lg overflow-hidden shadow-md border border-gray-300 col-span-2">
                    <div className="bg-gray-400 p-2 flex justify-start items-center">
                        <p className="pl-10 pr-10 font-bold text-white text-2xl">Your Detail</p>
                    </div>
                    <div class="bg-white p-4">
                        Some comment
                    </div>
                </div>
                    
                <div className="rounded-lg overflow-hidden shadow-md border border-gray-300 col-span-1">
                    <div className="bg-gray-400 p-2 flex justify-start items-center">
                        <p className="pl-10 pr-10 font-bold text-white text-2xl">Payment Method</p>
                    </div>
                    <div class="bg-white p-4">
                        Some comment
                    </div>
                </div>

            </div>
        </>        
    )
}

export default BuyProduct;