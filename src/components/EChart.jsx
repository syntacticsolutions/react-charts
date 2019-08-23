import React, { useState, useEffect, useRef, useCallback } from 'react'
import echarts from 'echarts'

export default ({ option }) => {

    let chart = useRef(null)
    let [chartEl, setChartEl] = useState(chart)

    const resizeChart = useCallback(() => {
        chartEl.resize()
    }, [chartEl])

    useEffect(() => {
        window.addEventListener('resize', resizeChart, { passive: true })
        if (!chartEl.current) {
            chartEl.setOption(option)
        }
        else {
            // console.log(resizeChart)
            setChartEl(echarts.init(chart.current))
        }
        return () => {
            window.removeEventListener('resize', resizeChart, { passive: true })
        }
    }, [option, chartEl, resizeChart])

    return (
        <div className="chart" ref={chart}></div>
    )
}