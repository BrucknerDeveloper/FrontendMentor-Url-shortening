import React from "react"

//components
import Statistic from "./Statistic/Statistic"

export default function AdvancedStatistics() {

    return (
        <div>
            <h2>Advanced Settings</h2>
            <p>Track how your linksare performing across the web with our advanced statistics clashboard.</p>
            <div>
                <Statistic />
                <Statistic />
                <Statistic />
            </div>
        </div>
    )
}