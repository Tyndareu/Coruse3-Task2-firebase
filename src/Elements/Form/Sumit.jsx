import { setData } from '../../firebase/api'

export const submit = async (values) => {
  if (window.confirm(`Change ${values.id} to ${values.title}: ${values.meets}`)) {
    try {
      await setData(values.db, values)
      alert('Update Done!!')
      window.location.replace('/')
    } catch (error) {
      alert(error)
    }
  }
}
