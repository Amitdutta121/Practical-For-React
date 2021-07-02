import React from "react";

const Card = () => {
  return (
    <div className="max-w-max rounded-sm overflow-hidden shadow-2xl bg-white p-10">
      <p className="text-amber-primary text-sm mb-3 font-sfpro">
        GETTING STARTED
      </p>
      <p className="text-2xl mb-1 font-sfpro font-bold">Singularity</p>
      <p className="text-base font-sfpro mb-2 text-amber-card_text">
        This package will suit you if you want a single page simple website for
        you product. It will cover only one web UI. You can revise the design
        for 2 times after the initial draft discussion session…
      </p>
      <p className="bg-amber-primary text-white font-sfpro font-bold py-2 px-5 shadow cursor-pointer w-28 text-sm">
        SEE MORE
      </p>
    </div>
  );
};
export default Card;
