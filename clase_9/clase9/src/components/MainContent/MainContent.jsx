import React from "react";

const MainContent = () => {
  return (
    <>
      <section className="h-96 pt-24 flex items-center justify-center" id='home'>
        <div className="mr-12">
          <h3 className="font-bold text-xl">La mejor pizzería del mundo</h3>
          <h1 className="font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-[#FFBE60] to-[#FF771F]">
            Probá pizza mia!
          </h1>
          <p className="max-w-md">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti,
            harum architecto
          </p>
        </div>
        <picture className=" h-80 w-80 ">
          <img src="/pizza.png" alt="pizza" className="w-full h-full" />
        </picture>
      </section>
    </>
  );
};

export default MainContent;
