import React from "react";

interface IRecommendCard {
  title: string;
  subject: string;
}

const RecommendCard: React.FC<IRecommendCard> = ({ title, subject }) => {
  return (
    <div className="recommend-card">
      <span>{title}</span>
      <div className="recommend-card__line"></div>
      <span>{subject}</span>
    </div>
  );
};

export default RecommendCard;
