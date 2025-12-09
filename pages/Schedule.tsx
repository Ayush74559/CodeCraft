import React, { useState } from 'react';
import { Clock, Video, ChevronLeft, ChevronRight, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const Schedule: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<number | null>(null);

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

  const changeMonth = (offset: number) => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + offset, 1));
    setSelectedDate(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4">
      <div className="text-center mb-8">
        <h4 className="text-gray-500 font-semibold uppercase text-sm tracking-wide">Discuss</h4>
        <h1 className="text-3xl font-bold text-gray-900">Schedule a meeting</h1>
      </div>

      <div className="bg-white rounded-xl shadow-xl w-full max-w-5xl flex flex-col md:flex-row overflow-hidden border border-gray-200">
        
        {/* Left Panel - Details */}
        <div className="w-full md:w-1/3 p-8 border-b md:border-b-0 md:border-r border-gray-200">
           <div className="mb-6">
              <h3 className="text-gray-500 font-medium">CodeCraftr</h3>
             <h3 className="text-gray-500 font-medium">Fast Data Connect</h3>
             <h2 className="text-2xl font-bold text-gray-900 mt-2">Web Developments</h2>
           </div>
           
           <div className="space-y-4 mb-8">
             <div className="flex items-center text-gray-600">
               <span className="font-medium">30 Minute Meeting</span>
             </div>
             <div className="flex items-center text-gray-600">
               <Clock className="w-5 h-5 mr-3" />
               <span className="font-medium">30 min</span>
             </div>
             <div className="flex items-center text-gray-600">
               <Video className="w-5 h-5 mr-3" />
               <span className="font-medium">Web conferencing details provided upon confirmation.</span>
             </div>
           </div>

           <p className="text-gray-600 text-sm leading-relaxed mt-12 italic">
             "Every expert was once a beginner. Embrace the bugs, celebrate the breakthroughs, and remember—each line of code is a step toward unlocking endless possibilities."
           </p>
        </div>

        {/* Right Panel - Calendar */}
        <div className="w-full md:w-2/3 p-8">
           <h3 className="text-xl font-bold text-gray-900 mb-6">Select a Date & Time</h3>
           
           <div className="flex justify-between items-center mb-6">
             <h4 className="font-medium text-gray-900">
               {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
             </h4>
             <div className="flex space-x-2">
               <button onClick={() => changeMonth(-1)} className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"><ChevronLeft className="w-4 h-4" /></button>
               <button onClick={() => changeMonth(1)} className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"><ChevronRight className="w-4 h-4" /></button>
             </div>
           </div>

           <div className="grid grid-cols-7 gap-2 mb-8 text-center text-sm">
             {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
               <div key={day} className="font-medium text-gray-500 uppercase text-xs py-2">{day}</div>
             ))}
             {Array.from({ length: firstDay }).map((_, i) => (
               <div key={`empty-${i}`} />
             ))}
             {Array.from({ length: daysInMonth }).map((_, i) => {
               const day = i + 1;
               const isSelected = selectedDate === day;
               return (
                 <button 
                   key={day} 
                   onClick={() => setSelectedDate(day)}
                   className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center font-medium transition-all
                     ${isSelected ? 'bg-blue-600 text-white shadow-lg scale-110' : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'}
                   `}
                 >
                   {day}
                 </button>
               );
             })}
           </div>

           <div className="border-t border-gray-100 pt-6">
             <div className="flex items-center text-gray-600 font-medium">
               <Globe className="w-4 h-4 mr-2" />
               India Standard Time (16:04)
             </div>
           </div>

           {selectedDate && (
             <div className="mt-6 animate-fade-in">
               <h4 className="font-medium text-gray-900 mb-3">Available Times</h4>
               <div className="grid grid-cols-3 gap-3">
                 {['09:00 AM', '10:00 AM', '02:00 PM', '04:00 PM'].map(time => (
                   <button key={time} className="py-2 border border-blue-200 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition-colors">
                     {time}
                   </button>
                 ))}
               </div>
             </div>
           )}
        </div>

      </div>
    </div>
  );
};

export default Schedule;