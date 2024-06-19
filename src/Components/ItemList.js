import { CDN_URL } from "../utils/Constants";

const ItemList = ({data})=>{
    // console.log(data.description);

    return(
        <div>
         <div className="border shadow-lg p-2 mb-2 rounded-lg flex">
            <div className="flex flex-col">
            <span className="text-xl font-semibold w-44">{data.name}</span>
            <span className=" font-medium text-lg w-44">Rs.{data.price ? data.price/100 : data.defaultPrice/100}</span>
            <p className="font-light">{data.description}</p>
            </div>
            <img className="w-44 ml-auto" src={CDN_URL+data.imageId}/>
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




