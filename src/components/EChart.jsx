import React, { useState, useEffect, useRef } from 'react'
import echarts from 'echarts'

export default ({ option, resize }) => {

    let chart = useRef(null)
    let [chartEl, setChartEl] = useState(chart)

    useEffect(() => {
        if (resize) {
            chartEl.resize()
        }
        if (!chartEl.current) {
            chartEl.setOption(option)
        }
        else {
            // console.log(resizeChart)
            setChartEl(echarts.init(chart.current))
        }
    }, [option, chartEl, resize])

    return (
        <div className="chart" ref={chart}></div>
    )
}