const burgers=["Hamburger","Cheeseburger" ];
let selectedBurger;
//function scope
function makeBurger() {
selectedBurger=burgers[1];
 console.log("selected:", selectedBurger);
}
makeBurger();
//block scope*
if(selectedBurger=== "Cheeseburger"){
    let message ="This is a delicious Cheeseburger...";
    console.log(message);
}

// Also push the variable to the array
    burgers.push("Veggie burger");  
    
    console.log("updated:", burgers);
