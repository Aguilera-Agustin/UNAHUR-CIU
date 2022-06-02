import React from "react";

const HeaderItem = ({ href, title }) => {
  return (
    <a href={href} className="hover:text-orange-500 transition-colors">
      {title}
    </a>
  );
};

export default HeaderItem;
