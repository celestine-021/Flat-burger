const burgers=["Hamburger","Cheeseburger"];
let selectedBurger;
//function scope
function makeBurger() {
selectedBurger=burgers[1];
 console.log("selected:", selectedBurger);
}
makeBurger();
//block scope*
if(selectedBurger === "Cheeseburger"){
    let message ="This is a delicious Cheeseburger...";
    console.log(message);
}

    burgers.push("Veggieburger");
    
    console.log("updated:", burgers);
