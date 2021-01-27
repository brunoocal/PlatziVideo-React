import React from "react";
import { connect } from "react-redux";
import { searchVideo } from "../actions";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
//styles
import "../assets/styles/components/Search.scss";

//vars
const main_title_text = "¿Qué quieres ver hoy?";
const main_input_placeholder = "Buscar...";

const Search = ({ user, search, searchVideo }) => {
  const handleInput = (e) => {
    searchVideo(e.target.value);
  };

  return (
    <>
      <section className="main">
        <p className="main__subtitle">Bienvenido, {user.email}</p>
        <h2 className="main__title">{main_title_text}</h2>
        <input
          type="text"
          className="input"
          placeholder={main_input_placeholder}
          onKeyUp={handleInput}
        />
      </section>

      {search.length > 0 && (
        <Categories title="Busqueda">
          <Carousel>
            {search.map((item) => (
              <CarouselItem key={item.id} {...item} />
            ))}
          </Carousel>
        </Categories>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    search: state.search,
  };
};

const mapDispatchToProps = {
  searchVideo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
