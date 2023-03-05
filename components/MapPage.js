import PageWithJSbasedForm from './form';
import { useState } from "react";
import { useMemo } from "react";
import { useLoadScript, GoogleMap, Marker } from '@react-google-maps/api';
import styles from '@/styles/Content.module.css'

export default function MapPage() {

    const [isMarkerShown, setMarkerShown] = useState(false);
    const [markerPosition, setMarkerPosition] = useState(null);

    const handleClickedMap = (e) => {
        let lat = e.latLng.lat()
        let lng  = e.latLng.lng()
        console.log(lat, lng)
        setMarkerPosition({ lat: parseFloat(lat), lng: parseFloat(lng) })
        setMarkerShown(true)
     }

    const mapCenter = useMemo(
        () => ({ lat: 27.672932021393862, lng: 85.31184012689732 }),
        []
      );
    
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: 'AIzaSyBR5OPxQcPmPbwlKgcxkTP9Q16HKV_0Ijs',
      });



    return(
        <>
        <div className={styles.content_container}></div>
              <PageWithJSbasedForm/>
        {!isLoaded ?  <div>Loading...</div> :
        <GoogleMap
        zoom={14}
        center={mapCenter}
        mapTypeId={"satellite"}
        mapContainerStyle={{ width: '800px', height: '800px' }}
        onLoad={() => console.log('Map Component Loaded...')}
        onClick={ handleClickedMap}
        >
            {console.log(markerPosition)}
            {isMarkerShown && <Marker position={markerPosition} />}
        
        </GoogleMap>
        }   
        <div/>
        </>
    )
}