import { useState, useEffect } from "react";
import Shimmer from "./components/Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const data = await fetch(
        // "https://www.swiggy.com/mapi/homepage/getCards?lat=26.9440621&lng=75.7093318"
        "https://www.swiggy.com/mapi/homepage/getCards?lat=26.95250&lng=75.71050"
        // "https://www.swiggy.com/city/jaipur/la-pinoz-pizza-kalwad-road-jhotwara-rest632986?restaurant_id=632986"
      );
      const json = await data.json();
      console.log(json);
      setResInfo(json);
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };

  // Safely accessing the restaurant data
  const restaurant =
    resInfo?.data?.success?.cards?.[3]?.gridWidget?.gridElements?.infoWithStyle
      ?.restaurants?.[0];

  // Destructuring the properties you need
  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    // sla,
  } = restaurant?.info || {};

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>{name || "Restaurant name not available"}</h1>
      <h3>Average Rating: {avgRating || "Rating not available"} -  {costForTwo }</h3>
      <p>{cuisines ? cuisines.join(", ") : "Cuisines not available"} </p>
      {/* <h3>Cost for Two: {costForTwo || "Cost info not available"}</h3> */}
      {/* <h3>Delivery Time: {sla?.slaString || "Delivery time not available"}</h3> */}
      
      <ul>
        <li>Biryani</li>
        <li>Burgers</li>
        <li>Diet Coke</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;



// import { useState, useEffect } from "react";
// import Shimmer from "./components/Shimmer";

// const RestaurantMenu = () => {
//   const [resInfo, setResInfo] = useState(null);

//   useEffect(() => {
//     fetchMenu();
//   }, []);

//   const fetchMenu = async () => {
//     try {
//       const data = await fetch(
//         "https://www.swiggy.com/mapi/homepage/getCards?lat=26.9440621&lng=75.7093318"
//       );
//       const json = await data.json();
//       console.log(json);
//       setResInfo(json); 
//     } catch (error) {
//       console.error("Error fetching menu:", error);
//     }
//   };

// //   destr
//   return resInfo === null ? (
//     <Shimmer />
//   ) : (
//     <div className="menu">
//       <h1>
//         {resInfo?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants?.info?.name}
//       </h1>
//       <h2>Menu</h2>
//       <ul>
//         <li>Biryani</li>
//         <li>Burgers</li>
//         <li>Diet Coke</li>
//       </ul>
//     </div>
//   );
// };

// export default RestaurantMenu;
