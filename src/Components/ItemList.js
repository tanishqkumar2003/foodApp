const ItemList = ({data})=>{
    // console.log(items);
    return(
         <div className="border shadow-lg p-2 mb-2 rounded-lg">
            {data.name}
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




