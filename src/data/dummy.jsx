import React from 'react';
import { HiCurrencyDollar } from "react-icons/hi";
import { BsShieldFillCheck } from "react-icons/bs";
import { TfiCreditCard } from "react-icons/tfi";
import { ShoppingBag, ShoppingCart, Palette, FileEdit, Kanban, CalendarDays, UserCheck, Users, AlignVerticalSpaceAround,
  Triangle, Layers, CandlestickChart, PieChart, BarChart3, AreaChart, TrendingUp, BookOpen } from 'lucide-react';

// ----------------------------------------------------------------------
// 1. HELPER COMPONENTS
// ----------------------------------------------------------------------

export const gridStudentImage = (props) => (
  <div>
    <img
      className="rounded-xl h-20 md:ml-3"
      src={props.StudentImage}
      alt="student-avatar"
    />
  </div>
);

export const gridStatus = (props) => (
  <button
    type="button"
    style={{ background: props.StatusBg }}
    className="text-white py-1 px-2 capitalize rounded-2xl text-md"
  >
    {props.Status}
  </button>
);

// ----------------------------------------------------------------------
// 2. SIDEBAR LINKS (VARIABLE NAME PRESERVED)
// ----------------------------------------------------------------------

export const sidebarLinks = [
  {
    title: "DASHBOARD",
    links: [
      { name: "Overview", path: "/teacher/dashboard", icon: <TrendingUp/> },
      { name: "Analytics", path: "/teacher/analytics", icon: <AreaChart/> },
    ],
  },
  {
    title: "CONTENT",
    links: [
      { name: "My Courses", path: "/teacher/mycourse", icon: <BookOpen/> },
      { name: "Add Course", path: "/teacher/addCourse", icon: <FileEdit/> },
      { name: "Students", path: "/teacher/students", icon: <Users/> },
    ],
  },
  {
    title: "APPS",
    links: [
      { name: "Schedule", path: "/teacher/calendar", icon: <CalendarDays/> },
      { name: "Task Board", path: "/teacher/kanban", icon: <Kanban/> },
      { name: "Editor", path: "/teacher/editor", icon: <FileEdit/> },
      { name: "Color Picker", path: "/teacher/color-picker", icon: <Palette/> },
    ],
  },
  {
    title: "CHARTS",
    links: [
      { name: "Line", path: "/teacher/line", icon: <TrendingUp/> },
      { name: "Area", path: "/teacher/area", icon: <AreaChart/> },
      { name: "Bar", path: "/teacher/bar", icon: <BarChart3/>},
      { name: "Pie", path: "/teacher/pie", icon: <PieChart/> },
      { name: "Financial", path: "/teacher/financial", icon: <CandlestickChart/> },
      { name: "Color Mapping", path: "/teacher/color-mapping", icon: <Layers/> },
      { name: "Pyramid", path: "/teacher/pyramid", icon: <Triangle/> },
      { name: "Stacked", path: "/teacher/stacked", icon: <AlignVerticalSpaceAround/> },
    ],
  },
];

// ----------------------------------------------------------------------
// 3. USER PROFILE
// ----------------------------------------------------------------------

export const userProfileData = {
  name: "Alex Johnson",
  email: "alex.teacher@xdemy.com",
  role: "Senior Instructor",
  avatar: "https://i.pravatar.cc/150?img=12",
  icon: "User",
};

export const userProfile = [
  {
    icon: <HiCurrencyDollar />,
    title: 'My Profile',
    desc: 'Account Settings',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
  },
  {
    icon: <BsShieldFillCheck />,
    title: 'My Inbox',
    desc: 'Messages & Emails',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
  },
  {
    icon: <TfiCreditCard />,
    title: 'My Tasks',
    desc: 'To-do and Daily Tasks',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',
  },
];

export const userProfileOptions = [
  {
    icon: <HiCurrencyDollar />,
    title: 'My Profile',
    desc: 'Account Settings',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
  },
  {
    icon: <BsShieldFillCheck />,
    title: 'My Inbox',
    desc: 'Messages & Emails',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
  },
  {
    icon: <TfiCreditCard />,
    title: 'My Tasks',
    desc: 'To-do and Daily Tasks',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',
  },
];

