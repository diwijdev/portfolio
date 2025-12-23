import "./hero.scss"
import React, { useEffect, useState } from 'react';
import { motion, useAnimate } from "framer-motion";



const svgVariants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            delay:0.5,
            duration: 2,
            ease: "easeIn"
        }
    },
}

const mainlogo = {
    initial: {
        opacity: 1,
    },
    animate: {
        opacity: 0.2,
        transition: {
            delay: 3,
            duration: 0.5,
        }
    },
    hover: { opacity: 1, scale: 1.1, transition: { duration: 0.3 } }
}

const slash = {
    initial: {
        opacity: 1,
        rotate: 45,
        x: -394 - 26,
        y: -199 - 26,
    }
}

const nameVariants = {
    initial: {
        y: 50,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,

        transition: {
            delay: 2.8,
            duration: 1,
        }
    },
}

const pTag = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            delay:4,
            duration: 1,
            ease: "easeIn"
        }
    },
}


export const Hero = () => {

    const [scope, animate] = useAnimate();
    const [animationTriggered, setAnimationTriggered] = useState(false);

    const handleAnimation = async () => {
        // Define an array to store all the promises from the animations
        if (!animationTriggered) {
            const animations = [];
        
            // First set of animations
            animations.push(
                animate(
                    scope.current,
                    {
                        y: "-100%"
                    },
                    {
                        type: "spring",
                        stiffness: 80,
                        delay: 1,
                        duration: 0.1,
                    }
                )
            );
            animations.push(
                animate(
                    "#rightBracket",
                    {
                        x: 98,
                        y: 23,
                    },
                    {
                        delay: 1,
                        duration: 0.5,
                    }
                )
            );
            animations.push(
                animate(
                    "#leftBracket",
                    {
                        x: -98,
                        y: -23,
                    },
                    {
                        delay: 1,
                        duration: 0.5,
                    }
                )
            );
            animations.push(
                animate(
                    "#slash",
                    {
                        x: -278,
                        y: -225,
                        width: 230,
                        type: "spring",
                        stiffness: 80,
                    },
                    {
                        delay: 1,
                        duration: 0.5,
                    }
                )
            );
            animations.push(
                animate(
                    "#shadow1",
                    {
                        x: 57,
                        y: 57,
                    },
                    {
                        delay: 1,
                        duration: 0.5,
                    }
                )
            );
            animations.push(
                animate(
                    "#shadow2",
                    {
                        x: -25,
                        y: -25,
                    },
                    {
                        delay: 1,
                        duration: 0.5,
                    }
                )
            );
        
            // Wait for all the animations to complete
            await Promise.all(animations);
        
            // Last animation
            animate(
                scope.current,
                {
                    scale: 2.5,
                    x: "75%",
                    y: 0,
                },
                {
                    delay: 0.5,
                    duration: 1,
                }
            );

            setAnimationTriggered(true);
        }
    };

    useEffect(() => {
        // Call the handleAnimation function when the component mounts
        handleAnimation();
    }, []); // Empty dependency array ensures this effect runs only once
    
    
    return (
        <div id='home' className="container flex flex-wrap min-h-screen items-center justify-center">
            <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ml-2 md:block hidden" variants={mainlogo} initial="initial" animate="animate" 
                >
                    <motion.svg id="target" width="399" height="199" viewBox="0 0 399 399" fill="none" ref={scope} xmlns="http://www.w3.org/2000/svg">

                        <defs>
                            <linearGradient id="lbracketGradient" x1="0" y1="0" x2="0.62" y2="1">
                            <stop offset="0%" stopColor="#F4F4ED" />
                            <stop offset="50%" stopColor="#DFE4EF" />
                            <stop offset="100%" stopColor="#669999" />
                            </linearGradient>

                            <linearGradient id="rbracketGradient" x1="0" y1="0" x2="0.62" y2="1">
                            <stop offset="0%" stopColor="#F4F4ED" />
                            <stop offset="35%" stopColor="#DFE4EF" />
                            <stop offset="90%" stopColor="#669999" />
                            </linearGradient>

                            <linearGradient id="slashGradient" x1="0" y1="0" x2="0.62" y2="1">
                            <stop offset="30%" stopColor="#ED1B68" />
                            <stop offset="100%" stopColor="#9f0b1d" />
                            </linearGradient>
                        </defs>
                        <motion.path id="leftBracket"/*variants={lBracket} initial="initial" animate="animate"*/ fill-rule="evenodd" clip-rule="evenodd" d="M176.164 68.9825L59.4857 185.661L23.3908 221.756L23.3908 221.756L59.4857 257.851L176.164 374.53L212.259 338.435L95.5806 221.756L212.259 105.077L176.164 68.9825Z" fill="url(#lbracketGradient)" />
                        <motion.path id="shadow2"/*variants={shadow2}*/ opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M134.685 110.462L170.78 146.556L134.685 182.651L98.5905 146.556L134.685 110.462Z" fill="black" />
                        <motion.rect id="slash" variants={slash} initial="initial" animate="animate" x="362.905" y="399" width="513.225" height="51.0459" transform="rotate(-135 362.905 399)" fill="url(#slashGradient)"/>
                        <motion.path id="shadow1"/*variants={shadow1}*/ initial="initial" animate="animate" opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M215.098 251.193L251.193 215.098L287.288 251.193L251.193 287.288L215.098 251.193Z" fill="black" />
                        <motion.path id="rightBracket"/*variants={rBracket} initial="initial" animate="animate"*/ fill-rule="evenodd" clip-rule="evenodd" d="M337.612 140.551L373.707 176.646L337.612 212.741L220.933 329.42L184.838 293.325L301.517 176.646L184.838 59.9671L220.933 23.8722L337.612 140.551Z" fill="url(#rbracketGradient)" />
                    </motion.svg>
                </motion.div>
            <div className="flex flex-col relative">                
                
                <motion.div className="flex flex-wrap flex-row items-center gap-10"
                    variants={svgVariants}
                    initial="initial"
                    animate="animate"
                >
                    <motion.div className="relative flex flex-col md:flex-row items-center justify-center md:justify-between w-full gap-x-10">
                        <motion.h1 className="font-light text-[87px] ml-7 tracking-[40px] bg-gradient-to-b from-[#ED1B68] via-[#ED1B68] to-[#9f0b1d] bg-clip-text text-transparent" variants={nameVariants} initial= "initial" animate= "animate"> 
                            DIWIJ
                        </motion.h1>
                        <motion.div className="mb-1.5"
                            variants={svgVariants}>
                            <svg id="logo" width="275" height="65" viewBox="0 0 290 72" fill="none" xmlns="http://www.w3.org/2000/svg">


                                <path d="M248.978 71.2025L249.11 71.5H249.435H256.735H257.061L257.192 71.2025L288.192 1.20246L288.503 0.5H287.735H280.235H279.91L279.778 0.797446L253.244 60.6801L226.893 0.798607L226.761 0.5H226.435H218.435H217.667L217.978 1.20246L248.978 71.2025Z"
                                    stroke="white"
                                    strokeWidth="2"
                                />
                                <path d="M167.217 31.8H131.517V7.9H171.617H172.117V7.4V1V0.5H171.617H123.617H123.117V1V71V71.5H123.617H173.117H173.617V71V64.6V64.1H173.117H131.517V39.1H167.217H167.717V38.6V32.3V31.8H167.217Z"
                                    stroke="white"
                                    strokeWidth="2"
                                />
                                <path d="M0.5 71V71.5H1H29.5C37.0329 71.5 43.6485 70.02 49.332 67.0429L49.3339 67.0419C55.0778 64.001 59.5472 59.8049 62.7297 54.4556C65.9144 49.1026 67.5 42.9455 67.5 36C67.5 29.0545 65.9144 22.8974 62.7297 17.5444C59.5472 12.195 55.0774 8.03186 49.333 5.05758C43.6493 2.0135 37.0332 0.5 29.5 0.5H1H0.5V1V71ZM44.961 11.5392L44.9609 11.5393L44.9687 11.5433C49.4902 13.9024 52.9864 17.1723 55.47 21.3553C57.9513 25.5342 59.2 30.4102 59.2 36C59.2 41.5212 57.9521 46.3984 55.4691 50.6463C52.9851 54.8293 49.4881 58.1329 44.9653 60.5585C40.5178 62.9129 35.235 64.1 29.1 64.1H8.89996V7.9H29.1C35.2332 7.9 40.5144 9.11973 44.961 11.5392Z"
                                    stroke="white"
                                    strokeWidth="2"
                                />
                            </svg>
                        </motion.div>
                        <motion.h1 className="font-light text-[87px] opacity-0 tracking-[40px] text-transparent absolute md:relative" > 
                            DIWIJ
                        </motion.h1>
                    </motion.div>

                </motion.div>
                <motion.div className="flex flex-wrap items-center justify-items-start relative md:items-start"
                    variants={pTag}
                    initial="initial"
                    animate="animate"
                >
                    <motion.p className="absolute translate-y-20 md:px-8.5 md:text-xl md:font-light">
                        Part developer, part designer, part data nerd — fully caffeinated.
                    </motion.p>
                </motion.div>
            </div>
        </div>
    )
}
