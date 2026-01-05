import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
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
import StudentLayout from './layout/StudentLayout.jsx'
import Studentlist from './Pages/teacher/Studentlist'
import Calendar from './Pages/teacher/Apps/Calendar'
import Kanban from './Pages/teacher/Apps/Kanban'
import CourseEditor from './Pages/teacher/Apps/Editor'
import Lines from './Pages/teacher/Charts/Line'
import Areas from './Pages/teacher/Charts/Area'
import Bars from './Pages/teacher/Charts/Bar'
import PiePage from './Pages/teacher/Charts/Pie'
import Financial from './Pages/teacher/Charts/Financial'
import ColorMapping from './Pages/teacher/Charts/ColorMapping'
import Pyramid from './Pages/teacher/Charts/Pyramid'
import RoleRedirect from './Routes/RoleRedirect'
import PublicLayout from './layout/PublicLayout'

const router = createBrowserRouter([
  {
    path : '',
    element : <App/>,
    children : [
      {
        element: <PublicLayout />,
        children: [
          { path: "", element: <RoleRedirect /> },
          { path: "home", element: <RoleRedirect /> },
          { path: "landing", element: <Home /> },
          { path: "courses", element: <Browse /> },
          { path: "CourseDetail/:courseId", element: <CourseDetail /> },
        ],
      },
      {
        path : 'student',
        element: 
          <StudentLayout />,
        children: [
          {path : 'home', element : <Home/>},
          {path : 'mylearning', element : <StudentDashboard/>},
          {path : 'courses', element : <Browse/>},
          {path : 'CourseDetail/:courseId', element : <CourseDetail/>}
        ]
      },
      
      {
        path: 'teacher',
        element: (
          <TeacherLayout />
        ),
        children: [
          {path : '', element : <Navigate to="dashboard" replace/>},
          { path: 'dashboard', element: <Dashboard /> }, 
          { path: 'addCourse', element: <AddCourse /> },
          { path: 'mycourse', element: <Mycourse /> },
          { path: 'edit-course/:courseId', element: <EditCourse /> },
          {path : 'students', element : <Studentlist/>},
          {path : 'calendar', element : <Calendar/>},
          {path : 'kanban', element : <Kanban/>},
          {path : 'editor', element : <CourseEditor/>},
          {path : 'line', element : <Lines/>},
          {path : 'area', element : <Areas/>},
          {path : 'bar', element : <Bars/>},
          {path : 'pie', element : <PiePage/>},
          {path : 'financial', element: <Financial/>},
          {path : 'color-mapping', element : <ColorMapping/>},
          {path : 'pyramid', element : <Pyramid/>},
          { path : 'CourseDetail/:courseId', element : <CourseDetail/> },
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