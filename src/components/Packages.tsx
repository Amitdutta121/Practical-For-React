import React from "react";
import Card from "./Card";

const Packages = () => {
  return (
    <div className="pb-40">
      {/* Packages Header */}
      <div className="flex justify-center">
        <p className="text-5xl font-bold mt-10 mb-5">Packages</p>
      </div>
      <div className="flex m-auto bg-opacity-30 h-1 w-48 font-sfpro bg-amber-primary mb-10"></div>
      <div className="w-9/12 h-full m-auto grid grid-cols-1 xl:grid-cols-3 gap-8">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};
export default Packages;
