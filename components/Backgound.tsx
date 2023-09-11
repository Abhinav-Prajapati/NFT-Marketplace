"use client";
// components/Background.js
import React from "react";

const Background = () => {
  return (
    <div className="w-full h-[300vh] -z-20">
      <div className="h-full w-[0.1px] bg-gray-700/70 absolute top-0 left-[20%]" />
      <div className="h-full w-[0.1px] bg-gray-700/70 absolute top-0 left-[40%]" />
      <div className="h-full w-[0.1px] bg-gray-700/70 absolute top-0 left-[60%]" />
      <div className="h-full w-[0.1px] bg-gray-700/70 absolute top-0 left-[80%]" />
    </div>
  );
};

export default Background;
