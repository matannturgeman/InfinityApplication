import React, { Component } from "react";
import PropTypes from "prop-types";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import env from "react-dotenv";

const AnyMap = Map as any;

const customizeMap = {
  width: "100%",
  height: "100%",
};

const containerStyle = {
  position: "relative",
  width: "100%",
  height: "100%",
};

class GoogleMapComponent extends Component {
  private cord: { lng: any; lat: any };

  constructor(props: any) {
    super(props);
    this.cord = { lat: props.lat, lng: props.lng };
  }

  drawMarker = () => {
    // @ts-ignore
    const {
      cord: { lat, lng },
    } = this;
    return (
      <Marker
        // @ts-ignore
        id={"place"}
        position={{
          lat,
          lng,
        }}
        onClick={() => console.log("Event Hanlder Called")}
      />
    );
  };

  render() {
    // @ts-ignore
    const {
      cord: { lat, lng },
    } = this;
    return (
      <AnyMap
        // @ts-ignore
        containerStyle={containerStyle}
        // @ts-ignore
        google={this.props.google}
        style={customizeMap}
        zoom={15}
        initialCenter={{
          lat,
          lng,
        }}
      >
        {this.drawMarker()}
      </AnyMap>
    );
  }
}

const MapView = GoogleApiWrapper({
  apiKey: env.GOOGLE_MAP_KEY,
})(GoogleMapComponent as any);

const OuterMapView = (props) => <MapView {...props} />;

OuterMapView.propTypes = {
  lng: PropTypes.number,
  lat: PropTypes.number,
};
export default OuterMapView;
