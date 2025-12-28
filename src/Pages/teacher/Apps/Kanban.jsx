import React from 'react'
import { kanbanData } from '@/data/dummy'
import { useState } from 'react'

const Kanban = () => {
    const Open = kanbanData.filter((data) => data.Status === 'Open');
    const InProgress = kanbanData.filter((data) => data.Status === 'InProgress')
    const done = kanbanData.filter((data) => data.Status === 'Done')

    const obj = {
        Open : Open,
        InProgress : InProgress,
        Done : done
    }
    const [column, setColumn] = useState(obj);

  return (
    <div>
      
    </div>
  )
}

export default Kanban

// export const kanbanData = [
//   {
//     Id: 'Task 1',
//     Title: 'Module 1: Intro to Hooks',
//     Status: 'Open',
//     Summary: 'Script the intro video for useState and useEffect.',
//     Type: 'Scripting',
//     Priority: 'High',
//     Tags: 'Analyze,Customer',
//     Estimate: 3.5,
//     Assignee: 'Nancy Davloio',
//     RankId: 1,
//     Color: '#02897B',
//     ClassName: 'e-story, e-low, e-nancy-davloio',
//   },
//   {
//     Id: 'Task 2',
//     Title: 'Module 2: Context API',
//     Status: 'InProgress',
//     Summary: 'Record screen capture for AuthContext setup.',
//     Type: 'Recording',
//     Priority: 'Normal',
//     Tags: 'Improvement',
//     Estimate: 6,
//     Assignee: 'Andrew Fuller',
//     RankId: 1,
//     Color: '#673AB8',
//     ClassName: 'e-improvement, e-normal, e-andrew-fuller',
//   },
//   {
//     Id: 'Task 3',
//     Title: 'Course Trailer',
//     Status: 'Open',
//     Summary: 'Edit the 2-minute promo video.',
//     Type: 'Editing',
//     Priority: 'Critical',
//     Tags: 'Meeting',
//     Estimate: 5.5,
//     Assignee: 'Janet Leverling',
//     RankId: 2,
//     Color: '#1F88E5',
//     ClassName: 'e-others, e-critical, e-janet-leverling',
//   },
//   {
//     Id: 'Task 4',
//     Title: 'Module 3: Custom Hooks',
//     Status: 'Open',
//     Summary: 'Design lesson flow and examples for custom hooks.',
//     Type: 'Planning',
//     Priority: 'High',
//     Tags: 'Design,Planning',
//     Estimate: 4,
//     Assignee: 'Steven Buchanan',
//     RankId: 3,
//     Color: '#F4511E',
//     ClassName: 'e-story, e-high, e-steven-buchanan',
//   },
//   {
//     Id: 'Task 5',
//     Title: 'Quiz: Hooks Basics',
//     Status: 'InProgress',
//     Summary: 'Create quiz questions and answers for hooks module.',
//     Type: 'Assessment',
//     Priority: 'Normal',
//     Tags: 'Questionnaire',
//     Estimate: 2,
//     Assignee: 'Michael Suyama',
//     RankId: 2,
//     Color: '#00897B',
//     ClassName: 'e-task, e-normal, e-michael-suyama',
//   },
//   {
//     Id: 'Task 6',
//     Title: 'Student Feedback Analysis',
//     Status: 'Open',
//     Summary: 'Analyze feedback from beta students.',
//     Type: 'Analysis',
//     Priority: 'Low',
//     Tags: 'Analyze,Feedback',
//     Estimate: 1.5,
//     Assignee: 'Robert King',
//     RankId: 4,
//     Color: '#546E7A',
//     ClassName: 'e-analysis, e-low, e-robert-king',
//   },
//   {
//     Id: 'Task 7',
//     Title: 'Module 4: Performance Optimization',
//     Status: 'InProgress',
//     Summary: 'Record lesson on memoization and lazy loading.',
//     Type: 'Recording',
//     Priority: 'High',
//     Tags: 'Performance',
//     Estimate: 5,
//     Assignee: 'Anne Dodsworth',
//     RankId: 3,
//     Color: '#2E7D32',
//     ClassName: 'e-recording, e-high, e-anne-dodsworth',
//   },
//   {
//     Id: 'Task 8',
//     Title: 'Final Project Guidelines',
//     Status: 'Done',
//     Summary: 'Publish final project instructions.',
//     Type: 'Documentation',
//     Priority: 'Normal',
//     Tags: 'Docs,Guidelines',
//     Estimate: 2.5,
//     Assignee: 'Nancy Davloio',
//     RankId: 1,
//     Color: '#3949AB',
//     ClassName: 'e-docs, e-normal, e-nancy-davloio',
//   },
//   {
//     Id: 'Task 9',
//     Title: 'Course Launch Checklist',
//     Status: 'Done',
//     Summary: 'Verify all modules and assets are published.',
//     Type: 'Deployment',
//     Priority: 'Critical',
//     Tags: 'Release,Checklist',
//     Estimate: 1,
//     Assignee: 'Andrew Fuller',
//     RankId: 2,
//     Color: '#2E7D32',
//     ClassName: 'e-release, e-critical, e-andrew-fuller',
//   },
// ];

