import React, { useRef, useState, useEffect } from 'react'
import echarts from 'echarts'
import Chart from './Chart'

export default ({ config }) => {

    let option = {
        color: ['#546ef3', '#a6cb09'],
    
        legend: {
            x: 'center',
            // y: "bottom",
    
        },
        tooltip: {
            show: true,
            trigger: 'item',
            formatter: "{a} : <br />{c}%",
        },
        polar: {
            center: ['50%', '50%'],
            radius: '300%' //图形大小
        },
        angleAxis: {
            show: false,
            startAngle: 90,
            min: 0,
            max: 100
        },
        radiusAxis: {
            type: 'category',
            show: false,
            data: ["4级权重媒体", "3级权重媒体", "5级权重媒体"]
        },
        series: [
    
            {
                type: "bar",
                name: "Enterprise Managed Devices",
                coordinateSystem: "polar",
                barWidth: 20, //宽度
                barCategoryGap: "40%",
                // data: ["76.25","47.09","22.09"],
                data: ["100"],
            },
            {
                type: "bar",
                name: "Total Devices",
                coordinateSystem: "polar",
                barWidth: 20,
                barCategoryGap: "40%",
                // data: ["14.09","55.09","27.09"]
                data: ["100"]
            }
        ]
    }

    let chart = useRef(null)
    let [chartEl, setChartEl] = useState(chart)

    useEffect(() => {
        if (!chartEl.current) {
            chartEl.setOption(option)
        }
    }, [option, chartEl])

    useEffect(() => {
        let el = echarts.init(chart.current)
        setChartEl(el)
    }, [])

    return (
        <Chart config={config}>
            <div className="chart" ref={chart}></div>
        </Chart>
    )
}