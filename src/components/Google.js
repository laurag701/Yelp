import "./Google.css";
import React from 'react'
import { GoogleMap } from '@react-google-maps/api';
import { useLoadScript } from "@react-google-maps/api";

const libraries = ["places"];
const mapContainerStyle = {
    width: "100vw",
    height: "100vh",
};
const center = {
    lat: 35.2271,
    lng: 80.8431,
}
const options = {
    disableDefaultUI: true,
}

export default function Google(){
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries,
    })
    if (loadError) return "Error loading maps";
    if (!isLoaded) return "Loading Maps";
    return(
    <>
    <GoogleMap
    mapContainerStyle={mapContainerStyle}
    zoom={8}
    center={center}
    options={options}
    ></GoogleMap>
    </>
    )
}