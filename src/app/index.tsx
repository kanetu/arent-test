import React from "react";
import FoodCard from "../common/components/FoodCard";
import FoodMenu from "../common/components/FoodMenu";
import Footer from "../common/components/Footer";
import Header from "../common/components/Header";
import ViewMoreButton from "../common/components/ViewMoreButton";
import "./index.scss";

const App: React.FC = () => {
  return (
    <div className="main">
      <Header />

      <FoodMenu
        title="Snack"
        background="images/hexagon.svg"
        icon="icons/cup.svg"
      />
      <FoodCard title="05.21.Snack" imageUrl="images/d01.jpg" />
      <ViewMoreButton title={"記録をもっと見る"} />

      <Footer />
    </div>
  );
};

export default App;
