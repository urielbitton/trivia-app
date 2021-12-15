import React from 'react'

export default function Slide({slidePosition, children, index}) {

  return (
    <div className={`slide-element ${slidePosition === index ? "active" : slidePosition > 0 ? "prev" : "next"}`}>
      {children}
    </div>
  )
}
