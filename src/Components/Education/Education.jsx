import React from "react";
import { Timeline } from "./ui/Timeline.jsx";


export function Education() {
   const data = [
      {
         title: "2022-Present",
         content: (
            <div className="flex items-end justify-center w-full">
               <div className="bg-black/50 w-9/10 border border-zinc-800 rounded-lg overflow-hidden hover:border-zinc-600 transition-all duration-300 group">

                  {/* Image Section with Overlay */}
                  <div className="h-48 bg-black overflow-hidden relative">
                     <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10" />
                     <img
                        src="/juet.png"
                        alt="JUET logo"
                        className="w-full h-full object-contain object-center group-hover:scale-105 transition-all duration-500"
                     />
                  </div>

                  {/* Text Content */}
                  <div className="p-5">
                     <h3 className="text-4xl cinzel-bold text-white mb-2">
                        Bachelor of Technology (B.Tech) 
                     </h3>
                     <p className="text-xl cinzel-bold text-white mb-2">Current CGPA: 7.8</p>
                     <div  className="text-lg text-zinc-400 font-serif py-1 my-1">Jaypee University of Engineering & Technology</div>
                     <div className="text-sm w-max font-serif px-2 py-1 my-1 bg-zinc-900 text-zinc-300 rounded-md border border-zinc-700">
                        Computer Science and Engineering
                     </div>
                  </div>
               </div>
            </div>
         ),
      },
      {
         title: "2020-21",
         content: (
            <div className="flex items-center justify-center w-full">
               <div className="bg-black/50 w-9/10 border border-zinc-800 rounded-lg overflow-hidden hover:border-zinc-600 transition-all duration-300 group">

                  {/* Image Section with Overlay */}
                  <div className="h-48 bg-white/95 overflow-hidden relative">
                     <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10" />
                     <img
                        src="/BSER.png"
                        alt="BSER logo"
                        className="w-full h-full object-contain object-center group-hover:scale-105 transition-all duration-500"
                     />
                  </div>

                  {/* Text Content */}
                  <div className="p-5">
                     <h3 className="text-4xl cinzel-bold text-white mb-2">
                        12th - Senior Secondary
                     </h3>
                     <p className="text-xl cinzel-bold text-white mb-2">Percentage: 98.8%</p>
                     <div  className="text-lg text-zinc-400 font-serif py-1 my-1">Adarsh Bal Vidhya Mandir, Aklera, Rajasthan</div>
                     <div className="text-sm w-max font-serif px-2 py-1 my-1 bg-zinc-900 text-zinc-300 rounded-md border border-zinc-700">
                        Board of Senior Secondary Education, Rajasthan
                     </div>
                  </div>

               </div>
            </div>
         ),
      },
      {
         title: "2018-19",
         content: (
            <div className="flex items-center justify-center w-full">
               <div className="bg-black/50 w-9/10 border border-zinc-800 rounded-lg overflow-hidden hover:border-zinc-600 transition-all duration-300 group">

                  {/* Image Section with Overlay */}
                  <div className="h-48 bg-white/95 overflow-hidden relative">
                     <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10" />
                     <img
                        src="/BSER.png"
                        alt="BSER logo"
                        className="w-full h-full object-contain object-center group-hover:scale-105 transition-all duration-500"
                     />
                  </div>

                  {/* Text Content */}
                  <div className="p-5">
                     <h3 className="text-4xl cinzel-bold text-white mb-2">
                        10th - Secondary
                     </h3>
                     <p className="text-xl cinzel-bold text-white mb-2">Percentage: 89.67%</p>
                     <div  className="text-lg text-zinc-400 font-serif py-1 my-1">Adarsh Bal Vidhya Mandir, Aklera, Rajasthan</div>
                     <div className="text-sm w-max font-serif px-2 py-1 my-1 bg-zinc-900 text-zinc-300 rounded-md border border-zinc-700">
                        Board of Secondary Education, Rajasthan
                     </div>
                  </div>

               </div>
            </div>
         ),
      }
   ];
   return (
      <div className="relative w-full overflow-clip">
         <Timeline data={data} />
      </div>
   );
}

export default Education;
