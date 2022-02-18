import SidebarLayout from 'components/common/Layouts/SidebarLayout'
import Collapse from '../../../../components/ui/Collapse'

const course_uuid = () => {
  return (
    <SidebarLayout>
      <div className='p-5'>
        <section>
          <div className='my-2'>
            <h1 className='text-2xl'>Detalles generales del curso</h1>
          </div>
          <div className='border-2 p-5 flex w-full bg-gray-100'>
            <div className='w-2/4 p-2'>
              <div className='px-3'>
                <input type="text"
                  className='border-2 w-full h-8 m-2 px-3'
                  placeholder='Nombre del curso'
                />
              </div>
              <div className='px-3'>
                <input type="text"
                  className='border-2 w-full h-8 m-2 px-3'
                  placeholder='Nombre del curso'
                />
              </div>
              <div className='px-3'>
                <textarea
                  className='border-2 w-full h-15 m-2 px-3 py-2'
                  placeholder='Nombre del curso'
                />
              </div>
              <div className='px-3'>
                <textarea
                  className='border-2 w-full h-40 m-2 px-3'
                  placeholder='Nombre del curso'
                />
              </div>
            </div>
            <div className='w-2/4 p-5'>
              <div className='w-full h-44 bg-gray-500'></div>
              <div className='px-3'>
                <input type="file" className='w-full m-2 px-3' />
              </div>
              <div className='px-3'>
                <textarea
                  className='border-2 w-full h-20 m-2 px-3'
                  placeholder='Nombre del curso'
                />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h1 className='text-2xl'>Lecciones del curso</h1>
          </div>
          <div>
            <Collapse title='Titulo de modulo'
              classHeader='flex flex-row items-center h-12 px-5 mb-1 rounded-xl bg-gray-500 text-white text-lg'
            >
              Contenido de collapse para los curssos
            </Collapse>
            <Collapse title='Crear modulo'
              active={true}
              classHeader='flex flex-row items-center h-12 px-5 mb-1 rounded-xl bg-gray-500 text-white text-lg'
              classContent='bg-gray-100'
            >
              <div>
                <div className='flex'>
                  <div className='w-2/4'>
                    <div className='px-3'>
                      <input type="text"
                        className='border-2 w-full h-10 m-2 px-3'
                        placeholder='Nombre de seccion' />
                    </div>
                    <div className='px-3'>
                      <input type="file"
                        className='w-full h-10 m-2 px-3'
                        placeholder='Nombre de seccion' />
                    </div>
                    <div className='px-3'>
                      <textarea
                        className='border-2 w-full h-48 m-2 px-3'
                        placeholder='Nombre de seccion' />
                    </div>
                  </div>
                  <div className='w-2/4'>
                    <div className='px-3'>
                      <textarea
                        className='border-2 w-full h-28 m-2 px-3 py-3'
                        placeholder='Nombre de seccion' />
                    </div>
                    <div className='px-3'>
                      <textarea
                        className='border-2 w-full h-28 m-2 px-3 py-3'
                        placeholder='Nombre de seccion' />
                    </div>
                    <div className='px-3'>
                      <textarea
                        className='border-2 w-full h-28 m-2 px-3 py-3'
                        placeholder='Nombre de seccion' />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Collapse
                  title='Tema 1'
                  classHeader='flex flex-row items-center h-12 px-5 mb-1 rounded-xl bg-gray-500 text-white text-lg'
                >
                </Collapse>
                <Collapse
                  title='Tema 2'
                  classHeader='flex flex-row items-center h-12 px-5 mb-1 rounded-xl bg-gray-500 text-white text-lg'
                  active={true}>
                  <div>
                    <div className='flex'>
                      <div className='w-2/4'>
                        <div className='px-3'>
                          <input type="text"
                            className='border-2 w-full h-10 m-2 px-3'
                            placeholder='Nombre del tema' />
                        </div>
                        <div className='px-3'>
                          <input type="file"
                            className='w-full h-10 m-2 px-3'
                          />
                        </div>
                      </div>
                      <div className='w-2/4'>
                        <div className='px-3'>
                          <textarea
                            className='border-2 w-full h-28 m-2 px-3 py-3'
                            placeholder='Objetivos del tema' />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Collapse title='Sub tema 1'
                      classHeader='flex flex-row items-center h-12 px-5 mb-1 rounded-xl bg-gray-500 text-white text-lg'
                      active={true}
                    >
                      <div>
                        <div className='flex'>
                          <div className='w-2/4'>
                            <div className='px-3'>
                              <input type="text"
                                className='border-2 w-full h-10 m-2 px-3'
                                placeholder='Nombre del sub tema' />
                            </div>
                            <div className='px-3'>
                              <textarea
                                className='w-full h-20 m-2 px-3 py-2'
                                placeholder='Descripcion'
                              />
                            </div>
                          </div>
                          <div className='w-2/4'>
                            <div className='px-3'>
                              <input type='file'
                                className='border-2 w-full h-10 m-2 px-3 py-3'
                                placeholder='Objetivos del tema' />
                            </div>
                            <div className='px-3'>
                            <input type='file'
                                className='border-2 w-full h-10 m-2 px-3 py-3'
                                placeholder='Objetivos del tema' />
                            </div>
                            <div className='text-center'>
                              <button
                              className='text-lg '>
                                + Agregar material
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Collapse>
                  </div>
                </Collapse>
              </div>
            </Collapse>
          </div>
        </section>
      </div>
    </SidebarLayout>
  )
}

export default course_uuid
