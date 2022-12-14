import React, { useState } from "react"

export default function LinkShortening() {
    const [link, setLink] = useState("")

    return (
        <div>
            <input type="text" value={link} onChange={(e) => setLink(e.target.value)} placeholder="Shorten a link here..."  />
            <button>Shorten It!</button>
        </div>
    )
}