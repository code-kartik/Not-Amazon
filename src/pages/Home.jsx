import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const changeTitle = () => {
    document.title = "Home";
  }

  useEffect(()=>{
    changeTitle();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="justify-center items-center text-center py-2 font-bold text-[28px]">Categories</h1>
      <div className="flex">
        <Link
          to="/product/men's clothing"
          className="flex items-center justify-center font-bold font-serif bg-gradient-to-b from-blue-500 to-blue-900 text-white h-[450px] w-80 m-12 text-[24px] rounded hover:scale-105 duration-75 overflow-hidden"
        >
          <h1>Men's Clothing</h1>
        </Link>
        <Link
          to="/product/women's clothing"
          className="flex items-center justify-center font-bold font-serif bg-gradient-to-b from-pink-900 to-pink-500 text-white h-[450px] w-80 m-12 text-[20px] rounded hover:scale-105 duration-75 overflow-hidden"
        >
          <h1>Women's Clothing</h1>
        </Link>
        <Link
          to="/product/jewelery"
          className="flex items-center justify-center font-bold font-serif bg-gradient-to-b from-yellow-500 to-yellow-900 text-white h-[450px] w-80 m-12 text-[24px] rounded hover:scale-105 duration-75 overflow-hidden"
        >
          <h1>Jewelery</h1>
        </Link>
        <Link
          to="/product/electronics"
          className="flex items-center justify-center font-bold font-serif bg-gradient-to-b from-red-900 to-red-500 text-white h-[450px] w-80 m-12 text-[24px] rounded hover:scale-105 duration-75 overflow-hidden"
        >
          <h1>Electronics</h1>
        </Link>
      </div>
    </div>
  );
};

export default Home;
