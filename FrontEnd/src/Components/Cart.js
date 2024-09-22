import { useDispatch, useSelector } from "react-redux";
// import ItemList from "./ItemList";
import { clearCart, removeItems } from "../Redux/cartSlice";
import { CDN_URL } from "../utils/Constants";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);

    const dispatch = useDispatch();
    const handleClearCart = ()=>{
        dispatch(clearCart());
    }
    const handleRemoveItem = (id)=>{
        dispatch(removeItems(id));
    }

    return (
        <div className="flex flex-col justify-center">
            <div className=" w-[800px] shadow-xl my-5 py-3 rounded-lg border flex justify-between px-4 mx-[380px]">
                <h1 className="text-3xl font-bold text-center mt-3">Cart ({cartItems.length})</h1>
                <button className="bg-blue-500 w-28 h-10 text-white my-3 rounded-lg text-lg font-semibold"
                    onClick={handleClearCart}>Clear Cart</button>
            </div>
            <div className="w-6/12 mx-[400px] ">
                {cartItems.map((cartItem, index) => {
                //     return (
                //         <div className="bg-slate-100 my-4" key={index}>
                //             {/* <p>{cartItem.name}</p> */}
                //             <ItemList data={cartItem}/>
                //         </div>
                //     );
                return(

                    <div key={cartItem.id} className="border shadow-lg p-2 mb-2 rounded-lg flex mt-2 relative">
                <div className="flex flex-col px-2">
                    <span className="text-xl font-semibold w-[50%] py-3">{cartItem.name}</span>
                    <span className="font-medium text-lg w-44 pb-3">Rs.{cartItem.price ? cartItem.price / 100 : cartItem.defaultPrice / 100}</span>
                    <p className="font-normal">{cartItem.description}</p>
                </div>
                <div className="relative w-44 ml-auto">
                    <div className="w-44 h-44 overflow-hidden">
                        <img className="w-full h-full object-cover rounded-md" src={CDN_URL + cartItem.imageId} alt={cartItem.name} />
                    </div>
                    <button className="font-bold text-lg bg-yellow-50 w-20 absolute bottom-1 left-1/2 transform -translate-x-1/2 rounded-xl"
                        onClick={()=>{handleRemoveItem(cartItem.id)}}
                    >Remove</button>
                </div>
            </div>
             
            
                     
                )



                })}

                {cartItems.length===0 && <h1 className="my-4 font-bold text-xl">Your cart is empty Add Items to Cart</h1>}
            </div>
        </div>
    );
};

export default Cart;
