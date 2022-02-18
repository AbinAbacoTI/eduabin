
const CreateCourseView = () => {
  return (
    <div className="border-2 border-orange-400 flex items-center content-center h-full">
      <form className="w-11/12 m-auto bg-gray-100 py-10 px-1">
        <div className='flex flex-wrap justify-around items-center '>
          <div className='w-5/12'>
            <div className='p-1'>
              <input type="text"
                className='border-2 w-full h-10 px-3'
                placeholder='Nombre del curso'
              />
            </div>
            <div className='p-1'>
              <input type="text"
                className='border-2 w-full h-10 px-3'
                placeholder='Precio del curso'
              />
            </div>
            <div className='p-1'>
              <input type="file"
                className='border-2 w-full px-3'
              />
            </div>
            <div className='p-1'>
              <textarea
                className='border-2 w-full px-3 h-28'
                placeholder='Objetivos del curso'
              />
            </div>
          </div>
          <div className='w-5/12'>
            <div className='p-1'>
              <textarea
                placeholder='Descripcion breve del curso'
                className='border-2 w-full h-28 py-3 px-3'
              />
            </div>
            <div className='p-1'>
              <textarea
                placeholder='Descripcion del curso'
                className='border-2 w-full h-28 py-3 px-3'
              />
            </div>
          </div>
        </div>
        <div className='text-right'>
          <button
            className='bg-black text-white py-3 px-8 text-lg font-bold rounded-md m-1 hover:bg-white hover:border-2 hover:border-black hover:text-black transition-all duration-150'
          >Crear </button>
        </div>
      </form>
    </div>
  )
}

export default CreateCourseView
