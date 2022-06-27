import React from "react";
import GoogleMapReact from "google-map-react";

const MapComponents = ({ center, zoom }) => {
  return (
    <>
      <h1></h1>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDu6jwop2HAABe__Hz-TSE0uafDsQhNHPk" }}
        defaultCenter={center}
        defaultZoom={zoom}
      ></GoogleMapReact>
    </>
  );
};

MapComponents.defaultProps = {
  center: {
    lat: -1.2884,
    lng: 36.8233,
  },
  zoom: 15,
};

export default MapComponents;
