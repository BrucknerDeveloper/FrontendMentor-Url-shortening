import React, { useState } from "react"

export default function LinkShortening() {
    const [link, setLink] = useState("")

    return (
        <section className="shortening">
            <div className="shortening-container">
                <input 
                    className="shortening__input fs-regular text-light" 
                    type="text" 
                    value={link} 
                    onChange={(e) => setLink(e.target.value)} 
                    placeholder="Shorten a link here..."  
                />
                <button 
                className="shortening__submit 
                    text-white 
                    bold 
                    fs-regular 
                    letter-space-text"
                >
                    Shorten It!
                </button>
            </div>
        </section>
    )
}