import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Pie } from '@ant-design/plots'
import { memo } from 'react'

const DemoPie = () => {
  const data = [
    {
      type: '干垃圾',
      value: 27,
    },
    {
      type: '湿垃圾',
      value: 25,
    },
    {
      type: '厨余垃圾',
      value: 18,
    },
    {
      type: '有害垃圾',
      value: 15,
    }
  ]
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.9,
		// legend: {
			// position: 'bottom',
		// },
    label: {
      type: 'inner',
      offset: '-30%',
      content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
      style: {
        fontSize: 14,
        textAlign: 'center',
      },
    },
    interactions: [
      {
        type: 'element-active',
      },
    ],
  }
  return <Pie {...config} />
}

export default memo(DemoPie)
