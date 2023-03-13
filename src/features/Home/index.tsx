import React from "react";
import RecommendCard from "../../common/components/RecommendCard";
import RecommendFoodCard from "../../common/components/RecommendFoodCard";
import ScrollToTopButton from "../../common/components/ScrollToTopButton";
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

  const recommendFoodList = [
    {
      id: 1,
      title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
      tags: ["魚料理", "和食", "DHA"],
      recommendDateTime: "2021.05.17 23:25",
      imageUrl: "images/column-1.jpg",
    },
    {
      id: 2,
      title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
      tags: ["魚料理", "和食", "DHA"],
      recommendDateTime: "2021.05.17 23:25",
      imageUrl: "images/column-2.jpg",
    },
    {
      id: 3,
      title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
      tags: ["魚料理", "和食", "DHA"],
      recommendDateTime: "2021.05.17 23:25",
      imageUrl: "images/column-3.jpg",
    },
    {
      id: 4,
      title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
      tags: ["魚料理", "和食", "DHA"],
      recommendDateTime: "2021.05.17 23:25",
      imageUrl: "images/column-4.jpg",
    },
    {
      id: 5,
      title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
      tags: ["魚料理", "和食", "DHA"],
      recommendDateTime: "2021.05.17 23:25",
      imageUrl: "images/column-5.jpg",
    },
    {
      id: 6,
      title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
      tags: ["魚料理", "和食", "DHA"],
      recommendDateTime: "2021.05.17 23:25",
      imageUrl: "images/column-6.jpg",
    },
    {
      id: 7,
      title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
      tags: ["魚料理", "和食", "DHA"],
      recommendDateTime: "2021.05.17 23:25",
      imageUrl: "images/column-7.jpg",
    },
    {
      id: 8,
      title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
      tags: ["魚料理", "和食", "DHA"],
      recommendDateTime: "2021.05.17 23:25",
      imageUrl: "images/column-8.jpg",
    },
  ];
  return (
    <div className="home">
      <ScrollToTopButton />
      <div className="list-recommended">
        {listRecommended.map((rec) => (
          <RecommendCard key={rec.id} title={rec.title} subject={rec.subject} />
        ))}
      </div>
      <div className="list-recommended-food">
        {recommendFoodList.map((recFood) => (
          <RecommendFoodCard
            key={recFood.id}
            title={recFood.title}
            tags={recFood.tags}
            imageUrl={recFood.imageUrl}
            recommendDateTime={recFood.recommendDateTime}
          />
        ))}
      </div>
      <div className="view-more-section">
        <ViewMoreButton title="コラムをもっと見る" />
      </div>
    </div>
  );
};

export default Home;
