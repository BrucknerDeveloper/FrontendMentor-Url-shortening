import React from "react"

type StatisticProps = {
    icon: string,
    title: string,
    description: string
}

export default function Statistic(props: StatisticProps) {

    return (
        <div className="statistic">
            <div className="statistic__container">
                <img className="statistic__icon" src={props.icon} />
            </div>
            <h3 className="statistic__title fs-h3 bold text-dark">{props.title}</h3>
            <p className="statistic__description text-light">{props.description}</p>
        </div>
    )
}