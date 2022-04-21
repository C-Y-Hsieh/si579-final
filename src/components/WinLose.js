import React, { useRef, useEffect } from "react";
import mojs from "@mojs/core";

const WinLose = (props) => {

    //const [winOrLose, setWinOrLose] = useState('');

    const winLoseMessage = useRef();
    const loseAnimation = useRef();
    const loseAnimation2 = useRef();
    const loseAnimation3 = useRef();
    const loseAnimation4 = useRef();
    const loseAnimation5 = useRef();
    const loseAnimation6 = useRef();
    const tieAnimation = useRef();
    const tieAnimation2 = useRef();
    const tieTimeline = useRef();
    const firework = useRef();
    const firework2 = useRef();
    const fireworkSmall = useRef();
    const winTimeline = useRef();
    const loseTimeline = useRef();

    let result;
    let result2;
    let survive = true;
    let beat = false;
    let winLoseText;
    let winLose;

    if (props.selectedPokemon[0].attack > props.npcPokemon[0].defense){
        result = <div>
            <p>Your attack is successful</p>
            <p>Your attack ({props.selectedPokemon[0].attack}) is greater than your rival's defense ({props.npcPokemon[0].defense})</p>
        </div>;
        beat = true;
    }
    else {
        result = <div>
            <p>Your attack is failed</p>
            <p>Your attack ({props.selectedPokemon[0].attack}) isn't greater than your rival's defense ({props.npcPokemon[0].defense})</p>
        </div>
    }

    if (props.npcPokemon[0].attack > props.selectedPokemon[0].defense){
        result2 = <div>
            <p>Your defense is failed</p>
            <p>Your defense ({props.selectedPokemon[0].defense}) is lower than your rival's attack ({props.npcPokemon[0].attack})</p>
        </div>;
        survive = false;
    }
    else {
        result2 = <div>
            <p>Your defense is successful</p>
            <p>Your defense ({props.selectedPokemon[0].defense}) is higher than/equal to your rival's attack ({props.npcPokemon[0].attack})</p>
        </div>;
    }

    if (survive && beat){
        winLoseText = <div className="win-lose" ref={winLoseMessage}>You win</div>
        //setWinOrLose('win');
        winLose = 'win';
    }
    else if (!survive && ! beat){
        winLoseText = <div className="win-lose" ref={winLoseMessage}>You lose</div>
        //setWinOrLose('lose');
        winLose = 'lose';
    }
    else{
        winLoseText = <div className="win-lose" ref={winLoseMessage}>It's a tie</div>
        //setWinOrLose('tie');
        winLose = 'tie';
    }



    useEffect(() => {

        const winLoseMessagePositionX = winLoseMessage.current.getBoundingClientRect().x + winLoseMessage.current.getBoundingClientRect().width / 2;
        const winLoseMessagePositionY = winLoseMessage.current.offsetTop + winLoseMessage.current.getBoundingClientRect().height / 2;

        if (firework.current) return;
        firework.current = new mojs.Burst({
            parent: winLoseMessage.current,
            radius: { 0: 100 },
            count: 9,
            left: winLoseMessagePositionX,
            top: winLoseMessagePositionY,
            opacity: {1:0},

            children:{
               // delay: 'stagger( rand(0, 100) )',
                duration: 1800,

            }
        });

        if (firework2.current) return;
        firework2.current = new mojs.Burst({
            parent: winLoseMessage.current,
            radius: { 0: 80 },
            count: 9,
            left: winLoseMessagePositionX,
            top: winLoseMessagePositionY,

            children:{
                shape: 'line',
                stroke: { 'blue' : 'cyan' },
                radius: 30,
                duration: 1800,

            }
        });

        if (fireworkSmall.current) return;
        fireworkSmall.current = new mojs.Burst({
            parent: winLoseMessage.current,
            left: winLoseMessagePositionX,
            top: winLoseMessagePositionY,

            radius: { 0: 50 },
            count: 20,
            rotate: { 0: 90 },
            opacity: { 1: 0 },
            x: 50,
            y: -50,
            delay: 100,

            children: {
                shape: 'line',
                stroke: '#e07b25',
                duration: 2000,
                //delay: 'stagger( rand(0, 100) )'
            }
        });

        if (winTimeline.current) return;
        winTimeline.current = new mojs.Timeline({
            repeat: 99,

        })
            .add(firework.current, firework2.current, fireworkSmall.current);

        if (tieAnimation.current) return;
        tieAnimation.current = new mojs.Shape({
            parent: winLoseMessage.current,
            left: winLoseMessagePositionX,
            top: winLoseMessagePositionY - 20,

            shape: 'line',
            stroke: 'red',
            strokeWidth: 10,
            radius: 100,
            strokeDasharray:  '100%',
            strokeDashoffset: { '-100%' : '100%' },
            opacity: { 0: 1 },
            duration: 1800,
        });

        if (tieAnimation2.current) return;
        tieAnimation2.current = new mojs.Shape({
            parent: winLoseMessage.current,
            left: winLoseMessagePositionX,
            top: winLoseMessagePositionY - 55,

            shape: 'line',
            stroke: 'red',
            strokeWidth: 10,
            radius: 100,
            strokeDasharray:  '100%',
            strokeDashoffset: { '100%' : '-100%' },
            opacity: { 0: 1 },
            duration: 1500,
        });

        if (tieTimeline.current) return;
        tieTimeline.current = new mojs.Timeline({
            repeat: 99,

        })
            .add(tieAnimation.current, tieAnimation2.current);

        const eyeAnimationDefault = {
            parent: winLoseMessage.current,
            left: winLoseMessagePositionX,
            top: winLoseMessagePositionY - 50,

            shape: 'circle',
            fill: 'black',
            radius: 15,

            duration: 1800,
        }

        const cryAnimationDefault = {
            parent: winLoseMessage.current,
            left: winLoseMessagePositionX,
            top: winLoseMessagePositionY - 50,

            shape: 'line',
            stroke: '#5691c5',
            rotate: 90,

            y:  { 0: 50 },
            radius: 5,
            duration: 500,
            repeat: 99,
        }

        if (loseAnimation.current) return;
        loseAnimation.current = new mojs.Shape({
            ...eyeAnimationDefault,
            x: 40,
        });

        if (loseAnimation2.current) return;
        loseAnimation2.current = new mojs.Shape({
            ...cryAnimationDefault,
            x: 40,

        });

        if (loseAnimation3.current) return;
        loseAnimation3.current = new mojs.Shape({
            ...eyeAnimationDefault,
            x: -40,
        });

        if (loseAnimation4.current) return;
        loseAnimation4.current = new mojs.Shape({
            ...cryAnimationDefault,
            x: -40,
        })

        if (loseAnimation5.current) return;
        loseAnimation5.current = new mojs.Shape({
            ...eyeAnimationDefault,
            top: winLoseMessagePositionY - 40,
            x: 46,
            radius: 4,
            radiusX:  8,
            fill: '#5691c5',
        });

        if (loseAnimation6.current) return;
        loseAnimation6.current = new mojs.Shape({
            ...eyeAnimationDefault,
            top: winLoseMessagePositionY - 40,
            x: -46,
            radius: 4,
            radiusX:  8,
            fill: '#5691c5',
        });

        if (loseTimeline.current) return;
        loseTimeline.current = new mojs.Timeline({
            repeat: 99,

        })
            .add(loseAnimation.current, loseAnimation2.current, loseAnimation3.current, loseAnimation4.current, loseAnimation5.current, loseAnimation6.current);
    })

    useEffect(() => {

        if(props.fightImageRef.current){
            setTimeout(() => {
                switch (winLose){
                    case 'win':
                        console.log('you win');
                        winTimeline.current.play();
                        break;
                    case 'lose':
                        console.log('you lose');
                        loseTimeline.current.play();
                        break;
                    case 'tie':
                        console.log('tie');
                        tieTimeline.current.play();
                        break;
                }
            }, 1600);



        }

        /*
        switch (winLose){
            case 'win':
                console.log('you win');
                winTimeline.current.play();
                break;
            case 'lose':
                console.log('you lose');
                loseTimeline.current.play();
                break;
            case 'tie':
                console.log('tie');
                tieTimeline.current.play();
                break;
        }

         */


    }, [props.selectedPokemon])

    return <div>
        {winLoseText}
        {result}
        {result2}
    </div>

}

export default WinLose;