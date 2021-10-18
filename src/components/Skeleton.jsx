import React from "react";
import "./Skeleton.scss";

const Skeleton = () => {
  return (
    <div className="py-5 px-6">
      <div className="lg:container mx-auto">
        <div></div>
      </div>
    </div>
  );
};

export default Skeleton;
