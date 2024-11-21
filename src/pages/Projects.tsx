import React from 'react';

export default function Projects() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4 justify-center place-items-center">
        <div className="w-[200px] h-[100px] bg-blue-500 text-white text-center">Div 1</div>
        <div className="w-[200px] h-[100px] bg-red-500 text-white text-center">Div 2</div>
        <div className="w-[200px] h-[100px] bg-green-500 text-white text-center">Div 3</div>
        <div className="w-[200px] h-[100px] bg-yellow-500 text-white text-center">Div 4</div>
      </div>
    </div>
  );
}
