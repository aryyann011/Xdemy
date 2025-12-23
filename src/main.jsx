import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Login from './Components/Login.jsx'
import Signup from './Components/Signup.jsx'
import CourseDetail from './Pages/CourseDetail.jsx'
import { Authprovider } from './Context/Authcontext.jsx'
import { Provider } from 'react-redux'
import { store } from './store/store.js'
import Browse from './Pages/browse.jsx'
import ProtectedRoute from './Components/ProtectedRoute.jsx'
import AddCourse from './Pages/AddCourse.jsx'
import TeacherLayout from './layout/teacherLayout.jsx'
import Dashboard from './Pages/teacher/TeacherDashboard.jsx'
import Mycourse from './Pages/teacher/MyCourse.jsx'
import EditCourse from './Pages/teacher/EditCourse.jsx'
import StudentDashboard from './Pages/Student/Dashboard.jsx'

const router = createBrowserRouter([
  {
    path : '/',
    element : <App/>,
    children : [
      {
        path : '/',
        element : <Home/>
      },
      {
        path : '/CourseDetail/:courseId',
        element : <CourseDetail/>
      },
      {
        path : '/courses',
        element : <Browse/>
      },
      {
        path : '/mylearning',
        element : <StudentDashboard/>
      },
      // {
      //   element :<ProtectedRoute/>,
      //   children : [
      {
        path: '/teacher',
        element: <TeacherLayout />,
        children: [
          // Note: No leading slashes here!
          { path: 'dashboard', element: <Dashboard /> }, 
          { path: 'addCourse', element: <AddCourse /> },
          { path: 'mycourse', element: <Mycourse /> },
          { path: 'edit-course/:courseId', element: <EditCourse /> }
        ]
      }
      //   ]
      // } 
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <Authprovider>
        <RouterProvider router={router}/>
      </Authprovider>
    </Provider>
  </StrictMode>
)