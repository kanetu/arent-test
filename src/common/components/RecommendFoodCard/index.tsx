import React from "react";
import FoodCard from "../FoodCard";

interface IRecommendFoodCard {
  title: string;
  tags: string[];
  recommendDateTime: string;
  imageUrl: string;
}

const RecommendFoodCard: React.FC<IRecommendFoodCard> = ({
  title,
  tags,
  recommendDateTime,
  imageUrl,
}) => {
  return (
    <div className="recommend-food-card">
      <FoodCard title={recommendDateTime} imageUrl={imageUrl} />
      <span className="recommend-food-card__title">{title}</span>
      <span className="recommend-food-card__tags">
        {tags.map((tag) => `#${tag} `)}
      </span>
    </div>
  );
};

export default RecommendFoodCard;
