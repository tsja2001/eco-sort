/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Line } from '@ant-design/plots'
import { memo } from 'react'
import {calculateCategorySums, generateDataWeek} from './utils'

const DemoLine = (props) => {
  const config = {
    data: props.data?.col ?? [],
    xField: 'time',
    yField: 'value',
    seriesField: 'category',
    smooth: true,
    legend: {
      flipPage: false,
    },
    // xAxis: {
    //   type: 'time',
    // },
    yAxis: {
      // label: {
      //   // 数值格式化为千分位
      //   formatter: (v) =>
      //     `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
      // },
    },
  }

  return <Line {...config} />
}

export default memo(DemoLine)
