import React from 'react';
import { useGetEnrolledCoursesQuery } from '../../store/apiSlice';
import { useAuth } from '../../Context/Authcontext';
import { Link } from 'react-router-dom';

function StudentDashboard() {
  const { user } = useAuth();
  
  const { data: enrollments, isLoading } = useGetEnrolledCoursesQuery(user?.id, {
    skip: !user
  });

  if (isLoading) {
    return (
        <div className="flex justify-center items-center min-h-[50vh]">
            <div className="text-lg font-medium text-gray-500 animate-pulse">Loading your courses...</div>
        </div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto p-4 md:p-8">
      
      <div className="flex justify-between items-end mb-6">
        <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">My Learning</h1>
            <p className="text-gray-500 mt-1">Continue where you left off</p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
        
        <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse whitespace-nowrap">
            
            <thead>
                <tr className="bg-gray-50 border-b border-gray-200 text-gray-600 text-xs uppercase tracking-wider">
                <th className="px-6 py-4 font-semibold">Course Name</th>
                <th className="px-6 py-4 font-semibold">Duration</th>
                <th className="px-6 py-4 font-semibold w-1/4">Progress</th>
                <th className="px-6 py-4 font-semibold text-right">Action</th>
                </tr>
            </thead>

            <tbody className="divide-y divide-gray-100 text-gray-700">
                {enrollments && enrollments.length > 0 ? (
                enrollments.map((enrollment) => {
                    const course = enrollment.course;
                    
                    // TODO: Replace these hardcoded values with real data when backend is ready
                    const progressPercent = 0; 
                    const duration = "Self Paced"; 

                    return (
                    <tr key={enrollment.id} className="hover:bg-gray-50 transition duration-150">
                        
                        <td className="px-6 py-4">
                            <div className="flex items-center gap-4">
                                <img 
                                    src={course.imgUrl || "https://via.placeholder.com/150"} 
                                    alt={course.title} 
                                    className="h-12 w-20 object-cover rounded-md border border-gray-200 bg-gray-100" 
                                />
                                <div>
                                    <p className="font-medium text-gray-900 text-base">{course.title}</p>
                                    <p className="text-xs text-gray-500">Instructor: {course.instructor_name || "Admin"}</p>
                                </div>
                            </div>
                        </td>

                        <td className="px-6 py-4">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                {duration}
                            </span> 
                        </td>

                        <td className="px-6 py-4 align-middle">
                            <div className="flex flex-col gap-2 min-w-[150px]">
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                <div 
                                    className="bg-green-500 h-2 rounded-full transition-all duration-500" 
                                    style={{ width: `${progressPercent}%` }} 
                                ></div>
                                </div>
                                <span className="text-xs text-gray-500 font-medium">{progressPercent}% Complete</span>
                            </div>
                        </td>

                        <td className="px-6 py-4 text-right">
                          <p className="inline-block px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 transition">Start Learning</p>
                            {/* <Link 
                                to={`/course-player/${course.id}`}
                                className="inline-flex items-center justify-center px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition shadow-sm"
                            >
                                {progressPercent > 0 ? "Continue" : "Start Learning"}
                            </Link>*/}
                        </td> 

                    </tr>
                    );
                })
                ) : (
                <tr>
                    <td colSpan="4" className="py-16 text-center">
                        <div className="flex flex-col items-center justify-center">
                            <div className="h-16 w-16 bg-gray-100 rounded-full flex items-center justify-center mb-4 text-3xl">
                                📚
                            </div>
                            <h3 className="text-lg font-medium text-gray-900">No courses enrolled yet</h3>
                            <p className="text-gray-500 max-w-sm mt-1 mb-6">
                                It looks like you haven't started your learning journey yet. Browse our catalog to find a course.
                            </p>
                            <Link to="/browse" className="px-6 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition shadow-sm">
                                Browse Courses
                            </Link>
                        </div>
                    </td>
                </tr>
                )}
            </tbody>
            </table>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;