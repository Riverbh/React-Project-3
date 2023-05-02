import React from 'react'
import AdBanner from './AdBanner'
import { useEffect, useState } from 'react'
import axios from 'axios'
import RecipeCard from '../../Elements/RecipeCard'
import { BiSearchAlt2 } from "react-icons/bi"



const HomeScreen = () => { 
  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState("")
  
  const getRecipes = () => {
    axios
      .get("https://recipes.devmountain.com/recipes")
      .then((res) => {
        setRecipes(res.data)
        console.log(res.data)
      })
  }
  
  useEffect(() => {
    getRecipes()
  }, [])

  const recipeDisplay = recipes
    .filter((recipe, index) => {
        let title = recipe.recipe_name.toLowerCase()
        let searchParams = search.toLowerCase()
        return title.includes(searchParams)
    })
    .map((recipe, index) => {
        return <RecipeCard recipe={recipe}/>
    })


  return (
    <div>
      <AdBanner recipes={recipes}/>
      <RecipeCard />
      <span>
        <BiSearchAlt2 size="2em" color="#DA7635" />
      <input 
      value={search}
      type="text"
       placeholder="Search for a Recipe"
       onChange={(e) => setSearch(e.target.value)}
       />
      </span>
      <div>
        {recipeDisplay ? recipeDisplay : <h2>No Recipes!</h2>}
      </div>
      {/* Much code from Part 2 will be placed around here. Do your best! */}
    </div>
  )
}

export default HomeScreen