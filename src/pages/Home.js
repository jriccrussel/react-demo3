import { useEffect, useRef, useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import gsap from 'gsap'

import imgOne from '../assets/img/image-one.jpg'
import imgTwo from '../assets/img/image-two.jpg'
import imgThree from '../assets/img/image-three.jpg'
import imgFour from '../assets/img/image-four.jpg'
import imgFive from '../assets/img/image-five.jpg'
import imgSix from '../assets/img/image-six.jpg'
import imgSeven from '../assets/img/image-seven.jpg'
import imgEight from '../assets/img/image-eight.jpg'
import { TimelineMax } from 'gsap/gsap-core'

const Home = () => {

    useEffect(() => {
        let allContainer = gsap.utils.toArray(".container-item")
        let imgWrapper = document.querySelector(".container-img-wrap")
        let viewImg = document.querySelector(".container-img")

        // Hover Image Event Init 
        let initContainer = () => {
            allContainer.forEach((link) => {
                link.addEventListener("mouseenter", viewHover)
                link.addEventListener("mouseleave", viewHover)
                link.addEventListener("mousemove", moveImg)
            })
        }

        // Mouse Move Position Setup
        let moveImg = (e) => {
            let xpos = e.clientX
            let ypos = e.clientY

            const tl = gsap.timeline()

            tl.to(imgWrapper, {
                x: xpos,
                y: ypos,
            })
        }

        // Hover Image Setup
        let viewHover = (e) => {
            if (e.type === "mouseenter"){
                let targetImg = e.target.dataset.img

                const tl = gsap.timeline()

                tl.set(viewImg, {
                    backgroundImage: `url(${targetImg})`,
                }).to(imgWrapper, {
                    duration: 0.5,
                    autoAlpha: 1,
                })
            } else if (e.type === "mouseleave"){
                const tl = gsap.timeline()

                tl.to(imgWrapper, {
                    duration: 0.5,
                    autoAlpha: 0,
                })
            }
        }

        // Init initContainer
        // let init = () => initContainer()     

        
        // Load initContainer
        window.addEventListener("load", () => initContainer())

        let tl = new TimelineMax()

        tl.from(".navbar > div", 1.6, {
            opacity: 0,
            y: 60,
            ease: "expo.easeInOut"
        })

        tl.from(".container-items > div", 0.8, {
            y: 100,
            ease: "expo.easeInOut",
            opacity: 0,
            delay: 0.6,
            stagger: {
                amount: 0.8
            }
        }, 1.8)

        tl.from(".site-logo", 1.6, {
            opacity: 0,
            y: 40,
            ease: "expo.easeInOut"
        }, "-=1.6")

        tl.staggerFrom(".site-menu > div", 0.8, {
            opacity: 0,
            y: 60,
            ease: "power2.easeInOut"
        }, 0.2)

        tl.staggerFrom(".header > div", 0.8, {
            opacity: 0,
            y: 60,
            ease: "power2.easeInOut",
            delay: -1.4,
        }, 0.2)
        

    }, [])

    return (
        <div className="wrapper">
            <div className="site-logo">aesthetic</div>

            <div className="navbar">
                <div className="site-info">photos / films</div>
                <div className="site-menu">
                    <div className="menu-item">projects</div>
                    <div className="menu-item">about</div>
                    <div className="menu-item">contact</div>
                </div>
            </div>

            <div className="header">
                <div className="header-left">
                    elevated<br/><span>reality</span>
                    <div className="link"><Link to="/">view showreel</Link></div>
                </div>
                <div className="header-right">/all projects</div>
            </div>

            <div className="container">
                <div className="container-items">
                    <div className="container-img-wrap">
                        <div className="container-img"></div>
                    </div>

                    <div className="item">
                        <Link to="/" className="container-item" data-img={imgOne}>
                            <h3>1</h3>
                        </Link>
                    </div>

                    <div className="item">
                        <Link to="/" className="container-item" data-img={imgTwo}>
                            <h3>2</h3>
                        </Link>
                    </div>


                    <div className="item">
                        <Link to="/" className="container-item" data-img={imgThree}>
                            <h3>3</h3>
                        </Link>
                    </div>

                    <div className="item">
                        <Link to="/" className="container-item" data-img={imgFour}>
                            <h3>4</h3>
                        </Link>
                    </div>

                    <div className="item">
                        <Link to="/" className="container-item" data-img={imgFive}>
                            <h3>5</h3>
                        </Link>
                    </div>

                    <div className="item">
                        <Link to="/" className="container-item" data-img={imgSix}>
                            <h3>6</h3>
                        </Link>
                    </div>

                    <div className="item">
                        <Link to="/" className="container-item" data-img={imgSeven}>
                            <h3>7</h3>
                        </Link>
                    </div>

                    <div className="item">
                        <Link to="/" className="container-item" data-img={imgEight}>
                            <h3>8</h3>
                        </Link>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default Home
