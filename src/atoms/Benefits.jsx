import React from 'react'

import style from './Benefits.style'

// eslint-disable-next-line react/prop-types
const BenefitPoint = React.forwardRef(({ x, y }, ref) => (
  <rect
    ref={ref}
    className={style.rect}
    width={20}
    height={20}
    x={x}
    y={y}
    transform={`rotate(45, ${x}, ${y})`}
  />
))

// eslint-disable-next-line react/prop-types
const BenefitText = ({ title, help, x, y }) => (
  <g className={style.benefit}>
    <text alignmentBaseline="middle" className={style.title} x={x} y={y + 10}>
      {title}
    </text>
    <text className={style.help} y={y + 28 + 10}>
      {help.map((h, index) => (
        <tspan x={x} dy={index * 19} key={h}>
          {h}
        </tspan>
      ))}
    </text>
  </g>
)

const benefits = [
  {
    title: 'Customer acquisition',
    help: ['Reach your customers where', 'they interact the best'],
  },
  { title: 'User satisfaction', help: ['Provide an intuitive experience'] },
  {
    title: 'Customer retention',
    help: ['Provide an experience adapted', 'to their true needs'],
  },
  {
    title: 'User recommmandations',
    help: ['Wow effect caused by', 'futuristic user interface'],
  },
]

export default () => {
  return (
    <div className={style.Benefits}>
      <div>Benefits are numerous</div>

      <div>
        <svg
          className={style.svg}
          viewBox={`0 0 350 ${100 + benefits.length * 150}`}
        >
          <circle className={style.circle} cx="25" cy="40" r="7" />
          <line className={style.line} x1="25" y1="50" x2="25" y2="3000" />
          {benefits.map(({ title, help }, index) => {
            const y = 100 + index * 150

            return (
              <g key={title}>
                <BenefitPoint x={25} y={y} />
                <BenefitText title={`${title}++`} help={help} x={50} y={y} />
              </g>
            )
          })}
        </svg>
      </div>
    </div>
  )
}
