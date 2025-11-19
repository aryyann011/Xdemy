import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Components/teacher/Sidebar';

export default function TeacherLayout() {
  return (
    <div className="flex">
      {/* <Sidebar /> */}
      <div className="flex-1 p-10">
        <Outlet />
      </div>
    </div>
  );
}