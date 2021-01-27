import React from "react";
import { connect } from "react-redux";
import { setFavorite, deleteFavorite } from "../actions";
import { Link } from "react-router-dom";
//Styles
import "../assets/styles/components/CarouselItem.scss";

//Static

import play from "../assets/static/play-icon.png";
import plus from "../assets/static/plus-icon.png";
import remove from "../assets/static/delete-icon.png";
import check from "../assets/static/check-icon.png";

const CarouselItem = (props) => {
  const {
    cover,
    title,
    year,
    contentRating,
    duration,
    id,
    inMyList,
    isInMyList,
  } = props;

  const handleSetFavorite = () => {
    props.setFavorite({
      cover,
      title,
      year,
      contentRating,
      duration,
      id,
      isInMyList,
    });
  };

  const handleDeleteFavorite = (itemId) => {
    props.deleteFavorite(itemId);
  };

  return (
    <div className="carousel-item">
      <img className="carousel-item__img" src={cover} alt={`${title} cover`} />
      <div className="carousel-item__details">
        <div>
          <Link to={`/player/${id}`}>
            <img
              className="carousel-item__details--img"
              src={play}
              alt="Play Icon"
            />
          </Link>

          {inMyList ? (
            <img
              className="carousel-item__details--img"
              src={remove}
              alt="Remove Icon"
              onClick={() => handleDeleteFavorite(id)}
            />
          ) : isInMyList ? (
            <img
              className="carousel-item__details--img"
              src={check}
              alt="Check Icon"
            />
          ) : (
            <img
              className="carousel-item__details--img"
              src={plus}
              alt="Plus Icon"
              onClick={handleSetFavorite}
            />
          )}
        </div>
        <p className="carousel-item__details--title">{title}</p>
        <p className="carousel-item__details--subtitle">{`${year} ${contentRating} ${duration}`}</p>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
};

export default connect(null, mapDispatchToProps)(CarouselItem);
