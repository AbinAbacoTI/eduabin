
import { FavoriteBorderOutlined, PersonOutline } from '@mui/icons-material'
import { Accordion, AccordionDetails, AccordionSummary, Avatar, IconButton, Rating, Typography } from '@mui/material'
import Comment from 'components/common/Comment'
import Layout from 'components/common/Layouts/Layout'
import Image from 'next/image'

const course_uuid = () => {
  return (
    <Layout>
      <section className='w-full h-400 relative'>
        <Image src={'/images/bg202203.jpg'}
          layout='fill'
          className='object-bottom object-cover pointer-events-none brightness-50'
        />
        <div className='h-full py-16 relative z-1 flex items-center justify-center'>
          <div className='px-20 text-white text-center'>
            <p className='text-4xl uppercase'>Desarrollo de aplicaciones con Next.js</p>
            <span>Home / Courses</span>
          </div>
        </div>
      </section>

      <div className='container mx-auto px-10 py-10'>
        <div className='grid grid-cols-4 gap-1'>
          <div className='col-span-3'>
            <div className='flex justify-between'>
              <div className='flex items-center justify-around w-2/5 border-2'>
                <Avatar>H</Avatar>
                <div>
                  <Typography textTransform='uppercase'>jhon doe</Typography>
                </div>
                <div>
                  <Typography>Last updated July 18, 2019</Typography>
                </div>
              </div>
              <div className='col-span-1 w-3/5'>
                <a className='hover:text-orange-500 cursor-pointer'>
                  <FavoriteBorderOutlined/>
                  Agregar a favoritos
                </a>
                <a className='px-6 py-2 bg-blue-700'>
                  Compartir
                </a>
              </div>
            </div>
            <div>
              <h1 className='text-4xl'>The Complete Shopify Aliexpress Dropship</h1>
            </div>
            <div className='w-1/3 flex justify-around'>
              <div>
                <Rating value={3}/>
              </div>
              <div>
                <PersonOutline fontSize='small' />
              </div>
            </div>
            <div>
              <div className='border shadow-md p-5 mt-4'>
                Descipcion del curso
              </div>
            </div>

            <div className='border shadow-md p-5 mt-4'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Neque tempora magni iste enim doloribus placeat eos sint eius asperiores! Laboriosam, dolorum error.
                  Atque obcaecati ullam autem voluptatibus dolores quasi architecto!</p>
            </div>

            <div className='border shadow-md p-5 mt-4'>
              <Accordion>
                <AccordionSummary
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Accordion 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>

            <div className='border shadow-md p-5'>
                <div>
                  Instructor
                </div>
                <div className='flex'>
                  <div className='w-1/4'>
                    <Avatar
                      sx={{ width: 80, height: 80 }}
                    >H</Avatar>
                  </div>
                  <div className='w-3/4'>
                      <div>
                        <span>details</span>
                      </div>
                      <div>
                        <h2>Afell Liberia</h2>
                      </div>
                      <div>
                        <p>Hello! I am a Seattle/Tacoma, Washington area graphic designer with over
                          6 years of graphic design experience. I specialize in designing infographics,
                            icons, brochures, and flyers. Included in my estimate</p>
                      </div>
                  </div>
                </div>
            </div>

            <div className='border shadow-md p-5'>
              <span>Comentarios</span>
            </div>
          </div>
          <div className='col-span-1'>
            <div className='border-2 rounded p-8'>
              <span>dsds</span>
            </div>
          </div>
        </div>

      </div>
    </Layout>
  )
}

/* export const getServerSideProps = eduAbinWrapper.getServerSideProps(({ dispatch, getState }) => async ({ query }) => {
  const uuid = query.course_uuid as string
  await dispatch(getOneCourse(uuid))
  const course = getState().courseRdc.course
  return {
    props: {
      course
    }
  }
}) */

export default course_uuid
