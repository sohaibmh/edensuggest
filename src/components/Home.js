import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./home.css";
import "../assets/main.css";

const Home = () => {
  const productNames = [
    { product: "Audible" },
    { product: "V55" },
    { product: "Sani-Cloth" },
  ];

  const [display, setDisplay] = useState(false);
  const [options, setOptions] = useState(productNames);
  const [search, setSearch] = useState("");
  const wrapperRef = useRef(null);

  const setSearchValue = (value) => {
    setSearch(value);
    setDisplay(false);
    console.log("value", value);
  };

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const handleClickOutside = (event) => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(event.target)) {
      setDisplay(false);
    }
  };

  return (
    <div className="mainContainer">
      <h1 className="text-6xl">
        Welcome To <i className="websiteName">EdenSuggest</i>
      </h1>
      <h2 className="text-5xl">
        Find suggestions for best products on the market
      </h2>
      <br></br>
      <div className="autoContainer cursor-pointer" ref={wrapperRef}>
        <input
          className="autoInput text-black bg-white focus:outline-none border-4 border-gold-100 rounded-t-lg py-2 px-4 block appearance-none leading-normal"
          placeholder="Search Product"
          onClick={() => setDisplay(!display)}
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        {display && (
          <div className="autoResults text-black bg-white rounded-b-lg border-4 border-gold-100 focus:outline-none focus:shadow-outline overflow-hidden block appearance-none leading-normal">
            {productNames
              .filter(({ product }) => {
                if (product) {
                  return (
                    product.toLowerCase().indexOf(search.toLowerCase()) > -1
                  );
                } else return false;
              })
              .map((value, i) => {
                return (
                  <div
                    onClick={() => setSearchValue(value.product)}
                    key={i}
                    tabIndex="0"
                    className="border-solid border-2 rounded-lg justify-start border-gray-100"
                  >
                    <Link to={`/${value.product}`}>{value.product}</Link>
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
