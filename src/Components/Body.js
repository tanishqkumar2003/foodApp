import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/MockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () =>{
    const[ListOfRestaurants, setListOfRestaurant] = useState([]);

    const [searchText, setSearchText]= useState([]);

    const [filteredData, setFilteredData] = useState([]);

    const [isTopRated, setIsTopRated] = useState(true);
    
    useEffect(()=>{
        setTimeout(() => {
            fetchData();
        }, 2000);
    },[]);

    const setFiltered = (searchText)=>{
        const filteredRestaurant = ListOfRestaurants.filter((res)=>
            res.info.name.toLowerCase().includes(searchText));
        console.log(filteredRestaurant);
        setFilteredData(filteredRestaurant)
        console.log("fd" ,filteredData)
    }

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

          const json = await data.json();
          setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
          setFilteredData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

        //  console.log(json);   
      console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);   
    };

    const onlineStatus = useOnlineStatus();
    if(onlineStatus===false){
        return (<h1>You are offline check your Internet Connection</h1>)
    }

    // Conditional rendering using if conndition. Same can be performed by ternary operator
    return ListOfRestaurants.length === 0 ? (
        <Shimmer/>
    ) : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input 
                      type="text"
                      className="search-box"
                      value={searchText}
                      onChange={(e)=>{
                        setSearchText(e.target.value);
                        // setFiltered(searchText);
                      }}
                    />
                    <button type="submit"
                       onClick={()=>{
                        // Filter the restaurant list
                        console.log(searchText);

                       setFiltered(searchText);
                       }}
                    >
                        Search
                    </button>
                </div>
                <button 
                className="filter-btn"
                onClick={()=>{
                    const filteredList = ListOfRestaurants.filter(
                        (res) => res.info.avgRating >= 4.5
                    );
                    // setFilteredData(filteredList);
                    if(isTopRated){
                        setFilteredData(filteredList);
                    }
                    else{
                        setFilteredData(ListOfRestaurants);
                    }
                    setIsTopRated(!isTopRated);
                }}

                >Top Rated Restaurants</button>
            </div>
            {/* <div className="search">Search</div> */}
            <div className="res-container">
                {filteredData.map((restaurants) =>(
                    <Link key={restaurants.info.id} to={"/restaurants/"+restaurants.info.id}><RestaurantCard  resData={restaurants}/></Link>
                ))}
                
            </div>
        </div>
    )
};

export default Body;