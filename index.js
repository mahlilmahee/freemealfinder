const getMealBtn=document.getElementById('mealId');
const getMealBody=document.getElementById('mealdiv');

getMealBtn.addEventListener('click',()=>{
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(res=>res.json())
    .then(data=>mealButton(data.meals[0]))
})
const mealButton=(meal)=>{
    const ingredients = [];
    // console.log(meal)
    console.log(meal.strArea, "hello this is final ")

    // creating new innerHtml for my document    	// 


 const newInnerHTML=`
 
 <div class="row"> 

 <img width="500px" height="500px" src='${meal.strMealThumb}'/>
 ${meal.strCategory ? `<p><strong>Category:</strong> ${meal.strCategory}</p>` : ''}
 ${meal.strArea ? `<p><strong>Area:</strong> ${meal.strArea}</p>` : ''}
				${meal.strTags ? `<p><strong>Tags:</strong> ${meal.strTags.split(',').join(', ')}</p>` : ''}
 <p> ${meal.strArea} </p>
 <h5>Ingredients:</h5>
				<ul>
					${ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
				</ul>
			</div>
			<div class="columns seven">
				<h4>${meal.strMeal}</h4>
				<p>${meal.strInstructions}</p>
			</div>
		</div>
        ${meal.strYoutube? `
          <div class="row"> 
          <h4> Vedio Recipe </h4>
          <div class="vedioWrapper">
          <iframe width="420" height="315"
          src="https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}">
          </iframe>
          </div>
          </div>       
        ` :""}
        <h1> Codded By Mahlil Mohammed Mahee </h1> 
 </div>
 `
getMealBody.innerHTML=newInnerHTML
}



