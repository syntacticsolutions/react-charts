import React, { useEffect, useState, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function Dashboard ({ dashboardName, axios, setConfig }) {
    const config = useSelector(({ DashboardReducer }) => DashboardReducer.config)
    const dispatch = useDispatch()
    let [resize, setResize] = useState(false)
    let [timer, setTimer] = useState(0)

    const triggerResize = useCallback(() => {
        if (timer) {
            window.cancelAnimationFrame(timer);
        }
        // Setup the new requestAnimationFrame()
        setTimer(window.requestAnimationFrame(function () {
            setResize(true)
            setTimeout(() => {
                setResize(false)
            }, 0)
    
        }));
        
    },[setResize, timer])

    useEffect(() => {
        window.addEventListener('resize', triggerResize, { passive: true })
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
        return () => {
            window.removeEventListener('resize', triggerResize, { passive: true })
        }
        // eslint-disable-next-line
    }, [])

    return (
        <section className="dashboard">
            {
                config && config.map((conf, idx) => {
                    const component = require(`../components/${conf.type}.jsx`).default
                    return conf.data ? React.createElement(component, { config: conf, key: idx, resize }) : ''
                })
            }
        </section>
    )
}