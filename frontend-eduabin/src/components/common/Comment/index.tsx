import { useState } from 'react'
import { useSpring, a } from 'react-spring'
import useMeasure from 'react-use-measure'

const Comment = () => {
  const [isActive, setActive] = useState(false)
  const [ref, { height: viewHeight }] = useMeasure()

  const animProps = useSpring({
    height: isActive ? viewHeight : 0,
    config: { tension: 250, friction: 32, clamp: true },
    opacity: isActive ? 1 : 0
  })

  const toggle = () => setActive(x => !x)
  return (
    <div className="w-full">
      <div>
        <textarea
          onFocus={toggle}
          onBlur={toggle}
          className='w-full h-10 bg-white text-gray-700 font-medium py-1 px-4 border-b-2 border-gray-400 tracking-wide mr-1 focus:border-orange-500 focus:outline-none resize-none'
          placeholder='Ingrese su comentario'
        ></textarea>
      </div>
      <a.div style={{ overflow: 'hidden', ...animProps }}>
      <div className="flex justify-end"
        ref={ref}
      >
        <button
          className="border-2 border-orange-500 h-9 w-20 text-orange-500 font-bold"
        >
          Enviar
        </button>
      </div>
      </a.div>
    </div>
  )
}

export default Comment
