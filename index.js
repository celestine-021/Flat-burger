const burgers=["hamburger" ,"cheeseburger" ];
let drink="soda";
//function scope
function getFeatureString(featureItem){
    //description is function scope
 let description="Our special feature today is the"+featureItem;
    return description;
}""
//block scope*Also push the variable to the array
if(burgers.length>0){
    let seasonalItem="Milkshake";
    burgers.push(seasonalItem);    


}
console.log("Full Burgers:", burgers);
console.log(getFeatureString("Milkshake"));
console.log("Current Drink:", drink);