// ----------------------------------------------------------------------
// 4. CHAT & CART & NOTIFICATIONS
// ----------------------------------------------------------------------

export const chatData = [
  {
    image: "https://i.pravatar.cc/150?img=12",
    message: "New Student Enrolled!",
    desc: "Roman joined 'React 101'",
    time: "9:08 AM",
    icon: "MessageCircle",
  },
  {
    image: "https://i.pravatar.cc/150?img=5",
    message: "Question in Q&A",
    desc: "Salma asked about useEffect",
    time: "11:56 AM",
    icon: "Mail",
  },
  {
    image: "https://i.pravatar.cc/150?img=3",
    message: "Payout Processed",
    desc: "Check your earnings",
    time: "4:39 AM",
    icon: "DollarSign",
  },
];

export const cartData = [
  {
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=200&h=200",
    name: "React Router In-Depth",
    category: "Web Development",
    price: "$29",
  },
  {
    image: "https://images.unsplash.com/photo-1627398242450-274ec8810095?auto=format&fit=crop&w=200&h=200",
    name: "Mastering TypeScript",
    category: "Programming",
    price: "$45",
  },
  {
    image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?auto=format&fit=crop&w=200&h=200",
    name: "UI/UX Fundamentals",
    category: "Design",
    price: "$19",
  },
];

export const notifications = [
  {
    id: 1,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    title: "Roman Joined the Team!",
    message: "Congratulate him",
  },
  {
    id: 2,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    title: "New message received",
    message: "Salma sent you new message",
  },
  {
    id: 3,
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    title: "New Payment received",
    message: "Check your earnings",
  },
  {
    id: 4,
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    title: "Jolly completed tasks",
    message: "Assign her new tasks",
  },
];


// ----------------------------------------------------------------------
// 5. DASHBOARD STATS (RENAMED TO LMS CONTEXT)
// ----------------------------------------------------------------------

export const earningCards = [
  {
    title: "Total Revenue",
    amount: "$63,448.78",
    icon: "DollarSign",
    iconBg: "#E0F7FA",
    iconColor: "#00ACC1",
  },
  {
    title: "Active Students",
    amount: "3,354",
    percentage: "-4%",
    icon: "Users",
    iconBg: "#E8F5E9",
    iconColor: "#43A047",
  },
  {
    title: "Total Courses",
    amount: "24",
    percentage: "+23%",
    icon: "Box", 
    iconBg: "#FFF8E1",
    iconColor: "#FDD835",
  },
  {
    title: "Completion Rate",
    amount: "86%",
    percentage: "+38%",
    icon: "BarChart3",
    iconBg: "#FFF3E0",
    iconColor: "#FB8C00",
  },
];

export const recentTransactions = [
  {
    title: "Course Sale: React 101",
    amount: "+$350",
    status: "Added",
    icon: "Wallet",
    iconColor: "#00ACC1",
    iconBg: "#E0F7FA",
    desc: "New Enrollment",
  },
  {
    title: "Refund Processed",
    amount: "-$560",
    status: "Bill",
    icon: "Shield",
    iconColor: "#4CAF50",
    iconBg: "#E8F5E9",
    desc: "Course Refund",
  },
  {
    title: "Monthly Payout",
    amount: "+$350",
    status: "Reversed",
    icon: "CreditCard",
    iconColor: "#FDD835",
    iconBg: "#FFF8E1",
    desc: "Transferred to Bank",
  },
  {
    title: "Course Sale: Figma Master",
    amount: "+$350",
    status: "Added",
    icon: "ArrowUpRight",
    iconColor: "#E57373",
    iconBg: "#FFEBEE",
    desc: "New Enrollment",
  },
];

export const weeklyStats = [
  {
    title: "Top Selling Course",
    amount: "+$560",
    desc: "React Router In-Depth",
    icon: "ShoppingCart",
    iconBg: "#FB9678",
    pcColor: "green-600",
  },
  {
    title: "Best Instructor",
    amount: "+$230",
    desc: "Alex Johnson",
    icon: "Star",
    iconBg: "#FDD835",
    pcColor: "green-600",
  },
  {
    title: "Most Commented",
    amount: "+$156",
    desc: "Web Dev Bootcamp",
    icon: "MessageCircle",
    iconBg: "#00C292",
    pcColor: "green-600",
  },
];

