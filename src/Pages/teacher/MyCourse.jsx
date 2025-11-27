import React from 'react';
import { useGetTeacherCourseQuery } from '../../store/apiSlice'; 
import { useAuth } from '../../Context/Authcontext';
import { Link } from 'react-router-dom';

function MyCourses() { 
  const { user } = useAuth();
  
  const { data: mycourses, isLoading, isError } = useGetTeacherCourseQuery(user?.id, {
     skip: !user 
  });

  if (isLoading) return <div className="flex justify-center items-center h-screen">Loading...</div>;
  if (isError) return <div className="flex justify-center items-center h-screen text-red-500">Error loading courses.</div>;

  return (
    <div className="max-w-7xl mx-auto p-6">
      
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">My Courses</h1>
          <p className="text-gray-500 text-sm mt-1">
            <span className="text-blue-600 font-medium">Home</span> / Course List
          </p>
        </div>

        <div className="relative w-full md:w-96">
            <input
            type="text"
            placeholder="Search my courses..."
            className="w-full h-10 pl-4 pr-20 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="absolute right-0 top-0 h-10 px-4 bg-blue-600 text-white font-medium rounded-r-lg hover:bg-blue-700 transition">
            Search
            </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {Array.isArray(mycourses) && mycourses.map((mycourse) => (
          <div key={mycourse.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
            
            <Link to={`/CourseDetail/${mycourse.id}`} className="h-40 w-full bg-gray-100 block">
               <img 
                 className="w-full h-full object-contain" 
                 src={mycourse.imgUrl || "/image/img1.png"} 
                 alt={mycourse.title} 
               />
            </Link>

            <div className="p-4 flex flex-col flex-grow">
                <Link to={`/CourseDetail/${mycourse.id}`}>
                  <h2 className="text-lg font-bold text-gray-900 line-clamp-2 mb-2 hover:text-blue-600 transition">
                    {mycourse.title}
                  </h2>
                </Link>
                
                <p className="text-sm text-gray-500 line-clamp-2 mb-4 flex-grow">
                   {mycourse.description}
                </p>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                    <span className="text-lg font-bold text-gray-900">${mycourse.price}</span>
                    
                    <div className="flex gap-2">
                         <Link 
                            to={`/CourseDetail/${mycourse.id}`}
                            className="px-3 py-1.5 text-sm text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200 transition"
                         >
                            View
                         </Link>
                         <Link 
                            to={`/teacher/edit-course/${mycourse.id}`}
                            className="px-3 py-1.5 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700 transition"
                         >
                            Edit
                         </Link>
                    </div>
                </div>
            </div>
          </div>
        ))}
        
        {(!mycourses || mycourses.length === 0) && (
            <div className="col-span-full text-center py-20 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200">
                <p className="text-gray-500 mb-4">You haven't created any courses yet.</p>
                <Link to="/teacher/add-course" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition">
                    Create Your First Course
                </Link>
            </div>
        )}
      </div>
    </div>
  )
}

export default MyCourses