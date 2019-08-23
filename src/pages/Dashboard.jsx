import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function Dashboard ({ dashboardName, axios, setConfig }) {
    const config = useSelector(({ DashboardReducer }) => DashboardReducer.config)
    const dispatch = useDispatch()

    useEffect(() => {
        axios.get(`/api/dashboard/${dashboardName}`)
        .then(({ data }) => {
            dispatch({
                type: 'SET_CONFIG',
                payload: data
            })
            const getData = ({ endpoint }, index) => {
                axios.get(endpoint)
                .then(({ data }) => {
                    dispatch({
                        type: 'SET_DATA',
                        payload: [index, data]
                    })
                })
            }

            data.forEach((conf, index) => {
                getData(conf, index)
            })
        })
        // eslint-disable-next-line
    }, [])

    return (
        <section className="dashboard">
            {
                config && config.map((conf, idx) => {
                    const component = require(`../components/${conf.type}.jsx`).default
                    return conf.data ? React.createElement(component, { config: conf, key: idx }) : ''
                })
            }
        </section>
    )
}