import React from 'react';
import { ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { financialChartData } from '../../../data/dummy';

const Financial = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-gray-800 rounded-3xl drop-shadow-xl">
      
      <div className="mb-10">
        <p className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          Profit & Loss Statement
        </p>
      </div>

      <div className="w-full h-[420px]">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={financialChartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis 
              dataKey="x" 
              scale="point" 
              padding={{ left: 20, right: 20 }} 
              stroke="#6b7280"
            />
            
            <YAxis 
               stroke="#6b7280"
               tickFormatter={(value) => `$${value}`} 
            />
            
            <Tooltip 
              formatter={(value) => `$${value.toLocaleString()}`}
              contentStyle={{ backgroundColor: '#fff', borderRadius: '10px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
            />

            <Legend />

            <Bar 
              dataKey="Expense" 
              barSize={20} 
              fill="#FF5C8E" 
              radius={[10, 10, 0, 0]}
              name="Expenses (Ads/Tax)"
            />

            <Bar 
              dataKey="Income" 
              barSize={20} 
              fill="#00C292" 
              radius={[10, 10, 0, 0]}
              name="Gross Income"
            />

            <Line 
              type="monotone" 
              dataKey="Profit" 
              stroke="#03C9D7" 
              strokeWidth={4}
              dot={{ r: 4, fill: '#03C9D7', strokeWidth: 2 }}
              name="Net Profit"
            />

          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Financial;