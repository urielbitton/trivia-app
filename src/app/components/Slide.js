import React from 'react'

export default function Slide({slidePosition, children, index}) {

  return (
    <div className={`slide-element ${slidePosition === index ? "active" : slidePosition > index ? "prev" : "next"}`}>
      {children}
    </div>
  )
}
