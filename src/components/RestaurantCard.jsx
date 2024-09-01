import PropTypes from 'prop-types';
import {CDN_URL} from "../utils/constants";
const RestaurantCard = ({resData}) =>{
    //  const {resData} = props
  
    // const Data = resData;
  
    const {
      cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      costForTwo,
      sla,
    } = resData?.info || {};
  
    // const deliveryTime = resData?.info?.sla?.deliveryTime;
  
    return(
      <>
      <div className="res-card">
        <img
        className="res-logo" 
        src={CDN_URL
           +
          cloudinaryImageId
        }/>
        {/* <h3>{resData.info.name }</h3> */}
        <h3>{name }</h3>
        {/* <h4>{Array.isArray(cuisines) ? cuisines.join(",") : 'No cuisines available'}</h4> */}
        <h4>{cuisines.join(", ")}</h4>
        {/* <h4>{resData.info.cuisines.join(", ")}</h4> */}
        {/* <h4>{resData.info.avgRating}</h4> */}
        <h4>{avgRating}</h4>
        {/* <h4>{resData.info.costForTwo} </h4> */}
        <h4>{costForTwo} </h4>
        <h4>{sla?.deliveryTime} minutes</h4>
        {/* <h4>{deliveryTime? `${deliveryTime} minutes`:'N/A'}</h4> */}
      </div>
      </>
    )
  }
  RestaurantCard.propTypes = { 
    resData: PropTypes.any.isRequired,
   }
  

  export default RestaurantCard;
  
//   const RestaurantCard = ({resData}) => {