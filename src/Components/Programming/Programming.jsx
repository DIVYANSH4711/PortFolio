import React from "react";
import { useState, useEffect } from "react";
import { Line } from 'react-chartjs-2';
import {
   Chart as ChartJS,
   CategoryScale,
   LinearScale,
   PointElement,
   LineElement,
   Tooltip,
   Legend,
} from 'chart.js';

ChartJS.register(
   CategoryScale,
   LinearScale,
   PointElement,
   LineElement,
   Tooltip,
   Legend
);

const CompetitiveProgramming = () => {

   const stats = {
      rating: 1662,
      problemsSolved: 592,
      contests: 39,
   };

   const difficulty = {
      easy: { solved: 251, total: 873 },
      medium: { solved: 304, total: 1835 },
      hard: { solved: 37, total: 827 },
   };
   const joinedContests = [
      {
         attended: true,
         trendDirection: 'DOWN',
         problemsSolved: 1,
         totalProblems: 4,
         finishTimeInSeconds: 242,
         rating: 1472.116,
         ranking: 17175
      },
      {
         attended: true,
         trendDirection: 'UP',
         problemsSolved: 2,
         totalProblems: 4,
         finishTimeInSeconds: 1343,
         rating: 1493.588,
         ranking: 11393
      },
      {
         attended: true,
         trendDirection: 'DOWN',
         problemsSolved: 1,
         totalProblems: 4,
         finishTimeInSeconds: 1765,
         rating: 1471.865,
         ranking: 17611
      },
      {
         attended: true,
         trendDirection: 'DOWN',
         problemsSolved: 2,
         totalProblems: 4,
         finishTimeInSeconds: 4607,
         rating: 1457.573,
         ranking: 17728
      },
      {
         attended: true,
         trendDirection: 'DOWN',
         problemsSolved: 1,
         totalProblems: 4,
         finishTimeInSeconds: 2027,
         rating: 1446.006,
         ranking: 16451
      },
      {
         attended: true,
         trendDirection: 'DOWN',
         problemsSolved: 1,
         totalProblems: 4,
         finishTimeInSeconds: 3920,
         rating: 1418.53,
         ranking: 20340
      },
      {
         attended: true,
         trendDirection: 'DOWN',
         problemsSolved: 1,
         totalProblems: 4,
         finishTimeInSeconds: 3756,
         rating: 1399.253,
         ranking: 18824
      },
      {
         attended: true,
         trendDirection: 'UP',
         problemsSolved: 2,
         totalProblems: 4,
         finishTimeInSeconds: 5874,
         rating: 1401.468,
         ranking: 14981
      },
      {
         attended: true,
         trendDirection: 'DOWN',
         problemsSolved: 1,
         totalProblems: 4,
         finishTimeInSeconds: 2095,
         rating: 1395.697,
         ranking: 12985
      },
      {
         attended: true,
         trendDirection: 'UP',
         problemsSolved: 2,
         totalProblems: 4,
         finishTimeInSeconds: 4528,
         rating: 1429.75,
         ranking: 8075
      },
      {
         attended: true,
         trendDirection: 'DOWN',
         problemsSolved: 1,
         totalProblems: 4,
         finishTimeInSeconds: 2573,
         rating: 1421.069,
         ranking: 15319
      },
      {
         attended: true,
         trendDirection: 'UP',
         problemsSolved: 3,
         totalProblems: 4,
         finishTimeInSeconds: 6087,
         rating: 1433.471,
         ranking: 12208
      },
      {
         attended: true,
         trendDirection: 'UP',
         problemsSolved: 3,
         totalProblems: 4,
         finishTimeInSeconds: 5737,
         rating: 1479.173,
         ranking: 6866
      },
      {
         attended: true,
         trendDirection: 'UP',
         problemsSolved: 2,
         totalProblems: 4,
         finishTimeInSeconds: 1858,
         rating: 1506.889,
         ranking: 8956
      },
      {
         attended: true,
         trendDirection: 'UP',
         problemsSolved: 3,
         totalProblems: 4,
         finishTimeInSeconds: 2961,
         rating: 1590.217,
         ranking: 1952
      },
      {
         attended: true,
         trendDirection: 'UP',
         problemsSolved: 3,
         totalProblems: 4,
         finishTimeInSeconds: 2142,
         rating: 1650.926,
         ranking: 2709
      },
      {
         attended: true,
         trendDirection: 'DOWN',
         problemsSolved: 2,
         totalProblems: 4,
         finishTimeInSeconds: 1679,
         rating: 1625.479,
         ranking: 20425
      },
      {
         attended: true,
         trendDirection: 'UP',
         problemsSolved: 2,
         totalProblems: 4,
         finishTimeInSeconds: 827,
         rating: 1638.287,
         ranking: 8918
      },
      {
         attended: true,
         trendDirection: 'DOWN',
         problemsSolved: 1,
         totalProblems: 4,
         finishTimeInSeconds: 2505,
         rating: 1622.996,
         ranking: 13582
      },
      {
         attended: true,
         trendDirection: 'DOWN',
         problemsSolved: 2,
         totalProblems: 4,
         finishTimeInSeconds: 3924,
         rating: 1622.368,
         ranking: 10412
      },
      {
         attended: true,
         trendDirection: 'DOWN',
         problemsSolved: 1,
         totalProblems: 4,
         finishTimeInSeconds: 1587,
         rating: 1591.429,
         ranking: 20351
      },
      {
         attended: true,
         trendDirection: 'DOWN',
         problemsSolved: 1,
         totalProblems: 4,
         finishTimeInSeconds: 4313,
         rating: 1563.387,
         ranking: 17711
      },
      {
         attended: true,
         trendDirection: 'DOWN',
         problemsSolved: 1,
         totalProblems: 4,
         finishTimeInSeconds: 1416,
         rating: 1554.313,
         ranking: 11029
      },
      {
         attended: true,
         trendDirection: 'DOWN',
         problemsSolved: 1,
         totalProblems: 4,
         finishTimeInSeconds: 4143,
         rating: 1518.605,
         ranking: 22037
      },
      {
         attended: true,
         trendDirection: 'UP',
         problemsSolved: 1,
         totalProblems: 4,
         finishTimeInSeconds: 390,
         rating: 1536.818,
         ranking: 7089
      },
      {
         attended: true,
         trendDirection: 'UP',
         problemsSolved: 1,
         totalProblems: 4,
         finishTimeInSeconds: 228,
         rating: 1551.89,
         ranking: 7495
      },
      {
         attended: true,
         trendDirection: 'UP',
         problemsSolved: 1,
         totalProblems: 4,
         finishTimeInSeconds: 456,
         rating: 1560.098,
         ranking: 10020
      },
      {
         attended: true,
         trendDirection: 'UP',
         problemsSolved: 1,
         totalProblems: 4,
         finishTimeInSeconds: 732,
         rating: 1569.772,
         ranking: 8037
      },
      {
         attended: true,
         trendDirection: 'DOWN',
         problemsSolved: 1,
         totalProblems: 4,
         finishTimeInSeconds: 1649,
         rating: 1566.767,
         ranking: 10549
      },
      {
         attended: true,
         trendDirection: 'UP',
         problemsSolved: 2,
         totalProblems: 4,
         finishTimeInSeconds: 1434,
         rating: 1632.258,
         ranking: 1906
      },
      {
         attended: true,
         trendDirection: 'DOWN',
         problemsSolved: 1,
         totalProblems: 4,
         finishTimeInSeconds: 5076,
         rating: 1597.646,
         ranking: 18932
      },
      {
         attended: true,
         trendDirection: 'UP',
         problemsSolved: 3,
         totalProblems: 4,
         finishTimeInSeconds: 2626,
         rating: 1713.669,
         ranking: 299
      },
      {
         attended: true,
         trendDirection: 'DOWN',
         problemsSolved: 0,
         totalProblems: 4,
         finishTimeInSeconds: 0,
         rating: 1663.929,
         ranking: 24773
      },
      {
         attended: true,
         trendDirection: 'UP',
         problemsSolved: 2,
         totalProblems: 4,
         finishTimeInSeconds: 3206,
         rating: 1664.439,
         ranking: 8347
      },
      {
         attended: true,
         trendDirection: 'DOWN',
         problemsSolved: 1,
         totalProblems: 4,
         finishTimeInSeconds: 2857,
         rating: 1625.818,
         ranking: 17011
      },
      {
         attended: true,
         trendDirection: 'UP',
         problemsSolved: 2,
         totalProblems: 4,
         finishTimeInSeconds: 1360,
         rating: 1662.214,
         ranking: 3268
      },
      {
         attended: true,
         trendDirection: 'DOWN',
         problemsSolved: 1,
         totalProblems: 4,
         finishTimeInSeconds: 85,
         rating: 1657.133,
         ranking: 8611
      },
      {
         attended: true,
         trendDirection: 'UP',
         problemsSolved: 2,
         totalProblems: 4,
         finishTimeInSeconds: 1156,
         rating: 1668.222,
         ranking: 5202
      },
      {
         attended: true,
         trendDirection: 'DOWN',
         problemsSolved: 2,
         totalProblems: 4,
         finishTimeInSeconds: 2635,
         rating: 1662.109,
         ranking: 8427
      }
   ];

   const contestLabels = joinedContests.map((_, index) => `${index + 1}`);
   const ratingTrend = joinedContests.map(contest => ({solved: contest.problemsSolved, total: contest.totalProblems, rating: contest.rating, ranking: contest.ranking}));

   const data = {
      labels: contestLabels,
      datasets: [
         {
            label: 'Rating',
            data: ratingTrend.map(contest => contest.rating),
            fill: false,
            borderColor: '#BE5B50',
            backgroundColor: '#FBDB93',
            tension: 0.2,
         }
      ]
   };

   const options = {
      responsive: true,
      plugins: {
         legend: { display: false },
      },
      scales: {
         x: {
            ticks: {
               color: '#aaa',
            },
            grid: { color: '#333' },
         },
         y: {
            ticks: {
               color: '#aaa',
            },
            grid: { color: '#333' },
         }
      }
   };

   const percentage = (solved, total) =>
      total ? Math.round((solved / total) * 100) : 0;

   return (
      <div className="bg-black px-6 py-4 rounded-md shadow-lg font-mono  animate-fade-in">
         <h2 className="text-4xl mb-4 cinzel-bold  text-white flex items-center justify-left">
            LeetCode
         </h2>

         {/* Stats */}
         <div className="flex w-full justify-between items-center">
            <div className="text-white w-1/3 ">
               {Object.entries(stats).map(([label, value]) => (
                  <div key={label} className="bg-black rounded p-4 my-2 border border-zinc-400">
                     <p className="text-sm text-gray-400 capitalize">{label.replace(/([A-Z])/g, ' $1')}</p>
                     <p className="text-xl font-bold">{value}</p>
                  </div>
               ))}
            </div>
            <div className="w-2/3 h-full flex items-center justify-center">
               <div className="bg-black w-6/11   p-2 rounded">
                  <h3 className="text-base font-semibold text-white mb-4">Rating Trend</h3>
                  <Line data={data} options={options} />
               </div>
            </div>

         </div>

         {/* Difficulty Breakdown */}
         <div className="bg-black  w-2/3 border-1 border-zinc-300 text-white p-4 rounded space-y-4">
            <h3 className="text-base font-semibold">Difficulty Breakdown</h3>
            {Object.entries(difficulty).map(([level, { solved, total }]) => {
               const colors = {
                  easy: "#43A047",
                  medium: "#FB8C00",
                  hard: "#E91E63",
               };
               const percent = percentage(solved, total);

               return (
                  <div key={level}>
                     <div className="flex w-full justify-between text-sm mb-1">
                        <span style={{ color: colors[level] }}>
                           {level.charAt(0).toUpperCase() + level.slice(1)}
                        </span>
                        <span className="text-gray-400">{solved} / {total}</span>
                     </div>
                     <div className="h-2 w-full bg-gray-700 rounded">
                        <div
                           className="h-2 rounded"
                           style={{ width: `${percent}%`, backgroundColor: colors[level] }}
                        />
                     </div>
                  </div>
               );
            })}
         </div>
      </div>
   );
};

export default function Programming() {
   return (
      <div className="w-full bg-black flex items-center border-y-1 border-dashed justify-center ">
         <div className="w-full h-full">
            <CompetitiveProgramming />
         </div>
      </div>
   );
}
