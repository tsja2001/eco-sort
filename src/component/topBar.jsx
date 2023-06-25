import { memo } from 'react'

/* eslint-disable react/prop-types */
const TopBar = (props) => {
  return (
    <div className="w-full flex justify-center font-semibold items-center h-10 border  border-gray-200">
      {props?.children}
    </div>
  )
}

export default memo(TopBar)
