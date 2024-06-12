import { useState, useEffect } from "react"

const RestaurantMenu = ()=>{
   const[resInfo, setResInfo] = useState({});
   const [resMenu, setResMenu] = useState([]);
   const {cuisines=[],avgRating,costForTwoMessage,name} = resInfo;
   //The error "Cannot read properties of undefined (reading 'join')" occurs because cuisines is undefined when the component first renders. This happens because resInfo is initially an empty object, and cuisines is being destructured from it.
   //To fix this issue, you can provide a default value for cuisines when destructuring it from resInfo.

   useEffect(()=>{
    fetchMenu();
   }, []);

   const fetchMenu = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=581809&catalog_qa=undefined&submitAction=ENTER");

        const json = await data.json();
        console.log(json);
       
        const fetchedData = json?.data?.cards[2]?.card?.card?.info;
        setResInfo(fetchedData);  
        console.log(fetchedData);

        const menu = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[6].card.card;
        const {itemCards} = menu;
        setResMenu(itemCards);
         console.log(resMenu);

   };

   

  return (
     <div className="menu">
       <h1>{name}</h1>
       <h3>{cuisines.join(", ")}</h3>


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
