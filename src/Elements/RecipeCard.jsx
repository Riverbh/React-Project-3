import React from "react";
import classes from './RecipeCard.module.css'

const RecipeCard = () => {
    return (
        <div className={classes.recipe_card}>
            <div>
                <div className={classes.recipe_img_container}>
                    <img src="https://wgntv.com/wp-content/uploads/sites/5/2022/11/robinrecipe.jpg" />
                    <h3>Hot Dog Jello Cake</h3>
                </div>
            </div>
            <button>See More</button>
        </div>
    )
}

export default RecipeCard 