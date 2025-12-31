import React from 'react'
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { lineChartData } from '@/data/dummy'
const Lines= () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-gray-800 rounded-3xl drop-shadow-xl">

      <div className="mb-10">
        <p className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          Revenue Trends
        </p>
      </div>

      <div className="w-full h-[420px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={lineChartData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />

            <XAxis 
              dataKey="x" 
              stroke="#6b7280" 
              tick={{ fill: '#6b7280' }}
            />
            <YAxis 
              stroke="#6b7280" 
              tick={{ fill: '#6b7280' }}
            />

            <Tooltip 
              contentStyle={{ backgroundColor: '#fff', borderRadius: '10px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
            />
            <Legend wrapperStyle={{ paddingTop: '20px' }}/>

            <Line 
              type="monotone" 
              dataKey="ReactJS" 
              stroke="#03C9D7" 
              strokeWidth={3}
              dot={{ r: 4, fill: '#03C9D7', strokeWidth: 2 }}
              activeDot={{ r: 8 }}
            />

            <Line 
              type="monotone" 
              dataKey="Python" 
              stroke="#7352FF" 
              strokeWidth={3}
              dot={{ r: 4, fill: '#7352FF', strokeWidth: 2 }}
            />

            <Line 
              type="monotone" 
              dataKey="NodeJS" 
              stroke="#FF5C8E" 
              strokeWidth={3}
              dot={{ r: 4, fill: '#FF5C8E', strokeWidth: 2 }}
            />

          </LineChart>
        </ResponsiveContainer>
      </div>
      
    </div>
  )
}

export default Lines
