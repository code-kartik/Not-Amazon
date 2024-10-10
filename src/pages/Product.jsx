import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const { category } = useParams();
  const getProducts = async () => {
    let response;
    category ? response = await axios.get(`https://fakestoreapi.com/products/category/${category}`) : response = await axios.get(`https://fakestoreapi.com/products`);
    const responseData = response.data;

    setData(responseData);
  };

  const changeTitle = () => {
    category ? document.title = category : document.title = 'All Products';
  }

  const [data, setData] = useState([]);

  useEffect(() => {
    getProducts();
    changeTitle();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {data.map(function (element, index) {
        return (
          <div
            key={element.id}
            className="hover:scale-105 duration-100 rounded shadow-md p-2"
          >
            <img src={element.image} alt={element.title} className="h-40 w-40 justify-center items-center flex" />
            <div>
              <h2 className="font-bold text-[18px]">{element.title}</h2>
              <p className="font-light italic text-gray-400 justify-end flex px-2">{element.category}</p>
              <p className="italic text-[14px] font-thin">{element.description}</p>
              <div className="flex justify-between p-1">
                <p className="font-light text-lg">{element.rating.rate}⭐ ({element.rating.count})</p>
                <p className="font-bold text-xl">${element.price}</p>
              </div>
              <button className="w-full bg-blue-500 rounded text-white mt-5">Add to Cart</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
