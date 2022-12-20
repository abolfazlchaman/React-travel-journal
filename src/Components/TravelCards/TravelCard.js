import React, { Component } from "react";

//styles
import "./TravelCard.css";

//functions
import { CardGenerator } from "../../Functions/Functions";

//data
import cardData from "../../data";

export default class Card extends Component {
  render() {
    return (
      <section>
        {cardData.map(function (props) {
          return (
            <CardGenerator
              key={props.id}
              img={props.img}
              country={props.country}
              googlemaps={props.googlemaps}
              title={props.title}
              date={props.date}
              body={props.body}
            />
          );
        })}
      </section>
    );
  }
}
