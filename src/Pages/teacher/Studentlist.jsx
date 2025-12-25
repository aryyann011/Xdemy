import React from 'react'
import { studentProgressData } from '@/data/dummy'
import { Table, TableHeader, TableBody, TableRow, TableCell,
    TableHead, TableBody
 } from '@/Components/ui/table'
 import { Avatar, AvatarFallback, AvatarImage, Badge } from '@/Components/ui/avatar'

const Studentlist = () => {
  return (
    <div className='p-6'>
      <header>All Student List</header>
      <Table>
        <TableHeader>
            <TableRow>
                <TableHead className="w-[250px">Name</TableHead>
                <TableHead>Active Courses</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Progress</TableHead>
                <TableHead className="text-right">Location</TableHead>
            </TableRow>
        </TableHeader>
      </Table>
    </div>
  )
}

export default Studentlist

export const studentProgressData = [
  {
    StudentID: 1001,
    StudentName: 'Nirav Joshi',
    StudentEmail: 'nirav@gmail.com',
    StudentImage: 'https://i.pravatar.cc/150?img=1',
    ActiveCourse: 'React 18 Masterclass',
    Status: 'Active',
    StatusBg: '#8BE78B',
    Progress: '85%',
    HoursSpent: '12h',
    Location: 'India',
  },
  {
    StudentID: 1002,
    StudentName: 'Sunil Joshi',
    StudentEmail: 'sunil@gmail.com',
    ActiveCourse: 'Node.js Backend',
    Status: 'Active',
    StudentImage: 'https://i.pravatar.cc/150?img=2',
    StatusBg: '#8BE78B',
    Progress: '40%',
    HoursSpent: '5h',
    Location: 'India',
  },
  {
    StudentID: 1003,
    StudentName: 'Andrew McDownland',
    StudentEmail: 'andrew@gmail.com',
    ActiveCourse: 'Docker & Kubernetes',
    Status: 'Pending',
    StudentImage: 'https://i.pravatar.cc/150?img=3',
    StatusBg: '#FEC90F',
    Progress: '10%',
    HoursSpent: '2h',
    Location: 'USA',
  },
];
