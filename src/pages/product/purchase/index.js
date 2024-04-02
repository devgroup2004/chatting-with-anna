//import components
import CounterButton from '../../../components/ui/common/CounterButton';

//import sytle
import "./style.scss";

const BuyProduct = () => {
    return (
        <>
            <div className="my-card m-4">
                <div className="my-card-header">
                    <p className="ml-10 mr-10">Your Cart</p>
                </div>
                <div className="my-card-body gap-4 grid grid-cols-4 ">
                    <div className="border border-gray-300 col-span-1">
                        <img src="images/good.png" alt=""/>
                    </div>
                    <div className="border border-gray-300 col-span-3">
                        <p className="text-2xl ml-4 mt-4">Vinut Sparkling Watermelon Juice, 6 x 11 Fl oz Cans, Non-GMO, No added Sugar, artificial preservatives, flavors, or colors, Rich in in vitamins A, C, and B6, antioxidants</p>
                        <div className="w-4/5 flex float-right pr-16 mt-10 pb-5">
                            <div className="flex-1">
                                <p>save</p>
                                <p className="text-2xl">23%</p>
                            </div>
                            <div className="flex-1">
                                <p>Now</p>
                                <p className="text-2xl text-red-600 font-bold">$5.98</p>
                            </div>
                            <div className="justify-center items-center w-[120px]">
                                <p className="mb-[6px]">Quantity</p>
                                <div className="">
                                    <CounterButton />
                                </div>
                            </div>
                            <div className="flex-1">
                                <p>Subtotal</p>
                                <p className="text-2xl">$11.96</p>
                                <p className="font-bold text-red-500 float-right ml-[-10px] pr-[70px]">
                                    Running out!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-card m-4">
                <div className="my-card-header">
                    <p className="ml-10 mr-10">Order Summary</p>
                </div>
                <div className="my-card-body flex justify-between">
                    <div className="w-1/3"/>
                    <div className="w-1/3 flex flex-col items-start">
                        <div className="text-2xl">Total Pay:</div>
                        <div className="text-green-500">-Congratulation!<span> You have saved:</span></div>
                    </div>
                    <div className="w-1/3 flex flex-col justify-end items-end mr-[200px]">
                        <div className="text-2xl text-red-500 font-bold">$11.96</div>
                        <div className="text-green-500">$8.75</div>
                    </div>
                </div>
            </div>
            <div className="m-4 grid grid-cols-3 gap-4">

                <div className="my-card col-span-2">
                    <div className="my-card-header">
                        <p className="pl-10 pr-10">Your Detail</p>
                    </div>
                    <div className="my-card-body">
                        <div className='gap-3 mt-5 m-auto w-1/2'>
                            <span className='flex-1 text-center w-1/4 text-lg'>Email Address:</span>
                            <span>aaaa.aaa1010@gmail.com</span>
                        </div>

                        <div className='flex gap-3 mt-5 m-auto w-1/2'>
                            <span className='text-center w-1/2 text-lg'>First Name: Lorem</span>
                            <span className='text-center w-1/2 text-lg'>Last Name: Lorem</span>
                        </div>

                        <div className='gap-3 m-auto w-1/2 mt-7'>
                            <span className='flex-1 text-center w-1/4 text-lg'>Address: Washington, District of Columbia, U.S</span>
                        </div>
                    </div>
                </div>
                    
                <div className="my-card col-span-1">
                    <div className="my-card-header">
                        <p className="pl-10 pr-10">Payment Method</p>
                    </div>
                    <div className='flex justify-center items-center'>
                        <div className="my-card-body flex gap-3">
                            <img className="w-1/4 h-auto" src="images/free1.png" alt=""/>
                            <img className="w-1/4 h-auto" src="images/free2.png" alt=""/>
                            <img className="w-1/4 h-auto" src="images/free3.png" alt=""/>
                            <img className="w-1/4 h-auto" src="images/free4.png" alt=""/>
                        </div>
                    </div>
                </div>

            </div>
        </>        
    )
}

export default BuyProduct;