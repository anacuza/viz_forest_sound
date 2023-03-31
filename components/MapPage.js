import PageWithJSbasedForm from './form';
import { useState } from "react";
import { useMemo } from "react";
import { useLoadScript, GoogleMap, Marker } from '@react-google-maps/api';
import styles from '@/styles/Content.module.css'
import ImageMapper from 'react-img-mapper';
import React from 'react';
import Mapper from './Mapper';

export default function MapPage({setMappingList}) {

    // const [isMarkerShown, setMarkerShown] = useState(false);
    // const [markerPosition, setMarkerPosition] = useState(null);

    // const handleClickedMap = (e) => {
    //     let lat = e.latLng.lat()
    //     let lng  = e.latLng.lng()
    //     console.log(lat, lng)
    //     setMarkerPosition({ lat: parseFloat(lat), lng: parseFloat(lng) })
    //     setMarkerShown(true)
    //  }

    // const mapCenter = useMemo(
    //     () => ({ lat: 7.9465, lng: 1.0232 }),
    //     []
    //   );
    
    // const { isLoaded } = useLoadScript({
    //     googleMapsApiKey: 'AIzaSyBR5OPxQcPmPbwlKgcxkTP9Q16HKV_0Ijs',
    //   });

    const URL = "map.png"
    const MAP = {
          color: 0,
          colors: ["yellow", "orange", "purple"],
          map: {
            name: "my-map",
            areas: [
              {
                name: "1",
                shape: "rect",
                coords: [117,1852,220,1958],
                StrokeColor: "red",
                lineWidth: 5,
                lineColor: "red"
              },
              {
                name: "2",
                shape: "rect",
                coords: [329,1956,225,1853],
                StrokeColor: "red",
                lineWidth: 5,
                lineColor: "red"
              }
            ]
        }
    };

    const handleImageMap = () => {
        console.log('hi')
    }


    return(
        <>
        <div className={styles.content_container}>

        <Mapper  setMappingList={setMappingList}/>

{/*<img src="map.png" useMap="imageMap" width='75%' className={styles.imageMap} onClick={handleImageMap}/>
 
<map id="imageMap" name="imageMap">
    <area target="" alt="" title="" href="https://c1.staticflickr.com/5/4052/4503898393_303cfbc9fd_b.jpg" onClick={handleImageMap} coords="112,1955,6,1852" shape="rect"/>
    <area target="" alt="" title="" href="" coords="117,1852,220,1958" shape="rect"/>
    <area target="" alt="" title="" href="" coords="329,1956,225,1853" shape="rect"/>
    <area target="" alt="" title="" href="" coords="7,1743,112,1848" shape="rect"/>
    <area target="" alt="" title="" href="" coords="117,1744,220,1847" shape="rect"/>
    <area target="" alt="" title="" href="" coords="226,1744,328,1847" shape="rect"/>
    <area target="" alt="" title="" href="" coords="8,1637,111,1738" shape="rect"/>
    <area target="" alt="" title="" href="" coords="117,1637,220,1738" shape="rect"/>
    <area target="" alt="" title="" href="" coords="224,1637,331,1738" shape="rect"/>
    <area target="" alt="" title="" href="" coords="336,1638,437,1739" shape="rect"/>
    <area target="" alt="" title="" href="" coords="8,1528,111,1631" shape="rect"/>
    <area target="" alt="" title="" href="" coords="117,1528,219,1631" shape="rect"/>
    <area target="" alt="" title="" href="" coords="224,1528,327,1631" shape="rect"/>
    <area target="" alt="" title="" href="" coords="336,1529,438,1630" shape="rect"/>
    <area target="" alt="" title="" href="" coords="444,1530,546,1630" shape="rect"/>
    <area target="" alt="" title="" href="" coords="550,1529,655,1630" shape="rect"/>
    <area target="" alt="" title="" href="" coords="661,1528,762,1632" shape="rect"/>
    <area target="" alt="" title="" href="" coords="9,1419,110,1522" shape="rect"/>
    <area target="" alt="" title="" href="" coords="117,1420,220,1520" shape="rect"/>
    <area target="" alt="" title="" href="" coords="225,1421,328,1521" shape="rect"/>
    <area target="" alt="" title="" href="" coords="335,1419,437,1520" shape="rect"/>
    <area target="" alt="" title="" href="" coords="445,1420,546,1520" shape="rect"/>
    <area target="" alt="" title="" href="" coords="551,1420,652,1520" shape="rect"/>
    <area target="" alt="" title="" href="" coords="661,1420,762,1520" shape="rect"/>
    <area target="" alt="" title="" href="" coords="117,1312,219,1412" shape="rect"/>
    <area target="" alt="" title="" href="" coords="227,1312,327,1413" shape="rect"/>
    <area target="" alt="" title="" href="" coords="336,1310,436,1413" shape="rect"/>
    <area target="" alt="" title="" href="" coords="444,1312,545,1412" shape="rect"/>
    <area target="" alt="" title="" href="" coords="552,1312,652,1413" shape="rect"/>
    <area target="" alt="" title="" href="" coords="661,1311,763,1412" shape="rect"/>
    <area target="" alt="" title="" href="" coords="335,1204,439,1303" shape="rect"/>
    <area target="" alt="" title="" href="" coords="444,1204,545,1303" shape="rect"/>
    <area target="" alt="" title="" href="" coords="552,1204,652,1306" shape="rect"/>
    <area target="" alt="" title="" href="" coords="660,1204,763,1304" shape="rect"/>
    <area target="" alt="" title="" href="" coords="443,1094,545,1195" shape="rect"/>
    <area target="" alt="" title="" href="" coords="551,1094,653,1195" shape="rect"/>
    <area target="" alt="" title="" href="" coords="661,1094,762,1196" shape="rect"/>
    <area target="" alt="" title="" href="" coords="768,1094,870,1195" shape="rect"/>
    <area target="" alt="" title="" href="" coords="443,984,545,1087" shape="rect"/>
    <area target="" alt="" title="" href="" coords="550,986,654,1087" shape="rect"/>
    <area target="" alt="" title="" href="" coords="661,985,762,1088" shape="rect"/>
    <area target="" alt="" title="" href="" coords="770,986,870,1086" shape="rect"/>
    <area target="" alt="" title="" href="" coords="551,878,653,978" shape="rect"/>
    <area target="" alt="" title="" href="" coords="659,878,762,978" shape="rect"/>
    <area target="" alt="" title="" href="" coords="769,878,870,978" shape="rect"/>
    <area target="" alt="" title="" href="" coords="551,768,653,870" shape="rect"/>
    <area target="" alt="" title="" href="" coords="660,768,763,871" shape="rect"/>
    <area target="" alt="" title="" href="" coords="770,769,870,870" shape="rect"/>
    <area target="" alt="" title="" href="" coords="877,768,979,870" shape="rect"/>
    <area target="" alt="" title="" href="" coords="984,768,1087,870" shape="rect"/>
    <area target="" alt="" title="" href="" coords="1095,766,1196,871" shape="rect"/>
    <area target="" alt="" title="" href="" coords="1203,768,1304,869" shape="rect"/>
    <area target="" alt="" title="" href="" coords="877,878,979,978" shape="rect"/>
    <area target="" alt="" title="" href="" coords="986,878,1088,978" shape="rect"/>
    <area target="" alt="" title="" href="" coords="1094,879,1196,977" shape="rect"/>
    <area target="" alt="" title="" href="" coords="659,660,762,760" shape="rect"/>
    <area target="" alt="" title="" href="" coords="769,660,871,762" shape="rect"/>
    <area target="" alt="" title="" href="" coords="877,660,981,760" shape="rect"/>
    <area target="" alt="" title="" href="" coords="985,659,1088,759" shape="rect"/>
    <area target="" alt="" title="" href="" coords="1094,660,1195,760" shape="rect"/>
    <area target="" alt="" title="" href="" coords="551,552,654,654" shape="rect"/>
    <area target="" alt="" title="" href="" coords="660,553,763,653" shape="rect"/>
    <area target="" alt="" title="" href="" coords="768,551,871,653" shape="rect"/>
    <area target="" alt="" title="" href="" coords="876,552,979,653" shape="rect"/>
    <area target="" alt="" title="" href="" coords="550,442,654,545" shape="rect"/>
    <area target="" alt="" title="" href="" coords="661,442,761,545" shape="rect"/>
    <area target="" alt="" title="" href="" coords="768,442,870,543" shape="rect"/>
    <area target="" alt="" title="" href="" coords="878,443,979,544" shape="rect"/>
    <area target="" alt="" title="" href="" coords="551,334,653,435" shape="rect"/>
    <area target="" alt="" title="" href="" coords="660,335,762,436" shape="rect"/>
    <area target="" alt="" title="" href="" coords="770,335,870,436" shape="rect"/>
    <area target="" alt="" title="" href="" coords="878,335,978,434" shape="rect"/>
    <area target="" alt="" title="" href="" coords="984,335,1087,434" shape="rect"/>
    <area target="" alt="" title="" href="" coords="1095,335,1197,434" shape="rect"/>
    <area target="" alt="" title="" href="" coords="1204,333,1304,434" shape="rect"/>
    <area target="" alt="" title="" href="" coords="1311,335,1413,435" shape="rect"/>
    <area target="" alt="" title="" href="" coords="1420,335,1522,436" shape="rect"/>
    <area target="" alt="" title="" href="" coords="552,227,652,328" shape="rect"/>
    <area target="" alt="" title="" href="" coords="660,226,761,328" shape="rect"/>
    <area target="" alt="" title="" href="" coords="770,226,870,328" shape="rect"/>
    <area target="" alt="" title="" href="" coords="877,227,978,327" shape="rect"/>
    <area target="" alt="" title="" href="" coords="987,227,1087,327" shape="rect"/>
    <area target="" alt="" title="" href="" coords="1094,227,1196,327" shape="rect"/>
    <area target="" alt="" title="" href="" coords="1202,226,1306,327" shape="rect"/>
    <area target="" alt="" title="" href="" coords="1312,226,1412,327" shape="rect"/>
    <area target="" alt="" title="" href="" coords="1421,227,1523,329" shape="rect"/>
    <area target="" alt="" title="" href="" coords="1529,226,1631,328" shape="rect"/>
    <area target="" alt="" title="" href="" coords="443,116,546,219" shape="rect"/>
    <area target="" alt="" title="" href="" coords="552,117,653,217" shape="rect"/>
    <area target="" alt="" title="" href="" coords="660,117,762,219" shape="rect"/>
    <area target="" alt="" title="" href="" coords="769,117,871,218" shape="rect"/>
    <area target="" alt="" title="" href="" coords="876,117,979,218" shape="rect"/>
    <area target="" alt="" title="" href="" coords="986,116,1087,219" shape="rect"/>
    <area target="" alt="" title="" href="" coords="1094,117,1196,217" shape="rect"/>
    <area target="" alt="" title="" href="" coords="1204,116,1304,218" shape="rect"/>
    <area target="" alt="" title="" href="" coords="1310,117,1412,218" shape="rect"/>
    <area target="" alt="" title="" href="" coords="1420,115,1523,218" shape="rect"/>
    <area target="" alt="" title="" href="" coords="1528,116,1631,219" shape="rect"/>
    <area target="" alt="" title="" href="" coords="551,9,653,109" shape="rect"/>
    <area target="" alt="" title="" href="" coords="661,9,763,109" shape="rect"/>
    <area target="" alt="" title="" href="" coords="769,9,870,109" shape="rect"/>
    <area target="" alt="" title="" href="" coords="1097,12,1197,112" shape="rect"/>
    <area target="" alt="" title="" href="" coords="1202,9,1304,107" shape="rect"/>
    <area target="" alt="" title="" href="" coords="1311,9,1412,108" shape="rect"/>
    <area target="" alt="" title="" href="" coords="1421,8,1523,110" shape="rect"/>
</map>  */}


            {/* {!isLoaded ?  <div>Loading...</div> :
            <GoogleMap
            zoom={14}
            center={mapCenter}
            mapTypeId={"satellite"}
            mapContainerStyle={{ width: '50vw', height: '80vh', rightMargin:'10px' }}
            onLoad={() => console.log('Map Component Loaded...')}
            onClick={ handleClickedMap}
            >
                {console.log(markerPosition)}
                {isMarkerShown && <Marker position={markerPosition} />}
            
            </GoogleMap>
            }    */}
        </div>
        </>
    )
}

