import React, {
  Component
} from 'react';
import '../Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipeName: '',
      foodarray: [],
      status: []
    };
  }
  //getDatahandler returns promise .it assures that the promise is either resolved or rejected.
  //the method uses XMLHttpRequest to retrieve data from the API
  getDataHandler = (name) => {
    return new Promise((Resolve, Reject) => {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "https://www.themealdb.com/api/json/v1/1/search.php?s=" + name);
      xhr.send();
      xhr.onreadystatechange = () => {
        if (xhr.status === 200 && xhr.readyState === 4) {
          var storeddata = JSON.parse(xhr.responseText);
          //if the data is recieved properly we store it in state else we push No data has been recieved message to status 
          if (storeddata.meals !== null) {
            let food = this.state.foodarray;
            let status1 = this.state.status;
            status1.splice(0, status1.length);
            this.setState({
              status: status1
            });
            food.splice(0, food.length);
            for (var i = 0; i < storeddata.meals.length; i++)
              food.push(storeddata.meals[i]);
            this.setState({
              foodarray: food
            });
          } else {
            let status = this.state.status;
            status.splice(0, status.length);
            status.push("No Data has been recieved");

            this.setState({
              status: status
            });
          }
          Resolve();
        }
      };
    });
  }
  //getRecipeHandler is called after the from submission and e is passed as an event.
  //the method is async as the data retrieval takes a litle time.
  getRecipeHandler = async (e) => {
    e.preventDefault(); //used to prevent default behaviour like refreshing of page after submission
    let recipeName = this.state.recipeName;
    recipeName = (document.getElementById('inpRec').value); // food name is retrieved from the input box
    await this.setState({
      recipeName: recipeName
    });
    await this.getDataHandler(this.state.recipeName); //getDataHandler is called and recipe name is passed as a param
    await this.props.onSubmitHandler(this.state.recipeName, this.state.foodarray, this.state.status);
    // the onSubmitHandler was passed as a props in App.js to Header component
  }

  render() {
    return ( 
      <div className = "heading" >
      <p id = "headingId" > Recipe Finder </p> 
      <div className = "subHeading" >
      <form onSubmit = {
        this.getRecipeHandler
      }>
      <input type="text" placeholder="Enter the Name of the Dish" id = "inpRec" required/> 
      <button type ="submit" id ="getBut" >Get Recipes </button>
      </form> 
      </div> 
      </div>
    );
  }
}
export default Header;