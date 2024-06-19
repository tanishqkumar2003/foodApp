import {useState, useEffect} from 'react';
const useRestaurantList = ()=>{
    const [ListOfRestaurants, setListOfRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [searchCity, setCity] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    const [isTopRated, setIsTopRated] = useState(true);
    const [cityName, setCityName] = useState("Noida");
    
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
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    return [ListOfRestaurants, setListOfRestaurant, searchCity, setSearchText,searchText,filteredData,isTopRated,cityName,isTopRated, ]
}
export default useRestaurantList;