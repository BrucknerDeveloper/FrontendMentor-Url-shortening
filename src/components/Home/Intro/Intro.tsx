import React from "react"

//images
import hero_img from "/src/assets/illustration-working.svg"

export default function Intro() {

    return (
        <section className="intro">
            <div className="intro__container">
                <h1 className="intro__title">More than just shorter links</h1>
                <p className="intro__text">Build your brand's recognition and get detailed insights on how your links are performing.</p>
                <button className="intro__btn">Get Started</button>
            </div>
            <img className="intro__img" src={hero_img} />
        </section>
    )
}