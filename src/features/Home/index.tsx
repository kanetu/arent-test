import React from "react";
import RecommendCard from "../../common/components/RecommendCard";
import ViewMoreButton from "../../common/components/ViewMoreButton";

interface IHome {}

const Home: React.FC<IHome> = () => {
  const listRecommended = [
    {
      id: 1,
      title: "RECOMMENDED COLUMN",
      subject: "オススメ",
    },
    {
      id: 2,
      title: "RECOMMENDED DIET",
      subject: "ダイエット",
    },

    {
      id: 3,
      title: "RECOMMENDED BEAUTY",
      subject: "美容",
    },

    {
      id: 4,
      title: "RECOMMENDED HEALTH",
      subject: "健康",
    },
  ];
  return (
    <div className="home">
      <div className="list-recommended">
        {listRecommended.map((rec) => (
          <RecommendCard key={rec.id} title={rec.title} subject={rec.subject} />
        ))}
      </div>
      <div className="view-more-section">
        <ViewMoreButton title="コラムをもっと見る" />
      </div>
    </div>
  );
};

export default Home;
