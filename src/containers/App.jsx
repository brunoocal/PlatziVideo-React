import React, { useState, useEffect } from "react";

//Components
import Header from "../components/Header.jsx";
import Search from "../components/Search.jsx";
import Categories from "../components/Categories.jsx";
import Carousel from "../components/Carousel.jsx";
import CarouselItem from "../components/CarouselItem.jsx";
import Footer from "../components/Footer.jsx";
import useInitialState from "../hooks/useInitialState.js";

//Styles
import "../assets/styles/App.scss";

//Api
const API = "http://localhost:3000/initialState";

const App = () => {
  const [videos, categories] = useInitialState(API);

  return (
    <>
      <Header />
      <Search />

      {categories.map(
        (category) =>
          videos[category].length > 0 && (
            <Categories key={categories.indexOf(category)} title={category}>
              <Carousel>
                {videos[category].map((item) => (
                  <CarouselItem key={item.id} {...item} />
                ))}
              </Carousel>
            </Categories>
          )
      )}

      <Footer />
    </>
  );
};

export default App;