export const themeColors = [
  { name: 'blue-theme', color: '#1A97F5' },
  { name: 'green-theme', color: '#03C9D7' },
  { name: 'purple-theme', color: '#7352FF' },
  { name: 'red-theme', color: '#FF5C8E' },
  { name: 'indigo-theme', color: '#1E4DB7' },
  { color: '#FB9678', name: 'orange-theme' },
];

// ----------------------------------------------------------------------
// 6. GRID DATA (RENAMED VARIABLES AS PER LMS)
// ----------------------------------------------------------------------

// RENAMED: ordersGrid -> enrollmentsGrid
export const enrollmentsGrid = [
  { headerText: 'Student', field: 'StudentImage', textAlign: 'Center', width: '120' },
  { headerText: 'Enrolled Course', field: 'CourseTitle', width: '150', textAlign: 'Center' },
  { headerText: 'Student Name', field: 'StudentName', width: '150', textAlign: 'Center' },
  { headerText: 'Price', field: 'Price', format: 'C2', textAlign: 'Center', width: '150' },
  { headerText: 'Status', field: 'Status', textAlign: 'Center', width: '120' },
  { headerText: 'Enrollment ID', field: 'EnrollmentID', width: '120', textAlign: 'Center' },
  { headerText: 'Location', field: 'Location', width: '150', textAlign: 'Center' },
];

// RENAMED: ordersData -> enrollmentsData
export const enrollmentsData = [
  {
    EnrollmentID: 10248,
    StudentName: 'Vinet Rouche',
    Price: 32.38,
    CourseTitle: 'React Router In-Depth',
    Location: 'USA',
    Status: 'paid',
    StatusBg: '#FB9678',
    StudentImage: 'https://i.pravatar.cc/150?img=1',
  },
  {
    EnrollmentID: 345653,
    StudentName: 'Carson Darrin',
    Price: 56.34,
    CourseTitle: 'Advanced CSS Animations',
    Location: 'Delhi',
    Status: 'complete',
    StatusBg: '#8BE78B',
    StudentImage: 'https://i.pravatar.cc/150?img=2',
  },
  {
    EnrollmentID: 390457,
    StudentName: 'Fran Perez',
    Price: 93.31,
    CourseTitle: 'Full Stack MERN Bootcamp',
    Location: 'New York',
    Status: 'active',
    StatusBg: '#03C9D7',
    StudentImage: 'https://i.pravatar.cc/150?img=3',
  },
  {
    EnrollmentID: 893486,
    StudentName: 'Anika Viseer',
    Price: 93.31,
    CourseTitle: 'Python for Data Science',
    Location: 'Germany',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    StudentImage: 'https://i.pravatar.cc/150?img=4',
  },
  {
    EnrollmentID: 748975,
    StudentName: 'Miron Vitold',
    Price: 23.99,
    CourseTitle: 'UI/UX Fundamentals',
    Location: 'Spain',
    Status: 'rejected',
    StatusBg: 'red',
    StudentImage: 'https://i.pravatar.cc/150?img=5',
  },
];

// RENAMED: customersGrid -> studentProgressGrid
export const studentProgressGrid = [
  { type: 'checkbox', width: '50' },
  { headerText: 'Student Name', field: 'StudentName', width: '150', textAlign: 'Center' },
  { field: 'ActiveCourse', headerText: 'Active Course', width: '150', textAlign: 'Center' },
  { field: 'Status', headerText: 'Status', width: '130', textAlign: 'Center' },
  { field: 'Progress', headerText: 'Progress', width: '100', format: 'C2', textAlign: 'Center' },
  { field: 'HoursSpent', headerText: 'Hours Spent', width: '100', format: 'yMd', textAlign: 'Center' },
  { field: 'Location', headerText: 'Location', width: '150', textAlign: 'Center' },
  { field: 'StudentID', headerText: 'ID', width: '120', textAlign: 'Center', isPrimaryKey: true },
];

