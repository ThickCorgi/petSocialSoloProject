import React , {useState, useEffect} from 'react';
import ellie from "../images/ellie.JPG";



export default function RandomPic(){
    const [location, setLocation] =useState({x:0,y:0})

    useEffect(()=>{
        const randomLocation = (max) =>Math.floor(Math.random()*max)
        const interval = setInterval(()=>{
            setLocation({
                x:randomLocation(800),
                y:randomLocation(800)
            })

        }, 2000)
        return ()=>clearInterval(interval)
    },[])

    const pictureStyle = {
        position: 'absolute',
        left: `${location.x}px`,
        top: `${location.y}px`,
        height:'100px',
    }

    return(
        <div>
            <img src={ellie} style={pictureStyle} alt=""/>
        </div>
    )

}