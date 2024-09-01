import { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
const User = ({name}) => {
   const [count] = useState(0);
   
   useEffect(()=>{

   })
   return (
      <div className="user-card"> 
         <h1>Count = {count}</h1>
         <h2>Name : {name}</h2>
         <h3>Location: Banswara</h3>
         <h4>Contact: jontysuthar@gmail.com</h4>
      </div>
   );
};

export default User;
