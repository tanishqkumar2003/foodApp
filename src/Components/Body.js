import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/MockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () =>{
    const[ListOfRestaurants, setListOfRestaurant] = useState([]);
    
    useEffect(()=>{
        setTimeout(() => {
            fetchData();
        }, 2000);
    },[]);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

          const json = await data.json();
          setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        //   console.log(json);   
        console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);   
    };

    // Conditional rendering using if conndition. Same can be performed by ternary operator
    // if(ListOfRestaurants.length === 0){
    //     return<shimmer/>
    // }

    return (
        <div className="body">
            <div className="filter">
                <button 
                className="filter-btn"
                onClick={()=>{
                    const filteredList = ListOfRestaurants.filter(
                        (res) => res.info.avgRating >= 4.5
                    );
                    setListOfRestaurant(filteredList);
                }}
                >Top Rated Restaurants</button>
            </div>
            {/* <div className="search">Search</div> */}
            <div className="res-container">
                {ListOfRestaurants.map((restaurants) =>(
                    <RestaurantCard key={restaurants.info.id} resData={restaurants}/>
                ))}
                
            </div>
        </div>
    )
};

export default Body;