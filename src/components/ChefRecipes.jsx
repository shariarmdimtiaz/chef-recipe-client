import React from "react";
import { useLoaderData } from "react-router-dom";
//import Recipe from "./Recipe";
const Recipe = React.lazy(() => import("./Recipe"));
import { AiFillLike } from "react-icons/ai";
import LazyLoad from "react-lazyload";

const ChefRecipes = () => {
  const chefInfo = useLoaderData();
  const recipeInfo = chefInfo.recipes;
  return (
    <div className="container mx-auto">
      <div className="bg-[#DEF0F5] border rounded-xl p-2 grid grid-cols-1 md:grid-cols-2">
        <div className="mx-auto">
          <LazyLoad>
            <img
              className="border-0 rounded-xl h-80"
              src={chefInfo?.image_url}
              alt=""
            />
          </LazyLoad>
        </div>
        <div className="text-left pt-5 mx-auto md:ps-5">
          <h1 className="font-bold text-3xl py-2">{chefInfo.name}</h1>
          <p className="max-w-xl">
            <span className="font-bold">Biography : </span>
            {chefInfo.bio}
          </p>
          <div className="flex justify-start items-center">
            <p>
              <span className="font-bold">Likes: </span>
              {chefInfo.likes}
            </p>
            <AiFillLike />
          </div>
          <p>
            <span className="font-bold">Number of recipes: </span>
            {chefInfo.num_recipes}
          </p>
          <p>
            <span className="font-bold">Years of experience: </span>
            {chefInfo.years_of_experience}
          </p>
        </div>
      </div>
      <div className="py-10">
        <div className="grid grid-cols-1 gap-5">
          {recipeInfo.map((recipe) => (
            <React.Suspense
              fallback={<div className="text-center">Loading...</div>}
            >
              <Recipe key={recipe.id} recipe={recipe}></Recipe>
            </React.Suspense>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChefRecipes;
