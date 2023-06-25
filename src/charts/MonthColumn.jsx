import { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Line } from '@ant-design/plots'

const DemoLine = () => {
  const data = [
    {
      year: '1850',
      value: 0,
      category: 'Liquid fuel',
    },
    {
      year: '1850',
      value: 54,
      category: 'Solid fuel',
    },
    {
      year: '1850',
      value: 0,
      category: 'Gas fuel',
    },
    {
      year: '1850',
      value: 0,
      category: 'Cement production',
    },
    {
      year: '1850',
      value: 0,
      category: 'Gas flarinl',
    },
    {
      year: '1851',
      value: 0,
      category: 'Liquid fuel',
    },
    {
      year: '1851',
      value: 54,
      category: 'Solid fuel',
    },
    {
      year: '1851',
      value: 0,
      category: 'Gas fuel',
    },
    {
      year: '1851',
      value: 0,
      category: 'Cement production',
    },
    {
      year: '1851',
      value: 0,
      category: 'Gas flarinl',
    },
    {
      year: '1852',
      value: 0,
      category: 'Liquid fuel',
    },
    {
      year: '1852',
      value: 57,
      category: 'Solid fuel',
    },
    {
      year: '1852',
      value: 0,
      category: 'Gas fuel',
    },
    {
      year: '1852',
      value: 0,
      category: 'Cement production',
    },
    {
      year: '1852',
      value: 0,
      category: 'Gas flarinl',
    },
  ]
  const config = {
    data,
    xField: 'year',
    yField: 'value',
    seriesField: 'category',
    xAxis: {
      type: 'time',
    },
    yAxis: {
      label: {
        // 数值格式化为千分位
        formatter: (v) =>
          `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
      },
    },
  }

  return <Line {...config} />
}

ReactDOM.render(<DemoLine />, document.getElementById('container'))
