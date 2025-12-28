import React from 'react'
import { Card } from '@/Components/ui/card'
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { scheduleData } from '@/data/dummy';

const Calendar = () => {

  const events = scheduleData.map((item) => ({
    id: item.Id,
    title: item.Subject,
    start: item.StartTime,
    end: item.EndTime,
    backgroundColor: item.CategoryColor,
  }));

  return (
    <Card>
        <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        eventDisplay="block"
        height="650px"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay',
        }}
      />
    </Card>
  )
}

export default Calendar

// export const scheduleData = [
//   {
//     Id: 1,
//     Subject: 'React Live Session',
//     Location: 'Zoom Link',
//     StartTime: '2025-12-15T04:00:00.000Z',
//     EndTime: '2025-12-15T05:30:00.000Z',
//     CategoryColor: '#1aaa55',
//   },
//   {
//     Id: 2,
//     Subject: 'Q&A with Students',
//     Location: 'Discord Stage',
//     StartTime: '2025-12-18T06:30:00.000Z',
//     EndTime: '2025-12-18T08:30:00.000Z',
//     CategoryColor: '#357cd2',
//   },
//   {
//     Id: 3,
//     Subject: 'Node.js Backend Workshop',
//     Location: 'Google Meet',
//     StartTime: '2025-12-21T03:00:00.000Z',
//     EndTime: '2025-12-21T05:00:00.000Z',
//     CategoryColor: '#7fa900',
//   },
//   {
//     Id: 4,
//     Subject: 'Database Design Session',
//     Location: 'Zoom Link',
//     StartTime: '2025-12-24T07:00:00.000Z',
//     EndTime: '2025-12-24T08:30:00.000Z',
//     CategoryColor: '#ea7a57',
//   },
//   {
//     Id: 5,
//     Subject: 'Frontend Performance Optimization',
//     Location: 'Microsoft Teams',
//     StartTime: '2025-12-27T04:30:00.000Z',
//     EndTime: '2025-12-27T06:00:00.000Z',
//     CategoryColor: '#00bdae',
//   },
//   {
//     Id: 6,
//     Subject: 'Mock Interview Session',
//     Location: 'Zoom Link',
//     StartTime: '2025-12-30T09:00:00.000Z',
//     EndTime: '2025-12-30T10:00:00.000Z',
//     CategoryColor: '#f57f17',
//   },
//   {
//     Id: 7,
//     Subject: 'System Design Basics',
//     Location: 'Discord Stage',
//     StartTime: '2026-01-02T05:30:00.000Z',
//     EndTime: '2026-01-02T07:00:00.000Z',
//     CategoryColor: '#8e24aa',
//   },
//   {
//     Id: 8,
//     Subject: 'DSA Problem Solving',
//     Location: 'Google Meet',
//     StartTime: '2026-01-05T03:30:00.000Z',
//     EndTime: '2026-01-05T05:30:00.000Z',
//     CategoryColor: '#3949ab',
//   },
//   {
//     Id: 9,
//     Subject: 'UI/UX Design Review',
//     Location: 'Figma Live',
//     StartTime: '2026-01-08T06:00:00.000Z',
//     EndTime: '2026-01-08T07:00:00.000Z',
//     CategoryColor: '#d81b60',
//   },
//   {
//     Id: 10,
//     Subject: 'Final Project Demo Day',
//     Location: 'YouTube Live',
//     StartTime: '2026-01-12T08:00:00.000Z',
//     EndTime: '2026-01-12T10:00:00.000Z',
//     CategoryColor: '#c62828',
//   },
// ];
