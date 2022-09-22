const allMeal = () =>{
    const searchValue = document.getElementById("search-bar").value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`
    console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
    console.log(searchValue);
}