// RENAMED: customersData -> studentProgressData
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
    StudentImage: 'https://i.pravatar.cc/150?img=2',
    ActiveCourse: 'Node.js Backend',
    Status: 'Active',
    StatusBg: '#8BE78B',
    Progress: '40%',
    HoursSpent: '5h',
    Location: 'India',
  },
  {
    StudentID: 1003,
    StudentName: 'Andrew McDownland',
    StudentEmail: 'andrew@gmail.com',
    StudentImage: 'https://i.pravatar.cc/150?img=3',
    ActiveCourse: 'Docker & Kubernetes',
    Status: 'Pending',
    StatusBg: '#FEC90F',
    Progress: '10%',
    HoursSpent: '2h',
    Location: 'USA',
  },
  {
    StudentID: 1004,
    StudentName: 'Sophia Williams',
    StudentEmail: 'sophia@gmail.com',
    StudentImage: 'https://i.pravatar.cc/150?img=4',
    ActiveCourse: 'UI/UX Design',
    Status: 'Completed',
    StatusBg: '#4CAF50',
    Progress: '100%',
    HoursSpent: '20h',
    Location: 'UK',
  },
  {
    StudentID: 1005,
    StudentName: 'Rahul Verma',
    StudentEmail: 'rahul@gmail.com',
    StudentImage: 'https://i.pravatar.cc/150?img=5',
    ActiveCourse: 'Data Structures & Algorithms',
    Status: 'Active',
    StatusBg: '#8BE78B',
    Progress: '65%',
    HoursSpent: '9h',
    Location: 'India',
  },
  {
    StudentID: 1006,
    StudentName: 'Emily Carter',
    StudentEmail: 'emily@gmail.com',
    StudentImage: 'https://i.pravatar.cc/150?img=6',
    ActiveCourse: 'Next.js Full Stack',
    Status: 'Inactive',
    StatusBg: '#FF5C5C',
    Progress: '25%',
    HoursSpent: '3h',
    Location: 'Canada',
  },
  {
    StudentID: 1007,
    StudentName: 'Daniel Lee',
    StudentEmail: 'daniel@gmail.com',
    StudentImage: 'https://i.pravatar.cc/150?img=7',
    ActiveCourse: 'Python for Data Science',
    Status: 'Active',
    StatusBg: '#8BE78B',
    Progress: '55%',
    HoursSpent: '7h',
    Location: 'Singapore',
  },
];


// RENAMED: employeesGrid -> instructorsGrid
export const instructorsGrid = [
  { headerText: 'Instructor', field: 'Name', width: '150', textAlign: 'Center' },
  { field: 'Expertise', headerText: 'Expertise', width: '170', textAlign: 'Center' },
  { headerText: 'Country', field: 'Country', width: '120', textAlign: 'Center' },
  { field: 'HireDate', headerText: 'Joined Date', width: '135', format: 'yMd', textAlign: 'Center' },
  { field: 'ReportsTo', headerText: 'Reports To', width: '120', textAlign: 'Center' },
  { field: 'InstructorID', headerText: 'ID', width: '125', textAlign: 'Center' },
];

// RENAMED: employeesData -> instructorsData
export const instructorsData = [
  {
    InstructorID: 1,
    Name: 'Nancy Davolio',
    Expertise: 'Frontend Expert',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Admin',
    EmployeeImage: 'https://i.pravatar.cc/150?img=1',
  },
  {
    InstructorID: 2,
    Name: 'Nasimiyu Danai',
    Expertise: 'Cloud Architect',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Admin',
    EmployeeImage: 'https://i.pravatar.cc/150?img=2',
  },
  {
    InstructorID: 3,
    Name: 'Iulia Albu',
    Expertise: 'UI/UX Lead',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Admin',
    EmployeeImage: 'https://i.pravatar.cc/150?img=3',
  },
];

// ----------------------------------------------------------------------
// 7. APP DATA (KANBAN, SCHEDULE)
// ----------------------------------------------------------------------

