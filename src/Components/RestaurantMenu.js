import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/Constants";

const RestaurantMenu = ()=>{
   const[resInfo, setResInfo] = useState({});
   const [resMenu, setResMenu] = useState([]);
   const {resId} = useParams();

   const {cuisines=[],avgRating,costForTwoMessage,name} = resInfo;
   //The error "Cannot read properties of undefined (reading 'join')" occurs because cuisines is undefined when the component first renders. This happens because resInfo is initially an empty object, and cuisines is being destructured from it.
   //To fix this issue, you can provide a default value for cuisines when destructuring it from resInfo.

   useEffect(()=>{
    fetchMenu();
   }, []);

   const fetchMenu = async ()=>{
        const data = await fetch(MENU_URL+resId);

        const json = await data.json();
        console.log(json);
       
        const fetchedData = json?.data?.cards[2]?.card?.card?.info;
        setResInfo(fetchedData);  
        console.log(fetchedData);

        const menu = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
      //   const {itemCards} = menu;
      //   setResMenu(itemCards);   
         // console.log(menu);
         let result = null;
         if(menu){
            for(let i= 0; i<menu.length; i++){
               if(menu[i]?.card?.card?.itemCards !== undefined){
                  result = menu[i].card.card;
                  break;
               }
            }
            console.log(result.itemCards);
         }
         setResMenu(result.itemCards);
   };

   

  return (
     <div className="menu">
       <h1>{name}</h1>
       <h3>{cuisines.join(", ")}</h3>


 <div>
         {
            resMenu && resMenu.map((mItem)=>(
               <div key={mItem.card.info.id}><img src={`${MENU_URL}${mItem.card.info.imageId}`} alt="Dish Img"/> {mItem.card.info.name} - Rs:{mItem.card.info.defaultPrice?(mItem.card.info.defaultPrice):(mItem.card.info.price)/100} </div>
               // console.log(mItem.card.info.name);
            ))
         }  
         </div> 
   

     </div>
  );

}

export default RestaurantMenu;
