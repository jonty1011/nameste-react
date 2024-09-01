import React from 'react';

class UserClass extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            count:0,
            count2: 2
        };
        console.log("Child Constructor");
        }

        componentDidMount(){
            console.log("Child Component Did Mount");   
        }

        componentWillUnmount(){
            console.log("Child Component Will Unmount");
            
        }

        componentDidUpdate(){
            console.log("Component Did Update");
            
        }
    render(){
        // eslint-disable-next-line react/prop-types
        const {name ,location} = this.props;
        // const {count} = this.state;
        console.log("Child Render");
        
        return(
            <div className="user-card">
               {/* <h1>Count: {count}</h1>
                <button onClick={()=>{
                    // this.state.count = this.state.count + 1;
                    // Never Update State Variables Directly
                      this.setState({
                        count : this.state.count + 1,
                        count2: this.state.count2 + 1
                      })
                }}>Count Increase</button>*/ }
                <h2>Name: {name}</h2>
                <h3>Location:{location}</h3>
                <h4>Contact: @jontysuthar</h4>
            </div>
        )
    }
}
export default UserClass;