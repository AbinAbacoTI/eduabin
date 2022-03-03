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

export const createSector = async (data: {name: string; category_uuid: string; sector_image: File }) => {
  try {
    const formDataFile = new FormData()
    formDataFile.append('name', data.name)
    formDataFile.append('sector_image', data.sector_image[0])
    const res = await fetchAuthorization({
      url: `${BK_URI}/courses/addSector/${data.category_uuid}/`,
      method: 'POST',
      body: formDataFile
    })
    console.log(res)
    return res
  } catch (err) {
    return err
  }
}

export const getCategories = async () => {
  try {
    const res = await fetchAuthorization({
      url: `${BK_URI}/courses/addCategory/`,
      method: 'GET'
    })
    console.log(res.data)
    return res.data
  } catch (err) {
    return err
  }
}
