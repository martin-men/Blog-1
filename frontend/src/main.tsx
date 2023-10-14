import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home, Register, Login, SinglePost, CreateUpdatePost } from './pages';
import { Layout } from './components/Layout';
import './mainStyles.scss'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/singlePost/:id',
        element: <SinglePost />
      },
      {
        path: '/createUpdatePost',
        element: <CreateUpdatePost />
      }
    ]
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/login',
    element: <Login />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <div className='app'>
    <div className='container'>
      <RouterProvider router={router} />
    </div>
  </div>
)