export const kanbanData = [
  {
    Id: 'Task 1',
    Title: 'Module 1: Intro to Hooks',
    Status: 'Open',
    Summary: 'Script the intro video for useState and useEffect.',
    Type: 'Scripting',
    Priority: 'High',
    Tags: 'Analyze,Customer',
    Estimate: 3.5,
    Assignee: 'Nancy Davloio',
    RankId: 1,
    Color: '#02897B',
    ClassName: 'e-story, e-low, e-nancy-davloio',
  },
  {
    Id: 'Task 2',
    Title: 'Module 2: Context API',
    Status: 'InProgress',
    Summary: 'Record screen capture for AuthContext setup.',
    Type: 'Recording',
    Priority: 'Normal',
    Tags: 'Improvement',
    Estimate: 6,
    Assignee: 'Andrew Fuller',
    RankId: 1,
    Color: '#673AB8',
    ClassName: 'e-improvement, e-normal, e-andrew-fuller',
  },
  {
    Id: 'Task 3',
    Title: 'Course Trailer',
    Status: 'Open',
    Summary: 'Edit the 2-minute promo video.',
    Type: 'Editing',
    Priority: 'Critical',
    Tags: 'Meeting',
    Estimate: 5.5,
    Assignee: 'Janet Leverling',
    RankId: 2,
    Color: '#1F88E5',
    ClassName: 'e-others, e-critical, e-janet-leverling',
  },
  {
    Id: 'Task 4',
    Title: 'Module 3: Custom Hooks',
    Status: 'Open',
    Summary: 'Design lesson flow and examples for custom hooks.',
    Type: 'Planning',
    Priority: 'High',
    Tags: 'Design,Planning',
    Estimate: 4,
    Assignee: 'Steven Buchanan',
    RankId: 3,
    Color: '#F4511E',
    ClassName: 'e-story, e-high, e-steven-buchanan',
  },
  {
    Id: 'Task 5',
    Title: 'Quiz: Hooks Basics',
    Status: 'InProgress',
    Summary: 'Create quiz questions and answers for hooks module.',
    Type: 'Assessment',
    Priority: 'Normal',
    Tags: 'Questionnaire',
    Estimate: 2,
    Assignee: 'Michael Suyama',
    RankId: 2,
    Color: '#00897B',
    ClassName: 'e-task, e-normal, e-michael-suyama',
  },
  {
    Id: 'Task 6',
    Title: 'Student Feedback Analysis',
    Status: 'Open',
    Summary: 'Analyze feedback from beta students.',
    Type: 'Analysis',
    Priority: 'Low',
    Tags: 'Analyze,Feedback',
    Estimate: 1.5,
    Assignee: 'Robert King',
    RankId: 4,
    Color: '#546E7A',
    ClassName: 'e-analysis, e-low, e-robert-king',
  },
  {
    Id: 'Task 7',
    Title: 'Module 4: Performance Optimization',
    Status: 'InProgress',
    Summary: 'Record lesson on memoization and lazy loading.',
    Type: 'Recording',
    Priority: 'High',
    Tags: 'Performance',
    Estimate: 5,
    Assignee: 'Anne Dodsworth',
    RankId: 3,
    Color: '#2E7D32',
    ClassName: 'e-recording, e-high, e-anne-dodsworth',
  },
  {
    Id: 'Task 8',
    Title: 'Final Project Guidelines',
    Status: 'Done',
    Summary: 'Publish final project instructions.',
    Type: 'Documentation',
    Priority: 'Normal',
    Tags: 'Docs,Guidelines',
    Estimate: 2.5,
    Assignee: 'Nancy Davloio',
    RankId: 1,
    Color: '#3949AB',
    ClassName: 'e-docs, e-normal, e-nancy-davloio',
  },
  {
    Id: 'Task 9',
    Title: 'Course Launch Checklist',
    Status: 'Done',
    Summary: 'Verify all modules and assets are published.',
    Type: 'Deployment',
    Priority: 'Critical',
    Tags: 'Release,Checklist',
    Estimate: 1,
    Assignee: 'Andrew Fuller',
    RankId: 2,
    Color: '#2E7D32',
    ClassName: 'e-release, e-critical, e-andrew-fuller',
  },
];



