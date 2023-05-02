import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import classes from './Detail.module.css'

const DetailScreen = () => {  

  const DetailScreen = () => {
    const { id } = useParams();

    useEffect(() => {
      axios
          .get("https://recipes.devmountain.com/recipes/${id}")
          .then((res) => {
              setRecipe(res.data);
          });
  }, []);

  return (
    <section>
      {recipe.ingredients && recipe.ingredients.map((ing, index) => {
    return <h4>{ing.quantity} {ing.ingredient}</h4>
})}

<p style={{ whiteSpace: "pre-wrap" }}>
    {recipe.instructions && JSON.parse(recipe.instructions)}
</p>
      {/* Welcome to the details page! This page will be reusable. Follow instructions to know what to do here. */}
    </section>
  );
 };
};

export default DetailScreen;
