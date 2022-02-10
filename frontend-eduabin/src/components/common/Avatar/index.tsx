import Image from 'next/image'
import { FC } from 'react'

interface AvatarProps {
  w: number
  h: number
  src?: string
}

const Avatar: FC<AvatarProps> = ({ w, h, src }) => {
  return (
    <div className={`inline-block h-10 w-10 rounded-full border-2 border-primary overflow-hidden ${src ? '' : 'bg-black'}`}>
      { src
        ? (
        <Image src={src || ''}
          layout='responsive'
          objectFit='cover'
          width={w}
          height={h}
          />
          )
        : (
        <></>
          )}
    </div>
  )
}
export default Avatar
