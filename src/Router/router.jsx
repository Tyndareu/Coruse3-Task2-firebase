import { createBrowserRouter } from 'react-router-dom'
import Index from '../Index'
import EditForm from '../Elements/Form/EdifForm'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />
  },
  {
    path: '/edit',
    element: <EditForm />
  }
])
