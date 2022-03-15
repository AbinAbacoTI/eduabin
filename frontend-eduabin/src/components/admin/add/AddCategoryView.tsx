import { useForm } from 'react-hook-form'
import { createCategory } from 'services/admin.service'

const AddCategoryView = () => {
  const { handleSubmit, register } = useForm()
  const onSubmit = async (data) => {
    console.log('after', data)
    const res = await createCategory(data)
    console.log(res)
  }
  return (
   <form onSubmit={handleSubmit(onSubmit)} className="px-2 py-4">
   <div>
    <input
     type="text"
     className="border-2 border-dark"
     placeholder="Nombre  de categoria"
     { ...register('name') } />
   </div>
   <div>
    <input
    type="file"
    className="border-2 border-dark"
    { ...register('category_image') } />
   </div>
   <div>
    <button
     className='py-2 px-5 bg-slate-500 text-white rounded-md'
    >
      Agregar Category
    </button>
   </div>
 </form>
  )
}

export default AddCategoryView
/* fetch(`${BK_URI}/courses/addCategory/`, {
      method: 'POST',
      body: JSON.stringify(form),
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': 'Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQ1OTMzMzA5LCJqdGkiOiIzZGNlMWM0NjFmNmE0NjA0ODRjYzMwYzk5NzlkNWQzMiIsInVzZXJfaWQiOjIwfQ.eJ2TcDfeEubrRwx0etJYqQSddX9hwG6IXFU_6GQCvRA'
      }
    }).then(res => console.log(res)
    ).catch(err => console.error(err)) */

/* try {
      const res = await axios({
        method: 'POST',
        url: `${BK_URI}/courses/addCategory/`,
        data: formDataFile,
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': 'Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQ1OTM2OTM4LCJqdGkiOiJkODhkMWUxNjllNDQ0NjQxYjg3MzVhMWM4ZDZhMzg1OSIsInVzZXJfaWQiOjIwfQ.3VfO2XaCHsxU0MW_Pk56729rdSJwN7gdbzx7vRLpmUc'
        }
      })
      const res = await axios.post(`${BK_URI}/courses/addCategory/`, formDataFile,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': 'Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQ1OTM3Nzg3LCJqdGkiOiI2N2NkZmNjODZkMjE0ZjI3YWQ4MjRjZTllODI0NzhjYiIsInVzZXJfaWQiOjIwfQ.31o5VMTAp4ZCSpcjDcLpjyc9MiZRxfoIFjPOzH94_ZI'
          }
        })
      console.log(res)
    } catch (err) {
      console.error(err)
    } */
