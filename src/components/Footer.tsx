import React from "react";
import "../assets/css/footer.css";

const Footer = () => {
  return (
    <div className="custom-background py-32">
      <div className="w-footer m-auto text-center">
        <div className="mb-7 mt-14">
          <p className="text-5xl text-white font-sfpro font-bold">
            Start a project with me
          </p>
        </div>
        <div className="flex m-auto bg-opacity-30 h-1 w-full font-sfpro bg-white mb-10"></div>
        <div>
          <p className="text-2xl text-white">
            let’s discuss our ideas for presenting your business to the world in
            an attractive, efficient and effective way.
          </p>
        </div>
        <div>
          <p className="m-auto bg-white text-amber-btn_color font-sfpro font-bold py-2 px-5 shadow cursor-pointer w-28 text-sm mt-5">
            Hire Me
          </p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
