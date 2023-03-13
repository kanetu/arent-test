import React from "react";

interface IScrollToTopButton {
  onClick?: () => void;
}

const ScrollToTopButton: React.FC<IScrollToTopButton> = ({
  onClick,
  ...props
}) => {
  const handleClick = () => {
    if (onClick) onClick();
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="scroll-to-top">
      <button onClick={handleClick} {...props}>
        <img src="icons/component_scroll.svg" alt="scroll-to-top-icon" />
      </button>
    </div>
  );
};

export default ScrollToTopButton;
