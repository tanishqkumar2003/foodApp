import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { CDN_URL, MENU_URL } from "../utils/Constants";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = ()=>{
   const[resInfo, setResInfo] = useState({});
   const [resMenu, setResMenu] = useState([]);
   const  [resCategory, setResCategory] = useState([]);
   const {resId} = useParams();
   const [showIndex, setShowIndex] = useState();
   console.log(showIndex);

   const {cuisines=[],avgRating,costForTwoMessage,name} = resInfo;
   //The error "Cannot read properties of undefined (reading 'join')" occurs because cuisines is undefined when the component first renders. This happens because resInfo is initially an empty object, and cuisines is being destructured from it.
   //To fix this issue, you can provide a default value for cuisines when destructuring it from resInfo.

   useEffect(()=>{
    fetchMenu();
   }, []);

   const fetchMenu = async ()=>{
        const data = await fetch(MENU_URL+resId);

        const json = await data.json();
      //   console.log(json);
       
        const fetchedData = json?.data?.cards[2]?.card?.card?.info;
        setResInfo(fetchedData);  

        const menu = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
      const categories = menu.filter(c=> c.card?.card?.["@type"] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory');
      console.log(categories);
      setResCategory(categories);      
         // let result = null;
         // if(menu){
         //    for(let i= 0; i<menu.length; i++){
         //       if(menu[i]?.card?.card?.itemCards !== undefined){
         //          result = menu[i].card.card;
         //          break;
         //       }
         //    }
         //    // console.log(result.itemCards);
         // }
         // setResMenu(result.itemCards);
   };
  return (
     <div className="menu">
       <div className="border-black rounded ">
         <h1 className="text-4xl text-center my-3 font-extrabold ">{name}</h1>
         <h3 className="text-xl text-center my-3">{cuisines.join(", ")}</h3>
       </div>

 
       
         <div className="w-full content-center px-60"> 
            {
              resCategory.map((category, index)=>{
                // {console.log(index)}
                return (
                <RestaurantCategory key={category?.card?.card?.title} data={category?.card?.card}
                
                showItem={index === showIndex ? true : false}
                setShowIndex={()=>{
                  console.log('called', index)
                  setShowIndex(index)} }
                />
              )})
            }
            </div> 
         </div> 
     
     
  );

}

export default RestaurantMenu;
