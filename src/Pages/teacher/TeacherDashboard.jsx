import React from "react";
import { useAuth } from "../../Context/Authcontext";
import { useGetTeacherCourseQuery } from "../../store/apiSlice";

function Dashboard() {
  const { user } = useAuth();
  
  const { data: courses, isLoading } = useGetTeacherCourseQuery(user?.id, {
    skip: !user,
  });

  if (isLoading) return <div className="p-10 text-center min-h-screen">Loading dashboard...</div>;

  const totalCourses = courses?.length || 0;
  const totalEnrollments = courses ? courses.length * 12 : 0; 
  const totalRevenue = courses 
    ? courses.reduce((acc, course) => acc + (course.price || 0), 0) * 12 
    : 0;

  return (
    <div className="w-full p-6 bg-gray-50 min-h-screen">
      
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Teacher Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center gap-2">
            <img src="/image/patients_icon.svg" alt="Courses" className="h-10 w-10 mb-2 opacity-80"/>
            <p className="text-gray-500 font-medium">Total Courses</p>
            <h2 className="text-3xl font-bold text-gray-900">{totalCourses}</h2>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center gap-2">
             <img src="/image/appointments_icon.svg" alt="Students" className="h-10 w-10 mb-2 opacity-80"/>
            <p className="text-gray-500 font-medium">Total Students</p>
            <h2 className="text-3xl font-bold text-gray-900">{totalEnrollments}</h2>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center gap-2">
             <img src="/image/earning_icon.svg" alt="Revenue" className="h-10 w-10 mb-2 opacity-80"/>
            <p className="text-gray-500 font-medium">Total Revenue</p>
            <h2 className="text-3xl font-bold text-gray-900">${totalRevenue.toLocaleString()}</h2>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100">
            <h2 className="text-xl font-bold text-gray-800">Latest Courses</h2>
        </div>
        
        <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="bg-gray-50 text-gray-500 text-sm uppercase tracking-wider">
                        <th className="p-4 font-semibold">Course Title</th>
                        <th className="p-4 font-semibold">Price</th>
                        <th className="p-4 font-semibold">Status</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-gray-700">
                    {courses && courses.slice(0, 5).map((course) => (
                        <tr key={course.id} className="hover:bg-gray-50 transition">
                            <td className="p-4 flex items-center gap-3">
                                <img src={course.imgUrl} alt="" className="h-10 w-16 object-cover rounded bg-gray-200" />
                                <span className="font-medium truncate max-w-xs">{course.title}</span>
                            </td>
                            <td className="p-4">${course.price}</td>
                            <td className="p-4">
                                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                                    Published
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {(!courses || courses.length === 0) && (
                <div className="p-10 text-center text-gray-500">No courses found.</div>
            )}
        </div>
      </div>

    </div>
  );
}

export default Dashboard;
