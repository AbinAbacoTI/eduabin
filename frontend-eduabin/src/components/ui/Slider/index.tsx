import { motion as m } from 'framer-motion'
import { MutableRefObject, useEffect, useRef, useState } from 'react'
import style from './Slider.module.css'

const Slider = ({ children }) => {
  const [width, setWidth] = useState(0)
  const slider = useRef() as MutableRefObject<HTMLDivElement>
  useEffect(() => {
    const { scrollWidth, offsetWidth } = slider.current
    setWidth(scrollWidth - offsetWidth)
  }, [])
  return (
    <m.div
      ref={slider}
      className={style.carrousel}
    >
      <m.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className={style['inner-carrousel']}
      >
        { children }
      </m.div>
    </m.div>
  )
}

export default Slider
