
function connect(){

    var searchTerm = document.getElementById("searchBox").value ; 
    const apiKey = 'fe1f084020bf60067d17bc0fca984aa5'; 
   
    var url=`https://api.openweathermap.org/data/3.0/onecall?q=${searchTerm}&appid=${apiKey}&units=metric`;
   
   
    console.log (url);
   
    fetch (url)
    .then (res => res.json())
    .then (data => display(data))
   
   }
   
   function display (data){
   
     //console.log (data);   
     var oldContent = document.getElementById("container");
     oldContent.textContent = ""; 
   
     for (var i=0; i< Math.min(5 , allMeals.length); i++){
   
       var newDiv = document.createElement("div");
       newDiv.innerHTML = `<div class= "mealName"> Meal Name: ${allMeals[i].strMeal} </div>  <br>
                           Meal ID: ${allMeals[i].idMeal}<br>
                           <img src="${allMeals[i].strMealThumb}"> <br> <br>
                            <br>
                           ` 
     
   
        newDiv.classList.add("mealStyle");
        oldContent.appendChild(newDiv);
     }
   
   }