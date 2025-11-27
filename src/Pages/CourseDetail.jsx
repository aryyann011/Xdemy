import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  useGetSectionsForCourseQuery,
  useGetCourseDetailQuery,
  useGetEnrolledCoursesQuery,
  useCheckEnrollmentQuery,
  useEnrollStudentMutation
} from "../store/apiSlice";
import Dropdown from "../Components/Dropdown";
import ChapterList from "../Components/ChapterList";
import { useAuth } from "../Context/Authcontext";
import { toast } from "react-toastify";

function CourseDetail() {
  const { courseId } = useParams();
  const { user, OpenloginModal, isLoading: isAuthLoading } = useAuth();
  const { data: sections, isLoading: isSectionLoading } =
    useGetSectionsForCourseQuery(courseId);
  const { data: course, isLoading: isCourseLoading } =
    useGetCourseDetailQuery(courseId);
  const { data: enrollments, isLoading } = useGetEnrolledCoursesQuery(user?.id, {
      skip: !user
    });

  const { 
    data: isEnrolled, 
    isLoading: isCheckingEnrollment,
    error: enrollmentError // <--- GET THIS ERROR
  } = useCheckEnrollmentQuery(
    { courseId, userId: user?.id }, 
    { skip: !user } 
  );

  console.log("ENROLLMENT DEBUG:", { isEnrolled, isCheckingEnrollment, enrollmentError });
  const [ enrollStudent ] = useEnrollStudentMutation()

  const enrollTheUser = async () => {
    if(!user) OpenloginModal()
    if(isEnrolled){
      toast("Already Enrolled in this course");
      return;
    }
    try {
      await enrollStudent({
          userId: user.id, 
          courseId: courseId
      }).unwrap();

      toast.success('successfully enrolled')
    } catch (error) {
      console.log("failed to enroll in this course :", error)
      toast.error('failed to enroll')
    }
  }
  if (isSectionLoading || isCourseLoading || isAuthLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-xl text-gray-600">Loading...</h1>
      </div>
    );
  }
  if (!course) return <div className="p-10 text-red-500">Course not found</div>;
  console.log("User:", user?.id, "Course:", courseId, "Is Enrolled:", isEnrolled);
  return (
    <div className="max-w-7xl mx-auto p-6 lg:p-10">
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        <div className="lg:col-span-2 flex flex-col gap-8">
          
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl font-bold text-gray-900">{course.title}</h1>
            <p className="text-lg text-gray-700">{course.description}</p>
            
            <div className="flex flex-row items-center gap-2 text-yellow-500">
              <span className="font-bold text-black">4.5</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <img key={i} src="/image/star_icon.png" alt="star" className="h-4 w-4" />
                ))}
              </div>
              <span className="text-gray-500 text-sm">(122 ratings)</span>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Course Structure</h2>
            <div className="space-y-2">
              {Array.isArray(sections) &&
                sections.map((section) => (
                  <Dropdown
                    key={section.id}
                    title={section.title}
                    edit={false}
                  >
                    <ChapterList sectionId={section.id} edit={false} />
                  </Dropdown>
                ))}
            </div>
          </div>

          {/* Course Description Section */}
          <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Description</h2>
            <div className="prose text-gray-700">
              <p className="mb-4">{course.description}</p>
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
                tempora officiis porro amet dicta quasi.
              </p>
              <h3 className="text-lg font-semibold mb-2">What you'll learn</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Understand the basics of programming</li>
                <li>Create dynamic web applications</li>
                <li>Learn how to manipulate the DOM</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-6 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
            <div className="h-48 w-full overflow-hidden bg-gray-200">
               <img
                className="w-full h-full object-contain"
                src={course.imgUrl || "/image/img1.png"} 
                alt={course.title}
              />
            </div>

            <div className="p-6 flex flex-col gap-4">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">${course.price}</h2>
                <span className="text-gray-500 line-through text-sm">$99.99</span>
              </div>

              {!user ? (
                <button 
                  onClick={enrollTheUser} 
                  className="w-full bg-purple-600 text-white font-bold py-3 rounded-lg"
                >
                  Enroll Now (Login Required)
                </button>
              ) : isCheckingEnrollment ? (
                 // CASE B: Actually Loading
                 <button className="w-full bg-gray-400 text-white font-bold py-3 rounded-lg cursor-not-allowed">
                   Checking Access...
                 </button>
              ) : isEnrolled ? (
                // CASE C: User is enrolled
                <button 
                  onClick={() => navigate('/my-learning')}
                  className="w-full bg-green-600 text-white font-bold py-3 rounded-lg hover:bg-green-700"
                >
                  Go to Course
                </button>
              ) : (
                // CASE D: User is NOT enrolled (OR the check failed)
                // We default to showing the button so they can try again
                <button 
                  onClick={enrollTheUser} 
                  className="w-full bg-purple-600 text-white font-bold py-3 rounded-lg hover:bg-purple-700"
                >
                  Enroll Now
                </button>
              )}
              <button className="w-full border border-black text-black font-bold py-3 rounded-lg hover:bg-gray-50 transition-colors">
                Add to Cart
              </button>

              <div className="text-sm text-gray-600 mt-2 space-y-2">
                <p className="font-semibold text-black">This course includes:</p>
                <ul className="space-y-1">
                  <li className="flex items-center gap-2">
                     14 hours on-demand video
                  </li>
                  <li className="flex items-center gap-2">
                    Access on mobile and TV
                  </li>
                  <li className="flex items-center gap-2">
                    Certificate of completion
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default CourseDetail;