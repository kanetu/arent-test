import React from "react";
import { useNavigate } from "react-router-dom";

interface IHeader {}
const Header: React.FC<IHeader> = () => {
  const navigate = useNavigate();

  const handleClickLogo = () => {
    navigate("/");
  };
  return (
    <div className="header">
      <div className="left-side">
        <img id="logo" src="logo.svg" alt="logo" onClick={handleClickLogo} />
      </div>
      <div className="right-side">
        <nav>
          <ul>
            <li>
              <a href="/personal-info">
                <img src="icons/info-count.svg" alt="icon-profile" />
                <span>自分の記録</span>
              </a>
            </li>
            <li>
              <a href="/challenge">
                <img src="icons/challenge.svg" alt="icon-challenge" />
                <span>チャレンジ</span>
              </a>
            </li>
            <li>
              <a href="/notification">
                <img src="icons/info.svg" alt="icon-info" />
                <span>お知らせ</span>
              </a>
            </li>
          </ul>
        </nav>
        <button>
          <img src="icons/menu.svg" alt="icon-menu" />
        </button>
      </div>
    </div>
  );
};

export default Header;
