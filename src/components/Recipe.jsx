import React, { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiFillHeart } from "react-icons/ai";
import LazyLoad from "react-lazyload";

const Recipe = ({ recipe }) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const notify = () => {
    toast("This recipe is your favorite!");
    setIsDisabled(true);
  };
  return (
    <div>
      <div className="card card-side bg-amber-100 shadow-xl">
        <figure>
          <LazyLoad>
            <img
              className="object-cover border rounded-l-xl h-full"
              src={recipe?.img_url}
              alt="Food"
            />
          </LazyLoad>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{recipe.name} </h2>
          <div className="text-start">
            <p>
              <span className="font-bold">Ingredients: </span>
              {recipe.ingredients.map((list) => {
                return <span>{list}, </span>;
              })}
            </p>
            <p>
              <span className="font-bold">Cooking method: </span>
              {recipe.method}
            </p>
            <div className="flex justify-center items-center py-2">
              <Rating
                style={{ maxWidth: 150 }}
                value={Math.round(recipe?.rating || 0)}
                readOnly
              />
              <p className="text-lg ps-3">{recipe.rating}</p>
            </div>
          </div>
          <div className="card-actions justify-end">
            <button
              onClick={notify}
              disabled={isDisabled}
              className="btn btn-error"
            >
              Favorite
              <span className="ps-2">
                <AiFillHeart />
              </span>
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Recipe;
