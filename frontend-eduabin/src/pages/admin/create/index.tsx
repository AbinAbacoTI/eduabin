import AddCategoryView from 'components/admin/add/AddCategoryView'
import AddSectorView from 'components/admin/add/AddSectorView'
import SidebarLayout from 'components/common/Layouts/SidebarLayout'
import { useAppSelector } from 'hooks/rdx.hooks'

const create = () => {
  const { categories } = useAppSelector(state => state.adminRdc)
  return (
    <SidebarLayout>
      <div>
        <div>
         <AddCategoryView/>
        </div>
        <div>
         <AddSectorView categories={categories}/>
        </div>
      </div>
      <div className='w-2/4'>
       <table className='min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700 rounded-b-lg'>
        <thead>
         <tr className='py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400'>
          <th>Nombre</th>
          <th>Imagen</th>
         </tr>
        </thead>
        <tbody>
         {
          categories.map(category => (
           <tr key={`category-create-${category.category_uuid}`}>
             <td>{category.category_name}</td>
             <td>por definir</td>
           </tr>
          ))
         }
        </tbody>
       </table>
      </div>
    </SidebarLayout>
  )
}

export default create
