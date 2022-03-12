import { Avatar } from '@mui/material'

const CardTeacher = () => {
  return (
    <div className='shadow-md py-6 border-2 flex flex-col justify-center items-center'>
      <div>
        <Avatar sx={{ width: 90, height: 90 }}>am</Avatar>
      </div>
      <div className='mt-4 text-center'>
        <div>
          <h2 className='text-xl'>Nombre del profesor</h2>
        </div>
        <div>
          <span>Profesion del profesor</span>
        </div>
      </div>
    </div>
  )
}

export default CardTeacher
