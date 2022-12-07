import React, { useEffect, useState } from 'react'
import "./circle.less"

function Circle(props: {
  outRadius: number, // 外圆半径
  outbgc: string // 外圆背景色
  inRadius: number, // 内圆半径
  inbgc: string // 内圆背景色
  percentage: number, // 百分比
  txt: string
}) {

  const [routeLeft, setRouteLeft] = useState(0)
  const [routeRight, setRouteRight] = useState(0)

  useEffect(() => {

    if (props.percentage > 50) {
      setRouteRight(360 * 0.5)
      setRouteLeft(360 * (props.percentage - 50) * 0.01)
    } else {
      setRouteRight(360 * props.percentage * 0.01)
      setRouteLeft(0)
    }
  }, [props.percentage])

  return (
    <div className='__cpt_circle_root'
      style={{ width: `${props.outRadius * 2}px` }}
    >
      <div className="in_circle"
        style={{
          width: `${props.inRadius * 2}px`
        }}
      />

      <div className="circle_half_left"
        style={{
          borderRadius: `${props.outRadius}px 0 0 ${props.outRadius}px`,
          backgroundColor: props.outbgc
        }}
      >
        <div
          style={{
            borderRadius: `${props.outRadius}px 0 0 ${props.outRadius}px`,
            transform: `rotate(${routeLeft}deg)`,
            backgroundColor: props.inbgc
          }}
        ></div>
      </div>

      <div className="circle_half_right"
        style={{
          borderRadius: `0 ${props.outRadius}px  ${props.outRadius}px 0`,
          backgroundColor: props.outbgc
        }}
      >
        <div
          style={{
            visibility: props.percentage > 50 ? "hidden" : "visible",
            borderRadius: `0 ${props.outRadius}px ${props.outRadius}px 0`,
            transform: `rotate(${routeRight}deg)`,
            backgroundColor: props.inbgc
          }}></div>
      </div>

      <div className="percentage"
        style={{
          width: `${(props.inRadius * 2) * 0.85}px`
        }}
      >{props.txt}</div>

    </div>

  )
}

export default Circle