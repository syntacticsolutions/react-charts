import React from 'react'
import echarts from 'echarts'
import EChart from './EChart'
import Chart from './Chart'

export default ({ config, resize }) => {

    const { data } = config // destructuring a property value from an object

    let { xAxis, yAxes } = data.reduce((accum, iter) => {
        // 
        accum.xAxis.push(iter[config.xAxis])
        config.yAxes.forEach((lineName, index) => {
            if (!accum.yAxes[index]) {
                accum.yAxes.push([iter[config.yAxes[index]]])
            } else accum.yAxes[index].push(iter[config.yAxes[index]])
        })
        return accum
    }, { xAxis: [], yAxes: []})

    let colors = ['#2d8cf0', '#FFD60A', '#BF5AF2', '#FF443A', '#FF9F0C', '#31D158']

    let option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                lineStyle: {
                    color: '#ddd'
                }
            },
            backgroundColor: 'rgba(255,255,255,1)',
            padding: [5, 10],
            textStyle: {
                color: '#7588E4',
            },
            extraCssText: 'box-shadow: 0 0 5px rgba(0,0,0,0.3)'
        },
        xAxis: {
            type: 'category',
            data: xAxis,
            boundaryGap: false,
            splitLine: {
                show: true,
                interval: 'auto',
                lineStyle: {
                    color: ['#D4DFF5']
                }
            },
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#609ee9'
                }
            },
            axisLabel: {
                margin: 10,
                textStyle: {
                    fontSize: 14
                }
            }
        },
        yAxis: {
            type: 'value',
            splitLine: {
                lineStyle: {
                    color: ['#D4DFF5']
                }
            },
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#609ee9'
                }
            },
            axisLabel: {
                margin: 10,
                textStyle: {
                    fontSize: 14
                }
            }
        },
        series: yAxes.map((trendData, index) => ({
            name: config.yNames[index],
            type: 'line',
            smooth: true,
            showSymbol: false,
            symbol: 'circle',
            symbolSize: 6,
            data: trendData,
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: colors[index]
                    }, {
                        offset: 1,
                        color: 'rgba(199, 237, 250,0.2)'
                    }], false)
                }
            },
            itemStyle: {
                normal: {
                    color: colors[index]
                }
            },
            lineStyle: {
                normal: {
                    width: 3
                }
            }
        }))
    }

    return (
    <Chart config={config} resize={resize}>
        { data &&
            <EChart option={ option } config={ config } resize={resize}/>
        }
    </Chart>
    )
}