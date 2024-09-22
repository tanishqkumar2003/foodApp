import { CDN_URL } from "../utils/Constants";   

const RestaurantCard = (props) =>{
    const {resData} = props;
    const {name,cuisines,avgRating,areaName, locality} = resData?.info;
    const{deliveryTime,slaString} = resData?.info?.sla;
    //console.log(resData.info);
    return(
        <div className="border-solid border-gray-400 w-64 h-[480px] max-w-sm text-wrap rounded-lg overflow-hidden shadow-lg border m-2">
            <div className="container h-[40%] overflow-hidden">
                <img src={CDN_URL + resData.info.cloudinaryImageId} />
            </div>
            <div className="text-wrap p-4">
                <h3 className="text-2xl font-bold m-2">{name}</h3>
                <h4 className="text-lg font-medium m-2">{cuisines.slice(0,3).join(" ,")}</h4>
                <h4 className="w-20 rounded-md bg-green-800 py-2 px-4 m-2 text-white">{avgRating}⭐</h4>
                <h4 className="m-2 text-lg font-medium">Delivery in- {slaString}</h4>
                <h4 className="m-2 text-lg font-medium">{locality}</h4>
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