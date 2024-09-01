// import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component{
    constructor(props){
        super(props);
        console.log(" Parent Constructor");
    }
    componentDidMount(){
        console.log("Parent Component Did Mount");
        
    }
    render(){
        console.log("Parent Render");
        
        return(
            <>
            <div>
          
            {/* <User name={"Jonty Suthar"}/> */}
            <UserClass name={"Jonty Suthar"}
                       location={"Banswara"}/>
                       <p>This is Food 
                        Order Delicious Food from here!!
                       </p>
            </div>
            </>
        );
    }
}

export default About;