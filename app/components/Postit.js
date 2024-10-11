import React from "react";

function Postit({ color, text }) {
  return (
    <div className='flex flex-row items-center justify-center border-1 border-gray-200 border-solid border text-red aspect-square bg-gray-200 w-60 h-60 shadow-md bg-{color}'>
      {text}
    </div>
  );
}

export default Postit;