export const scheduleData = [
  {
    Id: 1,
    Subject: 'React Live Session',
    Location: 'Zoom Link',
    StartTime: '2025-12-15T04:00:00.000Z',
    EndTime: '2025-12-15T05:30:00.000Z',
    CategoryColor: '#1aaa55',
  },
  {
    Id: 2,
    Subject: 'Q&A with Students',
    Location: 'Discord Stage',
    StartTime: '2025-12-18T06:30:00.000Z',
    EndTime: '2025-12-18T08:30:00.000Z',
    CategoryColor: '#357cd2',
  },
  {
    Id: 3,
    Subject: 'Node.js Backend Workshop',
    Location: 'Google Meet',
    StartTime: '2025-12-21T03:00:00.000Z',
    EndTime: '2025-12-21T05:00:00.000Z',
    CategoryColor: '#7fa900',
  },
  {
    Id: 4,
    Subject: 'Database Design Session',
    Location: 'Zoom Link',
    StartTime: '2025-12-24T07:00:00.000Z',
    EndTime: '2025-12-24T08:30:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 5,
    Subject: 'Frontend Performance Optimization',
    Location: 'Microsoft Teams',
    StartTime: '2025-12-27T04:30:00.000Z',
    EndTime: '2025-12-27T06:00:00.000Z',
    CategoryColor: '#00bdae',
  },
  {
    Id: 6,
    Subject: 'Mock Interview Session',
    Location: 'Zoom Link',
    StartTime: '2025-12-30T09:00:00.000Z',
    EndTime: '2025-12-30T10:00:00.000Z',
    CategoryColor: '#f57f17',
  },
  {
    Id: 7,
    Subject: 'System Design Basics',
    Location: 'Discord Stage',
    StartTime: '2026-01-02T05:30:00.000Z',
    EndTime: '2026-01-02T07:00:00.000Z',
    CategoryColor: '#8e24aa',
  },
  {
    Id: 8,
    Subject: 'DSA Problem Solving',
    Location: 'Google Meet',
    StartTime: '2026-01-05T03:30:00.000Z',
    EndTime: '2026-01-05T05:30:00.000Z',
    CategoryColor: '#3949ab',
  },
  {
    Id: 9,
    Subject: 'UI/UX Design Review',
    Location: 'Figma Live',
    StartTime: '2026-01-08T06:00:00.000Z',
    EndTime: '2026-01-08T07:00:00.000Z',
    CategoryColor: '#d81b60',
  },
  {
    Id: 10,
    Subject: 'Final Project Demo Day',
    Location: 'YouTube Live',
    StartTime: '2026-01-12T08:00:00.000Z',
    EndTime: '2026-01-12T10:00:00.000Z',
    CategoryColor: '#c62828',
  },
];


// ----------------------------------------------------------------------
// 8. CHART DATA
// ----------------------------------------------------------------------

export const lineChartData = [
  { x: '2005', ReactJS: 21, Python: 28, NodeJS: 10 },
  { x: '2006', ReactJS: 24, Python: 44, NodeJS: 20 },
  { x: '2007', ReactJS: 36, Python: 48, NodeJS: 30 },
  { x: '2008', ReactJS: 38, Python: 50, NodeJS: 39 },
  { x: '2009', ReactJS: 54, Python: 66, NodeJS: 50 },
  { x: '2010', ReactJS: 57, Python: 78, NodeJS: 70 },
  { x: '2011', ReactJS: 70, Python: 84, NodeJS: 100 },
];

export const areaChartData = [
  [
    { x: new Date(2002, 0, 1), y: 2.2 },
    { x: new Date(2003, 0, 1), y: 3.4 },
    { x: new Date(2004, 0, 1), y: 2.8 },
    { x: new Date(2005, 0, 1), y: 1.6 },
    { x: new Date(2006, 0, 1), y: 2.3 },
    { x: new Date(2007, 0, 1), y: 2.5 },
  ],
  [
    { x: new Date(2002, 0, 1), y: 2 },
    { x: new Date(2003, 0, 1), y: 1.7 },
    { x: new Date(2004, 0, 1), y: 1.8 },
    { x: new Date(2005, 0, 1), y: 2.1 },
    { x: new Date(2006, 0, 1), y: 2.3 },
    { x: new Date(2007, 0, 1), y: 1.7 },
  ],
  [
    { x: new Date(2002, 0, 1), y: 0.8 },
    { x: new Date(2003, 0, 1), y: 1.3 },
    { x: new Date(2004, 0, 1), y: 1.1 },
    { x: new Date(2005, 0, 1), y: 1.6 },
    { x: new Date(2006, 0, 1), y: 2 },
    { x: new Date(2007, 0, 1), y: 1.7 },
  ],
];

