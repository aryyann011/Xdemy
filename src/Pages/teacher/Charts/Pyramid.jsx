import React from 'react';
import { FunnelChart, Funnel, Tooltip, LabelList, ResponsiveContainer } from 'recharts';
import { pyramidData } from '../../../data/dummy';

const Pyramid = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-gray-800 rounded-3xl drop-shadow-xl">
      
      <div className="mb-10">
        <p className="text-gray-400 font-medium">Marketing Funnel</p>
        <p className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Conversion Rate
        </p>
      </div>

      <div className="w-full h-[420px]">
        <ResponsiveContainer width="100%" height="100%">
          <FunnelChart>
            <Tooltip 
              formatter={(value) => [`${value} People`]} 
              contentStyle={{ backgroundColor: '#fff', borderRadius: '10px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
            />
            
            <Funnel
              dataKey="value"
              data={pyramidData}
              isAnimationActive
            >
              <LabelList position="right" fill="#000" stroke="none" dataKey="name" />
            </Funnel>
          </FunnelChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Pyramid;