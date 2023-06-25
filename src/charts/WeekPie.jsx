/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Pie } from '@ant-design/plots'
import { memo } from 'react'

const DemoPie = (props) => {
  const config = {
    appendPadding: 10,
    data: props?.data?.pie ?? [],
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
