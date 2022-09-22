const allMeal = () =>{
    const searchValue = document.getElementById("search-bar").value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`;
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => showMealDetails(data.meals))
    // .then(data => console.log(data))
    // console.log(searchValue);
}

const showMealDetails= (meals) =>{
    // console.log(meals);
    for (const meal of meals){
        const parent = document.getElementById("meal-container");
    const div=document.createElement("div");
    div.innerHTML=`<div class="card border p-5 container">
    <div class="meal-img">
        <img class="w-25" src="${meal.strMealThumb}" alt=""></div>
    <h3>Name:${meal.strIngredient1}</h3>
    <p>Category:${meal.strCategory}</p>
    <div class="allButton">
        <button onclick="thanks('${meal.idMeal}')" class="btn btn-success">Buy now</button>
        <button onclick="recipe('${meal.idMeal}')" class="btn btn-success">Details</button>
    </div>
</div>`;
parent.appendChild(div);

    }
};

const recipe = (info) => {
    console.log(info);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${info}`;
    fetch(url)
    .then(res => res.json())
    .then(data => setRecipe(data.meals[0]));
};
const setRecipe = (info) => {
    document.getElementById("recipe-container").innerHTML=`
    <div>
    <h3>Recipe:${info.strInstructions}</h3>
    </div>
    `
};

const thanks = (info) => {
    console.log(info);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${info}`;
    fetch(url)
    .then(res => res.json())
    .then(data => setThanks(data.meals[0]));
};

const setThanks = (info) => {
    document.getElementById("thanks-container").innerHTML=`
    <div>
    <h4>Thank You for order :${info.strIngredient1}</h4>
    <img src="/Drone Delivery.gif" alt="">
    </div>
    `
};

