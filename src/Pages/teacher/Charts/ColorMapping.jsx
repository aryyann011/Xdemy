import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { colorMappingData } from '../../../data/dummy';

const ColorMapping = () => {
  
  const getColor = (value) => {
    if (value < 50) return '#FF5C8E'; 
    if (value < 80) return '#FB9678'; 
    return '#03C9D7';                 
  };

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-gray-800 rounded-3xl drop-shadow-xl">
      
      <div className="mb-10">
        <p className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          Student Grades
        </p>
      </div>

      <div className="w-full h-[420px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={colorMappingData}
            margin={{ top: 10, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            
            <XAxis dataKey="x" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            
            <Tooltip 
              cursor={{ fill: 'transparent' }}
              contentStyle={{ backgroundColor: '#fff', borderRadius: '10px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
            />
            
            <Legend 
              payload={[
                { value: 'Fail (<50)', type: 'square', color: '#FF5C8E' },
                { value: 'Average (50-80)', type: 'square', color: '#FB9678' },
                { value: 'Excellent (>80)', type: 'square', color: '#03C9D7' },
              ]}
            />

            <Bar dataKey="y" name="Score" radius={[10, 10, 0, 0]} barSize={40}>
              {colorMappingData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={getColor(entry.y)} />
              ))}
            </Bar>

          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ColorMapping;