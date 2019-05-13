import React from 'react';
import '../Bodycarier.css';

// this component simply prints the data using map. 
const Bodycarier =(props)=> {
    if((props.status).length===0){
        return (
          (props.recipeStuff).map((value,index)=>{
              return ( 
                 <div key = {
                   value.idMeal
                 }
                 className = "box-container" >
                   <div id = "recipeHead" > {
                     value.strMeal
                   } < spam style = {
                     {
                       float: 'right',
                       marginRight: '20px',
                       color: "white"
                     }
                   } > < i class = "fa like"
                 onClick = {
                   function () {
                     var x = document.getElementsByClassName('like')[index];
                     if (x.style.color === "black") {
                       x.setAttribute("style", "color: red;");
                     } else {
                       x.setAttribute("style", "color: black;");
                     }
                   }
                 }
                 style = {
                     {
                       fontSize: '30px',
                       color: 'black'
                     }
                   } >&#9825;</i></spam></div>

            <div id= "body-content" >
                   
                   <div id = "image-content" >
                   <img src = {
                     value.strMealThumb
                   }
                 alt="img"
                 style = {
                     {
                       width: '250px',
                       height: '100%'
                     }
                   }></img>
                   </div> 
                   <div id = "writtenbody">
                   <p style = {
                     {
                       margin: '0px'
                     }
                   }> <spam style = {
                     {
                       fontStyle: 'italic'
                     }
                   }> Category of Meal - </spam>{value.strCategory}</p>
                   <p style = {
                     {
                       margin: '5px 0px'
                     }
                   }> <spam style = {
                     {
                       fontStyle: 'italic'
                     }
                   }> Area of the Meal - </spam>{value.strArea}</p>
                   
                   <div >
                   <p style = {
                     {
                       margin: '25px 0px 0px',
                       fontStyle: 'italic'
                     }
                   }> Ingredients - </p> 
                   <div className = "innerDiv" >
                   <p> {
                     value.strIngredient1 !== null ? value.strIngredient1 : ''
                   } {
                     value.strMeasure1 !== null && value.strMeasure1 !== "" ? " --- " + value.strMeasure1 : ''
                   } </p>
                   <p> {
                     value.strIngredient2 !== null ? value.strIngredient2 : ''
                   } {
                     value.strMeasure2 !== null && value.strMeasure2 !== "" ? " --- " + value.strMeasure2 : ''
                   } </p>
                   <p> {
                     value.strIngredient3 !== null ? value.strIngredient3 : ''
                   } {
                     value.strMeasure3 !== null && value.strMeasure3 !== "" ? " --- " + value.strMeasure3 : ''
                   } </p>
                   <p> {
                     value.strIngredient4 !== null ? value.strIngredient4 : ''
                   } {
                     value.strMeasure4 !== null && value.strMeasure4 !== "" ? " --- " + value.strMeasure4 : ''
                   } </p> 
                   <p> {
                     value.strIngredient5 !== null ? value.strIngredient5 : ''
                   } {
                     value.strMeasure5 !== null && value.strMeasure5 !== "" ? " --- " + value.strMeasure5 : ''
                   } </p>
                   <p> {
                     value.strIngredient6 !== null ? value.strIngredient6 : ''
                   } {
                     value.strMeasure6 !== null && value.strMeasure6 !== "" ? " --- " + value.strMeasure6 : ''
                   } </p> 
                   <p> {
                     value.strIngredient7 !== null ? value.strIngredient7 : ''
                   } {
                     value.strMeasure7 !== null && value.strMeasure7 !== "" ? " --- " + value.strMeasure7 : ''
                   } </p>
                   <p> {
                     value.strIngredient8 !== null ? value.strIngredient8 : ''
                   } {
                     value.strMeasure8 !== null && value.strMeasure8 !== "" ? " --- " + value.strMeasure8 : ''
                   } </p>
                   <p> {
                     value.strIngredient9 !== null ? value.strIngredient9 : ''
                   } {
                     value.strMeasure9 !== null && value.strMeasure9 !== "" ? " --- " + value.strMeasure9 : ''
                   } </p>
                   <p> {
                     value.strIngredient10 !== null ? value.strIngredient10 : ''
                   } {
                     value.strMeasure10 !== null && value.strMeasure10 !== "" ? " --- " + value.strMeasure10 : ''
                   } </p> 
                   <p> {
                     value.strIngredient11 !== null ? value.strIngredient11 : ''
                   } {
                     value.strMeasure11 !== null && value.strMeasure11 !== "" ? " --- " + value.strMeasure11 : ''
                   } </p>
                   <p> {
                     value.strIngredient12 !== null ? value.strIngredient12 : ''
                   } {
                     value.strMeasure12 !== null && value.strMeasure12 !== "" ? " --- " + value.strMeasure12 : ''
                   } </p>
                   <p> {
                     value.strIngredient13 !== null ? value.strIngredient13 : ''
                   } {
                     value.strMeasure13 !== null && value.strMeasure13 !== "" ? " --- " + value.strMeasure13 : ''
                   } </p> 
                   <p> {
                     value.strIngredient14 !== null ? value.strIngredient14 : ''
                   } {
                     value.strMeasure14 !== null && value.strMeasure14 !== "" ? " --- " + value.strMeasure14 : ''
                   } </p> 
                   <p > {
                     value.strIngredient15 !== null ? value.strIngredient15 : ''
                   } {
                     value.strMeasure15 !== null && value.strMeasure15 !== "" ? " --- " + value.strMeasure15 : ''
                   } </p> 
                   <p> {
                     value.strIngredient16 !== null ? value.strIngredient16 : ''
                   } {
                     value.strMeasure16 !== null && value.strMeasure16 !== "" ? " --- " + value.strMeasure16 : ''
                   } </p>
                   <p> {
                     value.strIngredient17 !== null ? value.strIngredient17 : ''
                   } {
                     value.strMeasure17 !== null && value.strMeasure17 !== "" ? " --- " + value.strMeasure17 : ''
                   } </p><
                   p > {
                     value.strIngredient18 !== null ? value.strIngredient18 : ''
                   } {
                     value.strMeasure18 !== null && value.strMeasure18 !== "" ? " --- " + value.strMeasure18 : ''
                   } </p>
                   <p> {
                     value.strIngredient19 !== null ? value.strIngredient19 : ''
                   } {
                     value.strMeasure19 !== null && value.strMeasure19 !== "" ? " --- " + value.strMeasure19 : ''
                   } </p> 
                   <p> {
                     value.strIngredient20 !== null ? value.strIngredient20 : ''
                   } {
                     value.strMeasure20 !== null && value.strMeasure20 !== "" ? " --- " + value.strMeasure20 : ''
                   } </p> 
                   </div> 
                   </div> 
                   <p style = {
                     {
                       display: 'block',
                       textAlign: "center",
                       fontStyle: "italic"
                     }
                   } > Recipes </p> 
                   <div style = {
                     {
                       backgroundColor: '#d7d0d0',
                       textAlign: 'center'
                     }
                   }> {
                     value.strInstructions
                   } </div></div >
                   </div> 
                   </div>);
                  })
            );}
         else {
          return (
            <div>
                <p id="failedResult">{props.status}</p>
            </div>
          );}
        
    

}
export default Bodycarier;