import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Bodycarier from './Components/Bodycarier';
class App extends Component {
  
    state ={
      recipeName : '',
      foodarray : [],
      status : ["Type a Dish Name to Search for it's ingredient"]
    }

  onSubmitHandler = async (data,food,status)=>{
    
     await this.setState({recipeName:data,foodarray:food,status:status});
  }
  render() {
    return (
     <div>
      <Header onSubmitHandler={this.onSubmitHandler}/>
      <Bodycarier recipeStuff={this.state.foodarray} status={this.state.status}/> 
    </div>
    );
  }
}
 
export default App;
