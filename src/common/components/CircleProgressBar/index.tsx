import classNames from "classnames";
import React from "react";

interface ICircleProgressBar {
  percent: number;
}

const CircleProgressBar: React.FC<ICircleProgressBar> = ({ percent }) => {
  return (
    <div
      className={classNames({
        "progress-circle": true,
        over50: percent > 50,
        [`p${percent}`]: true,
      })}
    >
      <span>{percent}%</span>
      <div className="left-half-clipper">
        <div className="first50-bar"></div>
        <div className="value-bar"></div>
      </div>
    </div>
  );
};

export default CircleProgressBar;
