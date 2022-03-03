import Star from 'components/icons/Star'
import { FC, memo } from 'react'
import cn from 'clsx'

export interface RatingProps {
  value: number
}
function rangeMap (n: number, fn: (i:number) => any) {
  const arr = []
  while (n > arr.length) arr.push(fn(arr.length))
  return arr
}

const Quantity:FC<RatingProps> = ({ value = 5 }) => (
  <div className='flex flex-row text-yellow-500'>
    {
      rangeMap(5, (i) => (
        <span
          key={`star_${i}`}
          className={cn('inline-block w-4 h-2 ml-1', { 'text-gray-500': i >= Math.floor(value) })}
        >
          <Star/>
        </span>
      ))
    }
  </div>
)

export default memo(Quantity)
