import React, { useState, useEffect, useRef } from 'react'
import echarts from 'echarts'

export default ({ option }) => {

    let chart = useRef(null)
    let [chartEl, setChartEl] = useState(chart)

    useEffect(() => {
        if (!chartEl.current) {
            chartEl.setOption(option)
        }
        else {
            setChartEl(echarts.init(chart.current))
        }
    }, [option, chartEl])

    return (
        <div className="chart" ref={chart}></div>
    )
}