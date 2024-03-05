import React from 'react'

const statisticsList = [
  {
    metric: "Projects",
    value: "?",
  },
  {
    metric: "Passion",
    value: "∞",
  },
  {
    metric: "Certifications",
    value: "5",
  },
  {
    metric: "Years",
    value: "1",
  },
];

const StatisticsSection = () => {
  return (
    <div className='py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
      <div className='border-[#33353F] border rounded-md py-8 px-17 flex flex-row items-center justify-between'>
        {statisticsList.map((statistic, index)=> {
          return (
            <div key={index} className='flex flex-col items-center justify-center mx-4'>
              <h2 className='text-white text-4xl font-bold'>{statistic.value}</h2>
              <p className='text-[#ADB7BE] text-base'>{statistic.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default StatisticsSection