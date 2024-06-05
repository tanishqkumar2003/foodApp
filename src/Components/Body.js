import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/MockData";
import { useState } from "react";

const Body = () =>{
    const[ListOfRestaurants, setListOfRestaurant] = useState(resObj)
    return(
        <div className="body">
            <div className="filter">
                <button 
                className="filterr-btn"
                onClick={()=>{
                    const filteredList = ListOfRestaurants.filter(
                        (res) => res.info.avgRating > 4.5
                    );
                    setListOfRestaurant(filteredList);
                }}
                >Top Rated Restaurants</button>
            </div>
            <div className="search">Search</div>
            <div className="res-container">
                
                {ListOfRestaurants.map((restaurants) =>(
                    <RestaurantCard key={restaurants.info.id} resData={restaurants}/>
                ))}
                
            </div>
        </div>
    )
};

export default Body;