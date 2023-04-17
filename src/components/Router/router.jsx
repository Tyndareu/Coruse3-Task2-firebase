import { createBrowserRouter } from 'react-router-dom'
import App from '../../App'
import EditForm from '../EdifForm'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/edit',
    element: <EditForm />
  }
])
