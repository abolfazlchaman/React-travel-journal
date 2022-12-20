import React, { Component } from "react";
import globe from "./../../Images/globe.png";
import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <header >
        <img className="logo" src={globe} />
        <h1 className="heading">my travel journal.</h1>
      </header>
    );
  }
}
