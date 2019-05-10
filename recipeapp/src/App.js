import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Bodycarier from './Components/Bodycarier';

class App extends Component {
  //state consists of recipeName (not compulsory) ,foodarray to store the data coming from API,status array stores the status of data 
    state ={
      recipeName : '',
      foodarray : [],
      status : ["Type a Dish Name to Search for it's ingredient"]
    }
 // method is used to setState in App component by passing it to Header component as props. 
  onSubmitHandler = async (data,food,status)=>{
    
     await this.setState({recipeName:data,foodarray:food,status:status});
  }
  render() {
    return (
     <div>
      <Header onSubmitHandler={this.onSubmitHandler}/>  
      {/* the data stored in state(foodarray) is send as props to bodyCarier */}
      <Bodycarier recipeStuff={this.state.foodarray} status={this.state.status}/> 
    </div>
    );
  }
}
 
export default App;
