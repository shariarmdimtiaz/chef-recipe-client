import React from "react";
import { Link } from "react-router-dom";
import { AiFillLike } from "react-icons/ai";
import LazyLoad from "react-lazyload";

const Chef = ({ chef }) => {
  return (
    <div>
      <div className="card w-100 bg-slate-50 shadow-xl">
        <figure>
          <LazyLoad>
            <img
              className="object-cover max-h-80"
              src={chef.image_url}
              alt="Shoes"
            />
          </LazyLoad>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{chef.name}</h2>
          <div className="text-start">
            <p>Years of experience: {chef.years_of_experience}</p>
            <p>Numbers of recipes: {chef.num_recipes}</p>
            <div className="flex items-center">
              <span className="">Likes: </span>
              {chef.likes}
              <span>
                <AiFillLike />
              </span>
            </div>
          </div>
          <div className="card-actions justify-end">
            <Link to={`/chef-recipes/${chef._id}`}>
              <button className="btn btn-warning">View Recipes</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chef;
