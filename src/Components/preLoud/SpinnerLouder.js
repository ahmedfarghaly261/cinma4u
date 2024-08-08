import React, { useEffect, useState } from "react";
import preload from "./preloaud.gif"
import "./preload.css"

export default function SPLouder () {

    const [ text , setText ]=useState('')
    const [ showImg , setShowImg ]=useState(true)
    useEffect(()=>{
        setTimeout(() => {
            setShowImg(false)
            // setText("wait for 2 seconds")
        }, 2000);
    },[])
    return(
        <>
        {
            showImg?(
                <img id="preload" src={preload} alt="none" />
            ):(
                <h2>  {text} </h2>
            )
        }
        </>
    )
}