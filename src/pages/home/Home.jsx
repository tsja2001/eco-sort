import "@ant-design/charts/dist/index.css"

import { memo } from 'react'
import { Button } from 'antd-mobile'
import homeImg from '../../assets/home.png'
import { useNavigate } from 'react-router-dom'
import TopBar from '../../component/topBar'

const Home = () => {
  const nav = useNavigate()
  return (
    <div className="content flex flex-col w-full h-screen overflow-hidden justify-between">
      {/* <NavBar>首页</NavBar> */}
      {/* <TopBar>首页</TopBar> */}
      <div className="flex flex-1 flex-col items-center w-full justify-around">
        <div className="text-4xl subpixel-antialiased font-extrabold text-themeColor">
          垃圾分类
        </div>
        <div className="">
          <Button
            color="primary"
            fill="solid"
            style={{ backgroundColor: '#2a40e6e1' }}
            onClick={() => {
              nav('/details')
            }}
          >
            查看详细数据
          </Button>
        </div>
        <img className="w-70vw h-70vw" src={homeImg} />
      </div>
    </div>
  )
}

export default memo(Home)
