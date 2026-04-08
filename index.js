const menu=["hamburger","pizza","pasta","salad","ice cream","soda","coffee","tea","cake","cookies"];
let drink="lemonade";
//function scope
function getFeatureString(featureItem){
    //description is function scope
 let description="Our special feature today is the"+featureItem;
    return description;
}
//block scope*Also push the variable to the array
if(menu.length>0){
    let SeasonalItem="pizza";
    menu.push(SeasonalItem);    


}
console.log("Full Menu:", menu);
console.log(getFeatureString("pizza"));
console.log("Current Drink:", drink);