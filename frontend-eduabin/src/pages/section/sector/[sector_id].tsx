import { Layout } from 'components/common/Layouts'
import { GetServerSideProps } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { getSectorById } from 'services/course.service'
import { IRelatedCourse, IContentDivisionTrue } from '../../../interfaces'
import CardCourse from '../../../components/Cards/CardCourse/index'
import Link from 'components/ui/Link'

const sector_uuid = ({ sector }) => {
  const { division_exist, content, name, sector_image } = sector
  const { back } = useRouter()
  console.log(sector)

  return (
    <Layout title="Sector" description='Sector Page'>
      <section className='w-full h-400 relative'>
        <Image src={sector_image}
          layout='fill'
          className='object-bottom object-cover pointer-events-none brightness-50'
        />
        <div className='h-full py-16 relative z-1 flex items-center justify-center'>
          <div className='px-20 text-white text-center'>
            <p className='text-4xl uppercase'>{ name }</p>
            <span>Home / { name }</span>
          </div>
        </div>
      </section>
      <div className='container mx-auto px-20 pt-20'>
        <div className='my-5'>
          <button
            onClick={() => back()}
            className='text-black hover:text-blue-700'
          >Retroceder</button>
        </div>
        <div>
          {
            !!division_exist && (
              <>
              <span>Todas las divisiones con cursos</span>
              {
                !!content.length && (<>
                {
                  content.map(({ related_course, image_url, division_uuid, name }: IContentDivisionTrue) => (
                    <div
                      key={`sector-content-division-${division_uuid}`}
                      className='grid grid-cols-4 my-5 gap-2 content-center'
                    >
                      <div className='col-span-1'>
                        <div className='h-52 relative border-2'>
                          <Image
                            src={image_url}
                            layout='fill'
                          />
                        </div>
                      </div>
                      <div className='col-span-3 border-2'>
                        <div
                          className="flex justify-around"
                        >
                          {
                            !!related_course && (
                              <>
                                {
                                  related_course.map(({ course_name, course_uuid }) => (
                                    <Link
                                      key={`division-true-course${course_uuid}`}
                                      href={`/course/${course_uuid}`}
                                    >
                                      <CardCourse
                                      />
                                    </Link>
                                  ))
                                }
                              </>
                            )
                          }
                          {
                            !related_course.length && (
                              <><span>No contiene cursos</span></>
                            )
                          }
                        </div>
                      </div>
                    </div>
                  ))
                }
                </>)
              }
              {
                !content.length && (<>No esta vacio el array</>)
              }
              </>
            )
          }
          {
            !division_exist && (
              <>
              <span>Todos los cursos</span>
              <div
                className='flex flex-wrap justify-between'
              >
                {
                  !!content.length && (<>
                  {
                    content.map(({ course_name, course_uuid }: IRelatedCourse) => (
                      <CardCourse
                        key={`division-(1)-content-c${course_uuid}`}
                        name={course_name}
                      />
                    ))
                  }
                  </>)
                }
              </div>
              </>
            )
          }
        </div>
      </div>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { sector_id } = params as { sector_id: string }
  const sector = await getSectorById(sector_id)
  return {
    props: {
      sector
    }
  }
}

export default sector_uuid
