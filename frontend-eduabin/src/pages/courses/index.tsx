import { Layout } from 'components/common/Layouts'
import Link from 'components/ui/Link'
import { getCourses, getCoursesSector } from 'rdx/slice/course.slice'
import { eduAbinWrapper } from '../../rdx/store/index'
import { Tab } from '@headlessui/react'
import { ICourses } from '../../interfaces/course.interface'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import { Autocomplete, FormControl, FormControlLabel, FormLabel, InputAdornment, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import CardCourse from 'components/Cards/CardCourse'
import Image from 'next/image'
import { Search } from '@mui/icons-material'

const Courses = () => {
  return (
    <Layout title='Courses' description='Courses Page'>
      <section className='w-full h-400 relative'>
        <Image src={'/images/bg202203.jpg'}
          layout='fill'
          className='object-bottom object-cover pointer-events-none brightness-50'
        />
        <div className='h-full py-16 relative z-1 flex items-center justify-center'>
          <div className='px-20 text-white text-center'>
            <p className='text-4xl uppercase'>Courses</p>
            <span>Home / Courses</span>
          </div>
        </div>
      </section>
      <div className='container mx-auto px-10 py-10'>
        <section className='flex justify-center'>
          <div className='w-11/12 grid grid-cols-4'>
              <div className='col-span-3 grid grid-cols-3 gap-2'>
                <div className='col-span-3 flex justify-between mb-6'>
                  <div className='w-2/5'>
                    <span>2 cursos encontrados</span>
                  </div>
                  <div className='w-3/5 flex justify-evenly '>
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    sx={{ width: 300, boxShadow: '0px 3px 6px 0px rgb(0 0 0 / 9%)' }}
                    options={[{ label: 'Default' }]}
                    renderInput={(params) => <TextField {...params} label="Movie" />}
                  />
                  <TextField
                    label="Buscar curso"
                    sx={{ boxShadow: '0px 3px 6px 0px rgb(0 0 0 / 9%)' }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position='start'>
                          <Search/>
                        </InputAdornment>
                      )
                    }}
                  />
                  </div>
                </div>
                <CardCourse/>
                <CardCourse/>
                <CardCourse/>
                <CardCourse/>
                <CardCourse/>
                <CardCourse/>
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

/* export const getServerSideProps = eduAbinWrapper.getServerSideProps(({ dispatch, getState }) => async () => {
  await dispatch(getCourses())
  const { courses } = getState().courseRdc
  return {
    props: {
      courses
    }
  }
}) */
export default Courses
