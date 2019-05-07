import React,{Component} from 'react';
import '../Header.css';

class Header extends Component {
    constructor(props)
    {
        super(props);
        this.state ={
            recipeName : '',
            foodarray : [],
            status : []
        };
    }
    getDataHandler = (name)=>{ return new Promise((Resolve,Reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open("GET","https://www.themealdb.com/api/json/v1/1/search.php?s="+name);
        xhr.send();
        xhr.onreadystatechange = () => {
            if(xhr.status===200 && xhr.readyState===4){
            var storeddata = JSON.parse(xhr.responseText);
             if(storeddata.meals!==null){
              let food = this.state.foodarray; 
              let status1 = this.state.status;
              status1.splice(0,status1.length);
              this.setState({status : status1});   
              food.splice(0,food.length);
              for(var i=0;i<storeddata.meals.length;i++)
              food.push(storeddata.meals[i]);  
             this.setState({foodarray:food});
           }
           else{
               let status = this.state.status;
               status.splice(0,status.length);
               status.push("No Data has been recieved");

           this.setState({status : status});
           }
           Resolve();
        }
        };
    });
    }
     getRecipeHandler = async (e) =>{
        e.preventDefault();
        let recipeName = this.state.recipeName;
          recipeName=(document.getElementById('inpRec').value);
          await this.setState({recipeName:recipeName});
          await this.getDataHandler(this.state.recipeName);
         await this.props.onSubmitHandler(this.state.recipeName,this.state.foodarray,this.state.status);
         
        }
   render(){
    return (
     <div className="heading">
     <p id="headingId">Recipe Finder</p>
      <div className="subHeading">
      <form onSubmit={this.getRecipeHandler.bind(this)}>
      <input type="text" placeholder="Enter the Name of the Dish" id="inpRec" required></input>
      <button type="submit" id="getBut">Get Recipes</button>
      </form>
      </div>
     </div>
    );}
}
export default Header;