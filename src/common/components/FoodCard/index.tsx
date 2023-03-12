import React from "react";

interface IFoodCard {
  imageUrl: string;
  title: string;
}

const FoodCard: React.FC<IFoodCard> = ({ imageUrl, title }) => {
  return (
    <div className="food-card">
      <img src={imageUrl} className="" alt="food-card-image" />
      <span>{title}</span>
    </div>
  );
};

export default FoodCard;
