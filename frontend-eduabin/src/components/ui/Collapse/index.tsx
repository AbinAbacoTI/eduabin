import { ReactNode, FC, useState } from 'react'
import { useSpring, a } from 'react-spring'
import style from './Collapse.module.css'
import cn from 'clsx'
import useMeasure from 'react-use-measure'
import ChevronRight from 'components/icons/ChevronRight'

export interface CollapseProps {
  title: string,
  children: ReactNode
  classRoot?: string
  classHeader?: string
  classContent?: string
  active?: boolean
}

const Collapse: FC<CollapseProps> = (
  {
    title, children,
    classRoot = style.root,
    classHeader = style.header,
    classContent,
    active = false
  }) => {
  const [isActive, setActive] = useState(active)
  const [ref, { height: viewHeight }] = useMeasure()

  const animProps = useSpring({
    height: isActive ? viewHeight : 0,
    config: { tension: 250, friction: 32, clamp: true, duration: 150 },
    opacity: isActive ? 1 : 0
  })

  const toggle = () => setActive(x => !x)

  return (
    <div
      className={classRoot}
      role='button'
      tabIndex={0}
      aria-expanded={isActive}
    >
      <div className={classHeader}
      onClick={toggle}>
        <ChevronRight className={cn(style.icon, { [style.open]: isActive })}/>
        <span className={style.label}>{title}</span>
      </div>
      <a.div style={{ overflow: 'hidden', ...animProps }}>
        <div className={`${classContent} ${style.content}`}
          ref={ref}
        >
          { children }
        </div>
      </a.div>
    </div>
  )
}

export default Collapse
