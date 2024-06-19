import { CDN_URL } from "../utils/Constants";   

const RestaurantCard = (props) =>{
    const {resData} = props;
    const {name,cuisines,avgRating,areaName, locality} = resData?.info;
    const{deliveryTime} = resData?.info?.sla;
    //console.log(resData.info);
    return(
        <div className="border-solid border-black w-60 h-[420px] max-w-sm text-wrap rounded overflow-hidden shadow-lg border m-2">
            <div className="container">
                <img src={CDN_URL + resData.info.cloudinaryImageId} />
            </div>
            <div className="text-wrap">
                <h3 className="text-xl">{name}</h3>
                <h4 className="">{cuisines.slice(0,3).join(" ,")}</h4>
                <h4 className="border-solid border-black">{avgRating}⭐</h4>
                <h4>{deliveryTime}minutes</h4>
                <h4>{locality}</h4>
            </div>
        </div>
    );
};



//Higher Order component
// input RestaurantCard  ==> RestaurantCardPromoted
export const withOpenLabel = (RestaurantCard) => {
    return (props)=>{
        return(
          <div>
             <label className="absolute bg-black text-red-500 mx-3 my-1 p-2 rounded-lg">Is Open</label>
             <RestaurantCard {...props} />
          </div>
        )
    }
} 



export default RestaurantCard;