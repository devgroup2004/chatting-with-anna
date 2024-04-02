
import { useNavigate } from "react-router-dom";

//import components
import PictureSlider from "../../../components/ui/common/PictureSlider";

const ProductDetail = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="w-full flex">
                <div className="w-1/5 ml-5 h-[70vh] flex flex-col mt-10 mb-10 bg-gray-300 items-center justify-center">
                    <img className="w-4/5 m-auto" src="images/good.png"/>
                    <PictureSlider />
                </div>
                <div className="flex flex-col w-4/5 mt-12 pl-5 pr-5">
                    <div className="w-full flex flex-col justify-start items-start pl-10 pb-10 border-b-black border">
                        <div className="text-2xl font-bold text-left">
                            Vinut Sparkling Watermelon Juice, 6 x 11 Fl oz Cans, Non-GMO, No added Sugar, artificial preservatives, flavors, or colors, Rich in in vitamins A, C, and B6, antioxidants
                        </div>
                        <div className="text-sky-500 font-bold float-start mt-5 pl-10">18 reviews</div>
                        <div className="flex w-full justify-between pl-10">
                            <div className="flex flex-col">
                                <div className="float-start mt-1 flex">
                                    <span className="text-sky-500 font-bold ">100+</span>
                                    <span> bought until now</span>
                                </div>
                                <div className="float-start">
                                    <div className="mt-2">Click <span className="text-sky-500">here</span> why this is recommended for you</div>
                                </div>
                            </div>
                            <div className="flex justify-end items-end gap-3 pr-5">
                                <div className="pt-3 pb-3 pl-5 pr-5 border border-gray-500 rounded-full font-bold flex gap-2 cursor-pointer select-none">
                                    <img src="images/addcart.png" />
                                    ADD TO CART
                                </div>
                                <div className="pt-3 pb-3 pl-5 pr-5 bg-sky-500 rounded-full font-bold text-white flex gap-2 
                                    cursor-pointer select-none hover:bg-orange-400" onClick={(e) => {
                                        navigate('/purchase');
                                    }}>
                                    <img src="images/buynow.png" />
                                    BUY NOW!
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex flex-col justify-start items-start pl-10 pb-10">
                        <div className="font-bold float-start pt-5 pb-5">About this item</div>
                        <div className="text-left pb-5">
                            <ul className="list-disc ml-10">
                                <li>
                                    A Refreshing Twist on a Classic Favorite: When you’re seeking a beverage that combines the delicious taste of a summertime classic with the invigorating fizz of sparkling water, look no further than 11 fl oz VINUT Sparkling Watermelon Juice. This delightful drink offers a tantalizing fusion of sweet, juicy watermelon flavor and the effervescence of sparkling water, resulting in a taste experience that is both refreshing and exhilarating. Expertly crafted with the finest ingredients.
                                </li>
                                <li>
                                    The Star Ingredient: The key ingredient in the 11 fl oz VINUT Sparkling Watermelon Juice is, of course, the watermelon itself. This juicy, sweet fruit is beloved by many for its refreshing taste and hydrating properties, making it the perfect star of this effervescent beverage.No added Sugar, artificial preservatives, flavors, or colors, Rich in vitamins A, C, and B6, antioxidants.
                                </li>
                                <li>
                                    The Benefits of Watermelon: Watermelon is not only delicious but also offers a range of benefits. As an excellent source of hydration, watermelon is ideal for quenching your thirst on a hot day. Additionally, this delectable fruit is packed with vitamins A, C, and B6, as well as antioxidants like lycopene.
                                </li>
                                <li>
                                    The VINUT Difference: When you choose the 11 fl oz. VINUT Sparkling Watermelon Juice, you’re selecting a beverage that has been crafted with care and attention to detail. From the selection of the finest watermelons to the expert blending of flavors, every aspect of this drink has been designed to deliver an exceptional taste experience. It’s no surprise that VINUT has become synonymous with quality and innovation in the world of beverages.
                                </li>
                                <li>
                                    Versatility in a Bottle: Enjoy It Your Way, one of the great things about the 11 fl oz. VINUT Sparkling Watermelon Juice is its versatility. Enjoy it chilled, straight from the bottle, for a refreshing and energizing drink on a hot day. Alternatively, try pouring it over ice for a delightful and cooling treat, or mix it with your favorite spirits and garnishes for a fun and fruity cocktail that’s sure to impress.
                                </li>
                            </ul>
                        </div>
                        <div className="text-sky-500 pb-10 ml-10 cursor-pointer select-none text-lg">more</div>
                        <div className="pt-3 pb-3 pl-10 pr-10 bg-sky-500 rounded-full font-bold text-white flex gap-2 cursor-pointer select-none hover:bg-orange-400">
                            <img src="images/review.png" />
                            REVIEW
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetail;