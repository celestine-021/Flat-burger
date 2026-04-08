const burgers=["hamburger" ,"cheeseburger" ];
let restaurantName= "Flatburger Restaurant";
console.log("welcome to " +restaurantName);
console.log("Burgers:",burgers);

let selectedBurger;
//function scope
function makeBurger() {
selectedBurger=burgers[1];
 console.log("selected:", selectedBurger);
}
makeBurger();
//block scope*
if(selectedBurger=== "cheeseburger"){
    let message ="This is a delicious cheeseburger...";
    console.log(message);
}

// Also push the variable to the array
    burgers.push("veggie Burger");  
    
    console.log("updated:", burgers);
