import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/Constants";
import { addItems } from "../Redux/cartSlice";

const ItemList = ({data})=>{

const dispatch = useDispatch();

const handleAdditem = (data)=>{
    // Dispatch an Action
    dispatch(addItems(data));
}    

    return(

        <div className="border shadow-lg p-2 mb-2 rounded-lg flex mt-2 relative">
    <div className="flex flex-col px-2">
        <span className="text-xl font-semibold w-[50%] py-3">{data.name}</span>
        <span className="font-medium text-lg w-44 pb-3">Rs.{data.price ? data.price / 100 : data.defaultPrice / 100}</span>
        <p className="font-normal">{data.description}</p>
    </div>
    <div className="relative w-44 ml-auto">
        <div className="w-44 h-44 overflow-hidden">
            <img className="w-full h-full object-cover rounded-md" src={CDN_URL + data.imageId} alt={data.name} />
        </div>
        <button className="font-bold text-lg bg-yellow-50 w-20 absolute bottom-1 left-1/2 transform -translate-x-1/2 rounded-xl"
            onClick={() => handleAdditem(data)}
        >Add+</button>
    </div>
</div>
 

         
    )
}

export default ItemList;





// import React from 'react';

// const ItemList = ({ data }) => {
//     console.log(data);
//     if (!data || !data.categories) {
//         return <div>No data available</div>;
//     }

//     return (
//         <div>
//             {data.data.categories.map((category, categoryIndex) => (
//                 <div key={categoryIndex}>
//                     <h2>{category.title}</h2>
//                     {category.itemCards && category.itemCards.map((item, itemIndex) => (
//                         <div key={itemIndex}>
//                             {item.card?.info?.name || "No name available"}
//                         </div>
//                     ))}
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default ItemList;




