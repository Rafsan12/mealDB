const allMeal = () =>{
    const searchValue = document.getElementById("search-bar").value;
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchValue}`
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => showMealDetails(data.meals))
    // .then(data => console.log(data))
    // console.log(searchValue);
}

const showMealDetails= (meals) =>{
    console.log(meals);
    for (const meal of meals){
        const parent = document.getElementById("meal-container");
    const div=document.createElement("div");
    div.innerHTML=`<div class="card border p-5 container">
    <div class="meal-img">
        <img class="w-25" src="${meal.strMealThumb}" alt=""></div>
    <h3>Name:${meal.strIngredient1}</h3>
    <p>Category:${meal.strCategory}</p>
    <div class="allButton">
        <button class="btn btn-success">Buy Know</button>
        <button class="btn btn-success">Details</button>
    </div>
</div>`;
parent.appendChild(div);

    }
   

}