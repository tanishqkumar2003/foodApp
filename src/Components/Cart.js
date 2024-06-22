import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../Redux/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);

    const dispatch = useDispatch();
    const handleClearCart = ()=>{
        dispatch(clearCart());
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
                    return (
                        <div className="bg-slate-100 my-4" key={index}>
                            {/* <p>{cartItem.name}</p> */}
                            <ItemList data={cartItem}/>
                        </div>
                    );
                })}

                {cartItems.length===0 && <h1 className="my-4 font-bold text-xl">Your cart is empty Add Items to Cart</h1>}
            </div>
        </div>
    );
};

export default Cart;
