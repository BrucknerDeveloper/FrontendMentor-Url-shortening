import React from "react"

//components
import Intro from "./Intro/Intro"
import LinkShortening from "./LinkShortening/LinkShortening"
import AdvancedStatistics from "./AdvancedStatistics/AdvancedStatistics"

export default function Home() {

    return (
        <div>
            <Intro />
            <LinkShortening />
            <AdvancedStatistics />
        </div>
    )
}