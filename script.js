const searchFood= document.getElementById('inputItem')
const searchBtn=document.getElementById('search')
 searchBtn.addEventListener('click', findFood)

// create function for fetching foods
function findFood(){
     let foodName= searchFood.value.trim()

    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${foodName}`)
    .then(res => res.json())
    .then(data=> {
      const foodDAta=data.meals
  
      foodDAta.forEach(element => { 
        let id=element.idMeal
        let thumbImg= element.strMealThumb
        let fName= element.strMeal
        let ul= document.getElementById('ul')
        let li =document.createElement('li')
        li.setAttribute('id',`${id}`)
        li.setAttribute('class','meal')
        li.setAttribute('onclick',`getId('${id}')`)
        let para =document.createElement('p')
        para.innerText=fName
        let img =document.createElement('img')
        li.appendChild(img) 
        li.appendChild(para)
          img.setAttribute('src',`${thumbImg}`)
          img.setAttribute("height", "220");
          img.setAttribute("width", "100%");
          ul.appendChild(li)
            
  });
})
}
 // create function for display food ingredient in a modal
const getId = id=>{
 
      const url= `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`

      fetch(url)
      .then(response => response.json())
      .then(result =>{
        document.getElementById('modal').style.display='block'
        let close= document.getElementById('cancel-btn')
        close.setAttribute('onclick', 'dispalyClose()')
        let getDataItem= result.meals[0]
        let getImg= getDataItem.strMealThumb
        let div=  document.getElementById('content')
        let creatImg= document.createElement('img')
        creatImg.setAttribute('src',`${getImg}`)
        creatImg.setAttribute("height", "220");
        creatImg.setAttribute("width", "100%");
        div.appendChild(creatImg)

        let liItemName =getDataItem.strMeal
        let nameOf =document.createElement('h2')
             nameOf.innerText=liItemName
              div.appendChild(nameOf)

          // taking an ingredient array
          let gradi= [getDataItem.strIngredient1,getDataItem.strIngredient2,getDataItem.strIngredient3,getDataItem.strIngredient4,getDataItem.strIngredient5]

          let par =document.createElement('p')
          par.innerText=liItemName
          console.log(gradi)
          gradi.forEach(e=>{
            
          let div=  document.getElementById('content')
        
          let li = document.createElement('li')
          li.innerText =e
          div.appendChild(li)
            
   })
    
  
   
 })
 
}
// function for closing modal 
function dispalyClose(){
  var closeModal=  document.getElementById('modal').style.display='none'
 return closeModal
}






















































/*-------------------------- brake-down code--------------------------------- */

/* const searchFood= document.getElementById('inputItem')
const searchBtn=document.getElementById('search')
   searchBtn.addEventListener('click', findFood)


function findFood(){
     let foodName= searchFood.value.trim()

    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${foodName}`)
    .then(res => res.json())
    .then(data=> {
      const foodDAta=data.meals
      /* for(let i=0; i<data.meals.length;i++){
      let foodCount=data.meals[i]
      console.log(foodCount.idMeal,foodCount.strMeal,foodCount.strMealThumb)
      } */
//       foodDAta.forEach(element => {
//           // console.log(foodDAta[i].idMeal,foodDAta[i].strMeal,foodDAta[i].strMealThumb)
//          // console.log(element.idMeal,element.strMeal,element.strMealThumb)
//         let id=element.idMeal
//         let thumbImg= element.strMealThumb
//         let fName= element.strMeal
//         let ul= document.getElementById('ul')
//         let li =document.createElement('li')
//         li.setAttribute('id',`${id}`)
//         li.setAttribute('class','meal')
//         li.setAttribute('onclick',`getId('${id}')`)
//         let para =document.createElement('p')
//         para.innerText=fName
//         let img =document.createElement('img')
        
//         li.appendChild(img) 
//         li.appendChild(para)
//           img.setAttribute('src',`${thumbImg}`)
//           img.setAttribute("height", "220");
//           img.setAttribute("width", "100%");
//           ul.appendChild(li)
          
//        //getId(id)
      
      
//   });
// })
// }
//  */


// const getId = id=>{
//   //console.log(id)}
//   const url= `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
//  // console.log(url)
//  fetch(url)
//  .then(response => response.json())
//  .then(result =>{
//   // console.log(result.meals)
//   document.getElementById('modal').style.display='block'
//   let close= document.getElementById('cancel-btn')
//   close.setAttribute('onclick', 'dispalyClose()')
  
  
//   let getDataItem= result.meals[0]
  
//    let getImg= getDataItem.strMealThumb
//    //console.log(getImg)
//    let div=  document.getElementById('content')
//    let creatImg= document.createElement('img')
//    creatImg.setAttribute('src',`${getImg}`)
//    creatImg.setAttribute("height", "220");
//    creatImg.setAttribute("width", "100%");
//    div.appendChild(creatImg)

   

//    let liItemName =getDataItem.strMeal
//    //console.log(liItemName)
//    let nameOf =document.createElement('h2')
//     nameOf.innerText=liItemName
//     div.appendChild(nameOf)


//    let gradi= [getDataItem.strIngredient1,getDataItem.strIngredient2,getDataItem.strIngredient3,getDataItem.strIngredient4,getDataItem.strIngredient5]
//   // console.log(liItem)
//   let par =document.createElement('p')
//   par.innerText=liItemName
//    console.log(gradi)
//    gradi.forEach(e=>{
//      // console.log(e)
    

//     let div=  document.getElementById('content')
  
//     let li = document.createElement('li')
//     li.innerText =e
//     div.appendChild(li)
       
//    })
    
  
   
//  })
 
// }

// function dispalyClose(){
//   var closeModal=  document.getElementById('modal').style.display='none'
//  return closeModal
// }
//

  /* 
  li.setAttribute('onclick', 'getCountry(this.innerText)');
                    a.appendChild(li)
                    li.setAttribute('id','cname')
                    li.innerText = liText
                    ul.appendChild(li)
  */
 /* ----------------------------------------------------- */
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
// })
// } 

/* document.getElementById('li').addEventListener('click',getId(id){
  const id= id.target==id
    const url= `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    fetch(url)
    .then(res => res.json())
    .then(result =>{
     let foodList=result.meals[0]
      //const fooId=result.meals
      //console.log(fooId.strMeal)
      //console.log(result.meals)
       foodList.forEach(ele =>{
        console.log(ele.strIngredient)
      }) 
  
    })
  }
}) */

  //console.log(e.target.id)
//}
/* ----------------------------- */
//  const getId = id=>{
//    console.log(id)
  // const name= console.log(city) 
  //const names= city.innerText
 // const url= `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
 // console.log(url)
 //}

 /*  fetch(url)
  .then(res => res.json())
  .then(meals=> {
      const getFoodId=meals[1]
      const ano= getFoodId
    */
      
 
   
     // const came= getCon.name
     /*  console.log(came)
      const getCapital= getCon.capital
  //   const gname= came.name
      console.log(getCapital)
      const getCurrency =getCon.currencies[0]
      const curren= getCurrency.name
      console.log(curren)
      const getFlag= getCon.flag 
      console.log(getFlag)
 */
      //displayDetails(getCon)
       
      //document.getElementById('modal').style.display='block'
    /*  document.getElementById('country').innerText = came
      document.getElementById('capital').innerText=getCapital
      document.getElementById('currency').innerText= curren
      document.getElementById('img').src=getFlag  */

     
 // })

  


/* const detailBtn=document.getElementById('data-id')
detailBtn.addEventListener('click', getIngredient)
function getIngredient(e){
e.preventDefault()
 console.log(e.target)
  // let mealList=e.target.parentElement
} */
