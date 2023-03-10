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

    
    const [nodePage, setNodePage] = useState(null);
    const [contentPage, setContentPage] = useState('label');
    const [clicked, setClick] = useState(false);
    const svgRef = useRef();

    const contentChange = () => {console.log('hi'); contentPage=='label' ? setContentPage('recorder') : contentPage=='recorder' ? setContentPage('rate') : contentPage=='rate' ? setContentPage('map') : setContentPage('rate')}

    
    useEffect(() => {
        console.log(clicked)
    const height = window.innerHeight
    const width = clicked ? (window.innerWidth / 2) : window.innerWidth
    const n = 200 // number of nodes
    const m = 5 // number of groups
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
            .on("click", (e,d,i) => {console.log(d.data.group); setClick((prev) => !prev); setNodePage(d.data.id); setContentPage('label')});
      
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