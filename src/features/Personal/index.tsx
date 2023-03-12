import React from "react";
import CircleProgressBar from "../../common/components/CircleProgressBar";
import FoodCard from "../../common/components/FoodCard";
import FoodMenu from "../../common/components/FoodMenu";
import LineChart from "../../common/components/LineChart";
import ViewMoreButton from "../../common/components/ViewMoreButton";

interface IPersonalInfo {}

const PersonalInfo: React.FC<IPersonalInfo> = () => {
  const foodMenus = [
    {
      id: 1,
      title: "Morning",
      icon: "icons/knife.svg",
    },
    {
      id: 2,
      title: "Lunch",
      icon: "icons/knife.svg",
    },
    {
      id: 3,
      title: "Dinner",
      icon: "icons/knife.svg",
    },
    {
      id: 4,
      title: "Snack",
      icon: "icons/cup.svg",
    },
  ];

  const dishes = [
    {
      id: 2,
      title: "05.21.Dinner",
      imageUrl: "images/d01.jpg",
    },
    {
      id: 2,
      title: "05.21.Dinner",
      imageUrl: "images/d02.jpg",
    },
    {
      id: 3,
      title: "05.21.Lunch",
      imageUrl: "images/l01.jpg",
    },
    {
      id: 4,
      title: "05.21.Lunch",
      imageUrl: "images/l02.jpg",
    },
    {
      id: 5,
      title: "05.21.Lunch",
      imageUrl: "images/l02.jpg",
    },
    {
      id: 6,
      title: "05.21.Lunch",
      imageUrl: "images/l03.jpg",
    },
    {
      id: 7,
      title: "05.21.Morning",
      imageUrl: "images/m01.jpg",
    },
    {
      id: 8,
      title: "05.21.Morning",
      imageUrl: "images/m02.jpg",
    },
  ];
  return (
    <div className="personal-info">
      <div className="intro">
        <div className="achievement-rate">
          <CircleProgressBar percent={80} />
          <img src="images/d01.jpg" alt="achievement-image" />
        </div>
        <div className="line-chart-wrapper">
          <LineChart />
        </div>
      </div>

      <div className="choose-food-menu">
        {foodMenus.map((foodMenu) => (
          <FoodMenu
            key={foodMenu.id}
            title={foodMenu.title}
            background="images/hexagon.svg"
            icon={foodMenu.icon}
          />
        ))}
      </div>

      <div className="list-dishes">
        {dishes.map((dish) => (
          <FoodCard key={dish.id} title={dish.title} imageUrl={dish.imageUrl} />
        ))}
      </div>

      <div className="view-more-section">
        <ViewMoreButton title="記録をもっと見る" />
      </div>
    </div>
  );
};

export default PersonalInfo;
