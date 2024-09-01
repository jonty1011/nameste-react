import RestaurantCard from "./RestaurantCard";
import { useState , useEffect } from "react";
// // import resList from "../utils/mockData";
import Shimmer from "./Shimmer";


// const Body = () =>{
//   // istofRestaurant is initialized with the full list of restaurants from resList.
//   const [listofRestaurant , setListofRestaurants] = useState([]);

//   const [searchText , setSearchText] = useState("");

//   useEffect(()=>{
//     fetchData();
//   },[]); 

//    const fetchData = async() =>{
//      const data = await fetch(
     

//        "https://www.swiggy.com/mapi/homepage/getCards?lat=26.9440621&lng=75.7093318"
//         //  "https://www.swiggy.com/dapi/restaurants/list/update"

//      );

//     const json = await data.json();
//       console.log(json);
     
//        setListofRestaurants(
//          // json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
//             json?.data?.success?.cards[2]?.gridWidget?.gridElements?.infoWithStyle?.restaurants
//               // json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants
//      );
    
//   // };

//   //  this is the conditional rendering === Shimmer UI
//   if(listofRestaurant.length ===0){
//       return <Shimmer/>
//       // listofRestaurant.length === 0?<Shimmer/> :
  
//   }// also we can use
//   return listofRestaurant.length === 0?<Shimmer/> : (
//     <>
//     <div className="Body">
//       <div className="filter">
//         <div className="search">
//           <input type="text"
//            className="search-box" 
//            value={searchText}
//            onChange={(e)=>{
//               setSearchText(e.target.value);
//            }} />
//           <button className="srch-btn" onClick={()=>{
//             console.log(searchText);
            
//             const filteredRestaurants =listofRestaurant.filter(
//               (res)=>{
//              return  res.info.name.toLowerCase().includes(searchText.toLowerCase());
//               //   if we call the function in a same block then we will get an error;
//             })
             
             
//             return  setListofRestaurants(filteredRestaurants);
            
//           }}>Search</button>
//         </div>
//         <button 
//         className="filter-btn"
//         onClick={()=>{
//           const filteredList = listofRestaurant.filter(
//             (res)=> res?.info?.avgRating >4.5
//           );
//           setListofRestaurants(filteredList);
//         }}
//           >
//           Top Rated Restaurants
//         </button>
//       </div>
//       <div className="res-container">
//         {listofRestaurant.map((restaurant)=>{
//         return <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
//         })}
//      {/* <RestaurantCard resData={resList[0]}/> */}
//       </div>
//     </div>
//     </>
//   )
// }
// }
// export default Body;



const Body = () => {
  const [listofRestaurant, setListofRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        //  "https://www.swiggy.com/mapi/homepage/getCards?lat=26.95250&lng=75.71050"
        "https://www.swiggy.com/mapi/homepage/getCards?lat=26.9440621&lng=75.7093318"
      );

      const json = await response.json();
      console.log(json);

      const restaurants = json?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle?.restaurants || [];
      setListofRestaurants(restaurants);
    } catch (error) {
      console.error("Failed to fetch data:", error.message);
      setListofRestaurants([]);
    }
  };

  
  const handleSearch = () => {
    console.log(searchText);

    const filteredRestaurants = listofRestaurant.filter((res) => {
      return res.info.name.toLowerCase().includes(searchText.toLowerCase());
    });

    console.log(filteredRestaurants);
    setListofRestaurants(filteredRestaurants);
  };

  const handleFilterTopRated = () => {
    const filteredList = listofRestaurant.filter((res) => res?.info?.avgRating > 4.5);
    setListofRestaurants(filteredList);
  };

  if (listofRestaurant.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="Body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button className="srch-btn" onClick={handleSearch}>Search</button>
        </div>
        <button className="filter-btn" onClick={handleFilterTopRated}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listofRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};


export default Body;


