import React from "react";

//styles
import "../assets/styles/components/Search.scss";

//vars
const main_title_text = "¿Qué quieres ver hoy?";
const main_input_placeholder = "Buscar...";

class Search extends React.Component {
  render() {
    return (
      <section className="main">
        <h2 className="main__title">{main_title_text}</h2>
        <input
          type="text"
          className="input"
          placeholder={main_input_placeholder}
        />
      </section>
    );
  }
}

export default Search;
