import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Footer.module.css'
import { useState, useEffect, useRef } from "react";


export default function Footer({pgcontent}) {

    const [isActive, setIsActive] = useState(1);
    const ref = useRef(null);

    const handleClick = () => {

        setIsActive(2)
            setTimeout(() => {
                setIsActive(3)
            }, 1250); //miliseconds
        
        };

        // useEffect(() => {
        //     setTimeout(() => {
        //       ref.current.click();
        //     }, 1250); //miliseconds
            
        //   }, []);

        // $( ".buttonSubmit" ).click(function() {
        //     $( ".buttonSubmit" ).addClass( "onclic", 250, validate);
        //   });
        
        //   function validate() {
        //     setTimeout(function() {
        //       $( ".buttonSubmit" ).removeClass( "onclic" );
        //       $( ".buttonSubmit" ).addClass( "validate", 450, callback );
        //     }, 2250 );
        //   }
        //     function callback() {
        //       setTimeout(function() {
        //         $( ".buttonSubmit" ).removeClass( "validate" );
        //       }, 1250 );
        //     }

return(<>
<div className={styles.footer_container}>
<button className={isActive==1 ? `${styles.buttonSubmit}` : isActive==2 ? `${styles.buttonSubmit} ${styles.onclic}` : ` ${styles.validate}`} onClick={handleClick} ref={ref}></button>

</div></>)
}