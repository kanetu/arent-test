import React from "react";

interface IViewMoreButton {
  title: string;
}

const ViewMoreButton: React.FC<IViewMoreButton> = ({ title, ...props }) => {
  return (
    <button className="view-more-button" {...props}>
      {title}
    </button>
  );
};

export default ViewMoreButton;
