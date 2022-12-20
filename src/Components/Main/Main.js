import React, { Component } from "react";

//components
import Header from "../Header/Header";
import Cards from "../TravelCard/TravelCard";

//styles
import "./Main.css";

export default class Main extends Component {
  render() {
    return (
      <section className="Main">
        <Header />
        <Cards />
      </section>
    );
  }
}
