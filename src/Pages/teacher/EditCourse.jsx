import React from 'react'
import {useGetCourseDetailQuery ,useAddChapterMutation, useAddSectionMutation, useDeleteChapterMutation, useDeleteSectionMutation,
    useUpdataChapterMutation, useUpdataSectionMutation, useGetTeacherCourseQuery, useDeleteCourseMutation,
    useUpdateCourseMutation } from '../../store/apiSlice'
import { useAuth } from '../../Context/Authcontext'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { useParams } from 'react-router-dom'

function EditPage() {

  const {register, handleSubmit, formState : errors, reset} = useForm()

  const course_id = useParams()
  const {data : course, isLoading, isError} = useGetCourseDetailQuery(course_id)
  return (
    <div>
      <div>
        <h1>Edit course : </h1>
        <form onSubmit={handleSubmit(AddInfo)} className="h-screen w-screen m-6 flex flex-col gap-6">
          <div className="w-3/10 h-15 flex flex-col justify-around">
            <label htmlFor="title" className="font-semibold">Title</label>
            <input type="text" 
                id="title"
                value={course.title}
                className="w-full h-8 p-4 mt-2 border"
                placeholder="Enter the title of the course"
                {...register("title", {
                    required : true, 
                })}
            />
            {errors.title && <span className="text-red-500 text-sm mt-1">{errors.title.message}</span>}
            {isError && <div className="text-red-600 bg-red-100 p-3 rounded">
                            Failed to add course. Please try again.
                        </div>}
          </div>
          <div className="w-3/10 h-20 flex flex-col gap-2">
            <label htmlFor="description" className="font-semibold">Description</label>
            <input type="text"
            id="description"
            value={course.description}
            className="h-15 w-full pl-4 pt-1 border"
            placeholder="Give the description of the course"
            {...register("description", {
                required : true
            })} />
            {errors.description && <span className="text-red-500 text-sm mt-1">{errors.description.message}</span>}
          </div>
          <div className="w-3/10 h-15 flex flex-col gap-2">
            <label htmlFor="price">Course Price</label>
            <input type="text"
            id="price"
            value={course.price}
            className="h-7 w-full p-4 border"
            placeholder="Enter Price"
            {...register("price", {
                required : true
            })} />
            {errors.price && <span className="text-red-500 text-sm mt-1">{errors.price.message}</span>}
          </div>
          <div className="w-3/10 h-9 mt-4 flex flex-row gap-2 justify-center items-center">
            <label className="font-semibold">Update Image:</label>
            <input
                type="file"
                accept="image/*"
                className="h-full border p-2 rounded flex justify-center items-center"
                {...register("image", {
                  required : true
                })}
            />
            {errors.image && <span className="text-red-500 text-sm mt-1">{errors.image.message}</span>}
          </div>
          <div className="h-9 w-3/10 mt-2 text-[#FFFFFF] flex justify-end">
            <button type="submit" className="h-full w-1/4 border bg-[#2563EB]">
              {isLoading ? "Submitting..." : "Add Course"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditPage
