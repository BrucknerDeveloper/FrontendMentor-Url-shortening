import React from "react"

//images
import hero_img from "/src/assets/illustration-working.svg"

export default function Intro() {

    return (
        <section className="intro">
            <div className="intro__container-text">
                <h1 className="intro__title fs-h1 text-dark bold">More than just shorter links</h1>
                <p className="intro__text text-light fs-regular letter-space-text">Build your brand's recognition and get detailed insights on how your links are performing.</p>
                <button className="intro__btn btn btn--round fs-regular letter-space-text">Get Started</button>
            </div>
            <img className="intro__img" src={hero_img} />
        </section>
    )
}