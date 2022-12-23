import React from "react"

//imgs
import logo from "/src/assets/logo.svg"
import facebook_icon from "/src/assets/icon-facebook.svg"
import twitter_icon from "/src/assets/icon-twitter.svg"
import pinterest_icon from "/src/assets/icon-pinterest.svg"
import instagram_icon from "/src/assets/icon-instagram.svg"


export default function Footer() {

    return (
        <footer className="footer">
            <div className="footer__grid">
                <img className="footer__logo" src={logo} />
                <div className="footer__container">
                    <p className="footer__title text-white bold">Features</p>
                    <p className="footer__link text-light">Link Shortening</p>
                    <p className="footer__link text-light">Branded Links</p>
                    <p className="footer__link text-light">Analytics</p>
                </div>
                <div className="footer__container">
                    <p className="footer__title text-white bold">Resources</p>
                    <p className="footer__link text-light">Blog</p>
                    <p className="footer__link text-light">Developers</p>
                    <p className="footer__link text-light">Support</p>
                </div>
                <div className="footer__container">
                    <p className="footer__title text-white bold">Company</p>
                    <p className="footer__link text-light">About</p>
                    <p className="footer__link text-light">Our Team</p>
                    <p className="footer__link text-light">Careers</p>
                    <p className="footer__link text-light">Contact</p>
                </div>
                <div className="footer__social-media">
                    <img src={facebook_icon}/>
                    <img src={twitter_icon}/>
                    <img src={pinterest_icon}/>
                    <img src={instagram_icon}/>
                </div>
            </div>       
        </footer>
    )
}