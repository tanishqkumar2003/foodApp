import ItemList from "./ItemList";

const RestaurantCategory = ({data})=>{
    console.log(data);
    const items = data?.itemCards;
    console.log(items);
    return(
        <div className="w-full rounded-lg align-middle bg-gray-400 shadow-lg m-3 p-3 justify-between content-center">
           <div className="flex justify-between">
            <span className="font-bold text-lg">{data.title} ({items.length})</span>
            <span>🔽</span>
           </div>
            {
                items.map((item)=>(
                    <ItemList data={item?.card?.info} />
                ))
            }
        </div>
    )
}

export default RestaurantCategory;