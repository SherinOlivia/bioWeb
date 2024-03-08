"use client"
import React from 'react'
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const statisticsList = [
  {
    metric: "Projects",
    value: "10",
    postfix: "+",
  },
  {
    metric: "Passion",
    value: "5",
    postfix: "☆",
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
      <div className='border-[#33353F] border rounded-md py-8 px-16 flex flex-row items-center justify-between'>
        {statisticsList.map((statistic, index)=> {
          return (
            <div key={index} className='flex flex-col items-center justify-center mx-4'>
              <h2 className='text-white text-4xl font-bold flex flex-row'>
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(statistic.value)}
                  locale="en-US"
                  className="text-white text-4xl font-bold"
                  transitions={(index: number) => {
                    return {
                      type:"spring",
                      mass: 1,
                      friction: 100,
                      tensions: 140 * (index + 1),
                    };
                  }}
                />
                {statistic.postfix}
              </h2>
              <p className='text-[#ADB7BE] text-base'>{statistic.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default StatisticsSection