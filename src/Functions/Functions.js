import locationImage from "../Images/location.png";

function CardGenerator(props) {
  return (
    <div>
      <div className="container">
        <div className="card--container">
          <div className="journal--img--container">
            <img className="journal--img" src={props.img} />
          </div>
          <div className="journal--content--container">
            <h3>
              <img className="location--image" src={locationImage} />
              <div className="country--name">{props.country}</div>

              <a
                className="googlemaps--link"
                href={props.googlemaps}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on Google Maps
              </a>
            </h3>

            <h5>{props.title}</h5>
            <h6>{props.date}</h6>
            <p>{props.body}</p>
          </div>
        </div>
      </div>
      <hr></hr>
    </div>
  );
}

export { CardGenerator };
