import React, { useRef, useEffect, useState} from 'react'
import echarts from 'echarts'
import Chart from './Chart'
const data = require('../assets/fixtures/sankey.json')

export default () => {
    let config = {
        title: 'Repo Hierarchy',
        type: 'Tree',
        height: '600px',
        width: '90%',
        left: '10%'
    }

    let option = {
        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
        },
        series: [
            {
                type: 'tree',

                data: [data],

                top: '1%',
                left: config.left,
                bottom: '1%',
                right: '20%',

                symbolSize: 7,

                label: {
                    normal: {
                        position: 'left',
                        verticalAlign: 'middle',
                        align: 'right',
                        fontSize: 9
                    }
                },

                leaves: {
                    label: {
                        normal: {
                            position: 'right',
                            verticalAlign: 'middle',
                            align: 'left'
                        }
                    }
                },

                expandAndCollapse: true,
                animationDuration: 550,
                animationDurationUpdate: 750
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