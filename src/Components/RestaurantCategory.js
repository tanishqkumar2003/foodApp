import ItemList from "./ItemList";

const RestaurantCategory = ({data ,showItem, setShowIndex})=>{
 
    // console.log(data);
    // console.log(`${index} got index`);
    const items = data?.itemCards;

    const handleClick = ()=>{
       setShowIndex();
      // console.log("clicked");
    }


    return(
        <div className="w-full rounded-lg align-middle bg-gray-100 shadow-lg m-3 p-3 justify-between content-center">
           <div className="flex justify-between py-2"
            onClick={handleClick} 
           >
            <span className="hover:text-red-600 font-bold text-lg ">{data.title} ({items.length})</span>
            <span>🔽</span>
           </div>
            {
              showItem &&  (items.map((item,index)=>(
                    <ItemList key={index} data={item?.card?.info} />
                )))
            }
           
        </div>
    )
}

export default RestaurantCategory;