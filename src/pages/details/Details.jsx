import { memo } from 'react'
import { Button, NavBar } from 'antd-mobile'
import homeImg from '../../assets/home.png'
import { useNavigate } from 'react-router-dom'
import TopBar from '../../component/topBar'
import { Tabs } from 'antd-mobile'
import Pie from '../../charts/Pie'
import Column from '../../charts/Column'
import WeekLine from '../../charts/WeekLine'
import { useEffect } from 'react'
import { calculateCategorySums, generateDataWeek } from '../../charts/utils'
import { useState } from 'react'
import WeekPie from '../../charts/WeekPie'
import style from './Details.module.less'
import img from '../../assets/分享.png'

const Details = () => {
  const nav = useNavigate()

  let [weekData, setWeekData] = useState({
    col: [],
    pie: [],
  })
  let [monthData, setMonthData] = useState({
    col: [],
    pie: [],
  })
  useEffect(() => {
    const col = generateDataWeek('week')
    setWeekData({
      col: col,
      pie: calculateCategorySums(col),
    })

    const colMonth = generateDataWeek('lastMonth')
    setMonthData({
      col: colMonth,
      pie: calculateCategorySums(colMonth),
    })

    console.log('weekData', weekData)
  }, [])

  return (
    <div className="content flex flex-col w-full h-screen justify-between">
      <Tabs>
        <Tabs.Tab title="本周统计" key="fruits">
          <WeekLine data={weekData}></WeekLine>
          <WeekPie data={weekData}></WeekPie>
        </Tabs.Tab>
        <Tabs.Tab title="本月统计" key="vegetables">
          <WeekLine data={monthData}></WeekLine>
          <WeekPie data={monthData}></WeekPie>
        </Tabs.Tab>
      </Tabs>
      <div className="text pl-2">
        <div className="text-xl font-medium ">根据当前数据, 提供以下建议:</div>
        <ul>
          <li className="text-lg">1. 建议1 xxxxxxxxxxxxxxx, xxxxxxxxxx</li>
          <li className="text-lg">1. 建议2 xxxxxxxxxxxxxxx, xxxxxxxxxx</li>
          <li className="text-lg">1. 建议3 xxxxxxxxxxxxxxx, xxxxxxxxxx</li>
        </ul>
      </div>
      {/* 分割线 */}
      <div className={style.line}></div>
      <div className="text pl-2 mt-4">
        <div className="text-xl font-medium">分享到:</div>
        <img src={img}></img>
      </div>
    </div>
  )
}

export default memo(Details)
