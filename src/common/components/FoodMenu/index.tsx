import React from "react";

interface IFoodMenu {
  icon: string;
  title: string;
  background: string;
}

const FoodMenu: React.FC<IFoodMenu> = ({ icon, title, background }) => {
  return (
    <div className="food-menu">
      <img
        src={background}
        className="food-menu__background"
        alt="food-menu-background"
      />
      <div className="food-menu__content">
        <img src={icon} className="content__icon" alt={`icon-${title}`} />
        <span>{title}</span>
      </div>
    </div>
  );
};

export default FoodMenu;
