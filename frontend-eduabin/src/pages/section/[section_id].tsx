import { Layout } from 'components/common/Layouts'
import Link from 'components/ui/Link'
import { GetServerSideProps, NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { getSectionById } from 'services/course.service'
import { ISectionDetail } from '../../interfaces/section.interface'
interface SectionPageProps {
  section: ISectionDetail
}

const Section: NextPage<SectionPageProps> = ({ section }) => {
  const { related_category, name_section } = section
  const { back } = useRouter()
  return (
    <Layout title="Section" description='Section Page'>
      <section className='w-full h-400 relative'>
        <Image src={'/images/bg202203.jpg'}
          layout='fill'
          className='object-bottom object-cover pointer-events-none brightness-50'
        />
        <div className='h-full py-16 relative z-1 flex items-center justify-center'>
          <div className='px-20 text-white text-center'>
            <p className='text-4xl uppercase'>{ name_section }</p>
            <span>Home / {name_section}</span>
          </div>
        </div>
      </section>
      <div className='container mx-auto px-20 my-10'>
        <button
          className='text-black hover:text-blue-700'
          onClick={() => back() }
        >
            Ir atras
        </button>
        <div className='my-5'>
          <h2 className='text-xl'>Todas las categorias</h2>
        </div>
        {
          !!related_category.length && (<>
              {
                related_category.map(({ category_uuid, name, image_url, related_sector }) => (
                  <div
                    key={`section-category-${category_uuid}`}
                    className='px-10 grid grid-cols-4 gap-2 my-5'
                  >
                    <div className='h-52 relative bg-slate-400'>
                      <Image src={image_url}
                        layout='fill'
                        className='object-bottom object-cover pointer-events-none brightness-50'
                      />
                      <div className='relative h-full'>
                        <span>{name}</span>
                      </div>
                    </div>
                    <div className='col-span-3 grid grid-cols-3 gap-2'>
                      {
                        !!related_sector.length &&
                        (
                          <>
                            {
                              related_sector.map(({ name, image_url, sector_uuid }) => (
                                <>
                                  <Link href={`/section/sector/${sector_uuid}`}
                                    key={`section-category-sector-${sector_uuid}`}
                                    className='border-2'>
                                    <div className='h-full relative'>
                                      <Image
                                        src={image_url}
                                        layout='fill'
                                        className='object-cover object-bottom brightness-50 hover:brightness-75'
                                      />
                                      <div className='relative h-full text-white'>
                                        <div className='flex justify-center items-center h-full'>
                                          <div>
                                            <span className='text-xl'>{name}</span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </Link>
                                  <Link href={`/section/sector/${sector_uuid}`}
                                  key={`section-category-sector-${sector_uuid}`}
                                  className='border-2'>
                                  <div className='h-full relative'>
                                    <Image
                                      src={image_url}
                                      layout='fill'
                                      className='object-cover object-bottom brightness-50 hover:brightness-75'
                                    />
                                    <div className='relative h-full text-white'>
                                      <div className='flex justify-center items-center h-full'>
                                        <div>
                                          <span className='text-xl'>{name}</span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </Link>
                                <Link href={`/section/sector/${sector_uuid}`}
                                  key={`section-category-sector-${sector_uuid}`}
                                  className='border-2'>
                                  <div className='h-full relative'>
                                    <Image
                                      src={image_url}
                                      layout='fill'
                                      className='object-cover object-bottom brightness-50 hover:brightness-75'
                                    />
                                    <div className='relative h-full text-white'>
                                      <div className='flex justify-center items-center h-full'>
                                        <div>
                                          <span className='text-xl'>{name}</span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </Link>
                                <Link href={`/section/sector/${sector_uuid}`}
                                  key={`section-category-sector-${sector_uuid}`}
                                  className='border-2'>
                                  <div className='h-full relative'>
                                    <Image
                                      src={image_url}
                                      layout='fill'
                                      className='object-cover object-bottom brightness-50 hover:brightness-75'
                                    />
                                    <div className='relative h-full text-white'>
                                      <div className='flex justify-center items-center h-full'>
                                        <div>
                                          <span className='text-xl'>{name}</span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </Link>
                                </>
                              ))
                            }
                          </>
                        )
                      }
                      {
                        !related_sector.length && (<span>No se encontraron items</span>)
                      }
                    </div>
                  </div>
                ))
              }
            </>)
        }
        {
          !related_category.length && (
            <>
              <span>No hay categorias para esta seccion</span>
            </>
          )
        }
      </div>
    </Layout>
  )
}

export default Section

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { section_id = '' } = params as { section_id: string }
  const section = await getSectionById(section_id)
  return {
    props: {
      section
    }
  }
}
