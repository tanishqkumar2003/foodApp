import { useEffect, useState } from "react"
import { MENU_URL } from "./Constants";

const useRestaurantMenu = (resId)=>{

    const[resInfo, setResInfo] = useState(null);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async ()=>{
        const data = await fetch(MENU_URL+resId);
        const json = await data.json();
        setResInfo(json);
    }

    return resInfo;
}

export default useRestaurantMenu;