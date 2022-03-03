import { useForm } from 'react-hook-form'
import { useAppSelector } from '../../../hooks/rdx.hooks'
import { createSector } from '../../../services/admin.service'

const AddSectorView = ({ categories }) => {
  const { handleSubmit, register } = useForm()
  console.log(categories)
  const onSubmit = async data => {
    console.log(data)
    const res = await createSector(data)
    console.log(res)
  }

  return (
  <>
    <form onSubmit={handleSubmit(onSubmit)} className="px-2 py-4 w-52">
     <div>
       <select { ...register('category_uuid') } className='border-2 w-full'>
         <option value='DEFAULT' selected disabled>Seleccionar</option>
         {
           categories.map(category => (
             <option value={category.category_uuid} key={`category-${category.category_uuid}`}>{category.category_name}</option>
           ))
         }
       </select>
     </div>
     <div>
      <input
       type="text"
       className="border-2 w-full"
       placeholder="Nombre  de sector"
       { ...register('name') } />
     </div>
     <div>
      <input
      type="file"
      className="border-2 w-full"
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
