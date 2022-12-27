import React, { useState } from "react"

type LinkProps = {
    shortLink: string,
    originalLink: string
    key: number
}

export default function Link(props: LinkProps) {
    const [btnText, setBtnText] = useState("Copy")

    const styles: {} = {
        backgroundColor: btnText === "Copied!" && "hsl(257, 27%, 26%)"
    }

    function copyToClipboard() {
        navigator.clipboard.writeText(props.shortLink);
        setBtnText("Copied!")
    }

    return (
        <div className="link">
            <p className="link__original text-dark">{props.originalLink}</p>
            <hr className="link__hr" />
            <a className="link__newLink text-accent" href={"https://www." + props.shortLink}>{"https://www." + props.shortLink}</a>
            <button style={styles} className="link__btn btn btn--slightly-round" onClick={copyToClipboard}>{btnText}</button>
        </div>
    )
}