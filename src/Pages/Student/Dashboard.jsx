import React from 'react';
import { useGetEnrolledCoursesQuery } from '../../store/apiSlice';
import { useAuth } from '../../Context/Authcontext';
import { Link } from 'react-router-dom';

function StudentDashboard() {
  const { user } = useAuth();
  
  const { data: enrollments, isLoading } = useGetEnrolledCoursesQuery(user?.id, {
    skip: !user
  });

  if (isLoading) return <div className="p-10 text-center">Loading your courses...</div>;

  return (
    <div className="w-3/4 mx-auto p-6 lg:p-10">
      
      <h1 className="text-3xl font-bold text-gray-900 mb-8">My Learning</h1>

      <div className="w- bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200 text-gray-600 text-sm uppercase tracking-wider">
              <th className="p-6 font-semibold">Course Name</th>
              <th className="p-6 font-semibold">Duration</th>
              <th className="p-6 font-semibold">Progress</th>
              <th className="p-6 font-semibold">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100 text-gray-700">
            {enrollments && enrollments.length > 0 ? (
              enrollments.map((enrollment) => {
                const course = enrollment.course;
                console.log("image url : ", course.imgUrl)

                return (
                  <tr key={enrollment.id} className="hover:bg-gray-50 transition">
                    
                    <td className="p-6 flex items-center gap-4">
                      <img 
                        src={course.imgUrl} 
                        alt={course.title} 
                        className="h-12 w-20 object-cover rounded bg-gray-200" 
                      />
                      <span className="font-medium text-gray-900">{course.title}</span>
                    </td>

                    <td className="p-6">
                      <span>2h 40m</span> 
                    </td>

                    <td className="p-6 w-1/4">
                      <div className="flex flex-col gap-1">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full" 
                            style={{ width: '40%' }} 
                          ></div>
                        </div>
                        <span className="text-xs text-gray-500">40% Complete</span>
                      </div>
                    </td>

                    <td className="p-6">
                      <p className="inline-block px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 transition">Start Learning</p>
                      {/* <Link 
                        to={`/course-player/${course.id}`}
                        className="inline-block px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 transition"
                      >
                        Start Learning
                      </Link> */}
                    </td>

                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="4" className="p-10 text-center text-gray-500">
                  You haven't enrolled in any courses yet.
                  <br />
                  <Link to="/courses" className="text-blue-600 hover:underline mt-2 inline-block">
                    Browse Courses
                  </Link>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StudentDashboard;