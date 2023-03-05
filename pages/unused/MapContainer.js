import React, {useState} from 'react';
import { useRef } from "react";
import { useMemo } from "react";
import { InfoWindow, withGoogleMap, withScriptjs, GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';



    /*withStateHandlers(() => ({
        isMarkerShown: false,
        markerPosition: null
      }), {
        onMapClick: ({ isMarkerShown }) => (e) => ({
            markerPosition: e.latLng,
            isMarkerShown:true
        })
      }),*/

const MapContainer =({}) => {

    const [isMarkerShown, setMarkerShown] = useState(false);
const [markerPosition, setMarkerPosition] = useState(null);

const mapCenter = useMemo(
    () => ({ lat: 27.672932021393862, lng: 85.31184012689732 }),
    []
  );

    
const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY,
  });

const handleClickedMap = (e) => {
    let lat = e.latLng.lat()
    let lng  = e.latLng.lat()
    console.log(lat, lng)
    setMarkerPosition(e.latLng)
    setMarkerShown(true)
 }


        return (
            <div style={{ height: '100%', width: '100%' }}>
                <GoogleMap
    defaultZoom={8}
    mapContainerStyle={{ width: '800px', height: '800px' }}
    center={mapCenter}
    onLoad={() => console.log('Map Component Loaded...')}
    onClick={ handleClickedMap}
/>
    {/* {isMarkerShown && <Marker position={markerPosition} />}

</GoogleMap> */}

            </div>
        )
}

export default MapContainer;
