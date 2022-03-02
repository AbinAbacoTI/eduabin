import { BK_URI } from './servers.service'
import { fetchAuthorization } from '../helpers/fetchAuthorization.helper'

export const createCategory = async (dataForm) => {
  try {
    const formDataFile = new FormData()
    formDataFile.append('name', dataForm.name)
    formDataFile.append('category_image', dataForm.category_image[0])
    const res = await fetchAuthorization({
      url: `${BK_URI}/courses/addCategory/`,
      method: 'POST',
      body: formDataFile
    })
    return res.data
  } catch (err) {
    console.error(`admin.service: ${err}`)
    return err
  }
}
