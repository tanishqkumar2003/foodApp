import { CDN_URL } from "../utils/Constants";   

const RestaurantCard = (props) =>{
    const {resData} = props;
    const {name,cuisines,avgRating} = resData?.info;
    const{deliveryTime} = resData?.info?.sla;
    return(
        <div className="res-card">
            <img src={CDN_URL + resData.info.cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.slice(0,4).join(" ,")}</h4>
            <h4>{avgRating}stars</h4>
            <h4>{deliveryTime}minutes</h4>
        </div>
    );
};

export default RestaurantCard;