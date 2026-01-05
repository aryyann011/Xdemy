import React from "react";
import { useGetCoursesQuery } from "../store/apiSlice";
import { Link } from "react-router-dom";

function Browse() {
  const { data: courses, isLoading, isError } = useGetCoursesQuery();

  if (isLoading) {
    return <div className="min-h-screen">Loading the page...</div>;
  }

  if (isError) {
    return <h1>Error loading courses.</h1>;
  }

  return (
    <div className="w-full h-full flex flex-col items-center m-5">
      <div className="w-full h-30 flex flex-row justify-around items-center p-4">
        <div className="w-1/3 flex flex-col">
          <h1 className="text-3xl font-bold">Course List</h1>
          <p><span className="text-[#2563EB]">Home</span> / Course list</p>
        </div>

        <div className="w-1/2 h-10 relative flex flex-row items-center justify-end">
          <img
            src="/image/search_icon.svg"
            className="absolute pl-2 left-1"
            alt=""
          />
          <input
            type="text"
            placeholder="Search for Courses"
            className="h-10 w-full p-4 pl-10 border border-[#6B728033] bg-[#FFFFFF]"
          />
          <button className="absolute w-1/5 h-10 bg-[#2563EB] text-[#FFFFFF] rounded-br-sm rounded-tr-sm">
            Search
          </button>
        </div>
      </div>

      <div className=" w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
        {Array.isArray(courses) && courses.map((course) =>{ 
          console.log("Image URL:", course.imgUrl);
          return (
            // <Link key={course.id} to={`/CourseDetail/${course.id}`}>
            //   <div className="h-80 rounded-xl shadow-md flex flex-col hover:shadow-lg transition">
            //     <img className="w-full h-1/2 object-contain rounded-t-xl" src={course.imgUrl} alt="" />
            //     <div className="h-1/2 w-4/5 ml-3 flex flex-col gap-1 mt-3">
            //       <h1 className="text-[#0E0E0E] text-1xl font-bold">{course.title}</h1>
            //       {/* <span>{course.description}</span> */}
            //       <div className="flex flex-row gap-2">
            //         <span>5</span>
            //         <ul className="flex flex-row items-center">
            //           {[...Array(5)].map((_, i) => (
            //             <li key={i}>
            //               <img src="/image/star_icon.png" alt="" />
            //             </li>
            //           ))}
            //         </ul>
            //         <span>(122)</span>
            //       </div>
            //       <h1>{course.price}</h1>
            //     </div>
            //   </div>
            // </Link>
            <div key={course.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
                        
              <Link to={`/student/CourseDetail/${course.id}`} className="h-40 w-full bg-gray-100 block">
                  <img 
                    className="w-full h-full object-contain" 
                    src={course.imgUrl || "/image/img1.png"} 
                    alt={course.title} 
                  />
              </Link>
  
              <div className="p-4 flex flex-col flex-grow">
                  <Link to={`/student/CourseDetail/${course.id}`}>
                    <h2 className="text-lg font-bold text-gray-900 line-clamp-2 mb-2 hover:text-blue-600 transition">
                      {course.title}
                    </h2>
                  </Link>
                  
                  <p className="text-sm text-gray-500 line-clamp-2 mb-4 flex-grow">
                      {course.description}
                  </p>
  
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                      <span className="text-lg font-bold text-gray-900">${course.price}</span>
                      
                      <div className="flex gap-2">
                            <Link 
                              to={`/student/CourseDetail/${course.id}`}
                              className="px-3 py-1.5 text-sm text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200 transition"
                            >
                              View
                            </Link>
                            {/* <Link 
                              to={`/teacher/edit-course/${course.id}`}
                              className="px-3 py-1.5 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700 transition"
                            >
                              Edit
                            </Link> */}
                      </div>
                  </div>
              </div>
            </div>
        )})}
      </div>
    </div>
  );
}

export default Browse;
