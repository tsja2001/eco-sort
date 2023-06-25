import ReactDOM from 'react-dom'
import { Column } from '@ant-design/plots'
import { memo } from 'react'
const data = [
  {
    city: '上旬',
    type: '干垃圾',
    value: 14500,
  },
  {
    city: '上旬',
    type: '湿垃圾',
    value: 8500,
  },
  {
    city: '上旬',
    type: '有害垃圾',
    value: 10000,
  },
  {
    city: '上旬',
    type: '厨余垃圾',
    value: 7000,
  },
  {
    city: '中旬',
    type: '干垃圾',
    value: 9000,
  },
  {
    city: '中旬',
    type: '湿垃圾',
    value: 8500,
  },
  {
    city: '中旬',
    type: '有害垃圾',
    value: 11000,
  },
  {
    city: '中旬',
    type: '厨余垃圾',
    value: 6000,
  },
  {
    city: '下旬',
    type: '干垃圾',
    value: 16000,
  },
  {
    city: '下旬',
    type: '湿垃圾',
    value: 5000,
  },
  {
    city: '下旬',
    type: '有害垃圾',
    value: 6000,
  },
  {
    city: '下旬',
    type: '厨余垃圾',
    value: 10000,
  },
]
const DemoColumn = () => {
  const config = {
    data,
    xField: 'city',
    yField: 'value',
    seriesField: 'type',
    isGroup: true,
    smooth: true,
		legend: {
			flipPage: false,
		},
    // columnStyle: {
    //   radius: [20, 20, 0, 0],
    // },
  }

  return <Column {...config} />
}

export default memo(DemoColumn)
