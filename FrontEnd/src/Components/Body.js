import RestaurantCard, { withOpenLabel } from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useCityCoordinates from "../utils/useCityCoordinates";

const Body = () => {
    const [ListOfRestaurants, setListOfRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [searchCity, setCity] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    const [isTopRated, setIsTopRated] = useState(true);
    const [cityName, setCityName] = useState("Noida");

    const RestaurantIsOpen = withOpenLabel(RestaurantCard);
    
    const coordinate = useCityCoordinates(cityName);

    useEffect(() => {
        if (coordinate.lat && coordinate.lon) {
            fetchData();
        }
    }, [coordinate]);

    const setFiltered = (searchText) => {
        const filteredRestaurant = ListOfRestaurants.filter((res) =>
            res.info.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredData(filteredRestaurant);
    };

    const fetchData = async () => {
        try {
            if (coordinate.lat && coordinate.lon) {
                const data = await fetch(
                    `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${coordinate.lat}&lng=${coordinate.lon}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
                );
                const json = await data.json();
                console.log(json)
                const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
                setListOfRestaurant(restaurants);
                setFilteredData(restaurants);
                console.log(filteredData)
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const onlineStatus = useOnlineStatus();
    if (!onlineStatus) {
        return (<h1>You are offline, check your Internet Connection</h1>);
    }

    return ListOfRestaurants.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="flex flex-wrap ">
            <div className="filter flex flex-wrap justify-between w-full border-solid border-black shadow-xl my-3 align-middle px-5">
                <div className="w-[30%] h-14 search m-3 p-2 flex flex-wrap rounded-lg border-1">
                    <input
                        type="text"
                        className="border-2 border-black rounded-lg px-2"
                        placeholder="Restaurant Name"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <button
                        className="hover:bg-red-600 px-7 bg-blue-800 ms-5 rounded-lg text-white font"
                        type="submit"
                        onClick={() => setFiltered(searchText)}
                    >
                        Search
                    </button>
                </div>
                <button
                    className="hover:bg-red-600 px-7 bg-blue-800 ms-5 rounded-lg text-white font h-10 mt-4"
                    onClick={() => {
                        const filteredList = ListOfRestaurants.filter(
                            (res) => res.info.avgRating >= 4.5
                        );
                        setFilteredData(isTopRated ? filteredList : ListOfRestaurants);
                        setIsTopRated(!isTopRated);
                    }}
                >
                    Top Rated Restaurants
                </button>
            

            <div className="searchCity w-[30%] h-14 search m-3 p-2 flex flex-wrap rounded-lg border-1">
                <input 
                className="border-2 border-black rounded-lg px-2"
                    placeholder="City Name"
                    value={searchCity}
                    onChange={(e) => setCity(e.target.value)}
                />
                <button className="hover:bg-red-600 px-7 bg-blue-800 ms-5 rounded-lg text-white font"
                    onClick={() => {
                        setCityName(searchCity);
                    }}
                >
                    Search
                </button>
            </div>
            </div>

            <div className="res-container flex flex-wrap justify-between gap-2">
                {filteredData.map((restaurant) => (
                    <Link key={restaurant.info.id} to={`/restaurants/${restaurant.info.id}`}>
                        {restaurant.info.isOpen ?(<RestaurantIsOpen resData={restaurant} />): <RestaurantCard resData={restaurant} />}
                        
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;
