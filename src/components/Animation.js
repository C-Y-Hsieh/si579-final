import React, { useRef, useEffect } from "react";
import mojs from "@mojs/core";


const Animation = (props) => {
    const animation = useRef();
    const bouncyCircle = useRef();
    const burstVs = useRef();


    useEffect(() => {
        if (bouncyCircle.current) return;

        console.log("animation.current.getBoundingClientRect()", animation.current.getBoundingClientRect());

        bouncyCircle.current = new mojs.Shape({
            parent: animation.current,
            left: animation.current.getBoundingClientRect().x + animation.current.getBoundingClientRect().width / 2,
            top: animation.current.offsetTop + animation.current.getBoundingClientRect().height / 2 ,

            shape:        'circle',
            scale:        { 0 : 1 },
            fill:         'transparent',
            stroke:       '#dc2626',
            radius:       55,
            duration:     800,
        }).then({
            strokeWidth:  { 40 : 0 },
            stroke:       'yellow',
            duration:     500,
        });
    });



    useEffect(() => {
        if (burstVs.current) return;
        console.log("animation.current.offsetTop", animation.current.offsetTop);

        burstVs.current = new mojs.Burst({
            parent: animation.current,
            left: animation.current.getBoundingClientRect().x + animation.current.getBoundingClientRect().width / 2,
            top: animation.current.offsetTop + animation.current.getBoundingClientRect().height / 2,
            radius: { 0: 100 },
            //rotate: { 0: 50 },
            duration: 800,
            children: {
                shape: 'curve',
                fill: { '#dc2626' : 'yellow' },
                radius: 20,
                rotate: { 0: 50 },
                duration: 1300
            }
        });
    })

    useEffect(() => {



        setTimeout(() => {
            bouncyCircle.current.play();
            burstVs.current.play();
        }, 600);


    }, [props.selectedPokemon])


    return <div ref={animation}>V.S.</div>
}

export default Animation;