export const areaCustomSeries = [
  { dataSource: areaChartData[0], xName: 'x', yName: 'y', name: 'Traffic', opacity: '0.8', type: 'SplineArea', width: '2' },
  { dataSource: areaChartData[1], xName: 'x', yName: 'y', name: 'Sales', opacity: '0.8', type: 'SplineArea', width: '2' },
  { dataSource: areaChartData[2], xName: 'x', yName: 'y', name: 'Refunds', opacity: '0.8', type: 'SplineArea', width: '2' },
];

export const barChartData = [
  [
    { x: 'USA', y: 46 },
    { x: 'GBR', y: 27 },
    { x: 'CHN', y: 26 },
  ],
  [
    { x: 'USA', y: 37 },
    { x: 'GBR', y: 23 },
    { x: 'CHN', y: 18 },
  ],
  [
    { x: 'USA', y: 38 },
    { x: 'GBR', y: 17 },
    { x: 'CHN', y: 26 },
  ],
];

export const barCustomSeries = [
  { dataSource: barChartData[0], xName: 'x', yName: 'y', name: 'Gold', type: 'Column', marker: { dataLabel: { visible: true, position: 'Top', font: { fontWeight: '600', color: '#ffffff' } } } },
  { dataSource: barChartData[1], xName: 'x', yName: 'y', name: 'Silver', type: 'Column', marker: { dataLabel: { visible: true, position: 'Top', font: { fontWeight: '600', color: '#ffffff' } } } },
  { dataSource: barChartData[2], xName: 'x', yName: 'y', name: 'Bronze', type: 'Column', marker: { dataLabel: { visible: true, position: 'Top', font: { fontWeight: '600', color: '#ffffff' } } } },
];

export const pieChartData = [
  { x: 'Developers', y: 18, text: '18%' },
  { x: 'Students', y: 8, text: '8%' },
  { x: 'Designers', y: 15, text: '15%' },
  { x: 'Managers', y: 11, text: '11%' },
  { x: 'Facilities', y: 18, text: '18%' },
  { x: 'Taxes', y: 14, text: '14%' },
  { x: 'Insurance', y: 16, text: '16%' },
];

export const contextMenuItems = [
  'AutoFit', 'AutoFitAll', 'SortAscending', 'SortDescending',
  'Copy', 'Edit', 'Delete', 'Save', 'Cancel',
  'PdfExport', 'ExcelExport', 'CsvExport',
  'FirstPage', 'PrevPage', 'LastPage', 'NextPage',
];

export const ecomPieChartData = [
  { x: '2018', y: 18, text: '35%' },
  { x: '2019', y: 18, text: '15%' },
  { x: '2020', y: 18, text: '25%' },
  { x: '2021', y: 18, text: '25%' },
];

export const stackedChartData = [
  [
    { x: 'Jan', y: 111.1 },
    { x: 'Feb', y: 127.3 },
    { x: 'Mar', y: 143.4 },
    { x: 'Apr', y: 159.9 },
    { x: 'May', y: 159.9 },
    { x: 'Jun', y: 159.9 },
    { x: 'July', y: 159.9 },
  ],
  [
    { x: 'Jan', y: 111.1 },
    { x: 'Feb', y: 127.3 },
    { x: 'Mar', y: 143.4 },
    { x: 'Apr', y: 159.9 },
    { x: 'May', y: 159.9 },
    { x: 'Jun', y: 159.9 },
    { x: 'July', y: 159.9 },
  ],
];

export const stackedCustomSeries = [
  { dataSource: stackedChartData[0], xName: 'x', yName: 'y', name: 'Revenue', type: 'StackingColumn', background: 'blue' },
  { dataSource: stackedChartData[1], xName: 'x', yName: 'y', name: 'Expense', type: 'StackingColumn', background: 'red' },
];

export const stackedPrimaryXAxis = {
  majorGridLines: { width: 0 },
  minorGridLines: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
  interval: 1,
  lineStyle: { width: 0 },
  labelIntersectAction: 'Rotate45',
  valueType: 'Category',
};

export const stackedPrimaryYAxis = {
  lineStyle: { width: 0 },
  minimum: 100,
  maximum: 400,
  interval: 100,
  majorTickLines: { width: 0 },
  majorGridLines: { width: 1 },
  minorGridLines: { width: 1 },
  minorTickLines: { width: 0 },
  labelFormat: '{value}',
};

