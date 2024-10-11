import React from "react";

function Status() {
  return (
    <div className='w-full h-6 border-gray-600 border-solid border-4 flex flex-row gap-0 m-0 p-0'>
      {/* Team A */}
      <div className='bg-green-400 h-full w-1/2'></div>
      {/* Team b */}
      <div className='bg-red-400 h-full w-1/2'></div>
    </div>
  );
}

export default Status;
