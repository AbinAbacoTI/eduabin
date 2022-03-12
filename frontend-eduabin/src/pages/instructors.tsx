import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from '@mui/material'
import Layout from 'components/common/Layouts/Layout'
import Image from 'next/image'
import CardTeacher from '../components/Cards/CardTeacher/index'

const Instructor = () => {
  return (
    <Layout>
      <section className='w-full h-400 relative'>
        <Image src={'/images/bg202203.jpg'}
          layout='fill'
          className='object-bottom object-cover pointer-events-none brightness-50'
        />
        <div className='h-full py-16 relative z-1 flex items-center justify-center'>
          <div className='px-20 text-white text-center'>
            <p className='text-4xl uppercase'>Instructores</p>
            <span>Home / Instructores</span>
          </div>
        </div>
      </section>

      <div className='container mx-auto px-10 py-10'>
        <section className='flex justify-center'>
          <div className='w-11/12 grid grid-cols-4'>
            <div className='col-span-3 grid grid-cols-3 gap-2 px-2'>
              <CardTeacher/>
              <CardTeacher/>
              <CardTeacher/>
              <CardTeacher/>
            </div>
            <div className='col-span-1'>
            <div className='border-2 rounded p-8'>
                <FormControl>
                  <FormLabel id="demo-controlled-radio-buttons-group">
                    <Typography fontSize='20px' fontWeight={600} lineHeight='30px'>
                    Gender
                    </Typography>
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={'female'}
                  >
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                  </RadioGroup>
                </FormControl>
                </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default Instructor
