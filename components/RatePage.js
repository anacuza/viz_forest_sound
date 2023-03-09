import styles from '@/styles/RatePage.module.css'
import { useEffect } from 'react';
import * as d3 from "d3";

export default function RatePage() {

    useEffect(() => {
        var data = d3.range(0,10);
        var colors = d3.scaleQuantize()
        .domain([1,10])
        .range(["#ffffff", "#d9f4fc", "#b2e9f9", "#8cdef6", "#66d3f3", "#40c8f0", "#19bded", "#10a3ce", "#0d85a8", "#0a6681"]);
    
        var rect = d3.selectAll("#slider3")
        .data(data)
	.enter()
	.append("rect")
    .attr("y", 10)
	.attr("height", 100)
	.attr("x", (d,i)=>10 + i*9)
	.attr("width", 6)
        .attr("fill", d=>colors(d))
        .attr("stroke", "gray");
    });




    return(
        <>
        
        <div className={styles.contentContainer}>
        
        <div className={styles.slider} styles={{backgroundColor:"black"}}>
        <div className={styles.slider1}>
            <label for="fader"> Health Metric </label>
            <input type="range" min="1" max="10"  id="fader" 
            step="1" list="healthratings" />
            <datalist id="healthratings">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
            </datalist>
            
        </div>
        </div>

        <div className={styles.slider}>
        <div className={styles.slider2_title}> Health Metric </div>
        <div className={styles.slider2} id="slider2">
            <input type="range" min="1" max="10"  id="fader" 
            step="1" list="healthratings" />
            <datalist id="healthratings">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
            </datalist>
        
        </div>
        </div>


        <div className={styles.slider}>
        <div className={styles.slider2_title}> Health Metric </div>
        <div className={styles.slider2} id="slider2">
            <input type="range" min="1" max="10"  id="fader" 
            step="1" list="healthratings" />
            <datalist id="healthratings">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
            </datalist>
            <input type="range" min="1" max="10"  id="fader_down" 
            step="1" list="healthratings" />
        
        </div>
        </div>
                    
        </div>

        </>
    )
}