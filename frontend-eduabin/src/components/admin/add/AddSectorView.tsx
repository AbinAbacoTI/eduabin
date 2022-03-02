import { useForm } from 'react-hook-form'

const AddSectorView = () => {
  const { handleSubmit, register } = useForm()
  const onSubmit = data => {
    console.log(data)
  }

  return (
  <>
   <form onSubmit={handleSubmit(onSubmit)} className="px-2 py-4">
     <div>
      <input
       type="text"
       className="border-2 border-dark"
       placeholder="Nombre  de sector"
       { ...register('name') } />
     </div>
     <div>
      <input
      type="file"
      className="border-2 border-dark"
      { ...register('sector_image') } />
     </div>
     <div>
      <button
       className='py-2 px-5 bg-slate-500 text-white rounded-md'
      >
        Agregar sector
      </button>
     </div>
   </form>
  </>
  )
}

export default AddSectorView
