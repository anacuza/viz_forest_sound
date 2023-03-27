import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import * as d3 from "d3";
import {useEffect} from "react";
import { useState } from "react";
import { useRef } from "react";



import Header from '../components/header'
import LabelPage from '../components/LabelPage'
import Recorder from '../components/Recorder'
import MapPage from '../components/MapPage'
import RatePage from '../components/RatePage'
import Footer from '@/components/footer';
import { style } from 'd3';
/*import MapContainer from './MapContainer'; */


export default function Cluster() {

  var d = {
    "type":"Feature",
    "id":"7525",
    "geometry": {
        "type":"Polygon",
        "coordinates":[[[-1.4355316925894648,6.384599812210478],[-1.4272919464957146,6.383235036740804],[-1.4272919464957146,6.377775898501816],[-1.434501724327746,6.36822226671342],[-1.4382782746207146,6.368563470911745],[-1.4365616608511833,6.360374507586212],[-1.4448014069449333,6.348432035586801],[-1.4430847931754018,6.342972527543295],[-1.4468613434683708,6.340242751832978],[-1.4499512482535273,6.33751296167176],[-1.4619675446402456,6.324546261249057],[-1.467804031456652,6.321475152958798],[-1.4825669098746208,6.306801828464037],[-1.4811936188589958,6.288033017483279],[-1.4860001374136833,6.287691760097465],[-1.4894333649527458,6.283255393706438],[-1.4887467194449333,6.278818989493459],[-1.4863434601675898,6.278818989493459],[-1.481536941612902,6.271311142428926],[-1.4671173859488398,6.275747610588404],[-1.4643708039175898,6.279501515679263],[-1.466430740441027,6.288033017483279],[-1.4671173859488396,6.290080557094446],[-1.460937576378527,6.2904218129122595],[-1.457161026085558,6.294175612118165],[-1.453727798546496,6.2975881333121935],[-1.4506378937613396,6.300659383209462],[-1.4478913117300898,6.301683129136299],[-1.444458084191027,6.302706873043142],[-1.4396515656363396,6.304071861776132],[-1.4338150788199333,6.305095600968386],[-1.423858718956652,6.316697837152226],[-1.4248886872183708,6.321475152958798],[-1.426948623741808,6.3242050278953865],[-1.4327851105582146,6.328982274344833],[-1.432441787804308,6.33375947661573],[-1.416992263878527,6.342290084970831],[-1.4200821686636833,6.3474083822357725],[-1.4156189728629023,6.360715716997342],[-1.3974228669058708,6.359009667676808],[-1.3905564551432172,6.362080581944276],[-1.3843766022574333,6.365833830976114],[-1.3967362213980583,6.378117096345586],[-1.4097824860464958,6.375387507237037],[-1.4073792267691518,6.396541442319889],[-1.3740769196402458,6.397223812760771],[-1.3517609406363396,6.416670986927641],[-1.3562241364371208,6.424859048840684],[-1.3613739777457146,6.422812045708916],[-1.3665238190543083,6.429976520635021],[-1.3720169831168083,6.428611866524818],[-1.3730469513785273,6.43372930054843],[-1.3785401154410273,6.430317683590245],[-1.382659988487902,6.4330469789889575],[-1.4077225495230583,6.420765034344436],[-1.4097824860464958,6.424176715378329],[-1.414245681847277,6.422812045708916],[-1.422142105187121,6.430658846316546],[-1.447204666222277,6.424517882223879],[-1.4355316925894648,6.384599812210478]]]
    }
  };

console.log('geo area', d3.geoArea(d)/ 12.56637 * 510072000);




    const [nodePage, setNodePage] = useState(null);
    const [contentPage, setContentPage] = useState('label');
    const [clicked, setClick] = useState(false);
    const svgRef = useRef();

    const contentChange = () => {console.log('hi'); contentPage=='label' ? setContentPage('recorder') : contentPage=='recorder' ? setContentPage('rate') : contentPage=='rate' ? setContentPage('map') : setContentPage('rate')}

    
    useEffect(() => {
        console.log(clicked)
    const height = window.innerHeight
    const width = clicked ? (window.innerWidth / 2) : window.innerWidth
    const n = 700 // number of nodes
    const m = 8 // number of groups
    const color = d3.scaleOrdinal(d3.range(m), ['#6A0136', '#646F4B', '#FFE0B5', '#8D94BA', '#FF4D80'])
     
    
    
   let pack = () => d3.pack()
    .size([width, height])
    .padding(1)
  (d3.hierarchy(data)
    .sum(d => d.value))

    let data = ({
        children: Array.from(
          d3.group(
            Array.from({length: n}, (_, i) => ({
              group: Math.random() * m | 0,
              value: -Math.log(Math.random()),
              id: i
            })),
            d => d.group
          ),
          ([, children]) => ({children})
        )
      })


      let drag = simulation => {
  
        function dragstarted(event, d) {
          if (!event.active) simulation.alphaTarget(0.3).restart();
          d.fx = d.x;
          d.fy = d.y;
        }
        
        function dragged(event, d) {
          d.fx = event.x;
          d.fy = event.y;
        }
        
        function dragended(event, d) {
          if (!event.active) simulation.alphaTarget(0);
          d.fx = null;
          d.fy = null;
        }
        
        return d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended);
      }

      function forceCluster() {
        const strength = 0.2;
        let nodes;
      
        function force(alpha) {
          const centroids = d3.rollup(nodes, centroid, d => d.data.group);
          const l = alpha * strength;
          for (const d of nodes) {
            const {x: cx, y: cy} = centroids.get(d.data.group);
            d.vx -= (d.x - cx) * l;
            d.vy -= (d.y - cy) * l;
          }
        }
      
        force.initialize = _ => nodes = _;
      
        return force;
      }
      
      function forceCollide() {
        const alpha = 0.4; // fixed for greater rigidity!
        const padding1 = 2; // separation between same-color nodes
        const padding2 = 6; // separation between different-color nodes
        let nodes;
        let maxRadius;
      
        function force() {
          const quadtree = d3.quadtree(nodes, d => d.x, d => d.y);
          for (const d of nodes) {
            const r = d.r + maxRadius;
            const nx1 = d.x - r, ny1 = d.y - r;
            const nx2 = d.x + r, ny2 = d.y + r;
            quadtree.visit((q, x1, y1, x2, y2) => {
              if (!q.length) do {
                if (q.data !== d) {
                  const r = d.r + q.data.r + (d.data.group === q.data.data.group ? padding1 : padding2);
                  let x = d.x - q.data.x, y = d.y - q.data.y, l = Math.hypot(x, y);
                  if (l < r) {
                    l = (l - r) / l * alpha;
                    d.x -= x *= l, d.y -= y *= l;
                    q.data.x += x, q.data.y += y;
                  }
                }
              } while (q = q.next);
              return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
            });
          }
        }
      
        force.initialize = _ => maxRadius = d3.max(nodes = _, d => d.r) + Math.max(padding1, padding2);
      
        return force;
      }

     

  function centroid(nodes) {
    let x = 0;
    let y = 0;
    let z = 0;
    for (const d of nodes) {
      let k = d.r ** 2;
      x += d.x * k;
      y += d.y * k;
      z += k;
    }
    return {x: x / z, y: y / z};
  }


  function guid() {
    function _random_letter() {
        return String.fromCharCode(97+Math.floor(Math.random() * 26));
    }
    function _p8(s) {
        var p = (Math.random().toString(16)+"000000000").substr(2,8);
        return s ? "-" + p.substring(0,4) + "-" + p.substring(4,4) : _random_letter() + p.substring(0, 7);
    }
    return _p8() + _p8(true) + _p8(true) + _p8();
}

        let nodes = pack().leaves()

      
        let simulation = d3.forceSimulation(nodes)
            .force("x", d3.forceX(width / 2).strength(0.01))
            .force("y", d3.forceY(height / 2).strength(0.01))
            .force("cluster", forceCluster())
            .force("collide", forceCollide());

             
        let svg = d3.select(svgRef.current);
        //let svg = d3.select('#viz_id')
        //.append("svg").attr('width', width).attr('height', height); // DOM.svg(width, height)''
      
        svg.selectAll("*").remove()

        svg.attr('width', width).attr('height', height);



        var tooltip = d3.select(svgRef.current)
            .append("div")
            .style("opacity", 0)
            .attr("class", "tooltip")
            .style("font-size", "16px")
            .style("position", "absolute")
            .attr("class", "tooltip")
            .style("background-color", "white")
            .style("border", "solid")
            .style("border-width", "2px")
            .style("border-radius", "5px")
            .style("padding", "5px")

        // A function that change this tooltip when the user hover a point.
        // Its opacity is set to 1: we can now see it. Plus it set the text and position of tooltip depending on the datapoint (d)
        var mouseover = function (d) {
            tooltip
            .transition()
            .duration(200)
            .style("opacity", 1)
            d3.select(this)
            .style("stroke", "black")
            .style("opacity", 1)
        }

        var mousemove = function (d) {
            tooltip
            .html("File: " + d.filename)
            .style("left", (d3.pointer(this)[0]-20) + "px") // It is important to put the +90: other wise the tooltip is exactly where the point is an it creates a weird effect
            .style("top", (d3.pointer(this)[1]) + "px")
        }

        // A function that change this tooltip when the leaves a point: just need to set opacity to 0 again
        var mouseleave = function (d) {
            tooltip
            .transition()
            .duration(200)
            .style("opacity", 0)
            d3.select(this)
                .style("stroke", "none")
                .style("opacity", 0.8)
        }




        var currentAudio = null;
        let node = svg.append("g")
          .selectAll("circle")
          .data(nodes)
          .join("circle")
            .attr("cx", d => {return d.x})
            .attr("cy", d => {return d.y})
            .attr("fill", d => color(d.data.group))
            .attr("id", guid()) 
            //.attr("id", (d,i) => {return i})
            //.attr("fill", d => {console.log(color(d.data.group)); return d.data.group})
            .call(drag(simulation))
            .on("click", (e,d,i) => {})
            .on('click', function (e,d,i) {

              console.log(d.data.group); setClick((prev) => !prev); setNodePage(d.data.id); setContentPage('label')


              console.log("audio_test");
              //let circle_unique_identifier = d.filename; //assuming that's in your dataset after looking at you csv
              window.AudioContext = window.AudioContext || window.webkitAudioContext;
              const audioCtx = new AudioContext();
              // get the audio element
              if (currentAudio != null && !currentAudio.paused && currentAudio != this) {
              currentAudio.pause();
              //Here we reset the audio and put it back to 0.
              currentAudio.currentTime = 0;
              }
              let audioElement = new Audio('bicycle_bell.wav');
              /*if(audioElement.paused){ 
                  audioElement.play();}else{
                  console.log("audio_pause");
                  audioElement.currentTime = 0;
                  audioElement.pause();
                  audioElement.currentTime = 0;
                  }*/
                  if (audioElement.paused) {
                  audioElement.play();
                  currentAudio = audioElement;
              } else {
                  audio.pause();
              }
              
              /*if (audioElement.paused) {
                  audioElement.play();
              } else {
                  audioElement.pause();
                  audioElement.currentTime = 0
              }*/
          })
            //.on('mouseover', function (d, i) {
              //console.log("audio_test", d.filename, i);
          //})
          .on('mouseover', mouseover)
          .on('mousemove', mousemove)
          .on('mouseleave', mouseleave)
;
      
        node.transition()
            .delay((d, i) => Math.random() * 500)
            .duration(750)
            .attrTween("r", d => {
              const i = d3.interpolate(0, d.r);
              return t => d.r = i(t);
            });
      
        simulation.on("tick", () => {
          node
              .attr("cx", d => d.x)
              .attr("cy", d => d.y);
        });


            
        

    }, [clicked]);


  

     return(
        <>
        <Head>
        <title>Forest Sounds Viz</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBR5OPxQcPmPbwlKgcxkTP9Q16HKV_0Ijs&callback=initMap" /> */}
        </Head>
        <div className={styles.main_viz}>

        <div className={clicked ? 'viz_div half' : 'viz_div'} id="viz_id" >
        <style jsx>{`
        .viz_div {
          width:100%;
        }
        .viz_div.half {
            width:50%;
            position: sticky;
        }
      `}</style>

        <svg ref={svgRef}></svg>
            {/*{clicked ? console.log("hello") : console.log("bye")} */}
        </div>

        <div className={clicked ? 'form_div' : 'form_div hidden'}>
        <style jsx>{`
        .form_div {
          display: flex;
          flex-direction:column;
          visibility: visible;
          width:50%;
          background-color:#601038;
          border-radius: 30px 30px 30px 30px;
          margin-top:0.5%;
          margin-right:0.5%;
          margin-bottom:0.5%;
          margin-left:0.5%;
          box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset, rgba(0, 0, 0, 0.2) -3px 0px 0px inset;;
          /* box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px; */
        }
        .form_div.hidden {
            display: none;
            visibility: hidden;
        }
      `}</style>

      <div className={styles.form_header}>
      <Header pgcontent={contentPage}/>
      </div>
      <div className={styles.form_content}>
      {console.log(contentPage)}
      {(contentPage == 'label') ? <LabelPage /> : (contentPage == 'recorder') ? <Recorder /> : (contentPage == 'map') ? <MapPage /> : (contentPage == 'rate') ? <RatePage /> : <RatePage />}
      </div>
      <div className={styles.form_footer}>
      <Footer pgcontent={contentPage} changeContent={contentChange}/>
      </div>
      


        </div>

        {/* <div className={` ${{display: clicked == true ? "block" : "none"}} ${{visibility: clicked == true ? "visible" : "hidden"}}`} id="form_id">
            <h1> HELLO </h1>
            {console.log(clicked)}
        </div> */}
        </div>
        </>
     ) 

}