import React, { useState, useEffect, useContext, useRef } from "react"
import Link from "./Link/Link"

//context
import {Context} from "../../../context/context"

export default function LinkShortening() {
    //states
    const [newLink, setNewLink] = useState<string>("")
    const [shortenedLinks, setShortenedLinks] = useState<string[]>([]) 
    const [linksCount, setLinksCount] = useState<number>(0)
    const [validSubmit, setValidSubmit] = useState<boolean>(true)

    //context
    const {isMobile} = useContext(Context)

    //refs
    const invalidMessageRef = React.useRef<HTMLParagraphElement>(null) //typescript needs type for the ref to work
    const isMounted = useRef<boolean>(false);

    //styles
    const styles: {} = {
        border: validSubmit ? "3px solid transparent" : "3px solid hsl(0, 87%, 67%)",
        marginBottom: !validSubmit && isMobile && "20px",
    }
    
    //functions
    function shortenLink() {
        if(newLink === "") {
            handleInvalidSubmit()
        }
        else {
            setValidSubmit(true)
            setLinksCount(prev => prev + 1)
            if(invalidMessageRef.current !== null) {
                invalidMessageRef.current.classList.remove("input--showInvalidMessage")
            }
        }
    }

    function handleInvalidSubmit() {
        setValidSubmit(false)
        if(invalidMessageRef.current !== null) {
            invalidMessageRef.current.classList.add("input--showInvalidMessage")
        }
    }

    useEffect(() => {
        async function getShortenedLink(url: string) {
            if(isMounted.current === true) {
                const respond = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
                const data = await respond.json()
                if(!data.error) {
                    setShortenedLinks((prev: string[]) => [...prev, data])
                    setNewLink("")
                }
                else {
                    handleInvalidSubmit()
                }
            }
            else {
                isMounted.current = true;
            }
        }
        getShortenedLink(newLink)

        return () => {

        }
    }, [linksCount])

    return (
        <section className="shortening">
            <div className="shortening-container">
                <input 
                    style={styles}
                    className="shortening__input fs-regular text-light" 
                    type="text" 
                    value={newLink} 
                    onChange={(e) => setNewLink(e.target.value)} 
                    placeholder="Shorten a link here..."  
                />
                <p ref={invalidMessageRef} className="shortening__invalidMessage">Please add a link</p>
                <button
                    className="shortening__submit 
                        btn
                        btn--slightly-round
                        text-white 
                        bold 
                        fs-regular"
                        onClick={shortenLink}
                    >     
                    Shorten It!
                </button>
            </div>
            {shortenedLinks.map(({result}: any, i: number) => <Link shortLink={result.short_link} originalLink={result.original_link} key={i}/>)}
        </section>
    )
}