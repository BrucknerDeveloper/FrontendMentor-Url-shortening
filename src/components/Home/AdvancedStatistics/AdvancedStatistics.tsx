import React from "react"

//components
import Statistic from "./Statistic/Statistic"

//imgs
import brandRecognition from "/src/assets/icon-brand-recognition.svg"
import detailedRecords from "/src/assets/icon-detailed-records.svg"
import fullyCustomizable from "/src/assets/icon-fully-customizable.svg"

//data
import data from "../../../data/data"

const statistics = data.map((data, i: number) => {
    return (
        <Statistic 
            icon={data.icon} 
            title={data.title} 
            description={data.description} 
            key={i}
        /> 
    )
})

export default function AdvancedStatistics() {

    return (
        <section className="statistics">
            <h2 className="statistics__title fs-h2 text-dark bold">Advanced Settings</h2>
            <p className="statistics__text text-light">Track how your linksare performing across the web with our advanced statistics clashboard.</p>
            <div className="statistics__container">
                {statistics}
            </div>
        </section>
    )
}