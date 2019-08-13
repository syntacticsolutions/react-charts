import React from 'react'

export default function Dashboard () {

    let config = [
        {
            title: 'Repo Hierarchy',
            type: 'Tree',
            height: '600px',
            width: '90%',
            left: '10%'
        },
        {
            title: 'Total Open Source vs Enterprise Repos',
            type: 'Line',
            height: '400px',
            width: '45%'
        },
        {
            title: 'EP Managed VS Total Devices',
            type: 'PercentageBar',
            height: '400px',
            width: '45%'
        }
    ]

    return (
    <section className="dashboard">
        {
            config && config.map((conf, idx) => {
                const component = require(`../components/${conf.type}.jsx`).default
                return React.createElement(component, { config: conf, key: idx })
            })
        }
    </section>
    )
}