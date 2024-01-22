import  "./style.scss";

const BuyProduct = () => {
    return (
        <>
            <div className="my-card m-4">
                <div className="my-card-header">
                    <p className="ml-10 mr-10">Your Cart</p>
                </div>
                <div className="my-card-body">
                    <div className="border border-gray-300 col-span-1"> image </div>
                    <div className="border border-gray-300 col-span-3">
                        <p className="text-2xl">Vinut Sparkling Watermelon Juice, 6 x 11 Fl oz Cans, Non-GMO, No added Sugar, artificial preservatives, flavors, or colors, Rich in in vitamins A, C, and B6, antioxidants</p>
                    </div>
                </div>
            </div>
            <div className="my-card m-4">
                <div className="my-card-header">
                    <p className="ml-10 mr-10">Order Summary</p>
                </div>
                <div className="bg-white p-4">
                    Some comment
                </div>
            </div>
            <div className="m-4 grid grid-cols-3 gap-4">

                <div className="my-card col-span-2">
                    <div className="my-card-header">
                        <p className="pl-10 pr-10">Your Detail</p>
                    </div>
                    <div className="bg-white p-4">
                        Some comment
                    </div>
                </div>
                    
                <div className="my-card col-span-1">
                    <div className="my-card-header">
                        <p className="pl-10 pr-10">Payment Method</p>
                    </div>
                    <div className="bg-white p-4">
                        Some comment
                    </div>
                </div>

            </div>
        </>        
    )
}

export default BuyProduct;