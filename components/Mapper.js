import React from 'react';
import ImageMapper from 'react-img-mapper';

const Mapper = ({setMappingList}) => {
  const URL = 'map.png';
  const MAP = {
    name: 'my-map',
    // GET JSON FROM BELOW URL AS AN EXAMPLE
    areas: [
        {
            "id": "square1",
            "title": "Square1",
            "shape": "rect",
            "name": "1",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                112,1955,6,1852
            ],
          },
        {
            "id": "square2",
            "title": "Square2",
            "shape": "rect",
            "name": "2",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                117,1852,220,1958
            ],
          },
        {
            "id": "square3",
            "title": "Square3",
            "shape": "rect",
            "name": "3",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                329,1956,225,1853
            ],
          },
          {
            "id": "square4",
            "title": "Square4",
            "shape": "rect",
            "name": "4",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                7,1743,112,1848
            ],
          },
          {
            "id": "square5",
            "title": "Square5",
            "shape": "rect",
            "name": "5",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                117,1744,220,1847
            ],
          }, 
          {
            "id": "square6",
            "title": "Square6",
            "shape": "rect",
            "name": "6",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                226,1744,328,1847
            ],
          }, 
          {
            "id": "square7",
            "title": "Square7",
            "shape": "rect",
            "name": "7",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                8,1637,111,1738
            ],
          }, 
          {
            "id": "square8",
            "title": "Square8",
            "shape": "rect",
            "name": "8",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                117,1637,220,1738
            ],
          }, 
          {
            "id": "square9",
            "title": "Square9",
            "shape": "rect",
            "name": "9",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                224,1637,331,1738
            ],
          }, 
          {
            "id": "square10",
            "title": "Square10",
            "shape": "rect",
            "name": "10",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                336,1638,437,1739
            ],
          },
          {
            "id": "square11",
            "title": "Square11",
            "shape": "rect",
            "name": "11",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                8,1528,111,1631
            ],
          },
          {
            "id": "square12",
            "title": "Square12",
            "shape": "rect",
            "name": "12",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                117,1528,219,1631
            ],
          },
          {
            "id": "square13",
            "title": "Square13",
            "shape": "rect",
            "name": "13",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                224,1528,327,1631
            ],
          },
          {
            "id": "square14",
            "title": "Square14",
            "shape": "rect",
            "name": "14",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                336,1529,438,1630
            ],
          },
          {
            "id": "square15",
            "title": "Square15",
            "shape": "rect",
            "name": "15",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                444,1530,546,1630
            ],
          },
          {
            "id": "square16",
            "title": "Square16",
            "shape": "rect",
            "name": "16",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                550,1529,655,1630
            ],
          },
          {
            "id": "square17",
            "title": "Square17",
            "shape": "rect",
            "name": "17",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                661,1528,762,1632
            ],
          },
          {
            "id": "square18",
            "title": "Square18",
            "shape": "rect",
            "name": "18",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                9,1419,110,1522
            ],
          },
          {
            "id": "square19",
            "title": "Square19",
            "shape": "rect",
            "name": "19",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                117,1420,220,1520
            ],
          },
          {
            "id": "square20",
            "title": "Square20",
            "shape": "rect",
            "name": "20",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                225,1421,328,1521
            ],
          },
          {
            "id": "square21",
            "title": "Square21",
            "shape": "rect",
            "name": "21",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                335,1419,437,1520
            ],
          },
          {
            "id": "square22",
            "title": "Square22",
            "shape": "rect",
            "name": "22",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                445,1420,546,1520
            ],
          },
          {
            "id": "square23",
            "title": "Square23",
            "shape": "rect",
            "name": "23",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                551,1420,652,1520
            ],
          },
          {
            "id": "square24",
            "title": "Square24",
            "shape": "rect",
            "name": "24",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                661,1420,762,1520
            ],
          },
          {
            "id": "square25",
            "title": "Square25",
            "shape": "rect",
            "name": "25",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                117,1312,219,1412
            ],
          },
          {
            "id": "square26",
            "title": "Square26",
            "shape": "rect",
            "name": "26",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                227,1312,327,1413
            ],
          },
          {
            "id": "square27",
            "title": "Square27",
            "shape": "rect",
            "name": "27",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                336,1310,436,1413
            ],
          },
          {
            "id": "square28",
            "title": "Square28",
            "shape": "rect",
            "name": "28",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                444,1312,545,1412
            ],
          },
          {
            "id": "square29",
            "title": "Square29",
            "shape": "rect",
            "name": "29",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                552,1312,652,1413
            ],
          },
          {
            "id": "square30",
            "title": "Square30",
            "shape": "rect",
            "name": "30",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                661,1311,763,1412
            ],
          },
          {
            "id": "square31",
            "title": "Square31",
            "shape": "rect",
            "name": "31",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                335,1204,439,1303
            ],
          },
          {
            "id": "square32",
            "title": "Square32",
            "shape": "rect",
            "name": "32",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                444,1204,545,1303
            ],
          },
          {
            "id": "square33",
            "title": "Square33",
            "shape": "rect",
            "name": "33",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                552,1204,652,1306
            ],
          },
          {
            "id": "square34",
            "title": "Square34",
            "shape": "rect",
            "name": "34",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                660,1204,763,1304
            ],
          },
          {
            "id": "square35",
            "title": "Square35",
            "shape": "rect",
            "name": "35",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                443,1094,545,1195
            ],
          },
          {
            "id": "square36",
            "title": "Square36",
            "shape": "rect",
            "name": "36",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                551,1094,653,1195
            ],
          },
          {
            "id": "square37",
            "title": "Square37",
            "shape": "rect",
            "name": "37",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                661,1094,762,1196
            ],
          },
          {
            "id": "square38",
            "title": "Square38",
            "shape": "rect",
            "name": "38",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                768,1094,870,1195
            ],
          },
          {
            "id": "square39",
            "title": "Square39",
            "shape": "rect",
            "name": "39",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                443,984,545,1087
            ],
          },
          {
            "id": "square40",
            "title": "Square40",
            "shape": "rect",
            "name": "40",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                550,986,654,1087
            ],
          },
          {
            "id": "square41",
            "title": "Square41",
            "shape": "rect",
            "name": "41",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                661,985,762,1088
            ],
          },
          {
            "id": "square42",
            "title": "Square42",
            "shape": "rect",
            "name": "42",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                770,986,870,1086
            ],
          },
          {
            "id": "square43",
            "title": "Square43",
            "shape": "rect",
            "name": "43",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                551,878,653,978
            ],
          },
          {
            "id": "square44",
            "title": "Square44",
            "shape": "rect",
            "name": "44",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                659,878,762,978
            ],
          },
          {
            "id": "square45",
            "title": "Square45",
            "shape": "rect",
            "name": "45",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                769,878,870,978
            ],
          },
          {
            "id": "square46",
            "title": "Square46",
            "shape": "rect",
            "name": "46",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                551,768,653,870
            ],
          },
          {
            "id": "square47",
            "title": "Square47",
            "shape": "rect",
            "name": "47",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                660,768,763,871
            ],
          },
          {
            "id": "square48",
            "title": "Square48",
            "shape": "rect",
            "name": "48",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                770,769,870,870
            ],
          },
          {
            "id": "square49",
            "title": "Square49",
            "shape": "rect",
            "name": "49",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                877,768,979,870
            ],
          },
          {
            "id": "square50",
            "title": "Square50",
            "shape": "rect",
            "name": "50",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                984,768,1087,870
            ],
          },
          {
            "id": "square51",
            "title": "Square51",
            "shape": "rect",
            "name": "51",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                1095,766,1196,871
            ],
          },
          {
            "id": "square52",
            "title": "Square52",
            "shape": "rect",
            "name": "52",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                1203,768,1304,869
            ],
          },
          {
            "id": "square53",
            "title": "Square53",
            "shape": "rect",
            "name": "53",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                877,878,979,978
            ],
          },
          {
            "id": "square54",
            "title": "Square54",
            "shape": "rect",
            "name": "54",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                986,878,1088,978
            ],
          },
          {
            "id": "square55",
            "title": "Square55",
            "shape": "rect",
            "name": "55",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                1094,879,1196,977
            ],
          },
          {
            "id": "square56",
            "title": "Square56",
            "shape": "rect",
            "name": "56",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                659,660,762,760
            ],
          },
          {
            "id": "square57",
            "title": "Square57",
            "shape": "rect",
            "name": "57",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                769,660,871,762
            ],
          },
          {
            "id": "square58",
            "title": "Square58",
            "shape": "rect",
            "name": "58",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                877,660,981,760
            ],
          },
          {
            "id": "square59",
            "title": "Square59",
            "shape": "rect",
            "name": "59",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                985,659,1088,759
            ],
          },
          {
            "id": "square60",
            "title": "Square60",
            "shape": "rect",
            "name": "60",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                985,659,1088,759
            ],
          },
          {
            "id": "square61",
            "title": "Square61",
            "shape": "rect",
            "name": "61",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                1094,660,1195,760
            ],
          },
          {
            "id": "square62",
            "title": "Square62",
            "shape": "rect",
            "name": "62",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                551,552,654,654
            ],
          },
          {
            "id": "square63",
            "title": "Square63",
            "shape": "rect",
            "name": "63",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                660,553,763,653
            ],
          },
          {
            "id": "square64",
            "title": "Square64",
            "shape": "rect",
            "name": "64",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                768,551,871,653
            ],
          },
          {
            "id": "square65",
            "title": "Square65",
            "shape": "rect",
            "name": "65",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                876,552,979,653
            ],
          },
          {
            "id": "square66",
            "title": "Square66",
            "shape": "rect",
            "name": "66",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                550,442,654,545
            ],
          },
          {
            "id": "square67",
            "title": "Square67",
            "shape": "rect",
            "name": "67",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                661,442,761,545
            ],
          },
          {
            "id": "square68",
            "title": "Square68",
            "shape": "rect",
            "name": "68",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                768,442,870,543
            ],
          },
          {
            "id": "square69",
            "title": "Square69",
            "shape": "rect",
            "name": "69",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                878,443,979,544
            ],
          },
          {
            "id": "square70",
            "title": "Square70",
            "shape": "rect",
            "name": "70",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                551,334,653,435
            ],
          },
          {
            "id": "square71",
            "title": "Square71",
            "shape": "rect",
            "name": "71",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                551,334,653,435
            ],
          },
          {
            "id": "square72",
            "title": "Square72",
            "shape": "rect",
            "name": "72",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                660,335,762,436
            ],
          },
          {
            "id": "square73",
            "title": "Square73",
            "shape": "rect",
            "name": "73",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                770,335,870,436
            ],
          },
          {
            "id": "square74",
            "title": "Square74",
            "shape": "rect",
            "name": "74",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                878,335,978,434
            ],
          },
          {
            "id": "square75",
            "title": "Square75",
            "shape": "rect",
            "name": "75",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                984,335,1087,434
            ],
          },
          {
            "id": "square76",
            "title": "Square76",
            "shape": "rect",
            "name": "76",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                1095,335,1197,434
            ],
          },
          {
            "id": "square77",
            "title": "Square77",
            "shape": "rect",
            "name": "77",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                1204,333,1304,434
            ],
          },
          {
            "id": "square78",
            "title": "Square78",
            "shape": "rect",
            "name": "78",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                1311,335,1413,435
            ],
          },
          {
            "id": "square79",
            "title": "Square79",
            "shape": "rect",
            "name": "79",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                1420,335,1522,436
            ],
          },
          {
            "id": "square80",
            "title": "Square80",
            "shape": "rect",
            "name": "80",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                552,227,652,328
            ],
          },
          {
            "id": "square81",
            "title": "Square81",
            "shape": "rect",
            "name": "81",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                660,226,761,328
            ],
          },
          {
            "id": "square82",
            "title": "Square82",
            "shape": "rect",
            "name": "82",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                770,226,870,328
            ],
          },
          {
            "id": "square83",
            "title": "Square83",
            "shape": "rect",
            "name": "83",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                877,227,978,327
            ],
          },
          {
            "id": "square84",
            "title": "Square84",
            "shape": "rect",
            "name": "84",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                987,227,1087,327
            ],
          },
          {
            "id": "square85",
            "title": "Square85",
            "shape": "rect",
            "name": "85",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                1094,227,1196,327
            ],
          },
          {
            "id": "square86",
            "title": "Square86",
            "shape": "rect",
            "name": "86",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                1202,226,1306,327
            ],
          },
          {
            "id": "square87",
            "title": "Square87",
            "shape": "rect",
            "name": "87",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                1312,226,1412,327
            ],
          },
          {
            "id": "square88",
            "title": "Square88",
            "shape": "rect",
            "name": "88",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                1421,227,1523,329
            ],
          },
          {
            "id": "square89",
            "title": "Square89",
            "shape": "rect",
            "name": "89",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                1529,226,1631,328
            ],
          },
          {
            "id": "square90",
            "title": "Square90",
            "shape": "rect",
            "name": "90",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                443,116,546,219
            ],
          },
          {
            "id": "square91",
            "title": "Square91",
            "shape": "rect",
            "name": "91",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                552,117,653,217
            ],
          },
          {
            "id": "square92",
            "title": "Square92",
            "shape": "rect",
            "name": "92",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                660,117,762,219
            ],
          },
          {
            "id": "square93",
            "title": "Square93",
            "shape": "rect",
            "name": "93",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                769,117,871,218
            ],
          },
          {
            "id": "square94",
            "title": "Square94",
            "shape": "rect",
            "name": "94",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                876,117,979,218
            ],
          },
          {
            "id": "square95",
            "title": "Square95",
            "shape": "rect",
            "name": "95",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                986,116,1087,219
            ],
          },
          {
            "id": "square96",
            "title": "Square96",
            "shape": "rect",
            "name": "96",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                1094,117,1196,217
            ],
          },
          {
            "id": "square97",
            "title": "Square97",
            "shape": "rect",
            "name": "97",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                1204,116,1304,218
            ],
          },
          {
            "id": "square98",
            "title": "Square98",
            "shape": "rect",
            "name": "98",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                1310,117,1412,218
            ],
          },
          {
            "id": "square99",
            "title": "Square99",
            "shape": "rect",
            "name": "99",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                1420,115,1523,218
            ],
          },
          {
            "id": "square100",
            "title": "Square100",
            "shape": "rect",
            "name": "100",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                1528,116,1631,219
            ],
          },
          {
            "id": "square101",
            "title": "Square101",
            "shape": "rect",
            "name": "101",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                551,9,653,109
            ],
          },
          {
            "id": "square102",
            "title": "Square102",
            "shape": "rect",
            "name": "102",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                661,9,763,109
            ],
          },
          {
            "id": "square103",
            "title": "Square103",
            "shape": "rect",
            "name": "103",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                769,9,870,109
            ],
          },
          {
            "id": "square104",
            "title": "Square104",
            "shape": "rect",
            "name": "104",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                1097,12,1197,112
            ],
          },
          {
            "id": "square105",
            "title": "Square105",
            "shape": "rect",
            "name": "105",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                1202,9,1304,107
            ],
          },
          {
            "id": "square106",
            "title": "Square106",
            "shape": "rect",
            "name": "106",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                1311,9,1412,108
            ],
          },
          {
            "id": "square107",
            "title": "Square107",
            "shape": "rect",
            "name": "107",
            "fillColor": "#eab54d4d",
            "strokeColor": "black",
            "coords": [
                1421,8,1523,110
            ],
          },

        ]  
       
  };

  
  
  const clickedArea = (area, evt) => {
    const coords = { x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };
    console.log('hi' + area.name + ' ' + coords)
    console.log('bye'+ JSON.stringify(coords))

    setMappingList((prevState) => {
        return [...prevState,
        area.id];
    });

  }
  return <ImageMapper src={URL} map={MAP}  stayMultiHighlighted={true} responsive={true} parentWidth={650} onClick={(area, _, evt) => clickedArea(area, evt)}/>
}

export default Mapper;