import React from "react";

const Card = ({ title, description, imgUrl }) => {
  return (
    <div className="w-64 shadow-xl mr-12 mb-12 rounded-md">
      <header className="h-48  w-full rounded-t-md">
        <img src={imgUrl} className="rounded-t-md h-full w-full" alt={title} />
      </header>
      <div className="p-3">
        <h6 className="text-xl">{title}</h6>
        <p className="font-medium text-gray-400">{description} </p>
        <div className="flex items-center mt-5 justify-center">
          <button className=" text-white font-semibold px-12 py-2 rounded-2xl bg-orange-400 hover:bg-orange-300 transition-colors">
            COMPRAR
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
