import SidebarLayout from 'components/common/Layouts/SidebarLayout'

const notification = () => {
  const num = [1, 2, 3, 4, 5, 6, 7]
  return (
    <SidebarLayout>
      <div className='border-2 flex justify-around p-5 w-full h-screen'>
        <div className='w-2/5 h-full bg-gray-200 py-3 px-2 overflow-hidden overflow-y-scroll'>
          {
            num.map((item, i) => (
              <div key={`item-${i}`}
              className='mx-1 my-2 rounded-md p-3 bg-white border-2 hover:bg-gray-200 hover:border-2 hover:border-white cursor-pointer'>
              <div>
                <h1 className='text-xl font-semibold'>Notificacion {i}</h1>
              </div>
              <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos pariatur provident beatae inventore laborum fuga fugiat veniam eum, nemo, a, quam molestiae eveniet ut possimus esse autem necessitatibus. Distinctio, recusandae?</p>
              </div>
              <div className='text-right'>
                <span>14:52 6 de eneto. 2022</span>
              </div>
          </div>
            ))
          }
        </div>
        <div className='border-2 w-7/12'>
          <div className='p-5'>
            <h2 className='text-2xl font-semibold'>Notificacion 1</h2>
            <hr />
            <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ipsam consequuntur corporis tempora cupiditate, nostrum facere minima reiciendis quos harum itaque, odit nobis. Tempore reprehenderit eum doloremque odio hic! Temporibus!
            </p>
          </div>
        </div>
      </div>
    </SidebarLayout>
  )
}

export default notification
