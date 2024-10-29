'use client';
import { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

function Map({ address }) {
    const mapRef = useRef(null);

    useEffect(() => {
        const loader = new Loader({
            apiKey: "AIzaSyDiOdy-gkanniDXVjN0ivAeYjS-V7R620Y",
            version: "weekly",
        });

        loader.load().then(() => {
            if (google && google.maps) {
                const geocoder = new google.maps.Geocoder();

                geocoder.geocode({ address: address }, (results, status) => {
                    if (status === "OK") {
                        const map = new google.maps.Map(mapRef.current, {
                            center: results[0].geometry.location,
                            zoom: 8,
                        });

                        new google.maps.Marker({
                            map: map,
                            position: results[0].geometry.location,
                        });
                    } else {
                        console.error(`Geocode was not successful for the following reason: ${status}`);
                    }
                });
            }
        }).catch(error => console.error("Failed to load Google Maps API:", error));
    }, [address]);

    return <div style={{ height: "400px" }} ref={mapRef} />;
}

export default Map;
