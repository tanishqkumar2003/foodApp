import { useState, useEffect } from "react"
import RestaurantCard from "./RestaurantCard";

const RestaurantMenu = ()=>{
   const[resInfo, setResInfo] = useState({});
   const [resMenu, setResMenu] = useState([]);
   const {cuisines,avgRating,costForTwoMessage,name} = resInfo;

   useEffect(()=>{
    fetchMenu();
   }, []);

   const fetchMenu = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&    complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=21954");

        const json = await data.json();
        console.log(json);
       
        const fetchedData = json?.data?.cards[2]?.card?.card?.info;
        setResInfo(fetchedData);

         
        //console.log(fetchedData);

        const menu = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
        const {itemCards} = menu;
        setResMenu(itemCards);
         console.log(itemCards);
         // console.log(itemCards[2].card.info.name);         
         // itemCards.map((restaurants) =>(
         // console.log(restaurants.card.info.name)
    
         // ))

   };

   

  return (
     <div className="menu">
       <h1>{name}</h1>
         <ul>
         {
            resMenu.map((mItem)=>(
               <li key={mItem.card.info.id}> {mItem.card.info.name}</li>
               // console.log(mItem.card.info.name);
            ))
         }  
         </ul>     
     </div>
  );

}

export default RestaurantMenu;