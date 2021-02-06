const searchFood= document.getElementById('inputItem')
document.getElementById('search').addEventListener('click', findFood)
function findFood(){
 let foodName= searchFood.value.trim()
 //console.log(searchFood.value.trim())

 fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${foodName}`)
.then(res => res.json())
.then(data=> {
  for(let i=0; i<data.meals.length;i++){
   let foodCount=data.meals[i]
   console.log(foodCount.idMeal,foodCount.strMeal,foodCount.strMealThumb)
  }
  /* console.log(data.meals)
  const allMeal =data.meals
  const idOfMeal=allMeal.idMeal
  console.log(idOfMeal)
  let mealName= allMeal.strMeal
  console.log(mealName)
  let img = allMeal.strMealThumb
  console.log(img) */
//  const getName= meals[0]
 // console.log(getName)
})
} 