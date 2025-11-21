import React from 'react'
import { useGetChapterForSectionQuery, useGetSectionsForCourseQuery, useAddSectionMutation } from '../store/apiSlice'
import { MdDelete } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
import { FiSave } from "react-icons/fi";
import SectionEditor from './SectionEditor';
function SectionManager({courseId}) {

    const {data : sections, isLoading : isSectionLoading} = useGetSectionsForCourseQuery(courseId)
    const [addSection] = useAddSectionMutation()

  return (
    <div>
      {Array.isArray(sections) && sections.map((section) => (
        <SectionEditor key={section.id} section={section}/>
      ))}
    </div>
  )
}

export default SectionManager