export const financialChartData = [
  { x: new Date('2017-01-01'), open: 120, high: 125, low: 118, close: 122, volume: 100000 },
  { x: new Date('2017-01-02'), open: 122, high: 130, low: 120, close: 128, volume: 150000 },
  { x: new Date('2017-01-03'), open: 128, high: 135, low: 125, close: 132, volume: 120000 },
  { x: new Date('2017-01-04'), open: 132, high: 134, low: 128, close: 130, volume: 110000 },
  { x: new Date('2017-01-05'), open: 130, high: 138, low: 129, close: 136, volume: 160000 },
  { x: new Date('2017-01-06'), open: 136, high: 140, low: 135, close: 139, volume: 180000 },
];

export const sparklineAreaData = [
  { x: 1, yval: 2 },
  { x: 2, yval: 6 },
  { x: 3, yval: 8 },
  { x: 4, yval: 5 },
  { x: 5, yval: 10 },
];

export const PyramidData = [
  { x: 'Video', y: 120, text: '120' },
  { x: 'Quizzes', y: 435, text: '435' },
  { x: 'Assignments', y: 470, text: '470' },
  { x: 'Live', y: 475, text: '475' },
  { x: 'Reading', y: 520, text: '520' },
  { x: 'Labs', y: 930, text: '930' },
];

// ----------------------------------------------------------------------
// 9. CHART CONFIGURATIONS
// ----------------------------------------------------------------------

export const areaPrimaryXAxis = {
  valueType: 'DateTime',
  labelFormat: 'y',
  majorGridLines: { width: 0 },
  intervalType: 'Years',
  edgeLabelPlacement: 'Shift',
  labelStyle: { color: 'gray' },
};

export const areaPrimaryYAxis = {
  labelFormat: '{value}%',
  lineStyle: { width: 0 },
  maximum: 4,
  interval: 1,
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
  labelStyle: { color: 'gray' },
};

export const barPrimaryXAxis = {
  valueType: 'Category',
  interval: 1,
  majorGridLines: { width: 0 },
};

export const barPrimaryYAxis = {
  majorGridLines: { width: 0 },
  majorTickLines: { width: 0 },
  lineStyle: { width: 0 },
  labelStyle: { color: 'transparent' },
};

export const FinancialPrimaryXAxis = {
  valueType: 'DateTime',
  minimum: new Date('2016, 12, 31'),
  maximum: new Date('2017, 9, 30'),
  crosshairTooltip: { enable: true },
  majorGridLines: { width: 0 },
};

export const FinancialPrimaryYAxis = {
  title: 'Price',
  minimum: 100,
  maximum: 180,
  interval: 20,
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
};

export const LinePrimaryXAxis = {
  valueType: 'DateTime',
  labelFormat: 'y',
  intervalType: 'Years',
  edgeLabelPlacement: 'Shift',
  majorGridLines: { width: 0 },
  background: 'white',
};

export const LinePrimaryYAxis = {
  labelFormat: '{value}%',
  rangePadding: 'None',
  minimum: 0,
  maximum: 100,
  interval: 20,
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
};

export const ColorMappingPrimaryXAxis = {
  valueType: 'Category',
  majorGridLines: { width: 0 },
  title: 'Months',
};

export const ColorMappingPrimaryYAxis = {
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
  labelFormat: '{value}°C',
  title: 'Temperature',
};

export const colorMappingData = [
  [
    { x: 'Jan', y: 6.96 },
    { x: 'Feb', y: 8.9 },
    { x: 'Mar', y: 12 },
    { x: 'Apr', y: 17.5 },
    { x: 'May', y: 22.1 },
    { x: 'June', y: 25 },
    { x: 'July', y: 29.4 },
    { x: 'Aug', y: 29.6 },
    { x: 'Sep', y: 25.8 },
    { x: 'Oct', y: 21.1 },
    { x: 'Nov', y: 15.5 },
    { x: 'Dec', y: 9.9 },
  ],
  ['#FFFF99'],
  ['#FFA500'],
  ['#FF4040'],
];

export const rangeColorMapping = [
  { label: '1°C to 10°C', start: '1', end: '10', colors: colorMappingData[1] },
  { label: '11°C to 20°C', start: '11', end: '20', colors: colorMappingData[2] },
  { label: '21°C to 30°C', start: '21', end: '30', colors: colorMappingData[3] },
];